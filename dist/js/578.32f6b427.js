(self["webpackChunkagent"]=self["webpackChunkagent"]||[]).push([[578],{2578:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return g}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("vue-command",{ref:"term-std",staticClass:"scroll",attrs:{id:"term-std","autocompletion-resolver":t.autocompletionResolver,"built-in":t.builtIn,commands:t.commands,cursor:t.cursor,history:t.history,"help-timeout":1250,prompt:t.prompt,title:"user@local",stdin:t.stdin,"show-help":""},on:{"update:cursor":function(e){t.cursor=e},"update:history":function(e){t.history=e},"update:stdin":function(e){t.stdin=e}}}),n("b-button",{on:{click:t.close}},[t._v("X")])],1)},o=[],i=n(4030),s=n.n(i),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.environment.isExecuting?n("div",[n("textarea",{ref:"nano",attrs:{rows:"15"},on:{keydown:function(e){return(e.type.indexOf("key")||88===e.keyCode)&&e.ctrlKey?t.terminate.apply(null,arguments):null}}},[t._v("This is a Nano text editor emulator! Press Ctrl + x to leave.")])]):t._e()},a=[],u={name:"NanoEditor",inject:["setIsFullscreen","terminate"],created(){this.setIsFullscreen(!0)},mounted(){this.$refs.nano.focus()}},l=u,h=n(1001),d=(0,h.Z)(l,c,a,!1,null,"1a549d19",null),f=d.exports;const p=":#/";var m={name:"TerminalView",components:{VueCommand:s()},data:()=>({autocompletionResolver:()=>{},builtIn:void 0,commands:{cd:void 0,clear:void 0,echo:t=>(0,i.createStdout)(JSON.stringify(t,null,2)),help:()=>(0,i.createStdout)("Available programms:<br><br>\n        &nbsp;ls nodes<br>\n        &nbsp;cd [dir]<br>\n        &nbsp;clear<br>\n        &nbsp;echo<br>\n        &nbsp;hello-world<br>\n        &nbsp;nano<br>\n        &nbsp;pwd<br>\n        "),"hello-world":()=>(0,i.createStdout)("Hello world"),nano:()=>f,pwd:()=>{}},cursor:0,history:[],options:{long:{pokedex:["color"],loading:["amount","timeout"]},short:{pokedex:["h"]}},prompt:p,stdin:""}),methods:{close(){this.$store.commit("terminal/toggleTerminal")}},created(){let t=this.$store.state.core;this.commands.ls=({_:e})=>{let n=t.nodes,r=n.map((t=>t.name));return r.sort(),(0,i.createStdout)("ls "+e[1]+JSON.stringify(r,null,2))},this.commands.mk=({_:t})=>(0,i.createStdout)("make "+t),this.commands.clear=()=>(this.history=[],(0,i.createDummyStdout)()),this.commands.cd=({_:t})=>"home"!==t[1]&&"home/"!==t[1]||this.prompt!==p?"../"!==t[1]&&".."!==t[1]||this.prompt!==`${p}home`?"."===t[1]||"./"===t[1]||"undefined"===typeof t[1]?(0,i.createDummyStdout)():(0,i.createStderr)(`cd: ${t[1]}: No such file or directory`):(this.prompt=p,(0,i.createDummyStdout)()):(this.prompt=`${p}home`,(0,i.createDummyStdout)()),this.commands.pwd=()=>":#/"===this.prompt?(0,i.createStdout)("/"):(0,i.createStdout)("/home"),this.builtIn=(t,e)=>{if("reverse"!==t.trim().split(" ")[0])return void e.commandNotFound(t);t=t.trim();const n=t.split(" ").slice(1).join(" ").replace(/"/g,"");n&&(this.stdin=n.split("").reverse().join(""))},this.autocompletionResolver=()=>{const t=this.cursor;let e=this.cursor,n="";while(" "!==this.stdin[e-1]&&e-1>0)e--,n=`${this.stdin[e]}${n}`;const r=this.stdin.split(" ");if(1===r.length){const e=r[0],o=[],i=[...Object.keys(this.commands),"reverse"].sort();if(i.forEach((t=>{t.startsWith(e)&&o.push(t)})),""!==this.stdin&&o.length>1&&this.history.push({render:t=>{const e=o.length<5?o.length:4,n=o.length<5?1:Math.ceil(o.length/e);let r=0;const i=[];for(let s=0;s<n;s++){const n=[];for(let i=0;i<e;i++)n.push(t("td",o[r])),r++;i.push(t("tr",[n]))}return t("table",{style:{width:"100%"}},[i])}}),1===o.length){const e=this.$watch((()=>this.cursor),(()=>{this.cursor=t+(o[0].length-n.length+0),e()}));this.stdin=o[0]}return}if(""!==this.stdin[t]&&" "!==this.stdin[t]&&"undefined"!==typeof this.stdin[t])return;const o=r[0];if("undefined"!==typeof this.options.long[o]||"undefined"!==typeof this.options.short[o])if("--"!==n.substring(0,2)){if("-"===n.substring(0,1)){const r=[];if(this.options.short[o].forEach((t=>{(`-${t}`.startsWith(n)||"-"===n)&&r.push(t)})),1===r.length){const o=`${this.stdin.substring(0,e-1)} -${r[0]}`,i=`${this.stdin.substring(this.cursor)}`,s=this.$watch((()=>this.cursor),(()=>{this.cursor=t+(r[0].length-n.length+1),s()}));return void(this.stdin=`${o}${i}`)}("-"===n||r.length>1)&&this.history.push({render:t=>{const e=r.length<5?r.length:4,n=r.length<5?1:Math.ceil(r.length/e);let o=0;const i=[];for(let s=0;s<n;s++){const n=[];for(let i=0;i<e;i++)n.push(t("td",`-${r[o]}`)),o++;i.push(t("tr",[n]))}return t("table",{style:{width:"100%"}},[i])}})}}else{const r=[];if(this.options.long[o].forEach((t=>{(`--${t}`.startsWith(n)||"--"===n)&&r.push(t)})),1===r.length){const o=`${this.stdin.substring(0,e-1)} --${r[0]}`,i=`${this.stdin.substring(this.cursor)}`,s=this.$watch((()=>this.cursor),(()=>{this.cursor=t+(r[0].length-n.length+2),s()}));return void(this.stdin=`${o}${i}`)}("--"===n||r.length>1)&&this.history.push({render:t=>{const e=r.length<5?r.length:4,n=r.length<5?1:Math.ceil(r.length/e);let o=0;const i=[];for(let s=0;s<n;s++){const n=[];for(let i=0;i<e;i++)n.push(t("td",`--${r[o]}`)),o++;i.push(t("tr",[n]))}return t("table",{style:{width:"100%"}},[i])}})}}}},y=m,v=(0,h.Z)(y,r,o,!1,null,null,null),g=v.exports},4030:function(t,e,n){n(1703),t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"106f":function(t,e,n){},4365:function(t,e,n){},4795:function(t,e,n){t.exports=n("96cf")},"590b":function(t,e,n){"use strict";n("acc8")},"836c":function(t,e,n){"use strict";n("b50a")},"839b":function(t,e,n){"use strict";n("106f")},8875:function(t,e,n){var r,o,i;(function(n,s){o=[],r=s,i="function"===typeof r?r.apply(e,o):r,void 0===i||(t.exports=i)})("undefined"!==typeof self&&self,(function(){function t(){var e=Object.getOwnPropertyDescriptor(document,"currentScript");if(!e&&"currentScript"in document&&document.currentScript)return document.currentScript;if(e&&e.get!==t&&document.currentScript)return document.currentScript;try{throw new Error}catch(f){var n,r,o,i=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,s=/@([^@]*):(\d+):(\d+)\s*$/gi,c=i.exec(f.stack)||s.exec(f.stack),a=c&&c[1]||!1,u=c&&c[2]||!1,l=document.location.href.replace(document.location.hash,""),h=document.getElementsByTagName("script");a===l&&(n=document.documentElement.outerHTML,r=new RegExp("(?:[^\\n]+?\\n){0,"+(u-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),o=n.replace(r,"$1").trim());for(var d=0;d<h.length;d++){if("interactive"===h[d].readyState)return h[d];if(h[d].src===a)return h[d];if(a===l&&h[d].innerHTML&&h[d].innerHTML.trim()===o)return h[d]}return null}}return t}))},"8bbf":function(t,e){t.exports=n(8935)},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function a(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),s=new O(r||[]);return i._invoke=P(t,n,s),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=a;var l="suspendedStart",h="suspendedYield",d="executing",f="completed",p={};function m(){}function y(){}function v(){}var g={};g[i]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(E([])));b&&b!==n&&r.call(b,i)&&(g=b);var x=v.prototype=m.prototype=Object.create(g);function S(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function $(t,e){function n(o,i,s,c){var a=u(t[o],t,i);if("throw"!==a.type){var l=a.arg,h=l.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(a.arg)}var o;function i(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function P(t,e,n){var r=l;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===f){if("throw"===o)throw i;return j()}n.method=o,n.arg=i;while(1){var s=n.delegate;if(s){var c=I(s,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var a=u(t,e,n);if("normal"===a.type){if(r=n.done?f:h,a.arg===p)continue;return{value:a.arg,done:n.done}}"throw"===a.type&&(r=f,n.method="throw",n.arg=a.arg)}}}function I(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,I(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=u(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function E(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,s=function n(){while(++o<t.length)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return s.next=s}}return{next:j}}function j(){return{value:e,done:!0}}return y.prototype=x.constructor=v,v.constructor=y,v[c]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},S($.prototype),$.prototype[s]=function(){return this},t.AsyncIterator=$,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var s=new $(a(e,n,r,o),i);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},S(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=E,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],c=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var a=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(a&&u){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(a){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=t,s.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:E(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},acc8:function(t,e,n){},b50a:function(t,e,n){},ba6f:function(t,e,n){"use strict";const r=[],o=/$|[!-@[-`{-~][\s\S]*/g,i=Array.isArray,s=function(t){if(""===t)return"";if("false"===t)return!1;const e=Number(t);return 0*e===0?e:t},c=function(t){let e,n,r,o,s,c,a,u={};for(e in t)for(s=t[e],n=u[e]=i(s)?s:[s],c=0,o=n.length;c<o;c++)for(r=u[n[c]]=[e],a=0;a<o;a++)c!==a&&r.push(n[a]);return u},a=function(t,e){let n,o,i,s,c,a={};for(n in e)if(i=e[n],o=t[n],a[n]=i,void 0===o)t[n]=r;else for(c=0,s=o.length;c<s;c++)a[o[c]]=i;return a},u=function(t,e,n){let o,i,s,c,a,u,l={};if(void 0!==e)for(a=0,s=e.length;a<s;a++)if(o=e[a],i=t[o],l[o]=n,void 0===i)t[o]=r;else for(u=0,c=i.length;u<c;u++)l[i[u]]=n;return l},l=function(t,e,n,r,o){let s,c,a=r[e],u=void 0===a?-1:a.length;if(u>=0||void 0===o||o(e))for(c=t[e],void 0===c?t[e]=n:i(c)?c.push(n):t[e]=[c,n],s=0;s<u;s++)t[a[s]]=t[e]},h=function(t,e){let n,r,i,h,d,f=(e=e||{}).unknown,p=c(e.alias),m=u(p,e.string,""),y=a(p,e.default),v=u(p,e.boolean,!1),g=e.stopEarly,w=[],b={_:w},x=0,S=0,$=t.length;for(;x<$;x++)if(r=t[x],"-"!==r[0]||"-"===r)if(g)while(x<$)w.push(t[x++]);else w.push(r);else if("--"===r)while(++x<$)w.push(t[x]);else if("-"===r[1])i=r.indexOf("=",2),"n"===r[2]&&"o"===r[3]&&"-"===r[4]?(n=r.slice(5,i>=0?i:void 0),d=!1):i>=0?(n=r.slice(2,i),d=void 0!==v[n]||(void 0===m[n]?s(r.slice(i+1)):r.slice(i+1))):(n=r.slice(2),d=void 0!==v[n]||($===x+1||"-"===t[x+1][0]?void 0===m[n]||"":void 0===m[n]?s(t[++x]):t[++x])),l(b,n,d,p,f);else for(o.lastIndex=2,h=o.exec(r),i=h.index,d=h[0],S=1;S<i;S++)l(b,n=r[S],S+1<i?void 0===m[n]||r.substring(S+1,S=i)+d:""===d?$===x+1||"-"===t[x+1][0]?void 0===m[n]||"":void 0!==v[n]||(void 0===m[n]?s(t[++x]):t[++x]):void 0!==v[n]||(void 0===m[n]?s(d):d),p,f);for(n in y)void 0===b[n]&&(b[n]=y[n]);for(n in v)void 0===b[n]&&(b[n]=!1);for(n in m)void 0===b[n]&&(b[n]="");return b};t.exports=h},e589:function(t,e,n){"use strict";n("4365")},fb15:function(t,e,n){"use strict";if(n.r(e),n.d(e,"createStdout",(function(){return It})),n.d(e,"createStderr",(function(){return _t})),n.d(e,"createDummyStdout",(function(){return kt})),n.d(e,"EVENT_LISTENERS",(function(){return Ot})),"undefined"!==typeof window){var r=window.document.currentScript,o=n("8875");r=o(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:o});var i=r&&r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);i&&(n.p=i[1])}var s=n("4795"),c=n.n(s),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"vue-command",staticClass:"vue-command"},[t._t("bar",[t.hideBar?t._e():n("div",{staticClass:"term-bar"},[t.hideTitle?t._e():n("span",{staticClass:"term-title"},[t._v(" "+t._s(t.title)+" ")])])]),n("div",{ref:"term-std",staticClass:"term-std"},[t.isSearch?n("search",{ref:"search",attrs:{executed:t.local.executed,"is-search":t.isSearch,stdin:t.stdin},on:{"update:isSearch":function(e){t.isSearch=e},"update:is-search":function(e){t.isSearch=e},click:t.focus,handle:t.handle}}):t._e(),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isSearch,expression:"!isSearch"}],ref:"term-cont",staticClass:"term-cont",class:{"term-cont-fullscreen":t.local.isFullscreen},on:{click:t.focus}},[t.showIntro?n("div",[t._v(" "+t._s(t.intro)+" ")]):t._e(),t._l(t.local.history,(function(e,r){return n("div",{key:r,staticClass:"term-hist",class:{"term-hist-fullscreen":t.local.isFullscreen&&r===t.local.history.length-1}},[n("stdout",{directives:[{name:"show",rawName:"v-show",value:!t.local.isFullscreen||r===t.local.history.length-1,expression:"(!local.isFullscreen || index === local.history.length - 1)"}],staticClass:"term-stdout",attrs:{component:e}}),n("stdin",{directives:[{name:"show",rawName:"v-show",value:0===r&&!t.local.isFullscreen||!(r===t.local.history.length-1&&t.local.isInProgress)&&!t.local.isFullscreen,expression:"(index === 0 && !local.isFullscreen) || !(index === local.history.length - 1 && local.isInProgress) && !local.isFullscreen"}],ref:"stdin",refInFor:!0,attrs:{bus:t.bus,cursor:t.local.cursor,"hide-prompt":t.hidePrompt,"is-fullscreen":t.local.isFullscreen,"is-in-progress":t.local.isInProgress,"is-last":r===t.local.history.length-1,prompt:t.prompt,"help-text":t.helpText,"help-timeout":t.helpTimeout,"show-help":t.showHelp,stdin:t.local.stdin,uid:t._uid},on:{"update:stdin":function(e){return t.$set(t.local,"stdin",e)},handle:t.handle},scopedSlots:t._u([{key:"prompt",fn:function(){return[t._t("prompt")]},proxy:!0}],null,!0)})],1)}))],2)],1)],2)},u=[],l=n("8bbf"),h=n.n(l),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"term-cont",staticClass:"term-cont term-cont-fullscreen",on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"tab",9,e.key,"Tab")||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.setIsSearch(!1))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.setIsSearch(!1))},function(e){return(e.type.indexOf("key")||67===e.keyCode)&&e.ctrlKey?e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.sigint(e)):null}]}},[n("div",{staticClass:"term-search-container"},[n("span",{staticClass:"term-search"},[t._v(" (reverse-i-search)`"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],ref:"input",attrs:{autofocus:"",type:"text",autocorrect:"off",autocapitalize:"none"},domProps:{value:t.search},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.handle(e)},input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v("': "+t._s(t.command)+" ")])])])},f=[],p={inject:["setStdin"],props:{executed:{required:!0,type:Set},isSearch:{required:!0,type:Boolean},stdin:{required:!0,type:String}},data:function(){return{command:"",search:""}},watch:{search:function(){var t=this;this.executed.forEach((function(e){e.startsWith(t.search)&&(t.command=e,t.setStdin(e))}))}},created:function(){this.command=this.stdin},mounted:function(){function t(){this.style.width="".concat(this.value.length,"ch")}this.focus();var e=this.$refs.input;e.addEventListener("input",t),t.call(e)},methods:{handle:function(){this.$emit("update:isSearch",!1),this.$emit("handle",this.command)},focus:function(){this.$refs.input.focus()},setIsSearch:function(t){this.$emit("update:isSearch",t)},sigint:function(){this.setStdin(""),this.$emit("update:isSearch",!1)}}},m=p;n("e589");function y(t,e,n,r,o,i,s,c){var a,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),s?(a=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=a):o&&(a=c?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o),a)if(u.functional){u._injectStyles=a;var l=u.render;u.render=function(t,e){return a.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,a):[a]}return{exports:t,options:u}}var v=y(m,d,f,!1,null,null,null),g=v.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"term-stdin-container"},[t._t("prompt",[t.hidePrompt?t._e():n("span",{staticClass:"term-ps"},[t._v(" "+t._s(t.local.prompt)+" ")])]),n("span",{staticClass:"term-stdin"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.local.stdin,expression:"local.stdin"}],ref:"input",attrs:{autofocus:t.isLast,disabled:!t.isLast||t.isInProgress,placeholder:t.placeholder,type:"text",autocorrect:"off",autocapitalize:"none"},domProps:{value:t.local.stdin},on:{click:function(e){return t.setCursor(t.$refs.input.selectionStart)},keyup:[function(e){return t.setCursor(t.$refs.input.selectionStart)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.handle(e)}],input:function(e){e.target.composing||t.$set(t.local,"stdin",e.target.value)}}})])],2)},b=[];function x(t,e,n,r,o,i,s){try{var c=t[i](s),a=c.value}catch(u){return void n(u)}c.done?e(a):Promise.resolve(a).then(r,o)}function S(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function s(t){x(i,r,o,s,c,"next",t)}function c(t){x(i,r,o,s,c,"throw",t)}s(void 0)}))}}var $={inject:["setCursor","setStdin"],props:{bus:{required:!0,type:Object},cursor:{default:0,required:!0,type:Number},helpText:{default:"",type:String},helpTimeout:{default:0,type:Number},hidePrompt:{default:!1,type:Boolean},isInProgress:{default:!1,required:!0,type:Boolean},isLast:{default:!1,required:!0,type:Boolean},isFullscreen:{default:!1,required:!0,type:Boolean},prompt:{default:"",type:String},showHelp:{default:!1,type:Boolean},stdin:{default:"",required:!0,type:String},uid:{required:!0,type:Number}},data:function(){return{placeholder:"",local:{prompt:"",stdin:""}}},watch:{cursor:function(){this.isLast&&this.$refs.input.setSelectionRange(this.cursor,this.cursor)},isInProgress:function(){var t=this;return S(c.a.mark((function e(){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isInProgress||!t.isLast){e.next=5;break}return e.next=3,t.$nextTick();case 3:t.scrollIntoView(),t.focus();case 5:case"end":return e.stop()}}),e)})))()},isLast:function(t,e){e&&!t&&this.blur()},stdin:function(){var t=this;return S(c.a.mark((function e(){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLast&&!t.isInProgress&&(t.local.stdin=t.stdin),e.next=3,t.$nextTick();case 3:t.setCursor(t.$refs.input.selectionStart);case 4:case"end":return e.stop()}}),e)})))()},"local.stdin":function(){this.$emit("update:stdin",this.local.stdin),this.setCursor(this.$refs.input.selectionStart)}},created:function(){this.local.prompt=this.prompt,this.local.stdin=this.stdin},mounted:function(){var t=this;this.scrollIntoView(),this.focus(),setTimeout((function(){t.isLast&&t.showHelp&&t.setPlaceholder(t.helpText)}),this.helpTimeout)},methods:{handle:function(){this.setPrompt(this.prompt),this.$emit("handle",this.local.stdin),this.setPlaceholder("")},setPlaceholder:function(t){this.placeholder=t},setPrompt:function(t){this.local.prompt=t},blur:function(){this.$refs.input.blur()},focus:function(){this.$refs.input.focus()},scrollIntoView:function(){this.$refs.input.scrollIntoView()}}},P=$,I=(n("839b"),y(P,w,b,!1,null,null,null)),_=I.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.component,{tag:"component"})},O=[],E={props:{component:{required:!0,type:Object}}},j=E,C=(n("836c"),y(j,k,O,!1,null,null,null)),L=C.exports,T={provide:function(){return{setCursor:this.setCursor}},data:function(){return{local:{cursor:0}}},watch:{cursor:function(){this.local.cursor=this.cursor},"local.cursor":function(){this.$emit("update:cursor",this.local.cursor)}},methods:{autocomplete:function(){"function"===typeof this.autocompletionResolver&&this.autocompletionResolver()},setCursor:function(t){this.local.cursor=t}}},F=n("ba6f"),A=n.n(F);function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(Object(n),!0).forEach((function(e){K(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function K(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function D(t){return V(t)||M(t)||R(t)||B()}function B(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function R(t,e){if(t){if("string"===typeof t)return q(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?q(t,e):void 0}}function M(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function V(t){if(Array.isArray(t))return q(t)}function q(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function z(t,e,n,r,o,i,s){try{var c=t[i](s),a=c.value}catch(u){return void n(u)}c.done?e(a):Promise.resolve(a).then(r,o)}function G(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function s(t){z(i,r,o,s,c,"next",t)}function c(t){z(i,r,o,s,c,"throw",t)}s(void 0)}))}}var U=function(t){var e=[],n=[],r=/[^\s"]+|"([^"]*)"/gi;do{n=r.exec(t),null!=n&&e.push(n[1]?n[1]:n[0])}while(null!=n);var o=[],i=!1;return e.forEach((function(t,n){i?i=!1:t.endsWith("=")?(o.push(t+e[n+1]),i=!0):o.push(t)})),o},W={provide:function(){return{terminate:this.terminate}},methods:{handle:function(t){var e=this;return G(c.a.mark((function n(){var r;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=t.trim().split(" ")[0],"function"!==typeof e.commands[r]){n.next=5;break}return n.next=4,Promise.resolve(e.execute(t));case 4:return n.abrupt("return");case 5:if("function"!==typeof e.builtIn){n.next=9;break}return n.next=8,Promise.resolve(e.builtIn(t,e));case 8:return n.abrupt("return");case 9:e.commandNotFound(t);case 10:case"end":return n.stop()}}),n)})))()},execute:function(t){var e=this;return G(c.a.mark((function n(){var r,o,i,s,a,u;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=t.trim(),r=A()(t.split(" "),e.parserOptions)._[0],o=kt(),i=U(t),s=A()(i,e.parserOptions),n.next=7,Promise.resolve(e.commands[r](s));case 7:o=n.sent,o=e.setupComponent(o,e.local.history.length,s),""!==t&&(a=new Set(e.local.executed),a.delete(t),a.add(t),e.$emit("update:executed",a),e.setExecuted(a)),e.setPointer(e.local.executed.size),u=D(e.local.history),u.push(o),e.emitExecute(),e.setIsInProgress(!0),e.setHistory(u),e.$emit("update:history",D(u));case 17:case"end":return n.stop()}}),n)})))()},commandNotFound:function(t){var e=kt();if(""!==t){e=_t("".concat(t,": ").concat(this.notFound),!0),e=this.setupComponent(e,this.local.history.length);var n=new Set(this.local.executed);n.delete(t),n.add(t),this.$emit("update:executed",n),this.setExecuted(n),this.setPointer(this.local.executed.size)}var r=D(this.local.history);r.push(e),this.emitExecute(),this.setIsInProgress(!0),this.setHistory(r),this.$emit("update:history",D(r))},setupComponent:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};t=H({},t),hasOwnProperty.call(t,"computed")||(t.computed={});var o=this.local.cursor,i=new Set(this.local.executed),s=D(this.local.history),c=this.local.pointer,a=this.local.stdin;return t.computed=H({environment:function(){return{isExecuting:e.local.isInProgress&&e.local.history.length-1===n,isFullscreen:e.local.isFullscreen,isInProgress:e.local.isInProgress}},context:function(){return{cursor:o,executed:i,history:s,parsed:r,pointer:c,stdin:a}}},t.computed),t},terminate:function(){this.setStdin(""),this.setIsFullscreen(!1),this.$emit("executed"),this.setIsInProgress(!1)}}};function X(t){return Q(t)||Z(t)||Y(t)||J()}function J(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Y(t,e){if(t){if("string"===typeof t)return tt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?tt(t,e):void 0}}function Z(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function Q(t){if(Array.isArray(t))return tt(t)}function tt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var et={provide:function(){return{setPointer:this.setPointer}},data:function(){return{local:{executed:new Set,history:[],pointer:0}}},watch:{history:function(){this.setHistory(X(this.history))},"local.pointer":function(){this.$emit("update:pointer",this.local.pointer)},pointer:function(){this.setPointer(this.pointer)}},methods:{increaseHistory:function(){this.local.pointer<this.local.executed.size-1&&(this.local.pointer++,this.local.stdin=X(this.local.executed)[this.local.pointer])},decreaseHistory:function(){this.local.pointer>0&&(this.local.pointer--,this.local.stdin=X(this.local.executed)[this.local.pointer])},setExecuted:function(t){this.local.executed=t},setHistory:function(t){this.local.history=t},setPointer:function(t){this.local.pointer=t}}};function nt(t,e,n,r,o,i,s){try{var c=t[i](s),a=c.value}catch(u){return void n(u)}c.done?e(a):Promise.resolve(a).then(r,o)}function rt(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function s(t){nt(i,r,o,s,c,"next",t)}function c(t){nt(i,r,o,s,c,"throw",t)}s(void 0)}))}}var ot={data:function(){return{isSearch:!1}},watch:{isSearch:function(){var t=this;return rt(c.a.mark((function e(){var n,r;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isSearch){e.next=6;break}return e.next=3,t.$nextTick();case 3:n=t.$refs.stdin,r=n[t.local.history.length-1],r.focus();case 6:case"end":return e.stop()}}),e)})))()}},methods:{setIsSearchHandler:function(){this.isInProgress||this.setIsSearch(!0)},setIsSearch:function(t){this.isSearch=t}}},it={provide:function(){return{setIsFullscreen:this.setIsFullscreen,setIsInProgress:this.setIsInProgress}},data:function(){return{local:{isFullscreen:!1,isInProgress:!1}}},watch:{isFullscreen:function(){this.setIsFullscreen(this.isFullscreen)},isInProgress:function(){this.setIsInProgress(this.isInProgress)},"local.isFullscreen":function(){this.$emit("update:isFullscreen",this.local.isFullscreen)},"local.isInProgress":function(){this.$emit("update:isInProgress",this.local.isInProgress)}},methods:{setIsFullscreen:function(t){this.local.isFullscreen=t},setIsInProgress:function(t){this.local.isInProgress=t}}};function st(t){return lt(t)||ut(t)||at(t)||ct()}function ct(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function at(t,e){if(t){if("string"===typeof t)return ht(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ht(t,e):void 0}}function ut(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function lt(t){if(Array.isArray(t))return ht(t)}function ht(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function dt(t,e,n,r,o,i,s){try{var c=t[i](s),a=c.value}catch(u){return void n(u)}c.done?e(a):Promise.resolve(a).then(r,o)}function ft(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function s(t){dt(i,r,o,s,c,"next",t)}function c(t){dt(i,r,o,s,c,"throw",t)}s(void 0)}))}}var pt=new h.a,mt={components:{Search:g,Stdin:_,Stdout:L},mixins:[T,W,et,ot,it],provide:function(){return{emitExecute:this.emitExecute,emitExecuted:this.emitExecuted,emitInput:this.emitInput,setStdin:this.setStdin}},props:{autocompletionResolver:{default:void 0,type:Function},builtIn:{default:void 0,type:Function},commands:{default:function(){return{}},type:Object},cursor:{default:0,type:Number},eventListeners:{default:function(){return[Ot.autocomplete,Ot.history,Ot.search]},type:Array},executed:{default:function(){return new Set},type:Set},helpTimeout:{default:4e3,type:Number},hideBar:{default:!1,type:Boolean},hidePrompt:{default:!1,type:Boolean},hideTitle:{default:!1,type:Boolean},helpText:{default:"Type help",type:String},history:{default:function(){return[]},type:Array},intro:{default:"Fasten your seatbelts!",type:String},isFullscreen:{default:!1,type:Boolean},isInProgress:{default:!1,type:Boolean},notFound:{default:"command not found",type:String},parserOptions:{default:function(){return{}},type:Object},pointer:{default:0,type:Number},prompt:{default:"~neil@moon:#/",type:String},showHelp:{default:!1,type:Boolean},showIntro:{default:!1,type:Boolean},stdin:{default:"",type:String},title:{default:"neil@moon: ~",type:String}},data:function(){return{bus:pt,local:{stdin:""},scroll:{eventListener:void 0,isBottom:!0,resizeObserver:void 0}}},watch:{stdin:function(){this.setStdin(this.stdin)},"local.stdin":function(){this.$emit("input",this.local.stdin),this.$emit("update:stdin",this.local.stdin),""===this.local.stdin&&this.setPointer(this.local.executed.size)}},mounted:function(){var t=this;this.scroll.resizeObserver=new ResizeObserver(function(){var e=ft(c.a.mark((function e(n){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:t.scroll.isBottom&&(t.$refs["term-std"].scrollTop=t.$refs["term-std"].scrollHeight);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),this.scroll.resizeObserver.observe(this.$refs["term-cont"]),this.scroll.eventListener=function(){var e=t.$refs["term-std"];t.scroll.isBottom=e.scrollHeight-e.scrollTop-e.clientHeight===0},this.$refs["term-std"].addEventListener("scroll",this.scroll.eventListener),this.eventListeners.forEach((function(e){return e(t)}))},created:function(){this.executed.add=function(){for(var t,e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];(t=this.local.executed).add.apply(t,r),(e=Object.getPrototypeOf(this).add).call.apply(e,[this].concat(r))},this.executed.clear=function(){this.local.executed.clear(),Object.getPrototypeOf(this).add.call(this)},this.executed.delete=function(){for(var t,e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];(t=this.local.executed).delete.apply(t,r),(e=Object.getPrototypeOf(this).delete).call.apply(e,[this].concat(r))},this.setCursor(this.cursor),this.setPointer(this.pointer),this.setStdin(this.stdin),this.setIsInProgress(this.isInProgress),this.setIsFullscreen(this.isFullscreen);var t=st(this.history);0===t.length&&(t.push({name:"VueCommandDummyStdout",render:function(t){return t("span",{},"")}}),this.$emit("update:history",st(t))),this.setHistory(st(t))},methods:{emitInput:function(t){this.$emit("input",t)},emitExecute:function(){this.$emit("execute")},emitExecuted:function(){this.$emit("executed")},focus:function(){if(""===window.getSelection().toString())if(this.isSearch)this.$refs.search.focus();else{var t=this.$refs.stdin[this.local.history.length-1];t.focus()}},setStdin:function(t){this.local.stdin=t}}},yt=mt,vt=(n("590b"),y(yt,a,u,!1,null,null,null)),gt=vt.exports,wt=38,bt=40,xt=82,St=9;function $t(t,e,n,r,o,i,s){try{var c=t[i](s),a=c.value}catch(u){return void n(u)}c.done?e(a):Promise.resolve(a).then(r,o)}function Pt(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function s(t){$t(i,r,o,s,c,"next",t)}function c(t){$t(i,r,o,s,c,"throw",t)}s(void 0)}))}}var It=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"VueCommandStdout",o=arguments.length,i=new Array(o>4?o-4:0),s=4;s<o;s++)i[s-4]=arguments[s];return{name:r,mixins:i,inject:["terminate"],mounted:function(){var t=this;return Pt(c.a.mark((function e(){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:t.terminate();case 3:case"end":return e.stop()}}),e)})))()},render:function(r){return n?r("span",{},t):r("span",e?{domProps:{innerText:t}}:{domProps:{innerHTML:t}})}}},_t=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"VueCommandStderr",r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];return{name:n,mixins:o,inject:["terminate"],mounted:function(){var t=this;return Pt(c.a.mark((function e(){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:t.terminate();case 3:case"end":return e.stop()}}),e)})))()},render:function(n){return e?n("span",{},t):n("span",{domProps:{innerHTML:t}})}}},kt=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"VueCommandDummyStdout",e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return{name:t,mixins:n,inject:["terminate"],mounted:function(){var t=this;return Pt(c.a.mark((function e(){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:t.terminate();case 3:case"end":return e.stop()}}),e)})))()},render:function(t){return t("span",{},"")}}},Ot={autocomplete:function(t){t.$refs["term-cont"].addEventListener("keydown",(function(e){e.keyCode!==St||t.local.isInProgress||(e.preventDefault(),t.autocomplete())}))},history:function(t){t.$refs["term-cont"].addEventListener("keydown",(function(e){t.local.isInProgress||(e.keyCode===wt&&(e.preventDefault(),t.decreaseHistory()),e.keyCode===bt&&(e.preventDefault(),t.increaseHistory()))}))},search:function(t){t.$refs["term-cont"].addEventListener("keydown",(function(e){e.ctrlKey&&e.keyCode===xt&&!t.local.isInProgress&&(e.preventDefault(),t.setIsSearchHandler())}))}},Et=gt;e["default"]=Et}})}}]);
//# sourceMappingURL=578.32f6b427.js.map