"use strict";(self.webpackChunkopen_education_builder=self.webpackChunkopen_education_builder||[]).push([[522],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(n),c=a,g=s["".concat(p,".").concat(c)]||s[c]||m[c]||l;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const l={},i="RevealMD",o={unversionedId:"plugins/revealmd",id:"plugins/revealmd",title:"RevealMD",description:"Description",source:"@site/docs/plugins/revealmd.md",sourceDirName:"plugins",slug:"/plugins/revealmd",permalink:"/openedu_builder/plugins/revealmd",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Reveal Embed",permalink:"/openedu_builder/plugins/reveal_embed"}},p={},d=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2}],u={toc:d};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"revealmd"},"RevealMD"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This plugin generates ",(0,a.kt)("a",{parentName:"p",href:"https://revealjs.com/"},"reveal.js")," slides from Markdown files using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webpro/reveal-md"},"reveal-md")," tool."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"required"),(0,a.kt)("th",{parentName:"tr",align:null},"default"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"command")),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"reveal-md")),(0,a.kt)("td",{parentName:"tr",align:null},"Used to customize the command used to build the slides.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"extra_args")),(0,a.kt)("td",{parentName:"tr",align:null},"list","[str]"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"[]")),(0,a.kt)("td",{parentName:"tr",align:null},"Extra arguments to pass to the command.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"build")),(0,a.kt)("td",{parentName:"tr",align:null},"Mapping","[str, str]"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"N\\A")),(0,a.kt)("td",{parentName:"tr",align:null},"The slides to build as a mapping of  name to location. This also accepts the location as a shorthand, using the basename of the file as the name.")))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"build_slides:\n  plugin: revealmd\n  options:\n    command: reveal-md\n    extra_args: \n      - --static-dirs\n      - static\n    build:\n      Lecture1: /path_to_slides/lecture1.md\n      Lecture2: /path_to_slides/lecture2.md\n")))}s.isMDXComponent=!0}}]);