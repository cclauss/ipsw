"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5822],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(r),y=i,f=s["".concat(c,".").concat(y)]||s[y]||u[y]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},7782:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(7462),i=(r(7294),r(3905));const a={id:"extract",title:"extract",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"extract",description:"Extract dylib from dyld_shared_cache",last_update:{date:new Date("2023-01-17T06:32:27.000Z"),author:"blacktop"}},o=void 0,l={unversionedId:"cli/ipsw/dyld/extract",id:"cli/ipsw/dyld/extract",title:"extract",description:"Extract dylib from dyld_shared_cache",source:"@site/docs/cli/ipsw/dyld/extract.md",sourceDirName:"cli/ipsw/dyld",slug:"/cli/ipsw/dyld/extract",permalink:"/ipsw/docs/cli/ipsw/dyld/extract",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/dyld/extract.md",tags:[],version:"current",frontMatter:{id:"extract",title:"extract",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"extract",description:"Extract dylib from dyld_shared_cache",last_update:{date:"2023-01-17T06:32:27.000Z",author:"blacktop"}},sidebar:"cli",previous:{title:"dump",permalink:"/ipsw/docs/cli/ipsw/dyld/dump"},next:{title:"image",permalink:"/ipsw/docs/cli/ipsw/dyld/image"}},c={},d=[{value:"ipsw dyld extract",id:"ipsw-dyld-extract",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:d};function s(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ipsw-dyld-extract"},"ipsw dyld extract"),(0,i.kt)("p",null,"Extract dylib from dyld_shared_cache"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ipsw dyld extract <DSC> <DYLIB> [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -a, --all             Split ALL dylibs\n      --force           Overwrite existing extracted dylib(s)\n  -h, --help            help for extract\n  -o, --output string   Directory to extract the dylib(s)\n      --slide           Apply slide info to extracted dylib(s)\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.ipsw/config.yaml)\n  -V, --verbose         verbose output\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/dyld"},"ipsw dyld"),"\t - Parse dyld_shared_cache")))}s.isMDXComponent=!0}}]);