"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[84292],{75631:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return h}});var o=n(83117),i=n(80102),r=(n(67294),n(3905)),a=["components"],s={id:"dust-protection",title:"Dust Protection",description:"Introduction to the history of dust protection in IOTA",keywords:["Dust","Chrysalis","Legacy"]},l="The Evolution of Dust Protection on IOTA",u={unversionedId:"future/dust-protection",id:"future/dust-protection",title:"Dust Protection",description:"Introduction to the history of dust protection in IOTA",source:"@site/internal/learn/future/dust-protection.md",sourceDirName:"future",slug:"/future/dust-protection",permalink:"/learn/future/dust-protection",editUrl:"https://github.com/iota-community/iota-wiki/edit/main/internal/learn/future/dust-protection.md",tags:[],version:"current",lastUpdatedAt:1636578577,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"dust-protection",title:"Dust Protection",description:"Introduction to the history of dust protection in IOTA",keywords:["Dust","Chrysalis","Legacy"]},sidebar:"learn",previous:{title:"Role of the IOTA Token",permalink:"/learn/future/role-of-iota"},next:{title:"Non-fungile Token (NFTs)",permalink:"/learn/future/nfts"}},d=[{value:"IOTA 1.0",id:"iota-10",children:[],level:2},{value:"IOTA 1.5",id:"iota-15",children:[],level:2},{value:"New Tokenisation Framework",id:"new-tokenisation-framework",children:[{value:"Bonus",id:"bonus",children:[],level:4},{value:"Final note",id:"final-note",children:[],level:4}],level:2}],c={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-evolution-of-dust-protection-on-iota"},"The Evolution of Dust Protection on IOTA"),(0,r.kt)("p",null,"This short note attempts to explain how dust protection has evolved with the needs of the IOTA network."),(0,r.kt)("h2",{id:"iota-10"},"IOTA 1.0"),(0,r.kt)("p",null,"An account-based ledger.\nEach address has a balance of tokens."),(0,r.kt)("p",null,"There is no dust protection.\nTherefore addresses could hold any amount, down to 1 IOTA, and transactions could be as small as 1 IOTA."),(0,r.kt)("p",null,"The ledger state was therefore likely to bloat."),(0,r.kt)("h2",{id:"iota-15"},"IOTA 1.5"),(0,r.kt)("p",null,"IOTA switches to a UTXO-based ledger.\nEach address can now hold multiple ",(0,r.kt)("a",{parentName:"p",href:"/learn/about-iota/messages#utxo"},"UTXOs"),", each with its own balance. For a more extensive description of UTXOs check ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/bitbees/what-the-heck-is-utxo-ca68f2651819"},"this")," medium article.\nThe address balance is calculated as the total of the UTXO balances on that address."),(0,r.kt)("p",null,"Recognising the risk of ledger bloat, a dust protection mechanism is introduced.\nWhen thinking about dust we now have to think about UTXOs rather than addresses. This is really tricky as we will see."),(0,r.kt)("p",null,'The basic rule of IOTA 1.5 dust protection is that "UTXOs cannot hold under 1 million IOTA (1 Mi)".\nTry to remember this very important rule as it makes sending amounts under 1 Mi very tricky!'),(0,r.kt)("p",null,"To understand why this is tricky, let's look at an example where I try to send 10i to an address that already contains 5 Mi. You may assume that you could add 10i to that 5 Mi, so that you have a total of 5.00001 Mi, which respects the basic dust protection rule.\nBut no!"),(0,r.kt)("p",null,"Each UTXO is actually a self-contained pot, which only contains the output from a transaction. And in this case that pot would only contain the 10i you sent (ie the output of that transaction). So, as the UTXO only contains 10i, you have broken the dust protection rule.\n(You may need to re-read that a few times to understand it properly)"),(0,r.kt)("p",null,'To overcome this problem, a special UTXO called a "dust allowance output" was introduced. Users could now lock 1- 10 Mi on a dust allowance output, and could then receive up to 10 dust UTXOs per Mi deposited, on the associated address.\neg I create a dust allowance output with 2 Mi locked on Address A. You can now send up to 20 dust transactions (a dust transaction is anything under 1 Mi) to Address A.\nUsers can also sweep the dust UTXOs - this means combining multiple dust UTXOs into a single UTXO (eg 1i + 1i + 1i -> 3i on 1 UTXO). This frees up spare UTXOs on your dust-enabled address.'),(0,r.kt)("p",null,"This was a reasonable interim solution, but unfortunately it is not compatible with IOTA 2.0, as it requires total ordering of the Tangle (to determine if the transaction is valid, and that the dust protection rules are fulfilled). IOTA 2.0 does not have total ordering."),(0,r.kt)("h2",{id:"new-tokenisation-framework"},"New Tokenisation Framework"),(0,r.kt)("p",null,"Various new UTXO types are introduced, which can add different amounts of data to the ledger (eg for NFTs, native assets, aliases), without requiring any IOTA by themselves. Therefore there is a very high risk of ledger bloat.\nThe 1.5 dust protection is also not ready for IOTA 2.0. Therefore a new dust protection scheme is proposed, which deals with both issues."),(0,r.kt)("p",null,"The rules of the new dust protection are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Any UTXO must contain a minimum deposit (for the sake of simplicity, let's make this 1 Mi for our examples)."),(0,r.kt)("li",{parentName:"ol"},"The amount of data any UTXO can hold is proportional to the amount of IOTA on that UTXO. The IOTA acts as a deposit to secure that data on the Tangle, and you can add more IOTA to add more data. The actual cost of IOTA per byte is currently being decided, and can change over time.")),(0,r.kt)("p",null,'To send amounts smaller than 1 Mi, or to send native assets, we introduce a new system of "conditional sending", which does not require total ordering of the Tangle (and is therefore ready for IOTA 2.0).\nLet\'s look at how this works if I want to send 10i to an address which already holds 5 Mi (assuming the minimum deposit is 1 Mi). As before I cannot just send 10i, because the UTXO will have a value of 10i (well below the minimal amount of 1 Mi).\nI cannot use a special dust-UTXO as in 1.5, because these need total ordering of the Tangle.\nInstead I use "conditional sending":'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"I send the 10i together with the minimal deposit amount (1 Mi) - a total of 1.00001 Mi (which meets the dust protection criteria) - to the target address."),(0,r.kt)("li",{parentName:"ol"},"This is however a special type of transaction which needs a further step to complete. It has to be \"claimed\" by the recipient. 2 things can therefore happen to this transaction:\na) The 10i is claimed by the recipient - the 10i is transferred together with the recipient's own minimal deposit to a new valid UTXO. The recipient needs their own 1 Mi deposit to claim the 10i. At the same time the sender's 1 Mi deposit is returned to the sender.\nb) The 10i is not claimed in a reasonable time period (set by the sender), and the total amount of 1.00001 Mi can now be reclaimed or spent by the sender (the mechanism is a bit more complex but this is the simplest way of describing it).")),(0,r.kt)("h4",{id:"bonus"},"Bonus"),(0,r.kt)("p",null,"This conditional sending can also be used as a safety net to prevent sending to the wrong address. It is a common problem in crypto that funds are sometimes transferred to the incorrect address due to mistyping of the address - often this address has no owner and the tokens are lost forever! If this were to happen in a conditional send however, then the tokens are very unlikely to be claimed in the set time period, and the total amount can be claimed by the sender. A very useful feature!"),(0,r.kt)("h4",{id:"final-note"},"Final note"),(0,r.kt)("p",null,"We are also looking at other mechanisms for microtransactions which make the process simpler, while still respecting the dust protection rules. We hope to share more with you soon."))}h.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=u(n),p=i,m=h["".concat(l,".").concat(p)]||h[p]||c[p]||r;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);