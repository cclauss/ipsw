"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2616],{14349:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var i=t(74848),r=t(28453);const s={id:"dwarf",title:"dwarf",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"dwarf",description:"\ud83d\udea7 Dump DWARF debug information"},l=void 0,o={id:"cli/ipsw/kernel/dwarf",title:"dwarf",description:"\ud83d\udea7 Dump DWARF debug information",source:"@site/docs/cli/ipsw/kernel/dwarf.md",sourceDirName:"cli/ipsw/kernel",slug:"/cli/ipsw/kernel/dwarf",permalink:"/ipsw/docs/cli/ipsw/kernel/dwarf",draft:!1,unlisted:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/kernel/dwarf.md",tags:[],version:"current",frontMatter:{id:"dwarf",title:"dwarf",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"dwarf",description:"\ud83d\udea7 Dump DWARF debug information"},sidebar:"cli",previous:{title:"dec",permalink:"/ipsw/docs/cli/ipsw/kernel/dec"},next:{title:"extract",permalink:"/ipsw/docs/cli/ipsw/kernel/extract"}},d={},a=[{value:"ipsw kernel dwarf",id:"ipsw-kernel-dwarf",level:2},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"ipsw-kernel-dwarf",children:"ipsw kernel dwarf"}),"\n",(0,i.jsx)(n.p,{children:"\ud83d\udea7 Dump DWARF debug information"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ipsw kernel dwarf <dSYM> [dSYM] [flags]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Dump the task struct\n\u276f ipsw kernel dwarf -t task /Library/Developer/KDKs/KDK_13.3_22E5230e.kdk/System/Library/Kernels/kernel.development.t6020.dSYM\n# Diff task struct\n\u276f ipsw kernel dwarf --type task --diff\n# Diff ALL structs\n\u276f ipsw kernel dwarf --diff\n"})}),"\n",(0,i.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"      --all           Dump all types\n  -d, --diff          Diff two structs\n      --enums         Dump all enums\n  -h, --help          help for dwarf\n  -m, --md            Markdown diff output\n  -n, --name string   Name to lookup\n      --no-off        Do NOT display struct field offsets in output\n      --structs       Dump all structs\n  -t, --type string   Type to lookup\n"})}),"\n",(0,i.jsx)(n.h3,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"      --color           colorize output\n      --config string   config file (default is $HOME/.config/ipsw/config.yaml)\n      --no-color        disable colorize output\n  -V, --verbose         verbose output\n"})}),"\n",(0,i.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/cli/ipsw/kernel",children:"ipsw kernel"}),"\t - Parse kernelcache"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(96540);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);