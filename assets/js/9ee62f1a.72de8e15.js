"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9356],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=l(t),d=r,f=g["".concat(c,".").concat(d)]||g[d]||m[d]||a;return t?i.createElement(f,p(p({ref:n},s),{},{components:t})):i.createElement(f,p({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,p=new Array(a);p[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[g]="string"==typeof e?e:r,p[1]=o;for(var l=2;l<a;l++)p[l]=t[l];return i.createElement.apply(null,p)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9944:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=t(7462),r=(t(7294),t(3905));const a={description:"PongoOS shell"},p="PongoOS",o={unversionedId:"guides/pongo",id:"guides/pongo",title:"PongoOS",description:"PongoOS shell",source:"@site/docs/guides/pongo.md",sourceDirName:"guides",slug:"/guides/pongo",permalink:"/ipsw/docs/guides/pongo",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/guides/pongo.md",tags:[],version:"current",frontMatter:{description:"PongoOS shell"},sidebar:"docs",previous:{title:"Prep device for remote debugging",permalink:"/ipsw/docs/guides/debugserver"},next:{title:"Roadmap",permalink:"/ipsw/docs/roadmap"}},c={},l=[],s={toc:l};function g(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pongoos"},"PongoOS"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"ipsw pongo")," is a tool to interact with the PongoOS shell.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Right now it can only decrypt the keybags, but in the future it will be able to do more.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Put your checkm8-able ",(0,r.kt)("em",{parentName:"li"},"AND")," ",(0,r.kt)("a",{parentName:"li",href:"https://www.theiphonewiki.com/wiki/Blackbird_Exploit"},"black-bird-able")," device into DFU mode."),(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("a",{parentName:"li",href:"https://checkra.in"},"checkra1n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f /Applications/checkra1n.app/Contents/MacOS/checkra1n -cp\n")),(0,r.kt)("p",null,"Now we can run ",(0,r.kt)("inlineCode",{parentName:"p"},"ipsw pongo")," to interact with the PongoOS shell."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f ipsw pongo iPad_64bit_TouchID_ASTC_16.3_20D47_Restore.ipsw\n      \u2022 Decrypting Keybag         file=LLB.ipad6f.RELEASE.im4p\n      \u2022 Decrypting Keybag         file=LLB.ipad7b.RELEASE.im4p\n      \u2022 Decrypting Keybag         file=LLB.j71t.RELEASE.im4p\n      \u2022 Decrypting Keybag         file=LLB.j72t.RELEASE.im4p\n      \u2022 Decrypting Keybag         file=iBoot.ipad6f.RELEASE.im4p\n      \u2022 Decrypting Keybag         file=iBoot.ipad7b.RELEASE.im4p\n      \u2022 Decrypting Keybag         file=iBoot.j71t.RELEASE.im4p\n      \u2022 Decrypting Keybag         file=iBoot.j72t.RELEASE.im4p\n      \u2022 Decrypting Keybag         file=sep-firmware.j71b.RELEASE.im4p\n      \u2022 Decrypting Keybag         file=sep-firmware.j71s.RELEASE.im4p\n      \u2022 Decrypting Keybag         file=sep-firmware.j71t.RELEASE.im4p\n      \u2022 Decrypting Keybag         file=sep-firmware.j72b.RELEASE.im4p\n      \u2022 Decrypting Keybag         file=sep-firmware.j72s.RELEASE.im4p\n      \u2022 Decrypting Keybag         file=sep-firmware.j72t.RELEASE.im4p\n      \u2022 Decrypting Keybag         file=iBEC.ipad6f.RELEASE.im4p\n      \u2022 Decrypting Keybag         file=iBEC.ipad7b.RELEASE.im4p\n      \u2022 Decrypting Keybag         file=iBEC.j71t.RELEASE.im4p\n      \u2022 Decrypting Keybag         file=iBEC.j72t.RELEASE.im4p\n      \u2022 Decrypting Keybag         file=iBSS.ipad6f.RELEASE.im4p\n      \u2022 Decrypting Keybag         file=iBSS.ipad7b.RELEASE.im4p\n      \u2022 Decrypting Keybag         file=iBSS.j71t.RELEASE.im4p\n      \u2022 Decrypting Keybag         file=iBSS.j72t.RELEASE.im4p\n   \u2022 Writing keybags to 20D47__iPad6,11_12_iPad7,5_6/kbags.json\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f cat 20D47__iPad6,11_12_iPad7,5_6/kbags.json | jq . | head -n31\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "IPSW",\n  "version": "16.3",\n  "build": "20D47",\n  "devices": [\n    "iPad6,11",\n    "iPad7,5",\n    "iPad7,6",\n    "iPad6,12"\n  ],\n  "files": [\n    {\n      "name": "LLB.ipad6f.RELEASE.im4p",\n      "kbags": [\n        {\n          "type": "prod",\n          "iv": "18ff771931372ebd03ad7537cba34517",\n          "key": "be88446944620af807a6a0f64234d46437355b016030cbe729fe892e95283e29"\n        },\n        {\n          "type": "dev",\n          "iv": "5765ce9fbd5707be023ebfcd7ce3c55e",\n          "key": "7885dabe10477aa446ac5fd92dce8694d10b9bc05c80f5e966f11a1a9377553f"\n        },\n        {\n          "type": "dec",\n          "iv": "<REDACTED>",\n          "key": "<REDACTED>"\n        }\n      ]\n    },\n<SNIP>\n')),(0,r.kt)("p",null,"Extract ALL the im4p files from the IPSW"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f ipsw extract --pattern '.*im4p$' iPad_64bit_TouchID_ASTC_16.3_20D47_Restore.ipsw\n")),(0,r.kt)("p",null,"Decrypt the SEP firmware"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f ipsw img4 dec --iv-key <REDACTED> sep-firmware.j71b.RELEASE.im4p\n      \u2022 Decrypting file to sep-firmware.j71b.RELEASE.im4p.dec\n")),(0,r.kt)("p",null,"And WIN."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\u276f hexdump -C -s 65578 -n 16 sep-firmware.j71b.RELEASE.im4p.dec\n\n0001002a  42 75 69 6c 74 20 62 79  20 6c 65 67 69 6f 6e 32  |"Built by legion2"|\n')))}g.isMDXComponent=!0}}]);