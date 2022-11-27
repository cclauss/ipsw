"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4997],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},543:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={id:"restore",title:"restore",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"restore",description:"A brief description of your command",last_update:{date:new Date("2022-11-27T19:58:11.000Z"),author:"blacktop"}},s=void 0,a={unversionedId:"cli/ipsw/idev/restore/restore",id:"cli/ipsw/idev/restore/restore",title:"restore",description:"A brief description of your command",source:"@site/docs/cli/ipsw/idev/restore/restore.md",sourceDirName:"cli/ipsw/idev/restore",slug:"/cli/ipsw/idev/restore/",permalink:"/ipsw/docs/cli/ipsw/idev/restore/",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/idev/restore/restore.md",tags:[],version:"current",frontMatter:{id:"restore",title:"restore",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"restore",description:"A brief description of your command",last_update:{date:"2022-11-27T19:58:11.000Z",author:"blacktop"}},sidebar:"cli",previous:{title:"ps",permalink:"/ipsw/docs/cli/ipsw/idev/ps"},next:{title:"enter",permalink:"/ipsw/docs/cli/ipsw/idev/restore/enter"}},l={},p=[{value:"ipsw idev restore",id:"ipsw-idev-restore",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"ipsw-idev-restore"},"ipsw idev restore"),(0,o.kt)("p",null,"A brief description of your command"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"A longer description that spans multiple lines and likely contains examples\nand usage of using your command. For example:"),(0,o.kt)("p",null,"Cobra is a CLI library for Go that empowers applications.\nThis application is a tool to generate the needed files\nto quickly create a Cobra application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ipsw idev restore [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for restore\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.ipsw.yaml)\n  -u, --udid string     Device UniqueDeviceID to connect to\n  -V, --verbose         verbose output\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev"},"ipsw idev"),"\t - USB connected device commands"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/restore/enter"},"ipsw idev restore enter"),"\t - Enter recovery mode")))}d.isMDXComponent=!0}}]);