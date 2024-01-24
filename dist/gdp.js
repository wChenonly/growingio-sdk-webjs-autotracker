var e,t,i,s,r,n="function"==typeof Array.from?Array.from:(t||(t=1,i=function(e){return"function"==typeof e},s=function(e){var t=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t}(e);return Math.min(Math.max(t,0),9007199254740991)},r=function(e){var t=e.next();return!t.done&&t},e=function(e){var t,n,o,a=this,g=arguments.length>1?arguments[1]:void 0;if(void 0!==g){if(!i(g))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(t=arguments[2])}var d=function(e,t){if(null!=e&&null!=t){var s=e[t];if(null==s)return;if(!i(s))throw new TypeError(s+" is not a function");return s}}(e,function(e){if(null!=e){if(["string","number","boolean","symbol"].indexOf(typeof e)>-1)return Symbol.iterator;if("undefined"!=typeof Symbol&&"iterator"in Symbol&&Symbol.iterator in e)return Symbol.iterator;if("@@iterator"in e)return"@@iterator"}}(e));if(void 0!==d){n=i(a)?Object(new a):[];var l,u,c=d.call(e);if(null==c)throw new TypeError("Array.from requires an array-like or iterable object");for(o=0;;){if(!(l=r(c)))return n.length=o,n;u=l.value,n[o]=g?g.call(t,u,o):u,o++}}else{var h=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var m,p=s(h.length);for(n=i(a)?Object(new a(p)):Array(p),o=0;p>o;)m=h[o],n[o]=g?g.call(t,m,o):m,o++;n.length=p}return n}),e);const o=e=>S(["undefined","null"],A(e)),a=e=>"string"===A(e),g=e=>"number"===A(e),d=e=>"NaN"===b(Number(e)),l=e=>"object"===A(e)&&!o(e),u=e=>"regexp"===A(e),c=e=>S(["function","asyncfunction"],A(e)),h=e=>Array.isArray(e)&&"array"===A(e),m=e=>"date"===A(e),p=e=>{try{return O(e)[0]}catch(e){return}},I=e=>{try{const t=O(e);return t[t.length-1]}catch(e){return}},v=(e,t=1)=>h(e)&&g(t)?e.slice(t>0?t:1,e.length):e,f=e=>{if(h(e)){let t=0;const i=[];for(const s of e)s&&!P(s)&&(i[t++]=s);return i}return e},w=(e,t)=>e[y(e,t)],y=(e,t)=>{let i=-1;return h(e)&&e.every(((e,s)=>!t(e)||(i=s,!1))),i},S=(e,t)=>("array"===A(e)||"string"===A(e))&&e.indexOf(t)>=0,O=n,b=e=>o(e)?"":""+e,_=(e,t)=>"string"==typeof e?e.split(t):e,T=e=>{if(a(e)){const t=_(e,"");return`${p(t).toLowerCase()}${v(t).join("")}`}return e},E=(e,t)=>!!a(e)&&e.slice(0,t.length)===t,C=(e,t)=>{if(a(e)){const{length:i}=e;let s=i;s>i&&(s=i);const r=s;return s-=t.length,s>=0&&e.slice(s,r)===t}return!1},N={}.hasOwnProperty,j=(e,t)=>!o(e)&&N.call(e,t),x=e=>l(e)?Object.keys(e):[],k=(e,t)=>{x(e).forEach((i=>t(e[i],i)))},D=(e,t)=>{const i=x(e);return!(!l(e)||!l(t)||i.length!==x(t).length||S(i.map(((i,s)=>l(e[i])?D(e[i],t[i]):e[i]===t[i])),!1))},q=(e,t)=>{if(!l(e))return!1;try{return"string"===A(t)?delete e[t]:"array"===A(t)?t.map((t=>delete e[t])):(u(t)&&x(e).forEach((i=>{t.test(i)&&q(e,i)})),!0)}catch(e){return!1}},P=e=>h(e)?0===e.length:l(e)?0===x(e).length:!e,A=e=>({}.toString.call(e).slice(8,-1).toLowerCase());var U=Object.freeze({__proto__:null,isNil:o,isString:a,isNumber:g,isNaN:d,isBoolean:e=>"boolean"===A(e),isObject:l,isRegExp:u,isFunction:c,isArray:h,isDate:m,fixed:(e,t)=>g(e)?Number(e.toFixed(g(t)?t:2)):a(e)&&"NaN"!==b(Number(e))?Number(Number(e).toFixed(g(t)?t:2)):e,head:p,last:I,drop:v,dropWhile:(e,t)=>h(e)?e.filter((e=>!t(e))):e,compact:f,find:w,findIndex:y,includes:S,arrayFrom:O,toString:b,split:_,lowerFirst:T,upperFirst:e=>{if(a(e)){const t=_(e,"");return`${p(t).toUpperCase()}${v(t).join("")}`}return e},startsWith:E,endsWith:C,has:j,keys:x,forEach:k,isEqual:D,get:(e,t,i)=>{let s=e;return l(e)?(t.split(".").forEach((e=>{s=s?s[e]:i})),s):i},unset:q,isEmpty:P,typeOf:A,formatDate:e=>{if(m(e)){const t=e=>10>e?"0"+e:e;return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+" "+t(e.getHours())+":"+t(e.getMinutes())+":"+t(e.getSeconds())+"."+t(e.getMilliseconds())}return e}});const K=(e,t)=>{console.log("%c [GrowingIO]："+e,{info:"color: #3B82F6;",error:"color: #EF4444;",warn:"color: #F59E0B;",success:"color: #10B981;"}[t]||"")},L=e=>{try{return e()}catch(e){return}},F=(e,t)=>{if(c(e))try{e(t)}catch(e){K("回调执行失败！"+e,"error")}},B=(e,t=!0,i="参数不合法")=>K(`${t?"调用":"设置"} ${e} 失败，${i}!`,"warn"),$=e=>{const t={};return l(e)&&k(e,((e,i)=>{const s=b(i).slice(0,100);l(e)?t[s]=$(e):h(e)?(t[s]=e.slice(0,100),t[s]=t[s].join("||").slice(0,1e3)):t[s]=o(e)?"":b(e).slice(0,1e3)})),t},R=(e,t,i,s={})=>{document.addEventListener?e.addEventListener(t,i,Object.assign(Object.assign({},{capture:!0}),s)):e.attachEvent?e.attachEvent("on"+t,i):e["on"+t]=i},H=(e,t)=>a(e)&&!P(e)&&e.match(/^[a-zA-Z_][0-9a-zA-Z_]{0,100}$/)?t():(K("事件名格式不正确，只能包含数字、字母和下划线，且不能以数字开头，字符总长度不能超过100!","error"),!1);var G=Object.freeze({__proto__:null,consoleText:K,niceTry:L,niceCallback:F,callError:B,limitObject:$,addListener:R,flattenObject:(e={})=>{const t=Object.assign({},e);return x(t).forEach((e=>{l(t[e])?(x(t[e]).forEach((i=>{t[`${e}_${i}`]=b(t[e][i])})),q(t,e)):h(t[e])?(t[e].forEach(((i,s)=>{l(i)?x(i).forEach((r=>{t[`${e}_${s}_${r}`]=b(i[r])})):t[`${e}_${s}`]=b(i)})),q(t,e)):o(t[e])||""===t[e]?q(t,e):t[e]=b(t[e])})),$(t)},eventNameValidate:H,getGioFunction:()=>{var e,t,i,s;const r=window._gio_local_vds||"vds",n=null!==(t=null===(e=window[r])||void 0===e?void 0:e.namespace)&&void 0!==t?t:"gdp";return c(window[n])?window[n]:null!==(s=null!==(i=window.gdp)&&void 0!==i?i:window.gio)&&void 0!==s?s:function(){}},hashCode:e=>{let t=0;if(P(e)||"boolean"==typeof e)return t;let i=0;for(;i<e.length;)t=(t<<5)-t+e.charCodeAt(i),t&=t,i++;return t}});const M=e=>a(e)&&e.length>0||g(e)&&e>0,Q=["web","wxwv","Android","iOS","minp","alip","baidup","qq","bytedance","kuaishoup","jdp","xhsp"],V={autotrack:{type:"boolean",default:!0},compress:{type:"boolean",default:!0},cookieDomain:{type:"string",default:""},dataCollect:{type:"boolean",default:!0},debug:{type:"boolean",default:!1},embeddedIgnore:{type:"array",default:[]},forceLogin:{type:"boolean",default:!1},idMapping:{type:"boolean",default:!1},enableIdMapping:{type:"boolean",default:!1},gtouchHost:{type:"string",default:""},hashtag:{type:"boolean",default:!1},ignoreFields:{type:"array",default:[]},originalSource:{type:"boolean",default:!0},penetrateHybrid:{type:"boolean",default:!0},performance:{type:"object",default:{monitor:!0,exception:!0}},platform:{type:"string",default:"web"},sendType:{type:"string",default:"beacon"},serverUrl:{type:"string",default:"https://napi.growingio.com"},sessionExpires:{type:"number",default:30},storageType:{type:"string",default:"cookie"},touch:{type:"boolean",default:!1},trackBot:{type:"boolean",default:!0},version:{type:"string",default:"1.0.0"}},z=["clearGeneralProps","clearTrackTimer","clearUserId","getDeviceId","getOption","getPlugins","identify","init","registerPlugins","removeTimer","sendPage","sendVisit","setGeneralProps","setOption","setUserAttributes","setUserId","track","trackTimerEnd","trackTimerPause","trackTimerResume","trackTimerStart","getABTest"],J={autotrack:"无埋点采集",dataCollect:"数据采集",dataSourceId:"数据源ID",debug:"调试模式",forceLogin:"强制登录",hashtag:"哈希解析",serverUrl:"数据上报服务地址"},W=["collectImp","enableDebug","enableHT","getVisitorId","send","setAutotrack","setConfig","setDataCollect","setPlatformProfile","setTrackerHost","setTrackerScheme"],Z=["screenHeight","screenWidth"],Y=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})),X=e=>C(e,"_gioenc")?e.slice(0,-7):e,ee=e=>d(Number(e))&&L((()=>JSON.parse(e)))||e;function te(e){for(var t=1;arguments.length>t;t++){var i=arguments[t];for(var s in i)e[s]=i[s]}return e}var ie=function e(t,i){function s(e,s,r){if("undefined"!=typeof document){"number"==typeof(r=te({},i,r)).expires&&(r.expires=new Date(Date.now()+864e5*r.expires)),r.expires&&(r.expires=r.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var n="";for(var o in r)r[o]&&(n+="; "+o,!0!==r[o]&&(n+="="+r[o].split(";")[0]));return document.cookie=e+"="+t.write(s,e)+n}}return Object.create({set:s,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var i=document.cookie?document.cookie.split("; "):[],s={},r=0;r<i.length;r++){var n=i[r].split("="),o=n.slice(1).join("=");try{var a=decodeURIComponent(n[0]);if(s[a]=t.read(o,a),e===a)break}catch(e){}}return e?s[e]:s}},remove:function(e,t){s(e,"",te({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,te({},this.attributes,t))},withConverter:function(t){return e(te({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});const se={A:1,a:1,Z:1,z:1,"@":1,"{":1},re=e=>o(e)?e:L((()=>"gioenc-"+oe(e)))||e,ne=e=>a(e)&&E(e,"gioenc-")&&L((()=>oe(e.replace("gioenc-",""))))||e,oe=e=>(e=e||"").split("").map((e=>se[e]?e:ae(e))).join(""),ae=e=>{if(/[0-9]/.test(e))return 1^+e;{let t=e.charCodeAt(0);return String.fromCharCode(1^t)}};class ge{constructor(e){this.domain=e,this.getItem=e=>ee(ne(ie.get(X(e),{domain:this.domain,path:"/"}))),this.setItem=(e,t,i)=>{let s;s=a(t)?t.length?C(e,"_gioenc")?re(t):t:"":JSON.stringify(t),ie.set(X(e),s,{expires:i?new Date(i):new Date((new Date).getFullYear()+3,(new Date).getMonth(),(new Date).getDay()),domain:this.domain,path:"/"})},this.removeItem=e=>{ie.remove(X(e),{domain:this.domain,path:"/"})},this.hasItem=e=>S(x(ie.get()),X(e)),this.getKeys=()=>x(ie.get()),this.type="Cookie"}}class de{constructor(){this.getItem=e=>{const t=L((()=>JSON.parse(localStorage.getItem(X(e))||"")))||{};return l(t)&&t.expiredAt>+Date.now()?ee(ne(t.value)):void 0},this.setItem=(e,t,i)=>{const s=null!=i?i:+new Date((new Date).getFullYear()+3,(new Date).getMonth(),(new Date).getDay()).getTime();localStorage.setItem(X(e),JSON.stringify({value:a(t)&&t.length&&C(e,"_gioenc")?re(t):t,expiredAt:s}))},this.removeItem=e=>localStorage.removeItem(X(e)),this.hasItem=e=>!!localStorage.getItem(X(e)),this.getKeys=()=>O(Array(localStorage.length)).map(((e,t)=>localStorage.key(t))),this.type="localStorage"}}const le={};class ue{constructor(){this.getItem=e=>{const t=L((()=>JSON.parse(le[X(e)]||"")));return l(t)&&t.expiredAt>+Date.now()?ee(ne(t.value)):void 0},this.setItem=(e,t,i)=>{const s=null!=i?i:+new Date((new Date).getFullYear()+3,(new Date).getMonth(),(new Date).getDay()).getTime();le[X(e)]=JSON.stringify({value:a(t)&&t.length?re(t):t,expiredAt:s})},this.removeItem=e=>q(le,X(e)),this.hasItem=e=>j(le,X(e)),this.getKeys=()=>x(le),this.type="memory"}}let ce;const he=/^(\.ac\.|\.br\.|\.co\.|\.com\.|\.edu\.|\.gov\.|\.org\.|\.net\.)/,me=e=>{const t=[];try{const i=e.split("."),s=I(i);if(i.length>=2&&(isNaN(Number(s))||0>Number(s)||Number(s)>255)){const e="."+i.slice(-2).join(".");he.test(e)?ce=e:t.push(e);const s="."+i.slice(-3).join(".");he.test(s)||S(t,s)||t.push(s);const r="."+i.slice(-4).join(".");he.test(r)||S(t,r)||t.push(r)}}catch(e){}return t},pe=e=>{let t="";return e.every((e=>!Ie(e)||(t=e,!1))),t},Ie=e=>{try{ie.set("gioCookie","yes",{domain:e});const t=!!ie.get("gioCookie",{domain:e});return ie.remove("gioCookie",{domain:e}),t}catch(e){return!1}},ve=e=>{let t,i,s,{storageType:r,cookieDomain:n,projectId:o}=e;if(S(["cookie","localstorage"],r)||(r="cookie"),"cookie"===r&&(s=navigator.userAgent.indexOf("Electron")>-1||S(["","localhost","127.0.0.1"],window.location.hostname)||!S(["http:","https:"],window.location.protocol)?"":pe([...me(window.location.hostname),window.location.hostname]),i=!!s),"cookie"===r&&i){const e=new ge(s);if(n){let t=me(n);const i=pe(P(t)?[]:[n,...me(n)]);i&&Ie(i)?e.domain=i:K("指定Cookie域无效或无权限，使用默认域！","warn")}t=e}else t=(()=>{try{const e=window.localStorage,t="__storage_test__";return e.setItem(t,t),e.removeItem(t),!0}catch(e){return!1}})()?new de:new ue;return"cookie"===r&&ce&&Ie(ce)&&((e,t,i)=>{if(t&&Ie(t)){let s=new ge(t);[i+"_gdp_session_id","gdp_user_id_gioenc",i+"_gdp_cs1_gioenc",i+"_gdp_user_key_gioenc",i+"_gdp_gio_id_gioenc",i+"_gdp_sequence_ids",i+"_gdp_session_id_sent"].forEach((t=>{const i=s.getItem(t);s.hasItem(t)&&(e.setItem(t,i),s.removeItem(t))})),s=void 0}})(t,ce,o),t};var fe="SDK_INITIALIZED_COMPLATE",we="SESSIONID_UPDATE";class ye{constructor(e){this.growingIO=e,this.main=()=>{var e,t;const{sdkVersion:i,useEmbeddedInherit:s,vdsConfig:r,userStore:n,dataStore:o,trackingId:a}=this.growingIO,{path:g,query:d}=o.currentPage;let l={appVersion:r.version,dataSourceId:r.dataSourceId,deviceId:n.uid,domain:s?r.appId:window.location.host,language:navigator.language,path:g,platform:r.platform,query:d,referralPage:(null===(e=o.lastPageEvent)||void 0===e?void 0:e.referralPage)||"",screenHeight:window.screen.height,screenWidth:window.screen.width,sdkVersion:i,sessionId:n.sessionId,timestamp:+Date.now(),timezoneOffset:(new Date).getTimezoneOffset(),title:null!==(t=L((()=>document.title.slice(0,255))))&&void 0!==t?t:"",userId:n.userId};if(r.idMapping&&(l.userKey=n.userKey),P(r.ignoreFields)||r.ignoreFields.forEach((e=>{q(l,e)})),s&&!P(this.minpExtraParams)){const e=Object.assign({},l);k(Object.assign(Object.assign({},l),this.minpExtraParams),((t,i)=>{var s;S(r.embeddedIgnore,i)?(l[i]=e[i],"domain"===i&&(l[i]=window.location.host)):l[i]=null!==(s=this.minpExtraParams[i])&&void 0!==s?s:l[i]}))}return l.trackingId=a,l},this.minpExtraParams={}}}class Se{constructor(e){this.growingIO=e,this.parsePage=()=>{const{hashtag:e}=this.growingIO.vdsConfig,t=location.pathname,i=location.search,s=location.hash,r=s.indexOf("?");this.domain=window.location.host,this.title=document.title.slice(0,255),this.time=+Date.now(),this.path=t,this.query=i,e&&(r>-1?(this.path+=s.slice(0,r),this.query=this.query+"&"+s.slice(r+1)):this.path+=s),this.query&&S(["?","&"],this.query.charAt(0))&&(this.query=this.query.slice(1))},this._getNoHashHref=()=>{const{protocol:e,host:t,pathname:i,search:s}=window.location;return`${e}://${t}${i}${s}`},this.getReferralPage=()=>{var e,t;const{dataStore:{lastPageEvent:i}}=this.growingIO;return(null==i?void 0:i.path)===this.path&&(null!==(e=null==i?void 0:i.query)&&void 0!==e?e:"")===(null!==(t=this.query)&&void 0!==t?t:"")?null==i?void 0:i.referralPage:(null==i?void 0:i.path)?this.lastHref:document.referrer},this.pageListener=()=>{const{hashtag:e}=this.growingIO.vdsConfig;let t=window.location.href,i=this.lastHref;e||(t=this._getNoHashHref(),i=this.lastNoHashHref),i!==t&&(this.parsePage(),this.buildPageEvent())},this.hookHistory=()=>{const e=window.history.pushState,t=window.history.replaceState,i=this;e&&L((()=>window.history.pushState=function(){e.apply(window.history,arguments),setTimeout(i.pageListener)})),t&&L((()=>window.history.replaceState=function(){t.apply(window.history,arguments),setTimeout(i.pageListener)})),R(window,"popstate",this.pageListener);const{hashtag:s}=this.growingIO.vdsConfig;s&&R(window,"hashchange",this.pageListener)},this.buildPageEvent=e=>{const{dataStore:{lastPageEvent:t,eventContextBuilder:i,eventConverter:s}}=this.growingIO;let r=Object.assign(Object.assign({eventType:"PAGE"},i()),{protocolType:location.protocol.substring(0,location.protocol.length-1),referralPage:this.getReferralPage()});P(e)||(r=Object.assign(Object.assign({},r),e)),r.timestamp=this.time,s(r),this.lastHref=window.location.href,this.lastNoHashHref=this._getNoHashHref(),this.lastLocation=Object.assign({},window.location)},this.title=document.title.slice(0,255),this.lastLocation=Object.assign({},window.location)}}class Oe{constructor(e){var t;this.growingIO=e,this.ALLOW_SETTING=Object.assign({},V),this.allowOptKeys=Object.keys(this.ALLOW_SETTING),this.trackTimers={},this.setSequenceIds=e=>{let t=this.growingIO.storage.getItem(this.seqStorageIdName)||{};t.globalKey=e,this.growingIO.storage.setItem(this.seqStorageIdName,t)},this.initOptions=e=>{var t,i,s,r,n,o,a;const{projectId:g,dataSourceId:l,appId:u}=e;this.initialDataSourceId=l;const c={};this.allowOptKeys.forEach((t=>{const i=this.ALLOW_SETTING[t].type;let s=h(i)?!S(i,A(e[t])):A(e[t])!==i;"platform"!==t||S(Q,e[t])||(s=!0),s?c[t]=this.ALLOW_SETTING[t].default:"ignoreFields"===t?c.ignoreFields=e.ignoreFields.filter((e=>S(Z,e))):(c[t]=e[t],S(["dataCollect","autotrack"],t)&&(c[t]||K("已关闭"+J[t],"info")))})),c.sessionExpires=Math.round(c.sessionExpires),(d(c.sessionExpires)||1>c.sessionExpires||c.sessionExpires>360)&&(c.sessionExpires=30),c.storageType=c.storageType.toLowerCase(),c.enableIdMapping&&!c.idMapping&&(c.idMapping=!0),c.sendType=c.sendType.toLowerCase(),S(["beacon","xhr"],c.sendType)||(c.sendType="beacon"),!c.trackBot&&/bot|crawler|spider|scrapy|jiankongbao|slurp|transcoder|networkbench/i.test(navigator.userAgent.toLowerCase())&&(c.dataCollect=!1),this.growingIO.vdsConfig=Object.assign(Object.assign(Object.assign({},null!==(t=window[this.growingIO.vds])&&void 0!==t?t:{}),c),{projectId:g,dataSourceId:l,appId:u,performance:{monitor:null===(s=null===(i=c.performance)||void 0===i?void 0:i.monitor)||void 0===s||s,exception:null===(n=null===(r=c.performance)||void 0===r?void 0:r.exception)||void 0===n||n,network:null!==(a=null===(o=c.performance)||void 0===o?void 0:o.network)&&void 0!==a&&a}}),window[this.growingIO.vds]=this.growingIO.vdsConfig,this.seqStorageIdName=g+"_gdp_sequence_ids",this.visitStorageName=g+"_gdp_session_id_sent"},this.setOriginalSource=()=>{const{storage:e,userStore:t}=this.growingIO,i=e.getItem(this.visitStorageName);if(t.sessionId!==i&&o(this.getOriginalSource())){const{path:e,query:t,getReferralPage:i}=this.currentPage,s={path:e,query:t,referralPage:document.referrer||i()};localStorage.setItem(this.originalSourceName,JSON.stringify(s))}},this.getOriginalSource=()=>L((()=>JSON.parse(localStorage.getItem(this.originalSourceName)))),this.setOption=(e,t)=>{var i;const{vdsConfig:s,uploader:r,emitter:n,userStore:o,vds:g}=this.growingIO,d=a(e)&&S(x(J),e),l=d&&typeof t===((null===(i=this.ALLOW_SETTING[e])||void 0===i?void 0:i.type)||"string"),u=Object.assign({},s);return d&&l?(s[e]=t,"dataCollect"===e&&u.dataCollect!==t&&(t?o.sessionId=Y():this.growingIO.clearTrackTimer()),"serverUrl"===e&&(null==r||r.generateHost()),null==n||n.emit("OPTION_CHANGE",{optionName:e,optionValue:t}),window[g][e]=t,!0):(B("setOption > "+e),!1)},this.getOption=e=>{const{vdsConfig:t}=this.growingIO;return e&&j(t,b(e))?t[b(e)]:o(e)?Object.assign({},t):void B("getOption > "+e)},this.sendVisit=e=>{const{userStore:{sessionId:t},storage:i}=this.growingIO,s=i.getItem(this.visitStorageName);!e&&t===s||this.buildVisitEvent()},this.buildVisitEvent=e=>{const{dataStore:{eventContextBuilder:t,eventConverter:i,currentPage:s},emitter:r,storage:n,vdsConfig:a}=this.growingIO,d=this.getOriginalSource();let l=Object.assign(Object.assign({eventType:"VISIT"},t()),{referralPage:document.referrer||this.currentPage.getReferralPage(),timestamp:s.time-1});a.originalSource&&!o(d)&&(l=Object.assign(Object.assign({},l),d)),P(e)||k(l,((t,i)=>{j(e,i)&&(g(e[i])?l[i]=e[i]:P(e[i])||(l[i]=e[i]||l[i]))}));const u=({requestData:e})=>{"VISIT"===e.eventType&&e.trackingId===this.growingIO.trackingId&&(n.setItem(this.visitStorageName,e.sessionId),localStorage.removeItem(this.originalSourceName),r.off("onSendAfter",u))};r.on("onSendAfter",u),i(l)},this.sendPage=e=>{e&&this.currentPage.parsePage(),this.currentPage.buildPageEvent()},this.buildErrorEvent=e=>{const{dataStore:{eventContextBuilder:t,eventConverter:i}}=this.growingIO;i(Object.assign({eventType:"CUSTOM",eventName:"onError",attributes:e},t()))},this.eventConverter=e=>{var t;const{vdsConfig:i,dataStore:s,uploader:r}=this.growingIO;if(i.dataCollect){"LOGIN_USER_ATTRIBUTES"===e.eventType?q(e,"timezoneOffset"):e.trackingId===this.growingIO.trackingId&&(e.eventSequenceId=s.gsid);const i={};k(e,((e,t)=>{var s;if("element"===t){const t=null!==(s=p(e))&&void 0!==s?s:{};k(t,((e,t)=>{P(e)&&0!==e||(i[t]=e)}))}else(P(e)||o(e))&&0!==e||(i[t]=e)})),e.trackingId===this.growingIO.trackingId&&(this.growingIO.dataStore.gsid+=1),null===(t=this.growingIO.emitter)||void 0===t||t.emit("onComposeAfter",{composedEvent:Object.assign({},i)}),e.trackingId===this.growingIO.trackingId&&r.commitRequest(Object.assign(Object.assign({},i),{requestId:Y()}))}},this.currentPage=new Se(this.growingIO),this.eventContextBuilderInst=new ye(this.growingIO),this.eventContextBuilder=null===(t=this.eventContextBuilderInst)||void 0===t?void 0:t.main,this.generalProps={},this.lastPageEvent={},this.originalSourceName="gdp_original_source";const{emitter:i}=this.growingIO;null==i||i.on("onComposeAfter",(({composedEvent:e})=>{"PAGE"!==e.eventType&&"page"!==e.t||e.trackingId!==this.growingIO.trackingId||(this.lastPageEvent=e)})),i.on(fe,(()=>{null==i||i.on(we,(()=>{this.growingIO.uploader.hoardingQueue=[],this.currentPage.parsePage(),this.sendVisit(!0),this.sendPage(!0)}))}))}get gsid(){const e=this.growingIO.storage.getItem(this.seqStorageIdName)||{},t=Number(e.globalKey);return this._gsid=d(t)||t>=1e9||1>t?1:t,this._gsid}set gsid(e){d(Number(e))||e>=1e9||1>e?this._gsid=1:this._gsid=e,this.setSequenceIds(this._gsid)}}var be={name:"gioCustomTracking",method:class{constructor(e){this.growingIO=e,this.getDynamicAttributes=e=>(o(e)||x(e).forEach((t=>{c(e[t])?e[t]=e[t]():l(e[t])?q(e,t):h(e[t])||(e[t]=b(e[t]))})),e),this.buildCustomEvent=(e,t,i)=>{H(e,(()=>{const{dataStore:{eventContextBuilder:s,eventConverter:r}}=this.growingIO;let n=Object.assign({eventType:"CUSTOM",eventName:e,attributes:$(this.getDynamicAttributes(l(t)&&!P(t)?t:void 0))},s());P(i)||(n=Object.assign(Object.assign({},n),i)),r(n)}))},this.buildUserAttributesEvent=(e,t)=>{const{dataStore:{eventContextBuilder:i,eventConverter:s}}=this.growingIO;let r=Object.assign({eventType:"LOGIN_USER_ATTRIBUTES",attributes:$(e)},i());P(t)||(r=Object.assign(Object.assign({},r),t)),s(r)}}}};const _e=["gioPerformance"];class Te{constructor(e){var t,i,s,r;this.growingIO=e,this.innerPluginInit=()=>{var e;_e.forEach((e=>{var t;return q(null===(t=this.pluginsContext)||void 0===t?void 0:t.plugins,e)})),x(null===(e=this.pluginsContext)||void 0===e?void 0:e.plugins).forEach((e=>{var t,i;const{name:s,method:r}=null!==(i=null===(t=this.pluginsContext)||void 0===t?void 0:t.plugins[e])&&void 0!==i?i:{};w(this.pluginItems,(e=>e.name===s))||this.pluginItems.push({name:T(s||e),method:r||(e=>{})})})),P(this.pluginItems)||this.installAll()},this.install=(e,t,i)=>{var s,r;const n=t||w(this.pluginItems,(t=>t.name===e));if((null===(s=this.growingIO)||void 0===s?void 0:s.plugins)[e])return K(`重复加载插件 ${e} 或插件重名，已跳过加载!`,"warn"),!1;if(!n)return K(`插件加载失败!不存在名为 ${e} 的插件!`,"error"),!1;try{return(null===(r=this.growingIO)||void 0===r?void 0:r.plugins)[e]=new n.method(this.growingIO,i),t&&K("加载插件 "+e,"info"),!0}catch(t){return K(`插件【${e}】加载异常 ${t}`,"error"),!1}},this.installAll=e=>{(e||this.pluginItems).forEach((t=>{this.install(t.name,e?t:void 0,e?null==t?void 0:t.options:void 0)&&!w(this.pluginItems,(e=>e.name===t.name))&&this.pluginItems.push({name:T(t.name),method:t.method?t.method:()=>{}})}))},this.uninstall=e=>{var t;q(this.pluginItems,e);const i=q(null===(t=this.growingIO)||void 0===t?void 0:t.plugins,e);return i||K(`卸载插件 ${e} 失败!`,"error"),i},this.uninstallAll=()=>{this.pluginItems.forEach((e=>this.uninstall(e.name)))},this.lifeError=(e,t)=>K(`插件执行错误 ${e.name} ${t}`,"error"),this.onComposeBefore=e=>{this.pluginItems.forEach((t=>{var i;const s=null===(i=this.growingIO.plugins[t.name])||void 0===i?void 0:i.onComposeBefore;if(s&&c(s))try{s(e)}catch(e){this.lifeError(t,e)}}))},this.onComposeAfter=e=>{this.pluginItems.forEach((t=>{var i;const s=null===(i=this.growingIO.plugins[t.name])||void 0===i?void 0:i.onComposeAfter;if(s&&c(s))try{s(e)}catch(e){this.lifeError(t,e)}}))},this.onSendBefore=e=>{this.pluginItems.forEach((t=>{var i;const s=null===(i=this.growingIO.plugins[t.name])||void 0===i?void 0:i.onSendBefore;if(s&&c(s))try{s(e)}catch(e){this.lifeError(t,e)}}))},this.onSendAfter=e=>{this.pluginItems.forEach((t=>{var i;const s=null===(i=this.growingIO.plugins[t.name])||void 0===i?void 0:i.onSendAfter;if(s&&c(s))try{s(e)}catch(e){this.lifeError(t,e)}}))},this.pluginsContext={plugins:{}},this.pluginItems=[],null===(t=this.growingIO.emitter)||void 0===t||t.on("onComposeBefore",this.onComposeBefore),null===(i=this.growingIO.emitter)||void 0===i||i.on("onComposeAfter",this.onComposeAfter),null===(s=this.growingIO.emitter)||void 0===s||s.on("onSendBefore",this.onSendBefore),null===(r=this.growingIO.emitter)||void 0===r||r.on("onSendAfter",this.onSendAfter)}}class Ee extends Te{constructor(e){super(e),this.growingIO=e,this.growingIO.gioSDKFull=!1,this.pluginsContext={plugins:{gioCustomTracking:be}}}}class Ce{constructor(e){this.growingIO=e,this.generateHost=()=>{const{serverUrl:e,projectId:t}=this.growingIO.vdsConfig;return E(e,"http")?`${e}/v3/projects/${t}/collect`:`https://${e}/v3/projects/${t}/collect`},this.getSendType=()=>{const{sendType:e}=this.growingIO.vdsConfig;return"beacon"===e?(()=>{var e;const t=!!(null===(e=null===window||void 0===window?void 0:window.navigator)||void 0===e?void 0:e.sendBeacon),i=window.navigator.userAgent;if(i.match(/(iPad|iPhone|iPod)/g)){const e=(e=>{const t=e.toLowerCase().match(/cpu.*os (.*?) like mac os/i);return!t||2>t.length?0:+t[1].split("_").slice(0,2).join(".")})(i);return t&&e>13}return t})()?"beacon":"xhr":e},this.commitRequest=(e,t)=>{const{forceLogin:i}=this.growingIO.vdsConfig,s=Object.assign(Object.assign({},e),{requestType:this.getSendType()});i?this.hoardingQueue.push(s):(this.requestQueue.push(s),this.initiateRequest(t))},this.initiateRequest=e=>{var t,i;if([...this.hoardingQueue,...this.requestQueue].length>0&&this.requestingNum<this.requestLimit){const{vdsConfig:s,emitter:r,plugins:n,useHybridInherit:o}=this.growingIO;if(this.requestQueue=[...this.hoardingQueue,...this.requestQueue].filter((e=>(this.retryIds[e.requestId]||0)<=this.retryLimit)),this.hoardingQueue=[],P(this.requestQueue))return;const a=this.requestQueue.shift(),{requestType:g}=a;null==r||r.emit("onSendBefore",{requestData:Object.assign({},a)});const d=Object.assign({},a);if(q(d,["requestType","trackingId","requestId","customEventType"]),s.debug&&console.log("[GrowingIO Debug]:",JSON.stringify(d,null,2).replace(/\"/g,(()=>{const e=window.navigator.userAgent;return/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(e)&&!/chrome\/(\d+\.\d+)/i.test(e)})()?"":'"')),this.requestingNum+=1,o)return this.requestSuccessFn(a),!1;let l=Object.assign({},d);s.compress&&(null==n?void 0:n.gioCompress)?(this.compressType="1",l="image"===g?null===(t=null==n?void 0:n.gioCompress)||void 0===t?void 0:t.compressToUTF16(JSON.stringify([l])):null===(i=null==n?void 0:n.gioCompress)||void 0===i?void 0:i.compressToUint8Array(JSON.stringify([l]))):(this.compressType="0",l=JSON.stringify([l]));const u=this.generateURL(null!=e?e:this.requestURL);switch(g){case"beacon":default:this.sendByBeacon(a,l,u);break;case"xhr":this.sendByXHR(a,l,u);break;case"image":this.sendByImage(a,l,u)}}},this.generateURL=e=>`${e}?stm=${+Date.now()}&compress=${this.compressType}`,this.sendByBeacon=(e,t,i)=>{navigator.sendBeacon(i,t)?this.requestSuccessFn(e):this.requestFailFn(e,"beacon")},this.sendByXHR=(e,t,i)=>{var s;const r=S(["unload","beforeunload","pagehide"],null===(s=null===window||void 0===window?void 0:window.event)||void 0===s?void 0:s.type),n=new XMLHttpRequest;if(n)return n.open("POST",i,r),n.onreadystatechange=()=>{4===n.readyState&&204===n.status?this.requestSuccessFn(e):this.requestFailFn(e,"xhr")},n.setRequestHeader("Content-Type","text/plain;charset=UTF-8"),void n.send(t);if(null===window||void 0===window?void 0:window.XDomainRequest){const s=new window.XDomainRequest;s.open("POST",i.replace("https://","http://"),r),s.onload=()=>{204===s.status?this.requestSuccessFn(e):this.requestFailFn(e,"xhr")},s.onerror=s.ontimeout=()=>{this.requestFailFn(e,"xhr")},s.send(t)}},this.sendByImage=(e,t,i)=>{const s=`${i}&data=${t}`;let r=document.createElement("img");r.width=1,r.height=1,r.onload=()=>{this.requestSuccessFn(e),this.clearImage(r)},r.onerror=r.onabort=()=>{this.requestSuccessFn(e),this.clearImage(r)},r.src=s},this.clearImage=e=>{e.src="",e.onload=()=>{},e.onerror=e.onerabort=()=>{},e=null},this.requestSuccessFn=e=>{var t;this.requestingNum-=1;const i=e.requestId||-1;this.retryIds[i]&&(this.retryIds[i]=0),e.trackingId===this.growingIO.trackingId&&(this.growingIO.userStore.sessionId=e.sessionId),null===(t=this.growingIO.emitter)||void 0===t||t.emit("onSendAfter",{requestData:Object.assign({},e)}),this.initiateRequest()},this.requestFailFn=(e,t)=>{this.requestingNum-=1;const i=e.requestId||-1;this.retryIds[i]||(this.retryIds[i]=0),this.retryIds[i]+=1;const s=this.requestQueue.some((t=>t.requestId===e.requestId));let r=t;if(this.retryIds[i]<this.retryLimit+1||(r="beacon"===t?"xhr":"xhr"===t?"image":void 0,this.retryIds[i]=0),!s&&r){let t=window.setTimeout((()=>{P(this.requestQueue)?(this.requestQueue.push(Object.assign(Object.assign({},e),{requestType:r})),this.initiateRequest()):this.requestQueue.push(Object.assign(Object.assign({},e),{requestType:r})),window.clearTimeout(t),t=null}),800)}},this.hoardingQueue=[],this.requestQueue=[],this.requestLimit=10,this.requestTimeout=5e3,this.retryLimit=1,this.retryIds={},this.requestingNum=0,this.requestURL=this.generateHost()}}class Ne{constructor(e){this.growingIO=e,this.transferStorage=()=>{const{vdsConfig:{projectId:e},storage:t}=this.growingIO;this.uid=t.getItem("gr_user_id")||this.uid,this.userId=t.getItem(e+"_gr_cs1")||this.userId,t.removeItem("gr_user_id"),t.removeItem(e+"_gr_cs1"),t.removeItem(e+"_gr_last_sent_cs1"),t.removeItem(e+"_gr_last_sent_sid_with_cs1"),t.removeItem(e+"_gr_session_id"),t.removeItem(e+"_gr_session_id_sent_vst");const i=t.getKeys().find((e=>e.indexOf("gr_imp_")>-1));i&&t.removeItem(i)};const{projectId:t}=this.growingIO.vdsConfig,{getItem:i,setItem:s,getKeys:r,removeItem:n}=this.growingIO.storage;this.getItem=i,this.setItem=s,this.getKeys=r,this.removeItem=n,this.sIdStorageName=t+"_gdp_session_id",this.uidStorageName="gdp_user_id_gioenc",this.userIdStorageName=t+"_gdp_cs1_gioenc",this.userKeyStorageName=t+"_gdp_user_key_gioenc",this.gioIdStorageName=t+"_gdp_gio_id_gioenc",this.growingIO.emitter.on("OPTION_INITIALIZED",(()=>{i("gr_user_id")&&this.transferStorage()}))}get sessionId(){return this.getItem(this.sIdStorageName)||(this.sessionId=Y(),this.sessionId)}set sessionId(e){var t;e||(e=Y());const i=this.getItem(this.sIdStorageName)||this.prevSessionId,{sessionExpires:s=30}=this.growingIO.vdsConfig;this.setItem(this.sIdStorageName,e,+Date.now()+60*s*1e3),i!==e&&(this.getKeys().filter((e=>/.+_gdp_session_id_.{36}/.test(e))).forEach((e=>{this.removeItem(e)})),this.setItem(this.growingIO.dataStore.visitStorageName,""),null===(t=this.growingIO.emitter)||void 0===t||t.emit(we,{newSessionId:e,oldSessionId:i})),this.prevSessionId=e}get uid(){return this.getItem(this.uidStorageName)||(this.uid=Y(),this.uid)}set uid(e){var t;const i=this.getItem(this.uidStorageName)||this.prevUId;this.setItem(this.uidStorageName,e),i!==e&&(null===(t=this.growingIO.emitter)||void 0===t||t.emit("UID_UPDATE",{newUId:e,oldUId:i})),this.prevUId=e}get userId(){return this.getItem(this.userIdStorageName)||""}set userId(e){var t,i;const s=this.getItem(this.userIdStorageName)||this.prevUserId;this.setItem(this.userIdStorageName,e),null===(t=this.growingIO.emitter)||void 0===t||t.emit("SET_USERID",{newUserId:e,oldUserId:s,userKey:this.userKey}),s!==e&&(null===(i=this.growingIO.emitter)||void 0===i||i.emit("USERID_UPDATE",{newUserId:e,oldUserId:s,userKey:this.userKey})),e&&(this.gioId=e),this.prevUserId=e}get userKey(){return this.getItem(this.userKeyStorageName)||""}set userKey(e){var t,i;const s=this.getItem(this.userKeyStorageName)||this.prevUserKey;this.setItem(this.userKeyStorageName,e),null===(t=this.growingIO.emitter)||void 0===t||t.emit("SET_USERKEY",{newUserKey:e,oldUserKey:s,userId:this.userId}),s!==e&&(null===(i=this.growingIO.emitter)||void 0===i||i.emit("USERKEY_UPDATE",{newUserKey:e,oldUserKey:s,userId:this.userId})),this.prevUserKey=e}get gioId(){return this.getItem(this.gioIdStorageName)||""}set gioId(e){var t;const i=this.getItem(this.gioIdStorageName)||this.prevGioId;this.setItem(this.gioIdStorageName,e),i!==e&&(null===(t=this.growingIO.emitter)||void 0===t||t.emit("GIOID_UPDATE",{newGioId:e,oldGioId:i})),this.prevGioId=e}}class je{constructor(){var e;this.trackingId="g0",this.init=(e,t)=>{var i,s,r,n,o;K("Gio Web SDK 初始化中...","info");const{initOptions:a,currentPage:g,sendVisit:d,sendPage:l}=this.dataStore;a(e),this.storage=ve(this.vdsConfig),this.uploader=new Ce(this),this.userStore=new Ne(this),null===(i=this.emitter)||void 0===i||i.emit("OPTION_INITIALIZED",this),null===(r=null===(s=this.plugins)||void 0===s?void 0:s.gioEventAutoTracking)||void 0===r||r.main(),g.hookHistory(),g.parsePage(),this.vdsConfig.originalSource&&this.dataStore.setOriginalSource(),null===(n=this.emitter)||void 0===n||n.emit("SDK_INITIALIZED",this),this.gioSDKInitialized=!0,this.vdsConfig.gioSDKInitialized=!0,window[this.vds]=this.vdsConfig,K("Gio Web SDK 初始化完成！","success"),this.vdsConfig.forceLogin&&K("forceLogin已开启，请调用 identify 方法设置 openId 以继续上报!","info"),this.useEmbeddedInherit||d(),l(),null===(o=this.emitter)||void 0===o||o.emit(fe,this),F(t,this.trackingId)},this.sendVisit=(e,t)=>{this.dataStore.buildVisitEvent(e),F(t)},this.sendPage=(e,t)=>{this.dataStore.currentPage.buildPageEvent(e),F(t)},this.registerPlugins=(e,t)=>{h(e)?(e.forEach(((t,i)=>{var s,r;P(t)||o(t)?K("插件不合法，跳过加载!","warn"):(null===(s=t.js)||void 0===s?void 0:s.default)&&(e[i]=Object.assign(Object.assign({},null===(r=t.js)||void 0===r?void 0:r.default),{options:t.options}))})),e=f(e),this.plugins.installAll(e)):K("插件注册失败，请检查!","error"),F(t,this.plugins.pluginItems)},this.getPlugins=e=>{F(e,this.plugins.pluginItems)},this.setOption=(e,t,i)=>{let s;S(x(J),e)?(s=this.dataStore.setOption(e,t),s&&J[e]&&K(`已修改${J[e]}: ${t}`,"info")):(K(`不存在可修改的配置项：${e}，请检查后重试!`,"warn"),s=!1),F(i,s)},this.getOption=(e,t)=>{F(t,this.dataStore.getOption(e))},this.setGeneralProps=(e,t)=>{let i;l(e)&&!P(e)?(this.dataStore.generalProps=Object.assign(Object.assign({},this.dataStore.generalProps),e),x(this.dataStore.generalProps).forEach((e=>{S([void 0,null],this.dataStore.generalProps[e])&&(this.dataStore.generalProps[e]="")})),i=!0):(B("setGeneralProps"),i=!1),F(t,i)},this.clearGeneralProps=(e,t)=>{h(e)&&!P(e)?e.forEach((e=>{q(this.dataStore.generalProps,e)})):this.dataStore.generalProps={},F(t)},this.getDeviceId=e=>{F(e,this.userStore.uid)},this.identify=(e,t)=>{if(this.vdsConfig.forceLogin){if(!M(e))return void B("identify");const t=b(e).slice(0,1e3);this.userStore.uid=t,this.uploader.hoardingQueue.forEach(((e,i)=>this.uploader.hoardingQueue[i].deviceId=t)),this.dataStore.setOption("forceLogin",!1),this.uploader.initiateRequest()}else B("identify",!1,"forceLogin未开启");F(t)},this.setUserId=(e,t,i)=>{let s;if(M(b(e).trim())){const i=this.userStore.gioId;this.vdsConfig.idMapping&&(this.userStore.userKey=!o(t)&&b(t).length>0?b(t).slice(0,1e3):""),this.userStore.userId=b(e).slice(0,1e3),i&&i!==this.userStore.userId&&(this.userStore.sessionId=""),s=!0}else this.clearUserId(),B("setUserId"),s=!1;F(i,s)},this.clearUserId=e=>{this.userStore.userId="",this.userStore.userKey="",F(e)},this.setUserAttributes=(e,t,i)=>{var s,r;let n;!P(e)&&l(e)?(null===(r=null===(s=this.plugins)||void 0===s?void 0:s.gioCustomTracking)||void 0===r||r.buildUserAttributesEvent(e,t),n=!0):(B("setUserAttributes"),n=!1),F(i,n)},this.track=(e,t,i,s)=>{var r,n;((null===(n=null===(r=this.plugins)||void 0===r?void 0:r.gioCustomTracking)||void 0===n?void 0:n.buildCustomEvent)||function(){})(e,Object.assign(Object.assign({},this.dataStore.generalProps),l(t)&&!P(t)?t:{}),Object.assign(Object.assign({},i),{customEventType:1})),F(s)},this.trackTimerStart=(e,t)=>{let i;this.vdsConfig.dataCollect&&H(e,(()=>{i=Y(),this.dataStore.trackTimers[i]={eventName:e,leng:0,start:+Date.now()}})),F(t,i)},this.trackTimerPause=(e,t)=>{if(e&&this.dataStore.trackTimers[e]){const t=this.dataStore.trackTimers[e];t.start&&(t.leng=t.leng+(+Date.now()-t.start)),t.start=0}F(t)},this.trackTimerResume=(e,t)=>{if(e&&this.dataStore.trackTimers[e]){const t=this.dataStore.trackTimers[e];0===t.start&&(t.start=+Date.now())}F(t)},this.trackTimerEnd=(e,t,i)=>{let s;if(this.vdsConfig.dataCollect){const i=864e5;if(e&&this.dataStore.trackTimers[e]){const r=this.dataStore.trackTimers[e];if(0!==r.start){const e=+Date.now()-r.start;r.leng=e>0?r.leng+e:0}const{eventContextBuilder:n,eventConverter:o}=this.dataStore;o(Object.assign(Object.assign({eventType:"CUSTOM",eventName:r.eventName,attributes:$(Object.assign(Object.assign({},t),{event_duration:r.leng>i?0:r.leng/1e3}))},n()),{customEventType:0})),this.removeTimer(e),s=!0}else K("未查找到对应的计时器，请检查!","error"),s=!1}F(i,s)},this.removeTimer=(e,t)=>{e&&this.dataStore.trackTimers[e]&&delete this.dataStore.trackTimers[e],F(t)},this.clearTrackTimer=e=>{this.dataStore.trackTimers={},F(e)},this.sdkVersion="4.0.0",this.vds=window._gio_local_vds||"vds",this.utils=Object.assign(Object.assign({},U),G),this.emitter={all:e=e||new Map,on:function(t,i){var s=e.get(t);s?s.push(i):e.set(t,[i])},off:function(t,i){var s=e.get(t);s&&(i?s.splice(s.indexOf(i)>>>0,1):e.set(t,[]))},emit:function(t,i){var s=e.get(t);s&&s.slice().map((function(e){e(i)})),(s=e.get("*"))&&s.slice().map((function(e){e(t,i)}))}},this.useEmbeddedInherit=!1,this.useHybridInherit=!1,this.gioSDKInitialized=!1,this.plugins=new Ee(this),this.plugins.innerPluginInit(),this.dataStore=new Oe(this)}}var xe,ke;let De;const qe=window._gio_local_vds||"vds",Pe=null!==(ke=null===(xe=window[qe])||void 0===xe?void 0:xe.namespace)&&void 0!==ke?ke:"gdp";!function(){var e,t,i,s,r;if(null===(e=window[qe])||void 0===e?void 0:e.gioSDKInstalled)return De=window[Pe],void K("SDK重复加载，请检查是否重复加载SDK或接入其他平台SDK导致冲突!","warn");window[qe]=Object.assign(Object.assign({},null!==(t=window[qe])&&void 0!==t?t:{}),{gioSDKInstalled:!0});const n=new je;De=function(){var e;const t=arguments[0];if(a(t)&&S(z,t)&&n[t]){const e=v(O(arguments));if("init"===t){const t=(e=>{var t;return e.vdsConfig||e.gioSDKInitialized||(null===(t=window[e.vds])||void 0===t?void 0:t.gioSDKInitialized)?(K("SDK重复初始化，请检查是否重复加载SDK或接入其他平台SDK导致冲突!","warn"),!1):!(S(["","localhost","127.0.0.1"],location.hostname)&&!window._gr_ignore_local_rule&&(K("当前SDK不允许在本地环境初始化!","warn"),1))})(n);if(!t)return;const i=(e=>!P(f(e))||(K('SDK初始化失败，请使用 gdp("init", "您的GrowingIO项目 accountId", "您项目的 dataSourceId", options); 进行初始化!',"error"),!1))(e);if(!i)return;const s=(e=>{const t=p(e);let i=I(e);return M(b(t).trim())?(l(i)&&i||(i={}),{projectId:t,userOptions:i}):(K("SDK初始化失败，accountId 参数不合法!","error"),!1)})(e);if(!s)return;const r=(e=>{const t=e[1],i=e[2],s=I(e);return t&&a(t)?{dataSourceId:t,appId:a(i)?i:"",options:s}:(K("SDK初始化失败，dataSourceId 参数不合法!","error"),!1)})(e);if(!r)return;const{projectId:o}=s,{dataSourceId:g,appId:d,options:u}=r;n.init(Object.assign(Object.assign({},u),{projectId:o,dataSourceId:g,appId:d}),I(e))}else if("registerPlugins"===t)n.registerPlugins(...e);else{if(n.gioSDKInitialized&&n.vdsConfig)return n[t](...e);n.emitter.emit("UNINITIALIZED_CALL",arguments),K("SDK未初始化!","error")}}else S(W,t)?K(`方法 ${b(t)} 已被弃用，请移除!`,"warn"):K(`不存在名为 ${b(t)} 的方法调用!`,"error");window[qe]=Object.assign(Object.assign({},window[qe]),{_gr_ignore_local_rule:null!==(e=window._gr_ignore_local_rule)&&void 0!==e&&e,gioSDKVersion:n.sdkVersion,gioSDKFull:n.gioSDKFull,canIUse:e=>S(z,e)&&n[e]})};const o=null===(i=window[Pe])||void 0===i?void 0:i.q,g=null===(s=window[Pe])||void 0===s?void 0:s.e,d=null===(r=window[Pe])||void 0===r?void 0:r.ef;window[Pe]=De,window[Pe].e=g,window[Pe].ef=d,window.gdp=De,window.gdp.e=g,window.gdp.ef=d,h(o)&&!P(o)&&O(Array(o.length)).forEach((()=>{De.apply(null,o.shift())}))}();var Ae=De;export{Ae as default};
