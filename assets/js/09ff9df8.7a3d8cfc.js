"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3653],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=s(r),u=i,m=f["".concat(l,".").concat(u)]||f[u]||d[u]||o;return r?n.createElement(m,p(p({ref:t},c),{},{components:r})):n.createElement(m,p({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,p=new Array(o);p[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[f]="string"==typeof e?e:i,p[1]=a;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},51433:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const o={id:"create",title:"create",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"create",description:"Create a new provisioning profile"},p=void 0,a={unversionedId:"cli/ipsw/appstore/profile/create",id:"cli/ipsw/appstore/profile/create",title:"create",description:"Create a new provisioning profile",source:"@site/docs/cli/ipsw/appstore/profile/create.md",sourceDirName:"cli/ipsw/appstore/profile",slug:"/cli/ipsw/appstore/profile/create",permalink:"/ipsw/docs/cli/ipsw/appstore/profile/create",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/appstore/profile/create.md",tags:[],version:"current",frontMatter:{id:"create",title:"create",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"create",description:"Create a new provisioning profile"},sidebar:"cli",previous:{title:"profile",permalink:"/ipsw/docs/cli/ipsw/appstore/profile/"},next:{title:"ls",permalink:"/ipsw/docs/cli/ipsw/appstore/profile/ls"}},l={},s=[{value:"ipsw appstore profile create",id:"ipsw-appstore-profile-create",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:s},f="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(f,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ipsw-appstore-profile-create"},"ipsw appstore profile create"),(0,i.kt)("p",null,"Create a new provisioning profile"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ipsw appstore profile create <NAME> [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  -b, --bundle-id string   Board ID\n  -c, --certs strings      Certificate IDs\n  -d, --devices strings    Device IDs\n  -h, --help               help for create\n  -o, --output string      Folder to download profile to\n  -t, --type string        Profile type (default "IOS_APP_DEVELOPMENT")\n')),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.config/ipsw/config.yaml)\n  -i, --iss string      Issuer ID\n  -j, --jwt string      JWT api key\n  -k, --kid string      Key ID\n  -p, --p8 string       Path to App Store Connect API Key (.p8)\n  -V, --verbose         verbose output\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/appstore/profile"},"ipsw appstore profile"),"\t - Create, delete, and download provisioning profiles that enable app installations for development and distribution")))}d.isMDXComponent=!0}}]);