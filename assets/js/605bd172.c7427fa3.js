"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2941],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,m=u["".concat(p,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={id:"info",title:"info",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"info",description:"Display IPSW/OTA Info",last_update:{date:new Date("2022-11-26T01:20:31.000Z"),author:"blacktop"}},a=void 0,l={unversionedId:"cli/ipsw/info",id:"cli/ipsw/info",title:"info",description:"Display IPSW/OTA Info",source:"@site/docs/cli/ipsw/info.md",sourceDirName:"cli/ipsw",slug:"/cli/ipsw/info",permalink:"/ipsw/docs/cli/ipsw/info",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/info.md",tags:[],version:"current",frontMatter:{id:"info",title:"info",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"info",description:"Display IPSW/OTA Info",last_update:{date:"2022-11-26T01:20:31.000Z",author:"blacktop"}},sidebar:"cli",previous:{title:"kbag",permalink:"/ipsw/docs/cli/ipsw/img4/kbag"},next:{title:"kernel",permalink:"/ipsw/docs/cli/ipsw/kernel/"}},p={},s=[{value:"ipsw info",id:"ipsw-info",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:s};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ipsw-info"},"ipsw info"),(0,i.kt)("p",null,"Display IPSW/OTA Info"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ipsw info <IPSW> [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -h, --help           help for info\n      --insecure       do not verify ssl certs\n  -j, --json           Output as JSON\n  -l, --list           List files in IPSW/OTA\n      --proxy string   HTTP/HTTPS proxy\n  -r, --remote         Extract from URL\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.ipsw.yaml)\n  -V, --verbose         verbose output\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/cli/ipsw"},"ipsw"),"\t - Download and Parse IPSWs (and SO much more)")))}f.isMDXComponent=!0}}]);