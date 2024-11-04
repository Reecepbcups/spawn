"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[273],{6384:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=t(5893),o=t(1151);const s={title:"Token Factory",sidebar_label:"Token Factory",slug:"/demo/tokenfactory"},r="Tokenfactory",i={id:"demos/tokenfactory",title:"Token Factory",description:"You will build a new chain with TokenFactory, enabling any account to create, transfer, and interact with fractionalized native tokens.",source:"@site/versioned_docs/version-v0.50.x/03-demos/03-tokenfactory.md",sourceDirName:"03-demos",slug:"/demo/tokenfactory",permalink:"/spawn/v0.50/demo/tokenfactory",draft:!1,unlisted:!1,tags:[],version:"v0.50.x",sidebarPosition:3,frontMatter:{title:"Token Factory",sidebar_label:"Token Factory",slug:"/demo/tokenfactory"},sidebar:"defaultSidebar",previous:{title:"CosmWasm NFTs",permalink:"/spawn/v0.50/demo/cw-nft"},next:{title:"CosmWasm Validator Reviews",permalink:"/spawn/v0.50/demo/cw-validator-reviews"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create your chain",id:"create-your-chain",level:2},{value:"Start the testnet",id:"start-the-testnet",level:2},{value:"Confirm tokenfactory is enabled",id:"confirm-tokenfactory-is-enabled",level:2},{value:"Create a token",id:"create-a-token",level:2},{value:"Verify the token was created",id:"verify-the-token-was-created",level:2},{value:"Modify token metadata",id:"modify-token-metadata",level:2},{value:"Verify the token metadata",id:"verify-the-token-metadata",level:2},{value:"Create new tokens to transfer",id:"create-new-tokens-to-transfer",level:2},{value:"Create new tokens for another account",id:"create-new-tokens-for-another-account",level:2},{value:"Transfer tokens",id:"transfer-tokens",level:2},{value:"Burn tokens",id:"burn-tokens",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"tokenfactory",children:"Tokenfactory"}),"\n",(0,a.jsxs)(n.p,{children:["You will build a new chain with ",(0,a.jsx)(n.a,{href:"https://github.com/strangelove-ventures/tokenfactory",children:"TokenFactory"}),", enabling any account to create, transfer, and interact with fractionalized native tokens."]}),"\n",(0,a.jsx)(n.admonition,{title:"Warning",type:"note",children:(0,a.jsxs)(n.p,{children:["Some parts of this tutorial will not have the added context about spawn's inner workings or how commands work. Run through ",(0,a.jsx)(n.a,{href:"/spawn/v0.50/build/name-service",children:"Build Your Application"})," for this context."]})}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/spawn/v0.50/install/system-setup",children:"System Setup"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/spawn/v0.50/install/install-spawn",children:"Install Spawn"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"create-your-chain",children:"Create your chain"}),"\n",(0,a.jsx)(n.p,{children:"Build a new chain that has TokenFactory configured. By default, it is enabled."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"GITHUB_USERNAME=rollchains\n\nspawn new rollchain \\\n--consensus=proof-of-stake \\\n--bech32=roll \\\n--denom=uroll \\\n--bin=rolld \\\n--disabled=cosmwasm,block-explorer \\\n--org=${GITHUB_USERNAME}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"start-the-testnet",children:"Start the testnet"}),"\n",(0,a.jsx)(n.admonition,{title:"Note",type:"note",children:(0,a.jsxs)(n.p,{children:["If ",(0,a.jsx)(n.code,{children:"make sh-testnet"})," does not start due to a port bind error, you can kill your previously running testnet with ",(0,a.jsx)(n.code,{children:"killall -9 rolld"}),", then try again."]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# move into the chain directory\ncd rollchain\n\n# - Installs the binary\n# - Setups the default keys with funds\n# - Starts the chain in your shell\nmake sh-testnet\n"})}),"\n",(0,a.jsx)(n.h2,{id:"confirm-tokenfactory-is-enabled",children:"Confirm tokenfactory is enabled"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"rolld q tokenfactory params\n"})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"params output"}),(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"denom_creation_fee"})," is a cost the application can set for creating new tokens by default, there is no cost."]}),(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"denom_creation_gas_consume"})," is the amount of indirect resource cost to consume for creating a new token.\nIt is a more indirect approach to charging and is a better experience overall for developers on a network."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'params:\n  denom_creation_fee: []\n  denom_creation_gas_consume: "100000"\n'})})]}),"\n",(0,a.jsx)(n.h2,{id:"create-a-token",children:"Create a token"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Create a denom (native token)\n# - gas is is amount of compute resources to allocate.\nrolld tx tokenfactory create-denom mytoken --from=acc0 --chain-id=localchain-1 --yes\n"})}),"\n",(0,a.jsx)(n.h2,{id:"verify-the-token-was-created",children:"Verify the token was created"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Get our account address for the acc0 wallet / key.\n# acc0 is roll1hj5fveer5cjtn4wd6wstzugjfdxzl0xpg2te87\nrolld q tokenfactory denoms-from-creator $(rolld keys show acc0 -a)\n"})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"denoms-from-creator output"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"denoms:\n- factory/roll1hj5fveer5cjtn4wd6wstzugjfdxzl0xpg2te87/mytoken\n"})})]}),"\n",(0,a.jsxs)(n.p,{children:["The output shows a denom with the named ",(0,a.jsx)(n.code,{children:"factory/roll1hj5fveer5cjtn4wd6wstzugjfdxzl0xpg2te87/mytoken"})]}),"\n",(0,a.jsxs)(n.admonition,{title:"Note",type:"note",children:[(0,a.jsx)(n.p,{children:"Why did it add extra data to the token?"}),(0,a.jsxs)(n.p,{children:["Imagine there are 2 people, both named John. If only the name John is used, which John is it talking about? More information must be added to the name to make it unique. This is the same concept, but with tokens. The extra data is added to ensure the token is unique while it can still contain the same base name. With tokenfactory, the creators name is placed in the token. Read more about ",(0,a.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Naming_collision",children:"naming collisions"}),"."]})]}),"\n",(0,a.jsx)(n.h2,{id:"modify-token-metadata",children:"Modify token metadata"}),"\n",(0,a.jsx)(n.p,{children:"Clients (websites, frontends, users) may wish to see more information about the token. This is where metadata comes in. You can add a ticker symbol, description, and decimal places to the token."}),"\n",(0,a.jsxs)(n.p,{children:["The Interchain uses 6 decimal places as the default standard. This process of expressing fractions of a value in whole numbers is called ",(0,a.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Fixed-point_arithmetic",children:"fixed-point arithmetic"})," and is used for financial precision. This means that 1 token is really 1,000,000 (10^6) of these micro base tokens. If I want to send you 0.5 of a token, I really send you 500,000 of these micro base tokens on the backend."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'# \'Denom\' is short for denomination.\nDENOM=factory/roll1hj5fveer5cjtn4wd6wstzugjfdxzl0xpg2te87/mytoken\nDESCRIPTION="My token description"\n\nrolld tx tokenfactory modify-metadata $DENOM MYTOKEN "$DESCRIPTION" 6 --from acc0 --yes\n'})}),"\n",(0,a.jsx)(n.h2,{id:"verify-the-token-metadata",children:"Verify the token metadata"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"rolld q bank denom-metadata $DENOM\n"})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"bank denom-metadata output"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"metadata:\n  base: factory/roll1hj5fveer5cjtn4wd6wstzugjfdxzl0xpg2te87/mytoken\n  denom_units:\n  - aliases:\n    - MYTOKEN\n    denom: factory/roll1hj5fveer5cjtn4wd6wstzugjfdxzl0xpg2te87/mytoken\n  - aliases:\n    - factory/roll1hj5fveer5cjtn4wd6wstzugjfdxzl0xpg2te87/mytoken\n    denom: MYTOKEN\n    exponent: 6\n  description: My token description\n  display: MYTOKEN\n  name: factory/roll1hj5fveer5cjtn4wd6wstzugjfdxzl0xpg2te87/mytoken\n  symbol: MYTOKEN\n"})})]}),"\n",(0,a.jsx)(n.h2,{id:"create-new-tokens-to-transfer",children:"Create new tokens to transfer"}),"\n",(0,a.jsx)(n.p,{children:"The base token structure is created, but no tokens actually exists yet. Mint new tokens to then be able to transfer them between accounts."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Mint 5,000,000 micro mytoken. By default this goes to the token creator.\nrolld tx tokenfactory mint 5000000$DENOM --from acc0 --yes\n\n# Verify token creator balance: roll1hj5fveer5cjtn4wd6wstzugjfdxzl0xpg2te87\nrolld q bank balances $(rolld keys show acc0 -a)\n"})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"bank balances output"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'balances:\n- amount: "5000000"\n  denom: factory/roll1hj5fveer5cjtn4wd6wstzugjfdxzl0xpg2te87/mytoken\n- amount: "900"\n  denom: test\n- amount: "9000000"\n  denom: uroll\npagination:\n  total: "3"\n'})})]}),"\n",(0,a.jsx)(n.h2,{id:"create-new-tokens-for-another-account",children:"Create new tokens for another account"}),"\n",(0,a.jsxs)(n.p,{children:["While you could mint tokens followed by a manual ",(0,a.jsx)(n.code,{children:"tx bank send"})," transfer, you can also mint-to another account directly."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Mint 1,000,000 to another account\nrolld tx tokenfactory mint-to $(rolld keys show acc1 -a) 1000000$DENOM --from acc0 --yes\n\nrolld q bank balances $(rolld keys show acc1 -a)\n"})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"mint-to output"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'balances:\n- amount: "1000000"\n  denom: factory/roll1hj5fveer5cjtn4wd6wstzugjfdxzl0xpg2te87/mytoken\n- amount: "800"\n  denom: test\n- amount: "10000000"\n  denom: uroll\npagination:\n  total: "3"\n'})}),(0,a.jsx)(n.p,{children:"note, you can check for just a specific token balance with"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"rolld q bank balance $(rolld keys show acc0 -a) $DENOM\n"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'balance:\n  amount: "5000000"\n  denom: factory/roll1hj5fveer5cjtn4wd6wstzugjfdxzl0xpg2te87/mytoken\n'})})]}),"\n",(0,a.jsx)(n.h2,{id:"transfer-tokens",children:"Transfer tokens"}),"\n",(0,a.jsx)(n.p,{children:"Now with tokens minted, either user can transfer them as they please between any accounts. Even ones that do not yet have any tokens."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Send 7 base micro tokens from acc0 to acc1\nrolld tx bank send acc0 $(rolld keys show acc1 -a) 7$DENOM --from acc0 --yes\n\n# Verify the 7 base tokens sent and has increased to 1000007, or 1.000007\nrolld q bank balances $(rolld keys show acc1 -a)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"burn-tokens",children:"Burn tokens"}),"\n",(0,a.jsx)(n.p,{children:"If you wish to remove tokens from the system, you can burn them from the admin account."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Burn micro tokens from account\nrolld tx tokenfactory burn 123$DENOM --from acc0 --yes\n\n# Verify the tokens have been reduced\nrolld q bank balances $(rolld keys show acc0 -a)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsxs)(n.p,{children:["In this tutorial, you built a new chain with the TokenFactory feature, launched a testnet for it, and created a new native token. You minted tokens, transferred them between accounts, and burned them. These tokens could be kept internally for some personal or application based accounting, or transferred to other chains via IBC. This is showcased in the ",(0,a.jsx)(n.a,{href:"/spawn/v0.50/demo/ibc",children:"IBC Transfer Demo"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var a=t(7294);const o={},s=a.createContext(o);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);