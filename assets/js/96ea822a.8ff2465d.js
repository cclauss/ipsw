"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9170],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,p(p({ref:t},l),{},{components:r})):n.createElement(m,p({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,p=new Array(o);p[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:i,p[1]=a;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},32049:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={id:"reg",title:"reg",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"reg",description:"Register a new device for app development"},p=void 0,a={unversionedId:"cli/ipsw/appstore/device/reg",id:"cli/ipsw/appstore/device/reg",title:"reg",description:"Register a new device for app development",source:"@site/docs/cli/ipsw/appstore/device/reg.md",sourceDirName:"cli/ipsw/appstore/device",slug:"/cli/ipsw/appstore/device/reg",permalink:"/ipsw/docs/cli/ipsw/appstore/device/reg",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/appstore/device/reg.md",tags:[],version:"current",frontMatter:{id:"reg",title:"reg",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"reg",description:"Register a new device for app development"},sidebar:"cli",previous:{title:"mod",permalink:"/ipsw/docs/cli/ipsw/appstore/device/mod"},next:{title:"profile",permalink:"/ipsw/docs/cli/ipsw/appstore/profile/"}},s={},c=[{value:"ipsw appstore device reg",id:"ipsw-appstore-device-reg",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],l={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ipsw-appstore-device-reg"},"ipsw appstore device reg"),(0,i.kt)("p",null,"Register a new device for app development"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ipsw appstore device reg [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  -h, --help              help for reg\n  -n, --name string       Device name\n  -t, --platform string   Device platform (default "IOS")\n  -u, --udid string       Device UDID\n')),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.config/ipsw/config.yaml)\n  -i, --iss string      Issuer ID\n  -j, --jwt string      JWT api key\n  -k, --kid string      Key ID\n  -p, --p8 string       Path to App Store Connect API Key (.p8)\n  -V, --verbose         verbose output\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/appstore/device"},"ipsw appstore device"),"\t - Register devices for development and testing")))}u.isMDXComponent=!0}}]);