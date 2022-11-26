"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[758],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>w});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=l(n),w=r,m=u["".concat(s,".").concat(w)]||u[w]||p[w]||o;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,a[1]=d;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=n(7462),r=(n(7294),n(3905));const o={id:"shutdown",title:"shutdown",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"shutdown",description:"Shutdown the device",last_update:{date:new Date("2022-11-26T01:20:31.000Z"),author:"blacktop"}},a=void 0,d={unversionedId:"cli/ipsw/idev/diag/shutdown",id:"cli/ipsw/idev/diag/shutdown",title:"shutdown",description:"Shutdown the device",source:"@site/docs/cli/ipsw/idev/diag/shutdown.md",sourceDirName:"cli/ipsw/idev/diag",slug:"/cli/ipsw/idev/diag/shutdown",permalink:"/ipsw/docs/cli/ipsw/idev/diag/shutdown",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/idev/diag/shutdown.md",tags:[],version:"current",frontMatter:{id:"shutdown",title:"shutdown",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"shutdown",description:"Shutdown the device",last_update:{date:"2022-11-26T01:20:31.000Z",author:"blacktop"}},sidebar:"cli",previous:{title:"restart",permalink:"/ipsw/docs/cli/ipsw/idev/diag/restart"},next:{title:"sleep",permalink:"/ipsw/docs/cli/ipsw/idev/diag/sleep"}},s={},l=[{value:"ipsw idev diag shutdown",id:"ipsw-idev-diag-shutdown",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ipsw-idev-diag-shutdown"},"ipsw idev diag shutdown"),(0,r.kt)("p",null,"Shutdown the device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ipsw idev diag shutdown [flags]\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  -h, --help   help for shutdown\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.ipsw.yaml)\n  -u, --udid string     Device UniqueDeviceID to connect to\n  -V, --verbose         verbose output\n")),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/diag"},"ipsw idev diag"),"\t - Diagnostics commands")))}p.isMDXComponent=!0}}]);