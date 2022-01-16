"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[36069],{38262:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],s={id:"role-of-iota",title:"Role of the IOTA Token",description:"Introduction to the emerging permissionless Smart Contracts network",keywords:["smart contracts","permissionless","ASMB"]},l=void 0,c={unversionedId:"future/role-of-iota",id:"future/role-of-iota",title:"Role of the IOTA Token",description:"Introduction to the emerging permissionless Smart Contracts network",source:"@site/internal/learn/future/role-of-the-iota-token.md",sourceDirName:"future",slug:"/future/role-of-iota",permalink:"/learn/future/role-of-iota",editUrl:"https://github.com/iota-community/iota-wiki/edit/main/internal/learn/future/role-of-the-iota-token.md",tags:[],version:"current",lastUpdatedAt:1642293444,formattedLastUpdatedAt:"1/16/2022",frontMatter:{id:"role-of-iota",title:"Role of the IOTA Token",description:"Introduction to the emerging permissionless Smart Contracts network",keywords:["smart contracts","permissionless","ASMB"]},sidebar:"learn",previous:{title:"Assembly",permalink:"/learn/future/assembly"},next:{title:"Dust Protection",permalink:"/learn/future/dust-protection"}},u=[{value:"The new dust protection",id:"the-new-dust-protection",children:[],level:2},{value:"Mana",id:"mana",children:[],level:2}],p={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With the introduction of ",(0,a.kt)("a",{parentName:"p",href:"./assembly"},"Assemly")," it's important to understand the role of the IOTA token. Assembly is build on top of the Tangle, it will need the Tangle for anchored state updates, interoperability between chains, for Native Assets and general access to a congested network. There are two main usages of the IOTA token in Assembly and everyting build on top of IOTA."),(0,a.kt)("h2",{id:"the-new-dust-protection"},"The new dust protection"),(0,a.kt)("p",null,"With the new ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tips/pull/39"},"dust protection"),", all data stored on the Tangle needs to be backed by IOTA tokens. For example, every NFT, SC chain state anchor or Native Asset requires a deposit of IOTA tokens in order to be stored on L1. You can read more about the new dust protection in this ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@wernerderchamp/dust-protection-on-the-iota-network-an-eli12-d8ca567a2d36"},"community blog post")," or in ",(0,a.kt)("a",{parentName:"p",href:"./dust-protection#new-tokenisation-framework"},"this Wiki article")," about the history of the dust protection in IOTA."),(0,a.kt)("h2",{id:"mana"},"Mana"),(0,a.kt)("p",null,"Assembly nodes have to anchor the chain state often, even if the Tangle is congested. To get a fair share of the Tangle throughput in the ",(0,a.kt)("a",{parentName:"p",href:"https://v2.iota.org"},"next version")," of the IOTA protocol, you will need ",(0,a.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/5.3Mana"},"Mana"),", and Mana is derived directly from the IOTA token. Assembly nodes will have to hold IOTA tokens, which will increase demand even more."))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);