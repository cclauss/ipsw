package syms

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/apex/log"
	"github.com/blacktop/go-macho"
	"github.com/blacktop/go-macho/types"
	"github.com/blacktop/ipsw/internal/commands/dsc"
	"github.com/blacktop/ipsw/internal/commands/extract"
	"github.com/blacktop/ipsw/internal/db"
	"github.com/blacktop/ipsw/internal/model"
	"github.com/blacktop/ipsw/internal/search"
	"github.com/blacktop/ipsw/internal/utils"
	"github.com/blacktop/ipsw/pkg/info"
	"github.com/blacktop/ipsw/pkg/kernelcache"
)

const highestBitMask uint64 = ^uint64(1 << 63)

func scanKernels(ipswPath string) ([]*model.Kernelcache, error) {
	var kcs []*model.Kernelcache

	out, err := extract.Kernelcache(&extract.Config{
		IPSW:   ipswPath,
		Output: os.TempDir(),
	})
	if err != nil {
		return nil, fmt.Errorf("failed to extract kernelcache: %w", err)
	}
	defer func() {
		for k := range out {
			os.Remove(k)
		}
	}()
	for k := range out {
		m, err := macho.Open(k)
		if err != nil {
			return nil, fmt.Errorf("failed to open kernel: %w", err)
		}
		defer m.Close()
		kv, err := kernelcache.GetVersion(m)
		if err != nil {
			return nil, err
		}
		kc := &model.Kernelcache{
			UUID:    m.UUID().String(),
			Version: kv.String(),
		}
		if m.FileTOC.FileHeader.Type == types.MH_FILESET {
			for idx, fe := range m.FileSets() {
				log.WithFields(log.Fields{
					"index": idx,
					"name":  fe.EntryID,
				}).Debug("Parsing Kernel Kext")
				mfe, err := m.GetFileSetFileByName(fe.EntryID)
				if err != nil {
					return nil, fmt.Errorf("failed to parse entry %s: %v", fe.EntryID, err)
				}
				kext := &model.Macho{
					Name: fe.EntryID,
					UUID: mfe.UUID().String(),
				}
				if text := mfe.Segment("__TEXT"); text != nil {
					kext.TextStart = text.Addr
					kext.TextEnd = text.Addr + text.Filesz
				}
				for _, fn := range mfe.GetFunctions() {
					var msym model.Symbol
					if syms, err := mfe.FindAddressSymbols(fn.StartAddr); err == nil {
						for _, sym := range syms {
							fn.Name = sym.Name
						}
						msym = model.Symbol{
							Symbol: fn.Name,
							Start:  fn.StartAddr & highestBitMask,
							End:    fn.EndAddr & highestBitMask,
						}
					} else {
						msym = model.Symbol{
							Symbol: fmt.Sprintf("func_%x", fn.StartAddr),
							Start:  fn.StartAddr & highestBitMask,
							End:    fn.EndAddr & highestBitMask,
						}
					}
					kext.Symbols = append(kext.Symbols, &msym)
				}
				kc.Kexts = append(kc.Kexts, kext)
			}
		}
		kcs = append(kcs, kc)
	}

	return kcs, nil
}

func scanDSCs(ipswPath string) ([]*model.DyldSharedCache, error) {
	ctx, fs, err := dsc.OpenFromIPSW(ipswPath, false, true)
	if err != nil {
		return nil, fmt.Errorf("failed to open DSC from IPSW: %w", err)
	}
	defer func() {
		for _, f := range fs {
			f.Close()
		}
		ctx.Unmount()
	}()

	var dscs []*model.DyldSharedCache

	for _, f := range fs {
		dsc := &model.DyldSharedCache{
			UUID:              f.UUID.String(),
			SharedRegionStart: f.Headers[f.UUID].SharedRegionStart,
		}

		for idx, img := range f.Images {
			log.WithFields(log.Fields{
				"index": idx,
				"name":  img.Name,
			}).Debug("Parsing DSC Image")
			img.ParsePublicSymbols(false)
			img.ParseLocalSymbols(false)
			m, err := img.GetMacho()
			if err != nil {
				return nil, fmt.Errorf("failed to parse dyld_shared_cache image: %w", err)
			}
			defer m.Close()
			dylib := &model.Macho{
				UUID: m.UUID().String(),
				Name: img.Name,
			}
			if text := m.Segment("__TEXT"); text != nil {
				dylib.TextStart = text.Addr
				dylib.TextEnd = text.Addr + text.Filesz
			}
			for _, fn := range m.GetFunctions() {
				var msym *model.Symbol
				if sym, ok := f.AddressToSymbol[fn.StartAddr]; ok {
					msym = &model.Symbol{
						Symbol: sym,
						Start:  fn.StartAddr,
						End:    fn.EndAddr,
					}
				} else {
					msym = &model.Symbol{
						Symbol: fmt.Sprintf("func_%x", fn.StartAddr),
						Start:  fn.StartAddr,
						End:    fn.EndAddr,
					}
				}
				dylib.Symbols = append(dylib.Symbols, msym)
			}
			dsc.Images = append(dsc.Images, dylib)
		}

		dscs = append(dscs, dsc)
	}
	return dscs, nil
}

func Scan(ipswPath string, db db.Database) (err error) {
	/* IPSW */
	sha1, err := utils.Sha1(ipswPath)
	if err != nil {
		return fmt.Errorf("failed to calculate sha1: %w", err)
	}
	inf, err := info.Parse(ipswPath)
	if err != nil {
		return fmt.Errorf("failed to parse IPSW info: %w", err)
	}
	ipsw := &model.Ipsw{
		ID:      sha1,
		Name:    filepath.Base(ipswPath),
		BuildID: inf.Plists.BuildManifest.ProductBuildVersion,
		Version: inf.Plists.BuildManifest.ProductVersion,
	}
	if err := db.Create(ipsw); err != nil {
		return fmt.Errorf("failed to create IPSW in database: %w", err)
	}
	for _, dev := range inf.Plists.BuildManifest.SupportedProductTypes {
		ipsw.Devices = append(ipsw.Devices, &model.Device{
			Name: dev,
		})
	}
	if err := db.Save(ipsw); err != nil {
		return fmt.Errorf("failed to save IPSW to database: %w", err)
	}

	/* KERNEL */
	if ipsw.Kernels, err = scanKernels(ipswPath); err != nil {
		return fmt.Errorf("failed to scan kernels: %w", err)
	}
	log.Debug("Saving IPSW with Kernels")
	if err := db.Save(ipsw); err != nil {
		return fmt.Errorf("failed to save IPSW to database: %w", err)
	}

	/* DSC */
	ipsw.DSCs, err = scanDSCs(ipswPath)
	if err != nil {
		return fmt.Errorf("failed to scan DSCs: %w", err)
	}
	log.Debug("Saving IPSW with DSCs")
	if err := db.Save(ipsw); err != nil {
		return fmt.Errorf("failed to save IPSW to database: %w", err)
	}

	/* FileSystem */
	if err := search.ForEachMachoInIPSW(ipswPath, func(path string, m *macho.File) error {
		if m.UUID() != nil {
			mm := &model.Macho{
				UUID: m.UUID().String(),
				Name: path,
			}
			if text := m.Segment("__TEXT"); text != nil {
				mm.TextStart = text.Addr
				mm.TextEnd = text.Addr + text.Filesz
			}
			for _, fn := range m.GetFunctions() {
				var msym *model.Symbol
				if syms, err := m.FindAddressSymbols(fn.StartAddr); err == nil {
					for _, sym := range syms {
						fn.Name = sym.Name
					}
					msym = &model.Symbol{
						Symbol: fn.Name,
						Start:  fn.StartAddr,
						End:    fn.EndAddr,
					}
				} else {
					msym = &model.Symbol{
						Symbol: fmt.Sprintf("func_%x", fn.StartAddr),
						Start:  fn.StartAddr,
						End:    fn.EndAddr,
					}
				}
				mm.Symbols = append(mm.Symbols, msym)
			}
			ipsw.FileSystem = append(ipsw.FileSystem, mm)
		}
		return nil
	}); err != nil {
		return fmt.Errorf("failed to search for machos in IPSW: %w", err)
	}

	log.Debug("Saving IPSW with FileSystem")
	return db.Save(ipsw)
}

func Get(uuid string, db db.Database) ([]*model.Symbol, error) {
	return db.GetSymbols(uuid)
}

func GetForAddr(uuid string, addr uint64, db db.Database) (*model.Symbol, error) {
	return db.GetSymbol(uuid, addr)
}