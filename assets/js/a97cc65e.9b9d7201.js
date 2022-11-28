"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>x});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),x=a,b=u["".concat(l,".").concat(x)]||u[x]||p[x]||r;return n?o.createElement(b,i(i({ref:t},d),{},{components:n})):o.createElement(b,i({ref:t},d))}));function x(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={hide_table_of_contents:!0,description:"How to symbolicate crashlogs."},i="Symbolicate Crashlogs",s={unversionedId:"guides/symbolicate",id:"guides/symbolicate",title:"Symbolicate Crashlogs",description:"How to symbolicate crashlogs.",source:"@site/docs/guides/symbolicate.md",sourceDirName:"guides",slug:"/guides/symbolicate",permalink:"/ipsw/docs/guides/symbolicate",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/guides/symbolicate.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0,description:"How to symbolicate crashlogs."},sidebar:"docs",previous:{title:"Dump Syscalls",permalink:"/ipsw/docs/guides/dump_syscalls"},next:{title:"List *OS Devices",permalink:"/ipsw/docs/guides/device_list"}},l={},c=[],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"symbolicate-crashlogs"},"Symbolicate Crashlogs"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This is useful for symbolicating crashlogs you have collected from a device you don't have access to")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ipsw")," will detect the ",(0,a.kt)("inlineCode",{parentName:"p"},"dyld_shared_cache")," needed to symbolicate the ",(0,a.kt)("strong",{parentName:"p"},"userspace")," crashlog"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f ipsw symbolicate solitaire-2021-02-23-185510.ips\n\n   \u2a2f please supply a dyld_shared_cache for iPhone12,1 running 14.5 (18E5154f)\n")),(0,a.kt)("p",null,"You can download the current ",(0,a.kt)("inlineCode",{parentName:"p"},"beta")," shared caches like so"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f ipsw download ota --platform ios --device iPhone12,1 --beta --dyld\n? You are about to download 1 OTA files. Continue? Yes\n   \u2022 Parsing remote OTA        build=18E5154f device=iPhone12,1 iPhone11,8 version=iOS145DevBeta2\n   \u2022 Extracting remote dyld_shared_cache (can be a bit CPU intensive)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f ipsw symbolicate solitaire-2021-02-23-185510.ips dyld_shared_cache_arm64e\n\nProcess:             solitaire [12345]\nHardware Model:      iPhone12,1\nOS Version:          14.5\nBuildID:             18E5154f\n\nException Type:      EXC_BAD_ACCESS (SIGSEGV)\nException Subtype:\nKERN_INVALID_ADDRESS at 0x0000020000000010 -> 0x0000000000000010 (possible pointer authentication failure)\nVM Region Info: 0x10 is not in any region.  Bytes before following region: 4363091952\n      REGION TYPE                 START - END      [ VSIZE] PRT/MAX SHRMOD  REGION DETAIL\n      UNUSED SPACE AT START\n---\x3e\n      __TEXT                   1040f8000-1040fc000 [   16K] r-x/r-x SM=COW  ...app/solitaire\n\nTermination Signal:  Segmentation fault: 11\nTermination Reason:  Namespace SIGNAL, Code 0xb\nTerminating Process: exc handler [12345]\nTriggered by Thread: 45\n\nThread 45 name: Dispatch queue: CTTelephonyNetworkInfo\nThread 45 Crashed:\n  0: libobjc.A.dylib         (slide=0x27010000) 0x1bc39e1e0 _objc_msgSend + 32\n  1: CoreFoundation          (slide=0x27010000) 0x1a734e76c -[__NSDictionaryM objectForKeyedSubscript:] + 184\n  2: CoreTelephony           (slide=0x27010000) 0x1a79d1230 -[CTTelephonyNetworkInfo updateRat:descriptor:] + 144\n  3: CoreTelephony           (slide=0x27010000) 0x1a79d1114 -[CTTelephonyNetworkInfo queryRatForDescriptor:] + 164\n  4: CoreTelephony           (slide=0x27010000) 0x1a79cfe9c -[CTTelephonyNetworkInfo connectionStateChanged:connection:dataConnectionStatusInfo:] + 72\n  5: CoreFoundation          (slide=0x27010000) 0x1a7476894 ___invoking___ + 148\n  6: CoreFoundation          (slide=0x27010000) 0x1a734a054 -[NSInvocation invoke] + 380\n  7: CoreFoundation          (slide=0x27010000) 0x1a734a658 -[NSInvocation invokeWithTarget:] + 80\n  8: CoreTelephony           (slide=0x27010000) 0x1a79d9fb0 __ZZN8dispatch5asyncIZ50-[CoreTelephonyClientMux sink:handleNotification:]E3$_2EEvP16dispatch_queue_sNSt3__110unique_ptrIT_NS4_14default_deleteIS6_EEEEENUlPvE_8__invokeESA_ + 44\n  9: libdispatch.dylib       (slide=0x27010000) 0x1a705e878 __dispatch_client_callout + 20\n 10: libdispatch.dylib       (slide=0x27010000) 0x1a7066060 __dispatch_lane_serial_drain + 620\n 11: libdispatch.dylib       (slide=0x27010000) 0x1a7066c5c __dispatch_lane_invoke + 404\n 12: libdispatch.dylib       (slide=0x27010000) 0x1a7071518 __dispatch_workloop_worker_thread + 764\n 13: libsystem_pthread.dylib (slide=0x27010000) 0x1f33ba7a4 __pthread_wqthread + 276\n 14: libsystem_pthread.dylib (slide=0x27010000) 0x1f33c174c _start_wqthread + 8\n\nThread 45 State:\n    x0: 0x00000002803e0047   x1: 0x00000001f6df3124   x2: 0x0000000281ed4000   x3: 0x00000001b6efb344\n    x4: 0x00000000000062dc   x5: 0x0000000000000001   x6: 0x3130303030303030   x7: 0x0000000000000000\n    x8: 0x00000001f6df3000   x9: 0xdb6091bce8b38b12  x10: 0x6ae10002803e0047  x11: 0x0000000281ed4021\n   x12: 0x0000000281ed4021  x13: 0x0000020000000000  x14: 0x00000001a7604012  x15: 0x0000020000000000\n   x16: 0x0000000000000000  x17: 0xd0357901a735c988  x18: 0x0000000000000000  x19: 0x0000000281ed4000\n   x20: 0x00000001f6df3124  x21: 0x0000000000000003  x22: 0x00000002801de580  x23: 0x0000000000000003\n   x24: 0x0000000000000001  x25: 0x000000020abc3520  x26: 0x0000000000000003  x27: 0x0000000000000000\n   x28: 0x0000000000000104   fp: 0x000000016de0e780   lr: 0x00000001a734e76c\n    sp: 0x000000016de0e740   pc: 0x00000001bc39e1e0 cpsr: 0x20001000\n   esr: 0x92000004\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NOTE:")," You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--unslide")," flag to unslide the crashlog for easier static analysis")))}p.isMDXComponent=!0}}]);