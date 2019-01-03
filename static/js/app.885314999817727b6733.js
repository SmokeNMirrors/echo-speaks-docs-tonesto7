webpackJsonp([2],{101:function(e,t){e.exports={appName:"Echo Speaks",headerNavigation:[{name:"Home",path:"/docs",icon:"home"},{name:"FAQ",path:"/faq",icon:"question-circle"},{name:"Donate",path:"/donate",icon:["fab","paypal"]}],landingPage:"/docs",topics:["home"],rootDocPath:"/echo-speaks-docs/",rootDocUrl:"https://tonesto7.github.io/echo-speaks-docs",pages:[{route:"/docs",path:"docs",name:"Documentation",description:"this is the info page",icon:"address-book",children:[{route:"/information",path:"information",name:"Information",description:"about Echo Speaks",topics:["about","information"],icon:"info-circle",markdown:"/static/markdown/Information.md"},{route:"/installation",path:"installation",name:"Get Started",description:"installation and configuration instructions",icon:"play",topics:["started","instructions","setup","configuration"],children:[{route:"/appRequirements",path:"appRequirements",name:"Requirements",description:"what's needed to make this all work!",icon:"star",topics:["requirements"],markdown:"/static/markdown/getstarted/Requirements.md"},{route:"/appInstall",path:"appInstall",name:"Install Methods",description:"select an install method",icon:"plus-square",topics:["process"],children:[{route:"/autoInstall",path:"autoInstall",name:"Community Installer",description:"Automate the install",icon:"magic",topics:["install","auto"],markdown:"/static/markdown/getstarted/code_install/Auto_Install.md"},{route:"/githubInstall",path:"githubInstall",name:"IDE (GitHub) Install",description:"use IDE integration",icon:["fab","github"],topics:["install","github"],markdown:"/static/markdown/getstarted/code_install/GithubIDE_Install.md"},{route:"/manualInstall",path:"manualInstall",name:"Manual Install",description:"install the code manually",icon:"sort-numeric-down",topics:["install","manual"],markdown:"/static/markdown/getstarted/code_install/Manual_Install.md"}]},{route:"/configuration",path:"configuration",name:"Configure Application and Server",description:"configure the smartapp and server installation",icon:"wrench",topics:["configuration","setup"],children:[{route:"/appConfig",path:"appConfig",name:"SmartApp Configuration",description:"SmartApp setup",icon:"wrench",topics:["smartapp","setup"],markdown:"/static/markdown/getstarted/configuration/AppConfig.md"},{route:"/serverConfig",path:"serverConfig",name:"Server Configuration",description:"Heroku server setup",icon:"wrench",topics:["server","heroku","setup"],markdown:"/static/markdown/getstarted/configuration/ServerConfig.md"}]}]},{route:"/devices",path:"devices",name:"Device Support",description:"models supported and their attributes, commands.",topics:["attributes","commands","devices"],icon:"thumbs-up",children:[{route:"/devicesSupported",path:"devicesSupported",name:"Supported Devices",description:"Confirm devices supported",icon:"thumbs-up",topics:["process"],markdown:"/static/markdown/devicesupport/SupportedDevices.md"},{route:"/deviceAttributes",path:"deviceAttributes",name:"Device Attributes",description:"All of the device attributes that are available",icon:"project-diagram",topics:["attributes"],markdown:"/static/markdown/devicesupport/DeviceAttributes.md"},{route:"/deviceCommands",path:"deviceCommands",name:"Device Commands",description:"All of the device commands that are available",icon:"project-diagram",topics:["commands"],markdown:"/static/markdown/devicesupport/DeviceCommands.md"}]},{route:"/troubleshoot",path:"troubleshoot",name:"Troubleshooting",description:"help with common issues.",topics:["issues","trouble","errors"],icon:"stethoscope",children:[{route:"/commonErrors",path:"commonErrors",name:"Common Errors",description:"solutions to common issues",icon:"exclamation-circle",topics:["errors","issues"],markdown:"/static/markdown/troubleshooting/CommonErrors.md"},{route:"/removeServer",path:"removeServer",name:"Remove Server",description:"heroku server removal",icon:"trash-alt",topics:["server","remove","delete"],markdown:"/static/markdown/troubleshooting/RemoveServer.md"},{route:"/redeployServer",path:"redeployServer",name:"Redeploy Server",description:"redeploy heroku server",icon:"wind",topics:["server","deploy"],markdown:"/static/markdown/troubleshooting/RedeployServer.md"}]},{route:"/faq",path:"faq",name:"FAQs",description:"frequently asked questions are covered here",topics:[],icon:"question-circle",markdown:"/static/markdown/FAQ.md"},{route:"/donate",path:"donate",name:"Donate",description:"want to donate for all of the work involved",topics:[],icon:["fab","paypal"],markdown:"/static/markdown/Donations.md"},{route:"/whatsNew",path:"whatsNew",name:"Whats new?",description:"recent announcements, news, latest and greatest",icon:"bullhorn",topics:["news"],markdown:"/static/markdown/whatsnew/Current.md"}]}]}},121:function(e,t,n){"use strict";var a=n(51),s=n(122),o=n(28),r=o(a.a,s.a,!1,null,null,null);t.a=r.exports},122:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("div",{staticClass:"header__brand"},[n("svg",{ref:"nav__open",staticClass:"header__hamburger",attrs:{tabindex:"0",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.openNavigation(t):null},click:e.openNavigation}},[n("path",{attrs:{d:"M424 394H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16zM424 265H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16zM424 135H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16z"}})]),e._v(" "),n("span",{staticClass:"header__name"},[e._v(e._s(e.name)+" "),n("b",[e._v("Documentation")])])]),e._v(" "),e.isVisible||e.isDesktop?n("nav",{staticClass:"nav"},[n("svg",{ref:"nav__close",staticClass:"nav__icon nav__icon--close",attrs:{tabindex:"0",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.closeNavigation(t):null},click:e.closeNavigation}},[n("path",{attrs:{d:"M77.6 21.1l-28 28.1-28.1-28.1-1.9 1.9 28 28.1-28 28.1 1.9 1.9L49.6 53l28 28.1 2-1.9-28.1-28.1L79.6 23z"}})]),e._v(" "),n("ul",{staticClass:"nav__list"},e._l(e.list,function(t){return n("router-link",{key:t.path,staticClass:"nav__item",attrs:{to:t.path,exact:""}},[t.icon?n("font-awesome-icon",{attrs:{icon:t.icon}}):e._e()],1)}),1)]):e._e()])},s=[],o={render:a,staticRenderFns:s};t.a=o},123:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{on:{toggleMenu:e.toggleMenu}}),e._v(" "),n("main",[n("nav",{staticClass:"main__nav",class:{active:e.isNavOpen}},[n("div",{staticClass:"nav__search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchKeywords,expression:"searchKeywords"}],staticClass:"nav__search-input",attrs:{placeholder:"Type to search"},domProps:{value:e.searchKeywords},on:{keyup:e.search,input:function(t){t.target.composing||(e.searchKeywords=t.target.value)}}}),e._v(" "),e.searchResultsVisible?n("svg",{staticClass:"nav__search-icon",attrs:{tabindex:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"},on:{click:e.reset,keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.reset(t):null}}},[n("path",{attrs:{d:"M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z"}}),n("path",{attrs:{d:"M35.707 16.293a.999.999 0 0 0-1.414 0L26 24.586l-8.293-8.293a.999.999 0 1 0-1.414 1.414L24.586 26l-8.293 8.293a.999.999 0 1 0 1.414 1.414L26 27.414l8.293 8.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L27.414 26l8.293-8.293a.999.999 0 0 0 0-1.414z"}})]):e._e()]),e._v(" "),n("vue-tree-navigation",{attrs:{items:e.tocItems,defaultOpenLevel:4}})],1),e._v(" "),e.searchResultsVisible?n("div",{staticClass:"container"},[e.searchResults.length?n("h1",{staticClass:"results__heading"},[e._v(e._s(e.searchResults.length)+' results matching "'+e._s(e.searchKeywords)+'"')]):n("h1",{staticClass:"results__heading"},[e._v('No results matching "'+e._s(e.searchKeywords)+'"')]),e._v(" "),n("ul",{staticClass:"results__search"},e._l(e.searchResults,function(t,a){return n("li",{key:a,staticClass:"result"},[n("header",{staticClass:"result__header"},[n("router-link",{attrs:{to:t.path}},[n("h2",{staticClass:"result__title"},[e._v(e._s(t.name))])]),e._v(" "),e._l(t.topics,function(t,a){return n("span",{key:a,staticClass:"tag",attrs:{tabindex:"0"},on:{keyup:function(n){if(!("button"in n)&&e._k(n.keyCode,"enter",13,n.key,"Enter"))return null;e.searchTopic(t)},click:function(n){e.searchTopic(t)}}},[e._v(e._s(t))])})],2),e._v(" "),n("p",[e._v(e._s(e._f("truncate")(t.text,300,"...")))])])}),0)]):n("router-view")],1)],1)},s=[],o={render:a,staticRenderFns:s};t.a=o},124:function(e,t,n){"use strict";var a=n(31),s=n(125),o=n(16);a.a.use(s.a),t.a=new s.a({routes:o.a.getRoutingConfig()})},16:function(e,t,n){"use strict";function a(e,t){e.path=e.route,e.breadCrumb=t?JSON.parse(c()(t.breadCrumb)):[];var n=null!=t?t.path+e.route:"/";e.breadCrumb.push({name:e.name,path:n}),e.component=v,t&&(e.path=p.a.join(t.path+e.route));var s=[];if(e.children)for(var o in e.children){var r=e.children[o];s.push({name:r.name,description:r.description,path:p.a.join(e.path+r.route),icon:r.icon,bgColor:r.bgColor,owner:r.owner,topics:r.topics}),a(r,e)}e.meta={tiles:s.length>0?s:null,name:e.name,description:e.description,markdown:e.markdown,icon:e.icon,bgColor:e.bgColor,owner:e.owner,topics:e.topics,breadCrumb:e.breadCrumb},_[e.path]=e.meta}function s(e){var t=JSON.parse(c()(e.pages));for(var n in t){a(t[n],null)}return t.push({path:"/",redirect:e.landingPage}),t}var o=n(74),r=n.n(o),i=n(99),c=n.n(i),u=n(101),l=n.n(u),d=n(102),p=n.n(d),h=n(57),m=n.n(h),v=function(){return n.e(0).then(n.bind(null,132))},_={};t.a={getMetaById:function(e){return _[e]},getRoutingConfig:function(){return s(this.getBaseConfig())},getBaseConfig:function(){return l.a},getPages:function(){return this.getBaseConfig().pages},getStatus:function(){return new r.a(function(e,t){var n=window.location.pathname,a=n.substring(0,n.length-1)+"/static/content.json";m.a.get(a).then(function(t){e(t.data)}).catch(function(e){return t(e)})})}}},32:function(e,t,n){"use strict";var a=n(53),s=n.n(a),o=n(16),r=n(121);t.a={name:"app",data:function(){return{baseUrl:o.a.getBaseConfig().rootDocUrl,isNavOpen:!1,tocItems:o.a.getPages(),content:[],searchResultsVisible:!1,searchResults:null,searchKeywords:null}},components:{Header:r.a},created:function(){var e=this;o.a.getStatus().then(function(t){void 0!==t&&(e.content=t)}).catch(function(e){console.log("error",e)})},methods:{toggleMenu:function(){this.isNavOpen=!this.isNavOpen},search:function(e){var t=this;if(this.searchKeywords){var n=s()({},this.$route.query,{search:this.searchKeywords});this.$router.push({query:n}),this.searchResultsVisible=!0;this.searchKeywords.indexOf("topic:")>-1?this.searchResults=this.content.filter(function(e){for(var n=(e.topics||[]).map(function(e){return e.toLowerCase()}),a=!1,s=0;s<n.length;s++)n[s].indexOf(t.searchKeywords.toLowerCase().replace("topic:",""))>-1&&(a=!0);return a}):this.searchResults=this.content.filter(function(e){return(e.text||"").toLowerCase().indexOf(t.searchKeywords.toLowerCase())>-1||(e.name||"").toLowerCase().indexOf(t.searchKeywords.toLowerCase())>-1})}else{var a=this.$route.query;delete a.search,this.$router.push({query:a}),this.reset()}},searchTopic:function(e){var t="topic:"+e,n=s()({},this.$route.query,{search:t});this.searchKeywords=t,this.search(),this.$router.push({query:n})},reset:function(){this.searchResultsVisible=!1,this.searchKeywords="",this.searchResults=[]}},watch:{$route:{immediate:!0,handler:function(e,t){var n=window.location.href;if(n.indexOf("?")>-1){var a=n.substring(n.indexOf("?")+1),s=JSON.parse('{"'+decodeURIComponent(a.replace(/&/g,'","').replace(/=/g,'": "'))+'"}');s&&s.search&&(this.searchKeywords=s.search,this.search())}else this.searchKeywords="",this.searchResultsVisible=!1}}}}},51:function(e,t,n){"use strict";var a=n(16);t.a={name:"header-component",data:function(){return{isVisible:!1,isDesktop:!1,name:a.a.getBaseConfig().appName,list:a.a.getBaseConfig().headerNavigation}},created:function(){window.innerWidth>=780&&(this.isDesktop=!0),window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(e){e.currentTarget.innerWidth>=780?this.isDesktop=!0:this.isDesktop=!1},openNavigation:function(){this.$emit("toggleMenu")},closeNavigation:function(e){this.$emit("toggleMenu")}}}},58:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(31),s=n(61),o=n(124),r=n(126),i=n.n(r),c=n(52),u=n(127),l=n(128),d=n(129);c.c.add(d.n,d._36,d._17,d._3,d._16,d._41,d.P,d.K,d.L,d._21,d._0,d._23,d._40,d.F,d.E,d._34,d._31,d.S,d.D,d._20,d._5,d.x,d.Z,d._12,d.l,d._38,d._9,d.e,d.s,d.T,d._39,d.W,d.I,d.u,d._24,d.h,d.J,d._30,d.y,d.a,d.g,d.B,d.p,d.A,d._18,d.U,d._44,d.v,d._8,d.G,d.Y,d._33,d._32,d._10,d._1,d.i,d.X,d._19,d._29,d.z,d._11,d._22,d.r,d.M,d._15,d._4,d.j,d._37,d.f,d.m,d.w,d.o,d.R,d.k,d.N,d.b,d.Q,d._13,d._28,d._7,d._43,d.t,d.q,d.O,d._2,d._25,d.H,d.C,d.c,d.d,d._26,d._6,d._27,l.a,l.b,d._14,d._35,d._42,d.V);var p=function(e,t,n){n=n||"...";var a=document.createElement("div");a.innerHTML=e;var s=a.textContent;return s.length>t?s.slice(0,t)+n:s};a.a.filter("truncate",p),a.a.component("font-awesome-icon",u.a),a.a.config.productionTip=!1,a.a.use(i.a),new a.a({el:"#app",router:o.a,render:function(e){return e(s.a)}})},61:function(e,t,n){"use strict";function a(e){n(62)}var s=n(32),o=n(123),r=n(28),i=a,c=r(s.a,o.a,!1,i,null,null);t.a=c.exports},62:function(e,t){}},[58]);
//# sourceMappingURL=app.885314999817727b6733.js.map