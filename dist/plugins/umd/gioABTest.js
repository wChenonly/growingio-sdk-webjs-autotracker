!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e,t,n=function(){return n=Object.assign||function(e){for(var t,n=1,r=arguments.length;r>n;n++)for(var o in t=arguments[n])({}).hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};function r(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;i>o;o++)!r&&o in t||(r||(r=[].slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||[].slice.call(t))}var o,i,a,u="function"==typeof Array.from?Array.from:(t||(t=1,o=function(e){return"function"==typeof e},i=function(e){var t=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t}(e);return Math.min(Math.max(t,0),9007199254740991)},a=function(e){var t=e.next();return!t.done&&t},e=function(e){var t,n,r,u=this,c=arguments.length>1?arguments[1]:void 0;if(void 0!==c){if(!o(c))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(t=arguments[2])}var s=function(e,t){if(null!=e&&null!=t){var n=e[t];if(null==n)return;if(!o(n))throw new TypeError(n+" is not a function");return n}}(e,function(e){if(null!=e){if(["string","number","boolean","symbol"].indexOf(typeof e)>-1)return Symbol.iterator;if("undefined"!=typeof Symbol&&"iterator"in Symbol&&Symbol.iterator in e)return Symbol.iterator;if("@@iterator"in e)return"@@iterator"}}(e));if(void 0!==s){n=o(u)?Object(new u):[];var l,f,g=s.call(e);if(null==g)throw new TypeError("Array.from requires an array-like or iterable object");for(r=0;;){if(!(l=a(g)))return n.length=r,n;f=l.value,n[r]=c?c.call(t,f,r):f,r++}}else{var d=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var v,h=i(d.length);for(n=o(u)?Object(new u(h)):Array(h),r=0;h>r;)v=d[r],n[r]=c?c.call(t,v,r):v,r++;n.length=h}return n}),e),c=function(e){return h(["undefined","null"],C(e))},s=function(e){return"string"===C(e)},l=function(e){return"number"===C(e)},f=function(e){return"NaN"===p(Number(e))},g=function(e){return"object"===C(e)&&!c(e)},d=function(e){return Array.isArray(e)&&"array"===C(e)},v=function(e){return"date"===C(e)},h=function(e,t){return("array"===C(e)||"string"===C(e))&&e.indexOf(t)>=0},m=u,p=function(e){return c(e)?"":"".concat(e)},y=function(e,t){return!!s(e)&&e.slice(0,t.length)===t},I=function(e,t){if(s(e)){var n=e.length,r=n;r>n&&(r=n);var o=r;return(r-=t.length)>=0&&e.slice(r,o)===t}return!1},w={}.hasOwnProperty,b=function(e){return g(e)?Object.keys(e):[]},S=function(e,t){if(!g(e))return!1;try{return"string"===C(t)?delete e[t]:"array"===C(t)?t.map((function(t){return delete e[t]})):(function(e){return"regexp"===C(e)}(t)&&b(e).forEach((function(n){t.test(n)&&S(e,n)})),!0)}catch(e){return!1}},_=function(e){return d(e)?0===e.length:g(e)?0===b(e).length:!e},C=function(e){return{}.toString.call(e).slice(8,-1).toLowerCase()},T=function(e,t){console.log("%c [GrowingIO]：".concat(e),{info:"color: #3B82F6;",error:"color: #EF4444;",warn:"color: #F59E0B;",success:"color: #10B981;"}[t]||"")},O=function(e){try{return e()}catch(e){return}},x=function(e,t){if(h(["function","asyncfunction"],C(e)))try{e(t)}catch(e){T("回调执行失败！".concat(e),"error")}},N=function(e,t){void 0===t&&(t=!1);var n=0;if(_(e)||"boolean"==typeof e)return n;for(var r=0;r<e.length;)n=(n<<5)-n+e.charCodeAt(r),n&=n,r++;return t?Math.abs(n):n},A=function(e){return I(e,"_gioenc")?e.slice(0,-7):e},D=function(e){return isNaN(Number(e))&&O((function(){return JSON.parse(e)}))||e},k=function(e){var t={};return g(e)&&(S(e,"&&sendTo"),function(e,n){b(e).forEach((function(n){return function(e,n){var r=p(n).slice(0,100);g(e)?t[r]=k(e):d(e)?(t[r]=function(e,t){if(void 0===t&&(t=!1),d(e)){for(var n=0,r=[],o=0,i=e;o<i.length;o++){var a=i[o];a&&!_(a)&&(r[n++]=a),t&&0===a&&(r[n++]=a)}return r}return e}(e.slice(0,100),!0),t[r]=t[r].join("||").slice(0,1e3)):v(e)?t[r]=function(e){if(v(e)){var t=function(e){return 10>e?"0"+e:e};return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+" "+t(e.getHours())+":"+t(e.getMinutes())+":"+t(e.getSeconds())+"."+t(e.getMilliseconds())}return e}(e):t[r]=c(e)?"":p(e).slice(0,1e3)}(e[n],n)}))}(e)),t},j=/^(\.ac\.|\.br\.|\.co\.|\.com\.|\.edu\.|\.gov\.|\.org\.|\.net\.)/;function E(e){for(var t=1;arguments.length>t;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var B,q=function e(t,n){function r(e,r,o){if("undefined"!=typeof document){"number"==typeof(o=E({},n,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var a in o)o[a]&&(i+="; "+a,!0!==o[a]&&(i+="="+o[a].split(";")[0]));return document.cookie=e+"="+t.write(r,e)+i}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},o=0;o<n.length;o++){var i=n[o].split("="),a=i.slice(1).join("=");try{var u=decodeURIComponent(i[0]);if(r[u]=t.read(a,u),e===u)break}catch(e){}}return e?r[e]:r}},remove:function(e,t){r(e,"",E({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,E({},this.attributes,t))},withConverter:function(t){return e(E({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"}),U={A:1,a:1,Z:1,z:1,"@":1,"{":1},M=function(e){return c(e)?e:O((function(){return"gioenc-".concat(H(e))}))||e},R=function(e){return s(e)&&y(e,"gioenc-")&&O((function(){return H(e.replace("gioenc-",""))}))||e},H=function(e){return(e=e||"").split("").map((function(e){return U[e]?e:F(e)})).join("")},F=function(e){if(/[0-9]/.test(e))return 1^+e;var t=e.charCodeAt(0);return String.fromCharCode(1^t)},J=function(e){var t=this;this.domain=e,this.getItem=function(e){return D(R(q.get(A(e),{domain:t.domain,path:"/"})))},this.setItem=function(e,n,r){var o;o=s(n)?n.length?I(e,"_gioenc")?M(n):n:"":JSON.stringify(n),q.set(A(e),o,{expires:new Date(r||new Date((new Date).toDateString()).getTime()+3456e7),domain:t.domain,path:"/"})},this.removeItem=function(e){q.remove(A(e),{domain:t.domain,path:"/"})},this.hasItem=function(e){return h(b(q.get()),A(e))},this.getKeys=function(){return b(q.get())},this.type="Cookie"},K=function(){this.getItem=function(e){var t=O((function(){return JSON.parse(localStorage.getItem(A(e))||"")}))||{};return g(t)&&t.expiredAt>+Date.now()?D(R(t.value)):void 0},this.setItem=function(e,t,n){var r=null!=n?n:+new Date((new Date).getFullYear()+3,(new Date).getMonth(),(new Date).getDay()).getTime();localStorage.setItem(A(e),JSON.stringify({value:s(t)&&t.length&&I(e,"_gioenc")?M(t):t,expiredAt:r}))},this.removeItem=function(e){return localStorage.removeItem(A(e))},this.hasItem=function(e){return!!localStorage.getItem(A(e))},this.getKeys=function(){return m(Array(localStorage.length)).map((function(e,t){return localStorage.key(t)}))},this.type="localStorage"},P={},V=function(){this.getItem=function(e){var t=O((function(){return JSON.parse(P[A(e)]||"")}));return g(t)&&t.expiredAt>+Date.now()?D(R(t.value)):void 0},this.setItem=function(e,t,n){var r=null!=n?n:+new Date((new Date).getFullYear()+3,(new Date).getMonth(),(new Date).getDay()).getTime();P[A(e)]=JSON.stringify({value:s(t)&&t.length?M(t):t,expiredAt:r})},this.removeItem=function(e){return S(P,A(e))},this.hasItem=function(e){return function(e,t){return!c(e)&&w.call(e,t)}(P,A(e))},this.getKeys=function(){return b(P)},this.type="memory"},$=function(e){var t=[];try{var n=e.split("."),r=function(e){try{var t=m(e);return t[t.length-1]}catch(e){return}}(n);if(n.length>=2&&(isNaN(Number(r))||0>Number(r)||Number(r)>255)){var o=".".concat(n.slice(-2).join("."));j.test(o)?B=o:t.push(o);var i=".".concat(n.slice(-3).join("."));j.test(i)||h(t,i)||t.push(i);var a=".".concat(n.slice(-4).join("."));j.test(a)||h(t,a)||t.push(a)}}catch(e){T(e,"error")}return t},L=function(e){var t="";return e.some((function(e){return!!Y(e)&&(t=e,!0)})),t},Y=function(e){try{q.set("gioCookie","yes",{domain:e});var t=!!q.get("gioCookie",{domain:e});return q.remove("gioCookie",{domain:e}),t}catch(e){return!1}},z=function(e){var t,n,o,i=e.storageType,a=e.cookieDomain,u=e.projectId;if(h(["cookie","localstorage"],i)||(i="cookie"),"cookie"===i&&(n=!!(o=navigator.userAgent.indexOf("Electron")>-1||h(["","localhost","127.0.0.1"],window.location.hostname)||!h(["http:","https:"],window.location.protocol)?"":L(r(r([],$(window.location.hostname),!0),[window.location.hostname],!1)))),"cookie"===i&&n){var c=new J(o);if(a){var s=$(a),l=L(_(s)?[]:r([a],$(a),!0));l&&Y(l)?c.domain=l:T("指定Cookie域无效或无权限，使用默认域！","warn")}t=c}else t=function(){try{var e=window.localStorage,t="__storage_test__";return e.setItem(t,t),e.removeItem(t),!0}catch(e){return!1}}()?new K:new V;return"cookie"===i&&B&&Y(B)&&function(e,t,n){if(t&&Y(t)){var r=new J(t);["".concat(n,"_gdp_session_id"),"gdp_user_id_gioenc","".concat(n,"_gdp_cs1_gioenc"),"".concat(n,"_gdp_user_key_gioenc"),"".concat(n,"_gdp_gio_id_gioenc"),"".concat(n,"_gdp_sequence_ids"),"".concat(n,"_gdp_session_id_sent")].forEach((function(t){var n=r.getItem(t);r.hasItem(t)&&(e.setItem(t,n),r.removeItem(t))})),r=void 0}}(t,B,u),t},G={},X={}.hasOwnProperty;function Z(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function W(e){try{return encodeURIComponent(e)}catch(e){return null}}G.stringify=function(e,t){t=t||"";var n,r,o=[];for(r in"string"!=typeof t&&(t="?"),e)if(X.call(e,r)){if((n=e[r])||null!=n&&!isNaN(n)||(n=""),r=W(r),n=W(n),null===r||null===n)continue;o.push(r+"="+n)}return o.length?t+o.join("&"):""},G.parse=function(e){for(var t,n=/([^=?#&]+)=?([^&]*)/g,r={};t=n.exec(e);){var o=Z(t[1]),i=Z(t[2]);null===o||null===i||o in r||(r[o]=i)}return r};var Q=/^\d+_gdp_abt_sign$/,ee=/^\d+_gdp_abtd$/;window.gioABTest={name:"gioABTest",method:function(e,t){var r=this;this.growingIO=e,this.options=t,this.timeoutCheck=function(e,t){r.requestInterval=l(Number(e))&&!f(Number(e))?Number(e):5,(r.requestInterval>1440||0>r.requestInterval)&&(r.requestInterval=5),r.requestTimeout=l(Number(t))&&!f(Number(t))?Number(t):1e3,(r.requestTimeout>5e3||100>r.requestTimeout)&&(r.requestTimeout=1e3)},this.getMainConfigs=function(){var e,t,n,o,i,a,u,c,s,l,f,g,d=r.growingIO,v=d.plugins,h=d.vdsConfig,m=d.useHybridInherit,p=d.useEmbeddedInherit,y=d.dataStore;if(m){var I=null!==(t=null===(e=null==v?void 0:v.gioHybridAdapter)||void 0===e?void 0:e.hybridConfig)&&void 0!==t?t:null===(n=null===window||void 0===window?void 0:window.GrowingWebViewJavascriptBridge)||void 0===n?void 0:n.configuration;g=null!==(i=null!==(o=null==I?void 0:I.dataSourceId)&&void 0!==o?o:null==I?void 0:I.datasourceId)&&void 0!==i?i:h.dataSourceId,f=null!==(a=null==I?void 0:I.projectId)&&void 0!==a?a:h.projectId}else p?(g=null!==(c=null===(u=y.eventContextBuilderInst.minpExtraParams)||void 0===u?void 0:u.dataSourceId)&&void 0!==c?c:h.dataSourceId,f=null!==(l=null===(s=y.eventContextBuilderInst.minpExtraParams)||void 0===s?void 0:s.projectId)&&void 0!==l?l:h.projectId):(g=h.dataSourceId,f=h.projectId);return{projectId:f,dataSourceId:g}},this.abtStorageCheck=function(){var e=r.abtStorage.getKeys();e.filter((function(e){return Q.test(e)})).forEach((function(e){var t=r.abtStorage.getItem(e);t&&t>=Date.now()||r.abtStorage.removeItem(e)})),e.filter((function(e){return ee.test(e)})).forEach((function(e){_(r.abtStorage.getItem(e))&&r.abtStorage.removeItem(e)}))},this.getHashKey=function(e,t){var n=r.growingIO.userStore.getUid,o=r.growingIO.dataStore.getTrackerVds(e).projectId;return N("".concat(e,"#").concat(o,"#").concat(n(),"#").concat(t),!0)},this.generateUrl=function(e,t){y(t,"http")?r.url[e]="".concat(t,"/diversion/specified-layer-variables"):r.url[e]="https://".concat(t,"/diversion/specified-layer-variables")},this.getABTest=function(e,t,n){if(_(r.url[e])&&r.generateUrl(e,"https://ab.growingio.com"),!t)return T("获取ABTest数据失败! 实验层Id不合法!","error"),void x(n,{});var o=r.abtStorage.getItem("".concat(r.getHashKey(e,t),"_gdp_abt_sign"))||0,i=r.abtStorage.getItem("".concat(r.getHashKey(e,t),"_gdp_abtd"))||{};!o||o<Date.now()?r.initiateRequest(e,t,i,n):x(n,i)},this.initiateRequest=function(e,t,o,i){var a=r.growingIO,u=a.userStore.getUid,c=a.dataStore,s=e===r.growingIO.trackingId?r.getMainConfigs():c.getTrackerVds(e),l=s.projectId,f=s.dataSourceId,g=new XMLHttpRequest;if(g)return g.open("POST",r.url[e],!0),g.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),g.timeout=r.requestTimeout,g.onload=function(a){var u,c=null!==(u=O((function(){return JSON.parse(a.target.responseText)})))&&void 0!==u?u:{};0===c.code?r.experimentVerify(e,n(n({},c),{layerId:t}),o,i):(T("获取ABTest数据失败! ".concat(c.errorMsg,"!"),"error"),x(i,{})),r.abtStorage.setItem("".concat(r.getHashKey(e,t),"_gdp_abt_sign"),Date.now()+6e4*r.requestInterval)},g.ontimeout=function(){T("获取ABTest数据失败! 请求超时!","error"),x(i,{})},g.onerror=function(){200!==g.status&&(2>r.retryCount?(r.initiateRequest(e,t,o,i),r.retryCount+=1):(T("获取ABTest数据失败! ".concat(g.statusText,"!"),"error"),x(i,{})))},void g.send(G.stringify({accountId:l,datasourceId:f,distinctId:u(),layerId:t}));T("获取ABTest数据失败! 当前环境不支持XMLHttpRequest!","error")},this.experimentVerify=function(e,t,n,o){var i=t.layerId,a=t.strategyId,u=t.experimentId,c=t.variables,s="".concat(r.getHashKey(e,i),"_gdp_abtd"),l={layerId:p(i),strategyId:p(a),experimentId:p(u),variables:c};N(JSON.stringify(l))!==N(JSON.stringify(n))&&(r.abtStorage.setItem(s,l,new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()+1).getTime()),a&&u&&r.buildExperimentHitEvent(e,p(i),p(u),p(a))),x(o,l)},this.buildExperimentHitEvent=function(e,t,o,i){var a,u=r.growingIO.dataStore,c=u.eventContextBuilder,s=u.eventConverter,l=n({eventType:"CUSTOM",eventName:"$exp_hit"},c(e));l.attributes=k(n(n({},null!==(a=l.attributes)&&void 0!==a?a:{}),{$exp_layer_id:t,$exp_id:o,$exp_strategy_id:i})),s(l)},this.pluginVersion="4.2.0";var o=null!=t?t:{},i=o.abServerUrl,a=void 0===i?"https://ab.growingio.com":i,u=o.requestInterval,c=o.requestTimeout,d=this.growingIO.emitter;this.timeoutCheck(u,c),this.abtStorage=z({storageType:"localstorage"}),this.growingIO.getABTest=this.getABTest,d.on("OPTION_INITIALIZED",(function(){_(a)?T("如果您需要使用ABTest功能，请配置服务地址 abServerUrl!","warn"):(r.abtStorageCheck(),r.url={},s(a)?r.generateUrl(r.growingIO.trackingId,a):g(a)&&b(a).forEach((function(e){r.generateUrl(e,a[e])})))})),this.retryCount=0}}}));
