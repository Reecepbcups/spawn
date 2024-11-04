"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[294],{6859:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=i(5893),s=i(1151);const o={title:"Name Service",sidebar_label:"Build a Name Service",sidebar_position:1,slug:"/build/name-service"},r="Overview",l={id:"build-your-application/nameservice",title:"Name Service",description:"Building your first Cosmos-SDK blockchain with Spawn. This tutorial focuses on a 'nameservice' where you set your account to a name you choose.",source:"@site/versioned_docs/version-v0.50.x/02-build-your-application/01-nameservice.md",sourceDirName:"02-build-your-application",slug:"/build/name-service",permalink:"/spawn/v0.50/build/name-service",draft:!1,unlisted:!1,tags:[],version:"v0.50.x",sidebarPosition:1,frontMatter:{title:"Name Service",sidebar_label:"Build a Name Service",sidebar_position:1,slug:"/build/name-service"},sidebar:"defaultSidebar",previous:{title:"Debugging",permalink:"/spawn/v0.50/install/debugging"},next:{title:"Set Structure",permalink:"/spawn/v0.50/build/name-service-structure"}},t={},c=[{value:"How a Name Service works",id:"how-a-name-service-works",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Video Walkthrough",id:"video-walkthrough",level:2},{value:"Generate a New Chain",id:"generate-a-new-chain",level:2},{value:"Scaffold the Module",id:"scaffold-the-module",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(n.admonition,{title:"Synopsis",type:"note",children:[(0,a.jsx)(n.p,{children:"Building your first Cosmos-SDK blockchain with Spawn. This tutorial focuses on a 'nameservice' where you set your account to a name you choose."}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Generating a new chain"}),"\n",(0,a.jsx)(n.li,{children:"Creating a new module"}),"\n",(0,a.jsx)(n.li,{children:"Adding custom logic"}),"\n",(0,a.jsx)(n.li,{children:"Run locally"}),"\n",(0,a.jsx)(n.li,{children:"Interacting with the network"}),"\n"]})]}),"\n",(0,a.jsx)(n.h2,{id:"how-a-name-service-works",children:"How a Name Service works"}),"\n",(0,a.jsx)(n.p,{children:'Imagine you have a set of labeled containers, each with a unique name like "Essentials" "Electronics" and "Books". The label on each container is called the key, and what\u2019s stored inside is the value. For example, the key "Books" leads you to a container full of books, while "Essentials" might have things like toiletries or basic supplies.'}),"\n",(0,a.jsx)(n.p,{children:"In a nameservice, this key-value system lets you quickly find or access specific data by referencing a unique name, or key, which reliably points you to the related value. This is useful for mapping names to specific information or resources, so with just the name, you can always find exactly what you're looking for."}),"\n",(0,a.jsxs)(n.p,{children:["For this tutorial we map a human readable name (like ",(0,a.jsx)(n.code,{children:'"alice"'}),") to a complex wallet address (like ",(0,a.jsx)(n.code,{children:"roll1efd63aw40lxf3n4mhf7dzhjkr453axur57cawh"}),") so it is easier to understand and view as a user."]}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/spawn/v0.50/install/system-setup",children:"System Setup"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/spawn/v0.50/install/install-spawn",children:"Install Spawn"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"video-walkthrough",children:"Video Walkthrough"}),"\n",(0,a.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/4gFSuLUlP4I?si=A_VqEwhOh2ZPxNsb",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),"\n",(0,a.jsx)(n.h2,{id:"generate-a-new-chain",children:"Generate a New Chain"}),"\n",(0,a.jsx)(n.p,{children:"Let's create a new chain called 'rollchain'. You are going to set defining characteristics such as"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Which modules to disable from the template ",(0,a.jsx)(n.em,{children:"if any"})]}),"\n",(0,a.jsx)(n.li,{children:"Proof of Stake consensus"}),"\n",(0,a.jsx)(n.li,{children:"Wallet prefix (bech32)"}),"\n",(0,a.jsx)(n.li,{children:"Token name (denom)"}),"\n",(0,a.jsx)(n.li,{children:"Binary executable (bin)"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"spawn new rollchain --consensus=pos --disable=cosmwasm --bech32=roll --denom=uroll --bin=rolld\n"})}),"\n",(0,a.jsx)(n.p,{children:"\ud83c\udf89 Your new blockchain 'rollchain' is now generated!"}),"\n",(0,a.jsx)(n.h2,{id:"scaffold-the-module",children:"Scaffold the Module"}),"\n",(0,a.jsx)(n.p,{children:"Now it is time to build the nameservice module structure."}),"\n",(0,a.jsx)(n.p,{children:"Move into the 'rollchain' directory and generate the new module with the following commands:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# moves into the rollchain directory you just generated\ncd rollchain\n\n# scaffolds your new nameservice module\nspawn module new nameservice\n\n# proto-gen proto files to go\n#\n# If you get a cannot find module error\n# go clean -modcache\nmake proto-gen\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This creates a new template module with the name ",(0,a.jsx)(n.code,{children:"nameservice"})," in the ",(0,a.jsx)(n.code,{children:"x"})," and ",(0,a.jsx)(n.code,{children:"proto"})," directories. It also automatically connected to your application and is ready for use."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var a=i(7294);const s={},o=a.createContext(s);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);