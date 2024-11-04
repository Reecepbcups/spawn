"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[375],{7946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(5893),r=n(1151);const a={title:"CW Validator Reviews",sidebar_label:"CosmWasm Validator Reviews",slug:"/demo/cw-validator-reviews"},i="CosmWasm Validator Reviews",o={id:"demos/cw-validator-reviews",title:"CW Validator Reviews",description:"You will build a new chain with CosmWasm, enabling a proof-of-stake validator review system. You will write a contract to collect and manage validator reviews, integrate it with the chain, and update validator data automatically through a Cosmos-SDK endblocker module.",source:"@site/versioned_docs/version-v0.50.x/03-demos/04-cw-validator-reviews.md",sourceDirName:"03-demos",slug:"/demo/cw-validator-reviews",permalink:"/spawn/v0.50/demo/cw-validator-reviews",draft:!1,unlisted:!1,tags:[],version:"v0.50.x",sidebarPosition:4,frontMatter:{title:"CW Validator Reviews",sidebar_label:"CosmWasm Validator Reviews",slug:"/demo/cw-validator-reviews"},sidebar:"defaultSidebar",previous:{title:"Token Factory",permalink:"/spawn/v0.50/demo/tokenfactory"},next:{title:"Network Security Types",permalink:"/spawn/v0.50/learn/consensus-security"}},d={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup the Chain",id:"setup-the-chain",level:2},{value:"CosmWasm Build Contract",id:"cosmwasm-build-contract",level:2},{value:"Set State",id:"set-state",level:3},{value:"Set Inputs",id:"set-inputs",level:3},{value:"Set new error",id:"set-new-error",level:3},{value:"Imports",id:"imports",level:3},{value:"Modify Instantiate Message",id:"modify-instantiate-message",level:3},{value:"Add Execute Logic",id:"add-execute-logic",level:3},{value:"Add Queries",id:"add-queries",level:3},{value:"Add New Sudo Message Type",id:"add-new-sudo-message-type",level:3},{value:"Build the Contract",id:"build-the-contract",level:3},{value:"Modify the Module",id:"modify-the-module",level:2},{value:"Setup the Keeper",id:"setup-the-keeper",level:3},{value:"&#39;Fix&#39; keeper_test",id:"fix-keeper_test",level:3},{value:"Dependency Inject (v2)",id:"dependency-inject-v2",level:3},{value:"Fix app.go references",id:"fix-appgo-references",level:3},{value:"Module Core Logic",id:"module-core-logic",level:3},{value:"Implement the EndBlocker",id:"implement-the-endblocker",level:3},{value:"Test Deployment",id:"test-deployment",level:2},{value:"Start Testnet",id:"start-testnet",level:3},{value:"Upload Contract",id:"upload-contract",level:3},{value:"Instantiate our Contract",id:"instantiate-our-contract",level:3},{value:"Verify data",id:"verify-data",level:3},{value:"Write a review",id:"write-a-review",level:2},{value:"Verify the review",id:"verify-the-review",level:3},{value:"Write a review for a non-validator",id:"write-a-review-for-a-non-validator",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"cosmwasm-validator-reviews",children:"CosmWasm Validator Reviews"}),"\n",(0,s.jsxs)(t.p,{children:["You will build a new chain with ",(0,s.jsx)(t.a,{href:"https://cosmwasm.com",children:"CosmWasm"}),", enabling a proof-of-stake validator review system. You will write a contract to collect and manage validator reviews, integrate it with the chain, and update validator data automatically through a Cosmos-SDK endblocker module."]}),"\n",(0,s.jsx)(t.p,{children:"There are easy ways to get validators in a cosmwasm smart contract. The goal of this tutorial is to teach how to pass data from the SDK to a contract."}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/spawn/v0.50/install/system-setup",children:"System Setup"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/spawn/v0.50/install/install-spawn",children:"Install Spawn"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/spawn/v0.50/install/system-setup",children:"Rust + CosmWasm"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"setup-the-chain",children:"Setup the Chain"}),"\n",(0,s.jsx)(t.p,{children:"Build a new blockchain with CosmWasm enabled. THen generate a new module from the template for the reviews."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"GITHUB_USERNAME=rollchains\n\nspawn new rollchain \\\n--consensus=proof-of-stake \\\n--bech32=roll \\\n--denom=uroll \\\n--bin=rolld \\\n--disabled=block-explorer \\\n--org=${GITHUB_USERNAME}\n\n\n# move into the chain directory\ncd rollchain\n\n# Generate the Cosmos-SDK reviews module\nspawn module new reviews\n\n# build the proto to code\nmake proto-gen\n"})}),"\n",(0,s.jsx)(t.p,{children:"Once the chain is started, continue on to the contract building steps"}),"\n",(0,s.jsx)(t.h2,{id:"cosmwasm-build-contract",children:"CosmWasm Build Contract"}),"\n",(0,s.jsxs)(t.p,{children:["CosmWasm has a template repository that is used to generate new contracts. A minimal contract will be built with the ",(0,s.jsx)(t.code,{children:"validator-reviews-contract"})," name provided on a specific commit."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"cargo generate --git https://github.com/CosmWasm/cw-template.git \\\n    --name validator-reviews-contract \\\n    -d minimal=true --tag a2a169164324aa1b48ab76dd630f75f504e41d99\n"})}),"\n",(0,s.jsx)(t.p,{children:"A new folder will be created with the contract template."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"code validator-reviews-contract/\n"})}),"\n",(0,s.jsx)(t.h3,{id:"set-state",children:"Set State"}),"\n",(0,s.jsx)(t.p,{children:"The contract state and base structure is set in the state.rs file. There are 2 groups of data that must be managed, validators and the reviews for validators."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Validators"})," have unique addresses and name stored on the chain. This data will be passed from the Cosmos-SDK to the contract."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Reviews"})," will save a user wallets address and their text reviews for a validator."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:'title="src/state.rs"',children:'use std::collections::BTreeMap;\n\nuse cosmwasm_schema::cw_serde;\nuse cw_storage_plus::{Item, Map};\n\n#[cw_serde]\npub struct Validator {\n    pub address: String,\n    pub moniker: String,\n}\npub const VALIDATORS: Item<Vec<Validator>> = Item::new("validators");\n\n// user -> text\npub type Reviews = BTreeMap<String, String>;\n\n// validator_address -> reviews\npub const REVIEWS: Map<&str, Reviews> = Map::new("reviews");\n'})}),"\n",(0,s.jsx)(t.h3,{id:"set-inputs",children:"Set Inputs"}),"\n",(0,s.jsxs)(t.p,{children:["By default contracts get 3 messages, ",(0,s.jsx)(t.code,{children:"InstantiateMsg"}),", ",(0,s.jsx)(t.code,{children:"ExecuteMsg"}),", and ",(0,s.jsx)(t.code,{children:"QueryMsg"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Instantiate"})," allows initial contracts setup with a configuration desired. This is not used for us. Keep it empty."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Execute"})," is where the main logic of the contract is. Add a ",(0,s.jsx)(t.code,{children:"WriteReview"})," message to allow users to write reviews. The user must know who they want to write a review for and what it says."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Query"})," is for reading data from the contract. Add 2 queries, one to get all validators available and one to get reviews for a specific validator."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"SudoMsg"})," is a default type not typically used. ",(0,s.jsx)(t.code,{children:"Sudo"})," stands for ",(0,s.jsx)(t.code,{children:"Super User DO"})," where the super user is the chain. ",(0,s.jsx)(t.strong,{children:"Only"})," the chain can submit data to this message type. A ",(0,s.jsx)(t.code,{children:"SetValidators"})," message is added to allow the chain to update the validators list within the contract. This is the pass through from the Cosmos-SDK to the contract."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:'title="src/msg.rs"',children:"use cosmwasm_schema::{cw_serde, QueryResponses};\n\n#[cw_serde]\npub struct InstantiateMsg {}\n\n#[cw_serde]\npub enum ExecuteMsg {\n    // highlight-next-line\n    WriteReview { val_addr: String, review: String },\n}\n\n#[cw_serde]\n#[derive(QueryResponses)]\npub enum QueryMsg {\n    // highlight-start\n    #[returns(Vec<crate::state::Validator>)]\n    Validators {},\n\n    #[returns(crate::state::Reviews)]\n    Reviews { address: String },\n    // highlight-end\n}\n\n// highlight-start\n#[cw_serde]\npub enum SudoMsg {\n    SetValidators {\n        validators: Vec<crate::state::Validator>,\n    },\n}\n// highlight-end\n"})}),"\n",(0,s.jsx)(t.h3,{id:"set-new-error",children:"Set new error"}),"\n",(0,s.jsx)(t.p,{children:"For a better experience, a new error is added to the contract. This will be used when a validator is not found in the list of validators. Users should not be allowed to post reviews for non existent validators."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:'title="src/error.rs"',children:'use cosmwasm_std::StdError;\nuse thiserror::Error;\n\n#[derive(Error, Debug)]\npub enum ContractError {\n    #[error("{0}")]\n    Std(#[from] StdError),\n\n    #[error("Unauthorized")]\n    Unauthorized {},\n\n    // Add any other custom errors you like here.\n    // Look at https://docs.rs/thiserror/1.0.21/thiserror/ for details.\n    // highlight-start\n    #[error("The validator is not found")]\n    NoValidatorFound {},\n    // highlight-end\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"imports",children:"Imports"}),"\n",(0,s.jsx)(t.p,{children:"The imports required for this next section are provided here. Paste these at the top of the file to get syntax highlighting."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:'title="src/contract.rs"',children:"// highlight-start\nuse crate::state::{Reviews, REVIEWS, VALIDATORS};\nuse cosmwasm_std::to_json_binary;\nuse std::collections::BTreeMap;\n// highlight-end\n"})}),"\n",(0,s.jsx)(t.h3,{id:"modify-instantiate-message",children:"Modify Instantiate Message"}),"\n",(0,s.jsxs)(t.p,{children:["Even though no extra data is passed through to the setup method, an empty list of validators is saved to storage. This way if we try to get validators from the contract ",(0,s.jsx)(t.strong,{children:"before"})," any have been set by the chain, it returns nothing instead of an error."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:'title="src/contract.rs"',children:'#[cfg_attr(not(feature = "library"), entry_point)]\npub fn instantiate(\n    // highlight-next-line\n    deps: DepsMut, // removes the underscore\n    _env: Env,\n    _info: MessageInfo,\n    _msg: InstantiateMsg,\n) -> Result<Response, ContractError> {\n    // highlight-start\n    VALIDATORS.save(deps.storage, &Vec::new())?;\n    Ok(Response::default())\n    // highlight-end\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"add-execute-logic",children:"Add Execute Logic"}),"\n",(0,s.jsx)(t.p,{children:"When the user sends a message, the contract needs to first check if the validator exist. It does this by loading the validators state and looping through all the validators to see if the one the user requested if in the list. If it is not, it returns to the user that the validator is not found. If it is found then the contract loads all reviews a validator has. If there are none, it creates an empty list of reviews since this will be the first one. The user's review is then added to the list and saved back to storage."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:'title="src/contract.rs"',children:'#[cfg_attr(not(feature = "library"), entry_point)]\npub fn execute(\n    // highlight-next-line\n    deps: DepsMut, // removes the underscore\n    _env: Env,\n    _info: MessageInfo,\n    // highlight-next-line\n    msg: ExecuteMsg,  // removes the underscore\n) -> Result<Response, ContractError> {\n    // highlight-start\n    match msg {\n        ExecuteMsg::WriteReview { val_addr, review } => {\n            let active_validators = VALIDATORS.load(deps.storage)?;\n            if active_validators.iter().find(|v| v.address == val_addr).is_none() {\n                return Err(ContractError::NoValidatorFound {});\n            }\n\n            // Get current validator reviews if any. If there are none, create a new empty review map.\n            let mut all_revs: Reviews = match REVIEWS.may_load(deps.storage, &val_addr) {\n                Ok(Some(rev)) => rev,\n                _ => BTreeMap::new(),\n            };\n\n            // Set this users review for the validator.\n            all_revs.insert(val_addr.clone(), review);\n\n            // Save the updated reviews\n            REVIEWS.save(deps.storage, &val_addr, &all_revs)?;\n        }\n    }\n\n    Ok(Response::default())\n    // highlight-end\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"add-queries",children:"Add Queries"}),"\n",(0,s.jsxs)(t.p,{children:["It is only useful to set reviews if you can also get them back. The first query for ",(0,s.jsx)(t.code,{children:"Validators"})," is just a helper method so users can see who they are allowed to review. The second query is for ",(0,s.jsx)(t.code,{children:"Reviews"})," and takes a validator address as a parameter. This will return all reviews for that validator."]}),"\n",(0,s.jsxs)(t.p,{children:["To get reviews for all validators, a user would need to query ",(0,s.jsx)(t.code,{children:"Validators"}),", then iterate through all the addresses and query ",(0,s.jsx)(t.code,{children:"Reviews"})," for each one."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:'title="src/contract.rs"',children:'#[cfg_attr(not(feature = "library"), entry_point)]\n// highlight-start\npub fn query(deps: Deps, _env: Env, msg: QueryMsg) -> StdResult<Binary> {\n    // note: ^^ deps & msg are not underscored ^^\n    match msg {\n        QueryMsg::Validators {} => {\n            let validators = VALIDATORS.load(deps.storage)?;\n            Ok(to_json_binary(&validators)?)\n        }\n        QueryMsg::Reviews { address } => {\n            let reviews = REVIEWS.load(deps.storage, &address)?;\n            Ok(to_json_binary(&reviews)?)\n        }\n    }\n// highlight-end\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"add-new-sudo-message-type",children:"Add New Sudo Message Type"}),"\n",(0,s.jsx)(t.p,{children:"The chain extended portion of this contract is now added. It is where the validator logic is actually set and saved to storage. As the validator set changes (nodes stop, new nodes come online), the chain will update the contract right away."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:'title="src/contract.rs"',children:'// highlight-start\n// Insert at the bottom of the file\n#[cfg_attr(not(feature = "library"), entry_point)]\npub fn sudo(deps: DepsMut, _env: Env, msg: crate::msg::SudoMsg) -> Result<Response, ContractError> {\n    match msg {\n        crate::msg::SudoMsg::SetValidators { validators } => {\n            VALIDATORS.save(deps.storage, &validators)?;\n            Ok(Response::new())\n        }\n    }\n}\n// highlight-end\n'})}),"\n",(0,s.jsx)(t.h3,{id:"build-the-contract",children:"Build the Contract"}),"\n",(0,s.jsxs)(t.p,{children:["Build the contract to get the cosmwasm wasm binary. This converts it from english programming rust text to 0s and 1s that the chain can understand. The ",(0,s.jsx)(t.code,{children:"optimize"})," script requires docker to be installed and running. Make sure you followed the setup prerequisites at the top of the page and have the docker service or docker desktop installed."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# run the build optimizer (from source -> contract wasm binary)\ncargo run-script optimize\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The .wasm file is then saved to ",(0,s.jsx)(t.code,{children:"./artifacts/validator_reviews_contract.wasm"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"modify-the-module",children:"Modify the Module"}),"\n",(0,s.jsx)(t.p,{children:"The contract is complete but we need to pass the data into the contract from the chain. This is done through the cosmos-sdk reviews module generated earlier. The module will be updated to include the wasm contract and the endblocker will be updated to pass the validator data to the contract."}),"\n",(0,s.jsx)(t.h3,{id:"setup-the-keeper",children:"Setup the Keeper"}),"\n",(0,s.jsx)(t.p,{children:"We must give our code access to other modules on the chain. The wasm module is required to interact with the contract. The staking module is required to get the list of validators. This keeper is the access point for all the specific logic."}),"\n",(0,s.jsx)(t.p,{children:"Add the imports, keeper setup, and new keeper output."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",metastring:'title="x/reviews/keeper.go"',children:'import (\n\t...\n\n    // highlight-start\n\twasmkeeper "github.com/CosmWasm/wasmd/x/wasm/keeper"\n\twasmtypes "github.com/CosmWasm/wasmd/x/wasm/types"\n\tstakingkeeper "github.com/cosmos/cosmos-sdk/x/staking/keeper"\n    // highlight-end\n)\n\ntype Keeper struct\n    ...\n\n    // highlight-start\n    WasmKeeper     *wasmkeeper.Keeper\n\tContractKeeper wasmtypes.ContractOpsKeeper\n\tStakingKeeper  *stakingkeeper.Keeper\n    // highlight-end\n}\n\nfunc NewKeeper(\n    ...\n    // highlight-start\n    wasmKeeper *wasmkeeper.Keeper, // since wasm may not be created yet.\n\tstakingKeeper *stakingkeeper.Keeper,\n    // highlight-end\n    authority string,\n) Keeper {\n    ...\n\n    k := Keeper{\n        ...\n\n        // highlight-start\n        WasmKeeper:     wasmKeeper,\n        ContractKeeper: wasmkeeper.NewDefaultPermissionKeeper(wasmKeeper),\n        StakingKeeper:  stakingKeeper,\n        // highlight-end\n\n        authority: authority,\n\t}\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"fix-keeper_test",children:"'Fix' keeper_test"}),"\n",(0,s.jsx)(t.admonition,{title:"Warning",type:"note",children:(0,s.jsx)(t.p,{children:"Testing wasm requires significantly more setup for the test environment. For now, just add a blank reference here."})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",metastring:'title="x/reviews/keeper/keeper_test.go"',children:"func SetupTest(t *testing.T) *testFixture\n    ...\n\n\t// Setup Keeper.\n    // highlight-next-line\n\tf.k = keeper.NewKeeper(encCfg.Codec, runtime.NewKVStoreService(keys[types.StoreKey]), logger, &wasmkeeper.Keeper{}, f.stakingKeeper, f.govModAddr)\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"dependency-inject-v2",children:"Dependency Inject (v2)"}),"\n",(0,s.jsx)(t.p,{children:"Similar to the keeper_test issue, CosmWasm does not have support for Cosmos-SDK v2 depinject. This will be updated in the future. For now, set the keeper to nil and provide Staking reference. You do not need to know what this does. Just resolve the error on the line with a copy paste."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",metastring:'title="x/reviews/depinject.go"',children:"func ProvideModule(in ModuleInputs) ModuleOutputs {\n    ...\n\n    // highlight-next-line\n    k := keeper.NewKeeper(in.Cdc, in.StoreService, log.NewLogger(os.Stderr), nil, &in.StakingKeeper, govAddr)\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fix-appgo-references",children:"Fix app.go references"}),"\n",(0,s.jsx)(t.p,{children:"The main application needs the access to the wasm and staking logic as well. Fix the missing imports and add them in like so."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",metastring:'title="app/app.go"',children:"\tapp.ReviewsKeeper = reviewskeeper.NewKeeper(\n\t\tappCodec,\n\t\truntime.NewKVStoreService(keys[reviewstypes.StoreKey]),\n\t\tlogger,\n        // highlight-start\n\t\t&app.WasmKeeper,\n\t\tapp.StakingKeeper,\n        // highlight-end\n\t\tauthtypes.NewModuleAddress(govtypes.ModuleName).String(),\n\t)\n"})}),"\n",(0,s.jsx)(t.p,{children:"it is now time to use these modules and write the logic to pass data to the contract from the chain."}),"\n",(0,s.jsx)(t.h3,{id:"module-core-logic",children:"Module Core Logic"}),"\n",(0,s.jsxs)(t.p,{children:["The CosmWasm contract requires data in a specific format. You can review this back in the ",(0,s.jsx)(t.code,{children:"src/state.rs"})," file. Since the chain only is passing validator data over, we need to convert this into Go code manually. The ",(0,s.jsx)(t.code,{children:"Validator"})," struct is created to match the contract. The CosmWasm contract expects a JSON formatted input. This input is put together with the ",(0,s.jsx)(t.code,{children:"Formatted"})," method on a list of validators. The chain could have just 1 validator, or several hundred. This method will convert them all into the correct format for the list we are to pass."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",metastring:'title="x/reviews/module.go"',children:'// Add this below AppModule struct {\n\n// highlight-start\ntype Validator struct {\n\tAddress string `json:"address"`\n\tMoniker string `json:"moniker"`\n}\n\ntype Validators []Validator\n\nfunc (vs Validators) Formatted() string {\n\toutput := ""\n\tfor _, val := range vs {\n\t\toutput += fmt.Sprintf(`{"address":"%s","moniker":"%s"},`, val.Address, val.Moniker)\n\t}\n\n    // remove the trailing comma from the last output append.\n\treturn output[:len(output)-1]\n}\n// highlight-end\n'})}),"\n",(0,s.jsx)(t.h3,{id:"implement-the-endblocker",children:"Implement the EndBlocker"}),"\n",(0,s.jsxs)(t.p,{children:["To pass data we must first get the data. Using the ",(0,s.jsx)(t.code,{children:"GetAllValidators"})," method from the staking module, all validators are now accessible for the logic to use. Loop through these validators and only add the ones that are bonded (active) to the list of validators. If they are bonded, they are added to the list."]}),"\n",(0,s.jsxs)(t.p,{children:["Once all validators have been processed the ",(0,s.jsx)(t.code,{children:"endBlockSudoMsg"})," gets them into the JSON format required. The format is out of scope but a high level overview"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"SetValidators"})," in the code becomes ",(0,s.jsx)(t.code,{children:"set_validators"}),", called ",(0,s.jsx)(t.a,{href:"https://simple.wikipedia.org/wiki/Snake_case",children:"snake case"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"SetValidators"})," type in rust has the element called ",(0,s.jsx)(t.code,{children:"validators"})," which is an array of ",(0,s.jsx)(t.code,{children:"Validator"})," objects. This is the ",(0,s.jsx)(t.code,{children:"validators"})," array in the JSON."]}),"\n",(0,s.jsxs)(t.li,{children:["Each ",(0,s.jsx)(t.code,{children:"Validator"})," object has an ",(0,s.jsx)(t.code,{children:"address"})," and ",(0,s.jsx)(t.code,{children:"moniker"})," field. These are the ",(0,s.jsx)(t.code,{children:"address"})," and ",(0,s.jsx)(t.code,{children:"moniker"})," fields in the JSON, called from the Formatted() method."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",metastring:'title="x/reviews/module.go"',children:'// Paste this anywhere within the file\n// highlight-start\nfunc (am AppModule) EndBlock(ctx context.Context) error {\n\tstakingVals, err := am.keeper.StakingKeeper.GetAllValidators(ctx)\n\tif err != nil {\n\t\treturn err\n\t}\n\n\tvalidators := Validators{}\n\tfor _, val := range stakingVals {\n        // if it is not active, skip it\n\t\tif !val.IsBonded() {\n\t\t\tcontinue\n\t\t}\n\n\t\tvalidators = append(validators, Validator{\n\t\t\tAddress: val.OperatorAddress,\n\t\t\tMoniker: val.Description.Moniker,\n\t\t})\n\t}\n\n    // The first contract created from acc0\n    addr := "roll14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sjczpjh"\n\tcontract := sdk.MustAccAddressFromBech32(addr)\n\n    // SudoMsg format for the contract input.\n    // example: {"set_validators":{"validators":[{"address":"ADDRESS","moniker": "NAME"}]}}\n    endBlockSudoMsg := fmt.Sprintf(`{"set_validators":{"validators":[%s]}}`, validators.Formatted())\n\tfmt.Println("EndBlockSudoMessage Format:", endBlockSudoMsg)\n\n    // When the network first starts up there is no contract to execute against (until uploaded)\n    // This returns an error but is expected behavior initially.\n    // You can not return errors in the EndBlocker as it is not a transaction. It will halt the network.\n    //\n    // This is why the error is only printed to the logs and not returned.\n    //\n    // A more proper solution would set the contract via a SDK message after it is uploaded.\n    // This is out of scope for this tutorial, but a future challenge for you.\n\tres, err := am.keeper.ContractKeeper.Sudo(sdk.UnwrapSDKContext(ctx), contract, []byte(endBlockSudoMsg))\n    if err != nil {\n        fmt.Println("EndBlockSudoResult", res)\n        fmt.Println("EndBlockSudoError", err)\n    }\n\n\treturn nil\n}\n// highlight-end\n'})}),"\n",(0,s.jsx)(t.h2,{id:"test-deployment",children:"Test Deployment"}),"\n",(0,s.jsx)(t.h3,{id:"start-testnet",children:"Start Testnet"}),"\n",(0,s.jsx)(t.p,{children:"Begin the CosmWasm testnet with the custom EndBlocker logic. You will see errors every block. This is expected and is explained in the EndBlock code why this is the case."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"make sh-testnet\n"})}),"\n",(0,s.jsx)(t.h3,{id:"upload-contract",children:"Upload Contract"}),"\n",(0,s.jsxs)(t.p,{children:["Make sure you are in the ",(0,s.jsx)(t.code,{children:"rollchain"})," directory to begin interacting and uploading the contract to the chain."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"CONTRACT_SOURCE=./validator-reviews-contract/artifacts/validator_reviews_contract.wasm\nrolld tx wasm store $CONTRACT_SOURCE --from=acc0 --gas=auto --gas-adjustment=2.0 --yes\n# rolld q wasm list-code\n"})}),"\n",(0,s.jsx)(t.h3,{id:"instantiate-our-contract",children:"Instantiate our Contract"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"rolld tx wasm instantiate 1 '{}' --no-admin --from=acc0 --label=\"reviews\" \\\n    --gas=auto --gas-adjustment=2.0 --yes\n\nrolld q wasm list-contracts-by-creator roll1hj5fveer5cjtn4wd6wstzugjfdxzl0xpg2te87\n\nREVIEWS_CONTRACT=roll14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sjczpjh\n"})}),"\n",(0,s.jsx)(t.h3,{id:"verify-data",children:"Verify data"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"rolld q wasm state smart $REVIEWS_CONTRACT '{\"validators\":{}}'\n"})}),"\n",(0,s.jsx)(t.h2,{id:"write-a-review",children:"Write a review"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'MESSAGE=\'{"write_review":{"val_addr":"rollvaloper1hj5fveer5cjtn4wd6wstzugjfdxzl0xpmhf3p6","review":"hi reviewing."}}\'\nrolld tx wasm execute $REVIEWS_CONTRACT "$MESSAGE" --from=acc0 \\\n    --gas=auto --gas-adjustment=2.0 --yes\n'})}),"\n",(0,s.jsx)(t.h3,{id:"verify-the-review",children:"Verify the review"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'rolld q wasm state smart $REVIEWS_CONTRACT \'{"reviews":{"address":"rollvaloper1hj5fveer5cjtn4wd6wstzugjfdxzl0xpmhf3p6"}}\'\n'})}),"\n",(0,s.jsx)(t.h3,{id:"write-a-review-for-a-non-validator",children:"Write a review for a non-validator"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'MESSAGE=\'{"write_review":{"val_addr":"NotAValidator","review":"hi this is a review"}}\'\n\nrolld tx wasm execute $REVIEWS_CONTRACT "$MESSAGE" --from=acc0 \\\n    --gas=auto --gas-adjustment=2.0 --yes\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var s=n(7294);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);