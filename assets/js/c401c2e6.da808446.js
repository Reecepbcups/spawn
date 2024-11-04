"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[167],{8541:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=o(5893),r=o(1151);const s={title:"Debugging",sidebar_label:"Debugging",sidebar_position:3,slug:"/install/debugging"},t=void 0,c={id:"setup/debugging",title:"Debugging",description:"This section will contain common setup problems and how to resolve them.",source:"@site/versioned_docs/version-v0.50.x/01-setup/03-debugging.md",sourceDirName:"01-setup",slug:"/install/debugging",permalink:"/spawn/v0.50/install/debugging",draft:!1,unlisted:!1,tags:[],version:"v0.50.x",sidebarPosition:3,frontMatter:{title:"Debugging",sidebar_label:"Debugging",sidebar_position:3,slug:"/install/debugging"},sidebar:"defaultSidebar",previous:{title:"Install Spawn",permalink:"/spawn/v0.50/install/install-spawn"},next:{title:"Build a Name Service",permalink:"/spawn/v0.50/build/name-service"}},d={},l=[{value:"Golang",id:"golang",level:2},{value:"/bin/sh: 1: go: not found",id:"binsh-1-go-not-found",level:3},{value:"build constraints excluded all Go files in /usr/local/go/ ...",id:"build-constraints-excluded-all-go-files-in-usrlocalgo-",level:3},{value:"make: heighliner: Permission denied",id:"make-heighliner-permission-denied",level:3},{value:"Windows / WSL",id:"windows--wsl",level:2},{value:"make: /mnt/c/Program: No such file or directory",id:"make-mntcprogram-no-such-file-or-directory",level:3},{value:"Docker",id:"docker",level:2},{value:"Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?.",id:"cannot-connect-to-the-docker-daemon-at-unixvarrundockersock-is-the-docker-daemon-running",level:3},{value:"docker: Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock",id:"docker-got-permission-denied-while-trying-to-connect-to-the-docker-daemon-socket-at-unixvarrundockersock",level:3},{value:"Generation",id:"generation",level:2},{value:"remote: Repository not found. fatal: reposity not found",id:"remote-repository-not-found-fatal-reposity-not-found",level:3},{value:"Application",id:"application",level:2},{value:"Running the binary gives me <code>panic: reflect: New(nil)</code>",id:"running-the-binary-gives-me-panic-reflect-newnil",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This section will contain common setup problems and how to resolve them."}),"\n",(0,i.jsx)(n.h2,{id:"golang",children:"Golang"}),"\n",(0,i.jsx)(n.h3,{id:"binsh-1-go-not-found",children:"/bin/sh: 1: go: not found"}),"\n",(0,i.jsxs)(n.p,{children:["Just add the following lines to ",(0,i.jsx)(n.code,{children:"~/.bashrc"})," (or ",(0,i.jsx)(n.code,{children:"~/.zshrc"})," if MacOs) and this will persist. ",(0,i.jsx)(n.a,{href:"https://stackoverflow.com/a/21012349",children:"Source"}),"\nIf you run the above in your terminal, it will apply to the current session but not on new terminal sessions."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"export GOPATH=$HOME/go\nexport PATH=$PATH:$GOROOT/bin:$GOPATH/bin\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then apply it with ",(0,i.jsx)(n.code,{children:"source ~/.bashrc"})," or ",(0,i.jsx)(n.code,{children:"source ~/.zshrc"})]}),"\n",(0,i.jsx)(n.h3,{id:"build-constraints-excluded-all-go-files-in-usrlocalgo-",children:"build constraints excluded all Go files in /usr/local/go/ ..."}),"\n",(0,i.jsxs)(n.p,{children:["Your Go install is not properly setup. Follow the install instructions above or install directly from source with ",(0,i.jsx)(n.a,{href:"https://go.dev/doc/install",children:"go.dev"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"make-heighliner-permission-denied",children:"make: heighliner: Permission denied"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"make get-heighliner\nchmod +x $(which heighliner)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If the above does not work, your user or directory permissions may not be setup. Or your ",(0,i.jsx)(n.code,{children:"ls -la $(go env GOPATH)/bin"})," path is to a bad."]}),"\n",(0,i.jsxs)(n.p,{children:["If using WSL, try ",(0,i.jsx)(n.a,{href:"https://superuser.com/questions/1352207/windows-wsl-ubuntu-sees-wrong-permissions-on-files-in-mounted-disk",children:"https://superuser.com/questions/1352207/windows-wsl-ubuntu-sees-wrong-permissions-on-files-in-mounted-disk"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"windows--wsl",children:"Windows / WSL"}),"\n",(0,i.jsx)(n.h3,{id:"make-mntcprogram-no-such-file-or-directory",children:"make: /mnt/c/Program: No such file or directory"}),"\n",(0,i.jsxs)(n.p,{children:["Delete your GOMODCACHE directory: ",(0,i.jsx)(n.code,{children:"go clean -modcache"})," or run the direct command ",(0,i.jsx)(n.code,{children:"rm -rf $(go env GOMODCACHE)"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"docker",children:"Docker"}),"\n",(0,i.jsx)(n.h3,{id:"cannot-connect-to-the-docker-daemon-at-unixvarrundockersock-is-the-docker-daemon-running",children:"Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?."}),"\n",(0,i.jsxs)(n.p,{children:["Start the docker daemon. Run ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/engine/",children:"docker engine"})," or ",(0,i.jsx)(n.code,{children:"systemctl start docker && systemctl enable docker"})," for Linux."]}),"\n",(0,i.jsx)(n.h3,{id:"docker-got-permission-denied-while-trying-to-connect-to-the-docker-daemon-socket-at-unixvarrundockersock",children:"docker: Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock"}),"\n",(0,i.jsx)(n.p,{children:"You don't have permissions to interact with the Docker daemon."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Install properly with ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/get-started/get-docker/",children:"https://docs.docker.com/get-started/get-docker/"})]}),"\n"]}),"\n",(0,i.jsx)(n.li,{}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo groupadd docker\nsudo usermod -aG docker $USER\nnewgrp docker\n\nreboot # if you still get the error\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Technically you can also ",(0,i.jsx)(n.code,{children:"sudo chmod 666 /var/run/docker.sock"})," but this is NOT advised. --\x3e"]}),"\n",(0,i.jsx)(n.h2,{id:"generation",children:"Generation"}),"\n",(0,i.jsx)(n.h3,{id:"remote-repository-not-found-fatal-reposity-not-found",children:"remote: Repository not found. fatal: reposity not found"}),"\n",(0,i.jsxs)(n.p,{children:["This error is due to not having properly ",(0,i.jsx)(n.code,{children:"make proto-gen"}),"ed the project. View the ",(0,i.jsx)(n.a,{href:"#running-the-binary-gives-me-panic-reflect-newnil",children:"Application"})," section for the solution."]}),"\n",(0,i.jsx)(n.h2,{id:"application",children:"Application"}),"\n",(0,i.jsxs)(n.h3,{id:"running-the-binary-gives-me-panic-reflect-newnil",children:["Running the binary gives me ",(0,i.jsx)(n.code,{children:"panic: reflect: New(nil)"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"make proto-gen"})," command was either not run, or is causing issues. This could be due to your users permissions or the filesystem. By default, the protoc docker image uses your current users id and group. Try switching as a super user (i.e. ",(0,i.jsx)(n.code,{children:"su -"}),") or fixing your permissions. A very ugly hack is to run ",(0,i.jsx)(n.code,{children:"chmod a+rwx -R ./rollchain"})," where ",(0,i.jsx)(n.code,{children:"./rollchain"})," is the project you generated. This will cause git to change all files, but it does fix it. Unsure of the long term side effects that may come up from this."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>t});var i=o(7294);const r={},s=i.createContext(r);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);