"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4224],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,u=f["".concat(d,".").concat(m)]||f[m]||l[m]||r;return t?a.createElement(u,i(i({ref:n},p),{},{components:t})):a.createElement(u,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=f;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8353:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var a=t(7462),o=(t(7294),t(3905));const r={description:"Get a TON of info about an IPSW/OTA withouth having to even download it."},i="Parse fireware zip metadata",c={unversionedId:"guides/info",id:"guides/info",title:"Parse fireware zip metadata",description:"Get a TON of info about an IPSW/OTA withouth having to even download it.",source:"@site/docs/guides/info.md",sourceDirName:"guides",slug:"/guides/info",permalink:"/ipsw/docs/guides/info",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/guides/info.md",tags:[],version:"current",frontMatter:{description:"Get a TON of info about an IPSW/OTA withouth having to even download it."}},d={},s=[{value:"Display info about IPSWs and OTAs",id:"display-info-about-ipsws-and-otas",level:3},{value:"Or remotely",id:"or-remotely",level:3},{value:"To list all the files in a remote IPSW or OTA",id:"to-list-all-the-files-in-a-remote-ipsw-or-ota",level:3},{value:"To dump a VERBOSE version of the info summary",id:"to-dump-a-verbose-version-of-the-info-summary",level:3}],p={toc:s};function l(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"parse-fireware-zip-metadata"},"Parse fireware zip metadata"),(0,o.kt)("h3",{id:"display-info-about-ipsws-and-otas"},"Display info about IPSWs and OTAs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\u276f ipsw info iPhone11,2,iPhone11,4,iPhone11,6,iPhone12,3,iPhone12,5_15.0_19A5318f_Restore.ipsw\n\n[IPSW Info]\n===========\nVersion        = 15.0\nBuildVersion   = 19A5318f\nOS Type        = "Development"\nFileSystem     = 018-62379-017.dmg (Type: APFS)\n\nDevices\n-------\n\niPhone XS Max\n > iPhone11,6_D331PAP_19A5318f\n   - KernelCache: [kernelcache.release.iphone11]\n   - CPU: A12 Bionic (ARMv8.3-A), ID: t8020\n   - BootLoaders\n       * iBEC.d331p.RELEASE.im4p\n       * iBoot.d331p.RELEASE.im4p\n       * iBSS.d331p.RELEASE.im4p\n       * LLB.d331p.RELEASE.im4p\n\niPhone 11 Pro\n > iPhone12,3_D421AP_19A5318f\n   - KernelCache: [kernelcache.release.iphone12]\n   - CPU: A13 Bionic (ARMv8.4-A), ID: t8030\n   - BootLoaders\n       * iBEC.d421.RELEASE.im4p \ud83d\udd11 -> cc0b556bbe5295a9ade5c1ee4bee71b732632e560b52c312f1c88c3229c3248229555d90e59d81a54a3a3665d2650774\n       * iBoot.d421.RELEASE.im4p \ud83d\udd11 -> 0a5f2d58b34e32fa0f4253c7a1e45487da4f58c366c6284a0ee8be802805d0b1ef049ba11512982f177a2a7919f5eeb6\n       * iBSS.d421.RELEASE.im4p \ud83d\udd11 -> 23c6c1710556c8b0ea120a64a614c097cad720a3dfe71c7941ccb080a7dbf6e40a7cbf8e9cff4f69b2a505644c5026f4\n       * LLB.d421.RELEASE.im4p \ud83d\udd11 -> a433b0cefa2ed0e9b0d87f5c12b3fadb8d2d6467f6c0b436292c8948e9a7165c72b9fb21de3eafcbfb8b170b444c6444\n\niPhone 11 Pro Max\n > iPhone12,5_D431AP_19A5318f\n   - KernelCache: [kernelcache.release.iphone12]\n   - CPU: A13 Bionic (ARMv8.4-A), ID: t8030\n   - BootLoaders\n       * iBEC.d431.RELEASE.im4p \ud83d\udd11 -> 5f5209d8cc105cda06a00d4e15f532b397c84ddfe68ae156c5def0eeaf735d80ef735b484790bb2899f3f0cfd7824c5c\n       * iBoot.d431.RELEASE.im4p \ud83d\udd11 -> 6d00b7f25e54a7c63560620db45333e4f26e229362c5896b4592a4825ea344f96b733e042d1bbe0f4217da350c4ab259\n       * iBSS.d431.RELEASE.im4p \ud83d\udd11 -> 5ed92a3e382d225aa929f990084a36defd1d543f11320784cf8b030e5ce8d3389aeab70baf33dd383706135262968ac1\n       * LLB.d431.RELEASE.im4p \ud83d\udd11 -> 24a8f3f960c4e38262a43a6c717d9466fb05a86642c18eca41a55cec7cc6cd66b54bad4c43d5c04f93151a6979b6f7b8\n\niPhone XS\n > iPhone11,2_D321AP_19A5318f\n   - KernelCache: [kernelcache.release.iphone11]\n   - CPU: A12 Bionic (ARMv8.3-A), ID: t8020\n   - BootLoaders\n       * iBEC.d321.RELEASE.im4p\n       * iBoot.d321.RELEASE.im4p\n       * iBSS.d321.RELEASE.im4p\n       * LLB.d321.RELEASE.im4p\n\niPhone XS Max\n > iPhone11,4_D331AP_19A5318f\n   - KernelCache: [kernelcache.release.iphone11]\n   - CPU: A12 Bionic (ARMv8.3-A), ID: t8020\n   - BootLoaders\n       * iBEC.d331.RELEASE.im4p\n       * iBoot.d331.RELEASE.im4p\n       * iBSS.d331.RELEASE.im4p\n       * LLB.d331.RELEASE.im4p\n\n')),(0,o.kt)("h3",{id:"or-remotely"},"Or remotely"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f ipsw info --remote https://updates.cdn-apple.com/../iPodtouch_7_13.3_17C54_Restore.ipsw\n")),(0,o.kt)("h3",{id:"to-list-all-the-files-in-a-remote-ipsw-or-ota"},"To list all the files in a remote IPSW or OTA"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f ipsw info --remote https://updates.cdn-apple.com/../iPodtouch_7_13.3_17C54_Restore.ipsw --list\n\nPATH                                                                   SIZE\n----                                                                   ----\n018-95664-055.dmg                                                      124 MB\n018-95777-055.dmg                                                      126 MB\n018-95946-047.dmg                                                      6.1 GB\nBuildManifest.plist                                                    282 kB\nFirmware/                                                              0 B\nFirmware/018-95664-055.dmg.trustcache                                  5.3 kB\nFirmware/018-95777-055.dmg.trustcache                                  5.4 kB\nFirmware/018-95946-047.dmg.mtree                                       32 MB\nFirmware/018-95946-047.dmg.root_hash                                   229 B\nFirmware/018-95946-047.dmg.trustcache                                  56 kB\n<SNIP>\n")),(0,o.kt)("h3",{id:"to-dump-a-verbose-version-of-the-info-summary"},"To dump a VERBOSE version of the info summary"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f ipsw info OTA -V\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE:")," This will also dump out the full BuidManifest.plist, Restore.plist, and Info.plists etc")))}l.isMDXComponent=!0}}]);