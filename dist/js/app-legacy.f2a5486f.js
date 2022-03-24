(function(){"use strict";var e={7614:function(e,n,t){t(6992),t(8674),t(9601),t(7727);var r=t(8935),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("nav",[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),t("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),t("router-view")],1)},i=[],a={name:"App",created:function(){this.$coreInit({name:"SuperCore"}),this.$store.dispatch("core/getNodes")}},u=a,c=t(1001),s=(0,c.Z)(u,o,i,!1,null,null,null),d=s.exports,l=t(563);(0,l.z)("".concat("/agent/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),alert("This app has been updated, please, close and reopen.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t(1539),t(8783),t(3948);var f=t(2809),p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("ToolbarView"),t("NodeEdition"),t("VisualisationView")],1)},v=[],h={name:"HomeView",components:{VisualisationView:function(){return t.e(950).then(t.bind(t,7950))},NodeEdition:function(){return t.e(446).then(t.bind(t,5446))},ToolbarView:function(){return t.e(8).then(t.bind(t,1008))}}},g=h,m=(0,c.Z)(g,p,v,!1,null,null,null),w=m.exports;r["default"].use(f.Z);var b,y=[{path:"/",name:"home",component:w},{path:"/about",name:"about",component:function(){return t.e(443).then(t.bind(t,5830))}}],k=new f.Z({mode:"history",base:"/agent/",routes:y}),x=k,N=t(4665),Z=t(2032),_=t(6198),C=(t(4747),t(4553),t(8975),"nodedb"),R=1,j={getDb:function(){return(0,_.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){if(b)return e(b);console.log("OPENING DB",b);var t=window.indexedDB.open(C,R);t.onerror=function(e){console.log("Error opening db",e),n("Error")},t.onsuccess=function(n){b=n.target.result,e(b)},t.onupgradeneeded=function(e){console.log("onupgradeneeded");var n=e.target.result;n.createObjectStore("nodes",{keyPath:"id"})}})));case 1:case"end":return e.stop()}}),e)})))()},deleteNode:function(e){var n=this;return(0,_.Z)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.getDb();case 2:return r=t.sent,t.abrupt("return",new Promise((function(n){var t=r.transaction(["nodes"],"readwrite");t.oncomplete=function(){n()};var o=t.objectStore("nodes");o.delete(e.id)})));case 4:case"end":return t.stop()}}),t)})))()},clearStore:function(){var e=this;return(0,_.Z)(regeneratorRuntime.mark((function n(){var t,r,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("clear store"),n.prev=1,n.next=4,e.getDb();case 4:t=n.sent,r=t.transaction(["nodes"],"readwrite"),o=r.objectStore("nodes"),i=o.clear(),i.onsuccess=function(e){console.log(e)},n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](1),alert(n.t0);case 14:return n.next=16,e.getNodes();case 16:case"end":return n.stop()}}),n,null,[[1,11]])})))()},getNodes:function(){var e=this;return(0,_.Z)(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.getDb();case 2:return t=n.sent,n.abrupt("return",new Promise((function(e){var n=t.transaction(["nodes"],"readonly");n.oncomplete=function(){e(o)};var r=n.objectStore("nodes"),o=[];r.openCursor().onsuccess=function(e){var n=e.target.result;n&&(o.push(n.value),n.continue())}})));case 4:case"end":return n.stop()}}),n)})))()},saveNode:function(e){var n=this;return(0,_.Z)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.getDb();case 2:return r=t.sent,t.abrupt("return",new Promise((function(n){var t=r.transaction(["nodes"],"readwrite");t.oncomplete=function(){n()};var o=t.objectStore("nodes");o.put(e)})));case 4:case"end":return t.stop()}}),t)})))()}},O=t(905),E=function(){return{core:void 0,currentNode:void 0,nodeLinks:[],nodeProperties:[],brain:void 0,graph:void 0,db:void 0,history:[],lastCommand:null,nodes:[],links:[]}},D={setCore:function(e,n){console.log(n),e.c=n},pushHistory:function(e,n){e.lastCommand=n,e.history.push(n)},setCurrentNode:function(e,n){console.log(n),e.currentNode=n},setNodeLinks:function(e,n){console.log(n),e.nodeLinks=n},setNodeProperties:function(e,n){console.log(n),e.nodeProperties=n},setBrain:function(e,n){console.log(n),e.brain=n},setGraph:function(e,n){console.log(n),e.graph=n},setDb:function(e,n){console.log(n),e.db=n}},S={newNode:function(e){return(0,_.Z)(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t={"@context":{name:"http://xmlns.com/foaf/0.1/name",knows:"http://xmlns.com/foaf/0.1/knows",id:"@id",type:"@type",homepage:{"@id":"http://xmlns.com/foaf/0.1/homepage","@type":"@id"}},id:"http://local/"+(0,O.Z)(),name:"Manu Sporny",type:"neurone",color:"#00ff00",homepage:"http://manu.sporny.org/",knows:[{id:"_:7053c150-5fea-11e3-a62e-adadc4e3df76",name:"Boby"},{id:"_:9d2bb59d-3baf-42ff-ba5d-9f8eab34ada4",name:"John"}]},e.commit("setCurrentNode",t);case 2:case"end":return n.stop()}}),n)})))()},saveNode:function(e,n){return(0,_.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(n),delete n.__ob__,delete n.__threeObj,t.prev=3,t.next=6,j.saveNode(n);case 6:return t.next=8,e.dispatch("getNodes");case 8:t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](3),alert(t.t0);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})))()},getNodes:function(e){return(0,_.Z)(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,j.getNodes();case 2:t=n.sent,console.log("nodes in db",t),t.forEach((function(n){void 0==n.type&&(n.type="neurone");var t=e.state.nodes.findIndex((function(e){return e.id==n.id}));console.log(n.id,t),-1===t?e.state.nodes.push(n):Object.assign(e.state.nodes[t],n)}));case 5:case"end":return n.stop()}}),n)})))()},saveBrain:function(e){return(0,_.Z)(regeneratorRuntime.mark((function n(){var t,r,o,i,a,u,c,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t=e.state.graph.graphData(),r=t.nodes,o=t.links,console.log(r,o),i=[],a=(0,Z.Z)(r),n.prev=4,a.s();case 6:if((u=a.n()).done){n.next=20;break}return c=u.value,console.log(c),delete c.__ob__,delete c.__threeObj,void 0==c.id&&(c.id=(0,O.Z)()),void 0==c.created&&(c.created=Date.now()),c.updated=Date.now(),i.push(c.id),console.log(c),n.next=18,j.saveNode(c);case 18:n.next=6;break;case 20:n.next=25;break;case 22:n.prev=22,n.t0=n["catch"](4),a.e(n.t0);case 25:return n.prev=25,a.f(),n.finish(25);case 28:return s={id:(0,O.Z)(),nodes:i,type:"brain",color:"#fffff"},n.next=31,j.saveNode(s);case 31:case"end":return n.stop()}}),n,null,[[4,22,25,28]])})))()}},P={namespaced:!0,state:E,actions:S,mutations:D},A=t(977),T=function(){return{doc:null}},V={setDoc:function(e,n){console.log(n),e.doc=n},updateDoc:function(e,n){e.doc=n}},B={newDoc:function(e){return(0,_.Z)(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t=A.init(),e.commit("setDoc",t);case 2:case"end":return n.stop()}}),n)})))()},addItem:function(e,n){console.log(e.state.doc);var t=A.change(e.state.doc,(function(e){e.items||(e.items=[]),e.items.push({text:n,done:!1})}));e.commit("updateDoc",t)}},L={namespaced:!0,state:T,actions:B,mutations:V};r["default"].use(N.ZP);var z=new N.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{core:P,automerge:L}}),I=t(2751),$=t(6133),F=t(9418),M=t(9161),G={"@context":{as:"https://www.w3.org/ns/activitystreams#",ve:"https://scenaristeur.github.io/verse#",id:"@id",type:"@type",name:"ve:name",age:"ve:age",url:"ve:url",privacy:"ve:privacy",properties:"ve:properties",links:"ve:links",synapses:"ve:synapses",created:"ve:created",updated:"ve:updated",synchronized:"ve:synchronized",previous:"ve:previous",next:"ve:next"},id:null,name:"",age:0,url:"",privacy:"private",type:null,properties:[],links:[],synapses:[],created:null,updated:null,synchronized:null,previous:null,next:null},H=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,$.Z)(this,e),Object.assign(this,G),this.id=(0,O.Z)(),this.type="base",this.created=Date.now(),Object.assign(this,n)}return(0,I.Z)(e,[{key:"debug",value:function(){console.log(this)}}]),e}(),q=function(e){(0,F.Z)(t,e);var n=(0,M.Z)(t);function t(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,$.Z)(this,t),e=n.call(this,r),void 0==r.type&&(e.type="core"),e}return(0,I.Z)(t)}(H),J=(t(7042),t(4916),t(3123),t(3210),t(6755),t(7852),t(285),t(1637),{install:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.store;console.log(t),e.prototype.$coreInit=(0,_.Z)(regeneratorRuntime.mark((function e(){var n,r,o=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=o.length>0&&void 0!==o[0]?o[0]:{},console.log(n),r=new q(n),t.commit("core/setCore",r);case 4:case"end":return e.stop()}}),e)})))}});"undefined"!==typeof window&&window.Vue&&window.Vue.use(J);var K=J,U=(t(189),t(8309),t(5438),t(956)),X=t(3971),Q=new Set,W=null,Y={install:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.store;function r(e){var n=document.createElement("div");return n.textContent=e.name,n.style.color=e.color||"#ffffff",n.className="node-label",new X.j(n)}function o(e){return i.apply(this,arguments)}function i(){return i=(0,_.Z)(regeneratorRuntime.mark((function e(n){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=160,o=1+r/Math.hypot(n.x,n.y,n.z),t.state.core.graph.cameraPosition({x:n.x*o,y:n.y*o,z:n.z*o},n,3e3),t.commit("core/setCurrentNode",n);case 4:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}console.log(t),e.prototype.$graphInit=function(){var e=(0,_.Z)(regeneratorRuntime.mark((function e(n){var i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log(n),i={nodes:[],links:[]},a=(0,U.Z)({extraRenderers:[new X.M]})(n.domElement).graphData(i),a.nodeLabel("name").nodeColor((function(e){return Q.has(e)?e===W?"rgb(255,0,0,1)":"rgba(255,160,0,0.8)":e.color})).onNodeClick((function(e){return o(e)})).nodeThreeObjectExtend(!0).nodeThreeObject((function(e){return r(e)})),console.log(a),t.commit("core/setGraph",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(Y);var ee=Y,ne=t(8262),te=t(3266);t(44);r["default"].use(K,{store:z}),r["default"].use(ee,{store:z}),r["default"].use(ne.XG7),r["default"].use(te.A7),r["default"].config.productionTip=!1,new r["default"]({router:x,store:z,render:function(e){return e(d)}}).$mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],i=e[d][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(d--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+(443===e?"about":e)+"-legacy."+{8:"bb21dbec",443:"3d59b4d7",446:"e4155638",847:"0fcb3432",950:"07359ca3"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+".9af57d6c.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="agent:";t.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var l=s[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==n+i){u=l;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=r),e[r]=[o];var f=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/agent/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)t();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var a=t.miniCssF(r),u=t.p+a;if(n(a,u))return o();e(r,u,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={950:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(n),u=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],u=r[1],c=r[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var d=c(t)}for(n&&n(r);s<a.length;s++)i=a[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(d)},r=self["webpackChunkagent"]=self["webpackChunkagent"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(7614)}));r=t.O(r)})();
//# sourceMappingURL=app-legacy.f2a5486f.js.map