"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7249],{9045:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var n=d(74848),t=d(28453);const l={description:"How to find stub island xrefs"},a="Stub Islands",c={id:"guides/stub_islands",title:"Stub Islands",description:"How to find stub island xrefs",source:"@site/docs/guides/stub_islands.md",sourceDirName:"guides",slug:"/guides/stub_islands",permalink:"/ipsw/docs/guides/stub_islands",draft:!1,unlisted:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/guides/stub_islands.md",tags:[],version:"current",frontMatter:{description:"How to find stub island xrefs"},sidebar:"docs",previous:{title:"Parse Img4",permalink:"/ipsw/docs/guides/img4"},next:{title:"Gadget Search",permalink:"/ipsw/docs/guides/gadget_search"}},i={},o=[{value:"We&#39;ve introduced a <code>ipsw dyld stubs</code> command to dump them all out and the symbol they <em>stub</em> to",id:"weve-introduced-a-ipsw-dyld-stubs-command-to-dump-them-all-out-and-the-symbol-they-stub-to",level:3},{value:"Disassemble the <em>stub</em>",id:"disassemble-the-stub",level:3},{value:"Lookup the address",id:"lookup-the-address",level:3},{value:"MAPPING",id:"mapping",level:2},{value:"Locate any <code>xrefs</code>",id:"locate-any-xrefs",level:3}];function r(e){const s={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"stub-islands",children:"Stub Islands"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["iOS16 added a NEW concept to dyld4 and the ",(0,n.jsx)(s.code,{children:"dyld_shared_cache"})," sub-caches called ",(0,n.jsx)(s.strong,{children:"Stub Islands"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.h3,{id:"weve-introduced-a-ipsw-dyld-stubs-command-to-dump-them-all-out-and-the-symbol-they-stub-to",children:["We've introduced a ",(0,n.jsx)(s.code,{children:"ipsw dyld stubs"})," command to dump them all out and the symbol they ",(0,n.jsx)(s.em,{children:"stub"})," to"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'\u276f ipsw dyld stubs 20B5050f__iPhone15,2/dyld_shared_cache_arm64e | head\n   \u2022 Loading symbol cache file...\n0x199ce7640: _CMPhotoJPEGWriteMPFWithJPEG\n0x1ad5d5970: _objc_autorelease\n0x1c8d0f350: _$ss10_HashTableV12previousHole6beforeAB6BucketVAF_tF\n0x1cf7eba00: _$s5TeaUI14KeyCommandItemVMa\n0x1bb1f8a40: _swift_task_switch\n0x1c1f5edc0: _$s4GRDB3RowC19fastDecodeIfPresent_16atUncheckedIndexxSgxm_SitKAA24DatabaseValueConvertibleRzAA015StatementColumnL0RzlF\n0x1ec2127d0: _CGColorGetColorSpace\n0x207434db0: __swift_stdlib_strtod_clocale\n0x1a0622e00: _objc_retain_x20\n0x1c1f87d30: _swift_getTupleTypeLayout3\n"0x1bb220d70: _fcntl"\n'})}),"\n",(0,n.jsxs)(s.h3,{id:"disassemble-the-stub",children:["Disassemble the ",(0,n.jsx)(s.em,{children:"stub"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'\u276f ipsw dyld disass 20B5050f__iPhone15,2/dyld_shared_cache_arm64e -a "0x1bb220d70" --count 5\n   \u2022 Loading symbol cache file...\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-armasm",children:"j__fcntl\n0x1bb220d70:  30 7b 04 b0   adrp     x16, 0x1c4185000\n0x1bb220d74:  10 32 1b 91   add      x16, x16, #0x6cc ; _fcntl\n0x1bb220d78:  00 02 1f d6   br       x16\n0x1bb220d7c:  20 00 20 d4   brk      #0x1\n"})}),"\n",(0,n.jsx)(s.h3,{id:"lookup-the-address",children:"Lookup the address"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'\u276f ipsw dyld a2s 20B5050f__iPhone15,2/dyld_shared_cache_arm64e "0x1bb220d70" --mapping --image\n   \u2022 Loading symbol cache file...\n'})}),"\n",(0,n.jsx)(s.h2,{id:"mapping",children:"MAPPING"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["STUB Island ",(0,n.jsx)(s.em,{children:"(dsc.18)"})," UUID: ",(0,n.jsx)(s.code,{children:"7623C890-8F05-3DFD-AADF-CE765217C572"})]}),"\n"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"SEG"}),(0,n.jsx)(s.th,{children:"INITPROT"}),(0,n.jsx)(s.th,{children:"MAXPROT"}),(0,n.jsx)(s.th,{children:"SIZE"}),(0,n.jsx)(s.th,{children:"ADDRESS"}),(0,n.jsx)(s.th,{children:"FILE OFFSET"}),(0,n.jsx)(s.th,{children:"SLIDE INFO OFFSET"}),(0,n.jsx)(s.th,{children:"FLAGS"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"__TEXT_STUBS"}),(0,n.jsx)(s.td,{children:"r-x"}),(0,n.jsx)(s.td,{children:"r-x"}),(0,n.jsx)(s.td,{children:"0x00080000 (524 kB)"}),(0,n.jsx)(s.td,{children:"0x1bb1b4000"}),(0,n.jsx)(s.td,{children:"0x00000000"}),(0,n.jsx)(s.td,{children:"0x00000000"}),(0,n.jsx)(s.td,{children:"8"})]})})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'   \u2a2f address 0x1bb220d70 not in any dylib\n\n0x1bb220d70: "j__fcntl"\n'})}),"\n",(0,n.jsxs)(s.h3,{id:"locate-any-xrefs",children:["Locate any ",(0,n.jsx)(s.code,{children:"xrefs"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'\u276f ipsw dyld xref 20B5050f__iPhone15,2/dyld_shared_cache_arm64e 0x1bb220d70 --all\n   \u2022 Loading symbol cache file...\n   \u2022 No XREFS found            dylib=/usr/lib/libobjc.A.dylib sym=j__fcntl xrefs=0\n   <SNIP>\n   \u2022 XREFS                     dylib=/System/Library/PrivateFrameworks/CloudKitDaemon.framework/CloudKitDaemon sym=j__fcntl xrefs=1\n0x1b9f577ec: "openFdForDownloadPath:error: + 128"   \n'})})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},28453:(e,s,d)=>{d.d(s,{R:()=>a,x:()=>c});var n=d(96540);const t={},l=n.createContext(t);function a(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);