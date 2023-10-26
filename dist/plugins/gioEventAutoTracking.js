var t,e,n=function(){return n=Object.assign||function(t){for(var e,n=1,r=arguments.length;r>n;n++)for(var i in e=arguments[n])({}).hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},n.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var r,i,o,a="function"==typeof Array.from?Array.from:(e||(e=1,r=function(t){return"function"==typeof t},i=function(t){var e=function(t){var e=Number(t);return isNaN(e)?0:0!==e&&isFinite(e)?(e>0?1:-1)*Math.floor(Math.abs(e)):e}(t);return Math.min(Math.max(e,0),9007199254740991)},o=function(t){var e=t.next();return!e.done&&e},t=function(t){var e,n,a,u=this,c=arguments.length>1?arguments[1]:void 0;if(void 0!==c){if(!r(c))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(e=arguments[2])}var s=function(t,e){if(null!=t&&null!=e){var n=t[e];if(null==n)return;if(!r(n))throw new TypeError(n+" is not a function");return n}}(t,function(t){if(null!=t){if(["string","number","boolean","symbol"].indexOf(typeof t)>-1)return Symbol.iterator;if("undefined"!=typeof Symbol&&"iterator"in Symbol&&Symbol.iterator in t)return Symbol.iterator;if("@@iterator"in t)return"@@iterator"}}(t));if(void 0!==s){n=r(u)?Object(new u):[];var l,h,d=s.call(t);if(null==d)throw new TypeError("Array.from requires an array-like or iterable object");for(a=0;;){if(!(l=o(d)))return n.length=a,n;h=l.value,n[a]=c?c.call(e,h,a):h,a++}}else{var f=Object(t);if(null==t)throw new TypeError("Array.from requires an array-like object - not null or undefined");var g,v=i(f.length);for(n=r(u)?Object(new u(v)):Array(v),a=0;v>a;)g=f[a],n[a]=c?c.call(e,g,a):g,a++;n.length=v}return n}),t),u=function(t){return"object"===h(t)&&!function(t){return s(["undefined","null"],h(t))}(t)},c=function(t){try{var e=l(t);return e[e.length-1]}catch(t){return}},s=function(t,e){return("array"===h(t)||"string"===h(t))&&t.indexOf(e)>=0},l=a,h=function(t){return{}.toString.call(t).slice(8,-1).toLowerCase()},d=function(t,e,r,i){void 0===i&&(i={}),document.addEventListener?t.addEventListener(e,r,n(n({},{capture:!0}),i)):t.attachEvent?t.attachEvent("on"+e,r):t["on"+e]=r};function f(t,e,n){if(n||2===arguments.length)for(var r,i=0,o=e.length;o>i;i++)!r&&i in e||(r||(r=[].slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||[].slice.call(e))}var g=function(t){try{return t()}catch(t){return}},v=function(t){return"number"===b(t)},p=function(t){return"object"===b(t)&&!function(t){return y(["undefined","null"],b(t))}(t)},m=function(t){return Array.isArray(t)&&"array"===b(t)},N=function(t,e){if(m(t))for(var n=0;n<t.length;n++)if(e(t[n]))return n;return-1},y=function(t,e){return("array"===b(t)||"string"===b(t))&&t.indexOf(e)>=0},w=a,E=function(t){return m(t)?0===t.length:p(t)?0===function(t){return p(t)?Object.keys(t):[]}(t).length:!t},x=function(t){if(m(t)){for(var e=0,n=[],r=0,i=t;r<i.length;r++){var o=i[r];o&&!E(o)&&(n[e++]=o)}return n}return t},b=function(t){return{}.toString.call(t).slice(8,-1).toLowerCase()},_=["body","br","canvas","clippath","defs","desc","g","hr","html","iframe","math","param","path","rect","script","style","text","title","tspan","use"],L=["button","reset","submit"],k=f(f([],L,!0),["file"],!1),C=["checkbox","color","radio","range"],T=f(f([],C,!0),["date","datetime-local","month","number","password","text","time","week"],!1),O=["tr","li","dt","dd"],I=f(["a","button","dl"],O,!0),S=["i","em","svg","img"],A=["i","span","em","b","strong","bdo"],P=/(^| |[^ ]+\-)(clear|clearfix|active|hover|enabled|current|selected|unselected|hidden|display|focus|disabled|undisabled|open|checked|unchecked|undefined|null|ng-|growing-)[^\. ]*/g,j=/^([a-zA-Z\-\_0-9]+)$/,D="data-growing-ignore",H="data-growing-container",X="data-growing-index",M="data-growing-title",F=function(t,e){var n;return null!==(n=g((function(){return t.hasAttribute(e)&&"false"!==t.getAttribute(e)})))&&void 0!==n?n:g((function(){return t.hasOwnPerporty(e)}))},B=function(t,e){var n;return null!==(n=g((function(){return t.getAttribute(e)})))&&void 0!==n?n:g((function(){return t.attributes[e].value}))},V=function(t){var e,n=!y(_,t.tagName.toLowerCase()),r=U(t);return n&&r&&y(A,null===(e=t.tagName)||void 0===e?void 0:e.toLowerCase())?V(r):t},G=function(t,e,n){if(void 0===e&&(e=5),void 0===n&&(n=0),!t.children)return!1;if("svg"===t.tagName.toLocaleLowerCase())return n>e;if(n>e)return!0;for(var r=0;r<t.children.length;r++){var i=t.children[r];if(G(i,e,n+1))return!0}return!1},W=function(t,e){var n=t.tagName.toLowerCase();if(!(t instanceof Element))return!1;if(F(t,D))return!1;if(y(_,n))return!1;if(y(["circleClick","circleHover","click"],e)){if("textarea"===n&&"click"===e)return!1;if("input"===n){if("click"===e&&!y(k,B(t,"type")))return!1;if(y(["circleClick","circleHover"],e)&&!y(f(f([],k,!0),T,!0),B(t,"type")))return!1}if(!K(t)&&G(t,5))return!1}return!0},R=function(t,e){return void 0===e&&(e=!1),w((null==t?void 0:t.childNodes)||[]).filter((function(t){return y(e?[Node.ELEMENT_NODE,Node.TEXT_NODE]:[Node.ELEMENT_NODE],t.nodeType)}))},U=function(t){return q(t.parentElement)?null:t.parentElement},q=function(t){return!t||y(["BODY","HTML","#document"],t.tagName)},K=function(t){return F(t,H)||y(I,t.tagName.toLowerCase())||"input"===t.tagName.toLowerCase()&&y(L,t.type)},Y=function(t){var e=R(t);return!E(e)&&e.every((function(t){var e=z(t),n=y(t.classList,"icon");return!(!e&&!n||$(t))}))},$=function(t){var e=R(t,!0);return!E(e)&&e.every((function(t){var e=t.nodeType===Node.TEXT_NODE,n=Z(t);return!(!e||!n)}))},z=function(t){return y(S,t.tagName.toLocaleLowerCase())},Z=function(t){var e=R(t,!0).filter((function(t){var e;return t.nodeType===Node.TEXT_NODE||y(A,null===(e=t.tagName)||void 0===e?void 0:e.toLowerCase())})).map((function(t){return J(t.textContent,t.textContent.length)}));return J(x(e).join(" "))},J=function(t,e){return void 0===e&&(e=50),t&&(null==(t=t.replace(/[\n \t]+/g," ").trim())?void 0:t.length)?t.slice(0,v(e)&&e>0?e:void 0):""},Q=/[^/]*.(bmp|jpg|jpeg|png|gif|svg|psd|webp|apng)/gi,tt=function(t,e){switch(e){case"a":return function(t){if(F(t,"href")){var e=B(t,"href");if(e&&0!==e.indexOf("javascript"))return e.slice(0,320)}return""}(t);case"img":return function(t){var e=t.src;if(e&&-1===e.indexOf("data:image")){var n=e.match(Q),r=E(n)?"":n[0];if(r.indexOf("%")>-1){var i=function(t,e){var n=-1;if(m(t))for(var r=0;r<t.length;r++)"%"===t[r]&&(n=r);return n}(r.split(""));r=r.substring(i+3,r.length)}return r}return""}(t);default:return""}},et={a:function(t){return Z(t)||it(t)||tt(t,"a")},button:function(t){return B(t,"name")||Z(t)||it(t)||ot(t)},img:function(t){return J(B(t,"alt"))||tt(t,"img")},input:function(t){if("password"===t.type)return"";var e,n,r=t instanceof HTMLInputElement&&y(k,t.type),i=F(t,"data-growing-track");if(r||i)return J(t.value);if(t instanceof HTMLInputElement&&y(C,t.type)){var o=void 0;return t.id&&(n=function(e){return e.htmlFor===t.id},o=(e=w(document.getElementsByTagName("label")))[N(e,n)]),o||(o=rt(t,(function(t){return"label"===t.tagName.toLowerCase()}))),at(t,o?Z(o):J(t.value))}return""},label:function(t){return Z(t)||it(t)||ot(t)},select:function(t){return J(w(t.options).filter((function(t){return t.selected})).map((function(t){return t.label})).join(", ")||t.value)},svg:function(t){var e;return R(t).some((function(t){var n;if(t.nodeType===Node.ELEMENT_NODE&&"use"===(null===(n=t.tagName)||void 0===n?void 0:n.toLowerCase())&&t.hasAttribute("xlink:href"))return e=t,!0})),e?e.getAttribute("xlink:href"):""},textarea:function(){return""},form:function(){return""}},nt=function(t,e){if(F(t,M)&&B(t,M))return J(B(t,M));if(F(t,"title")&&B(t,"title"))return J(B(t,"title"));var n=et[e];if(n)return n(t);var r=Z(t);return r?J(r):function(t){if("svg"===t.tagName)return!1;var e=R(t);return e.length>0&&e.every((function(t){return function(t){if("svg"===t.tagName)return!0;var e=R(t);if(E(e))return!0;var n=$(t);return!(!E(e)&&!n)}(t)}))}(t)&&!Y(t)?J(it(t)):Y(t)?J(ot(t)):""},rt=function(t,e){for(var n=t.parentElement;n&&!q(n);){if(e(n))return n;n=n.parentElement}},it=function(t){var e=R(t);return x(e.map((function(t){var e=Z(t);if($(t)&&e)return e}))).join(" ")},ot=function(t){var e;return R(t).some((function(t){var n,r=nt(t,null===(n=t.tagName)||void 0===n?void 0:n.toLowerCase());return!!r&&(e=r,!0)})),e},at=function(t,e){return y(["checkbox","radio"],t.type)?"".concat(e).concat((n=t.checked,"boolean"===b(n)?"("+t.checked+")":"")):e;var n},ut=function t(e,n,r,i,o){void 0===i&&(i=!0),void 0===o&&(o=[]);var a=this;this.originNode=e,this.deviceInfo=n,this.actionType=r,this.trackable=i,this.parentNodes=o,this._getIndex=function(){if(F(a.originNode,X)){var t=B(a.originNode,X);return/^\d{1,10}$/.test(t)&&t-0>0&&2147483647>t-0?+t:void(0>a.actionType.indexOf("circle")&&(c="".concat(t,"，index标记应为 大于 0 且小于 2147483647 的整数！"),console.log("%c [GrowingIO]：".concat(c),"color: #F59E0B;")))}if(y(["dd","dt"],a.tagName)){var e=U(a.originNode),n=e?R(e):[];if("dl"===e.tagName.toLowerCase()&&n.length>0){if("dd"===a.tagName){var r=N(n,(function(t){return t.isSameNode(a.originNode)}));if(r>-1)return(i=n.slice(0,r).filter((function(t){return"dt"===t.tagName.toLowerCase()}))).length-1+1}if("dt"===a.tagName){var i=n.filter((function(t){return"dt"===t.tagName.toLowerCase()}));return N(i,(function(t){return t.isSameNode(a.originNode)}))+1}}}if(a.isPureList){var o=N(a._pureList,(function(t){return t.isSameNode(a.originNode)}));return o>-1?(a.peerNodes=f([],a._pureList,!0),a.peerNodes.splice(o,1),o+1):void 0}if(a.isPseudoList){var u=N(a._pseudoList,(function(t){return t.isSameNode(a.originNode)}));return u>-1?(a.peerNodes=f([],a._pseudoList,!0),a.peerNodes.splice(u,1),u+1):void 0}var c},this._getSiblingNode=function(t,e){var n,r=U(t);if(!r)return[];for(var i=null!==(n=g((function(){return w(r.children)})))&&void 0!==n?n:[],o=[],a=0;a<i.length;a++){var u=i[a],c=i[a+1];if(!c||!e(u,c))break;E(o)?o.push(u,c):o.push(c)}return o},this._getIsPureList=function(){var t=a._getSiblingNode(a.originNode,(function(t,e){return t.tagName===e.tagName}));return!(1>t.length||!y(O,a.tagName)||(a._pureList=t,0))},this._getIsInPseudoList=function(){if(y(["th","td"],a.tagName))return!1;var t=a._getSiblingNode(a.originNode,(function(t,e){var n=t.tagName===e.tagName&&t.className===e.className,r=R(t),i=R(e),o=r.every((function(t,e){var n,r;return(null==t?void 0:t.tagName)===(null===(n=i[e])||void 0===n?void 0:n.tagName)&&(null==t?void 0:t.className)===(null===(r=i[e])||void 0===r?void 0:r.className)})),a=r.length===i.length&&o;return n&&a}));return t.length>=3&&(a._pseudoList=t,!0)},this._getClassList=function(t){var e;if(F(t,"name")&&B(t,"name"))return[B(t,"name")];var n=(null!==(e=B(t,"class"))&&void 0!==e?e:"").trim().split(" ");return E(n)?[]:n.filter((function(t){return t&&!P.test(t)&&j.test(t)})).sort()},this._getCurrentXpath=function(){return"/".concat(a.tagName).concat(a.id?"#"+a.id:"").concat(E(a.classList)?"":"."+a.classList.join("."))},this._getIsContainer=function(){return F(a.originNode,H)||y(I,a.tagName)||"input"===a.tagName&&y(L,a.originNode.type)},this._getContent=function(){a.content=nt(a.originNode,a.tagName)},this._getIsOutFlow=function(){var t=window.getComputedStyle(a.originNode).position;return y(["fixed","sticky"],t)},this._getRect=function(){var t=a.originNode.getBoundingClientRect(),e=t.top,n=t.bottom,r=t.left,i=t.right-r,o=n-e,u=a.deviceInfo,c=u.winHeight,s=u.winWidth;return e+o>c&&(o=c-e),r+i>s&&(i=s-r),{top:e,left:r,width:i,height:o}},this._getViewStatus=function(){var t=window.getComputedStyle(a.originNode),e=t.opacity,n=t.visibility,r=t.display,i=t.width,o=t.height,u=a.rect,c=u.top,s=u.left,l=u.width,h=u.height,d=a.deviceInfo,f=d.winWidth,g=d.winHeight;if(0===Number(e)||"hidden"===n||"none"===r||"0px"===i||"0px"===o)return"HIDDEN";var v=function(t,e){return document.elementFromPoint(t,e)===a.originNode};return g>c&&f>s&&l>0&&h>0?v(s+l/2,c+h/2)||v(s+1,c+1)||v(s+l-1,c+1)||v(s+1,c+h-1)||v(s+l-1,c+h-1)?"DISPLAYED":0>c+h||0>s+l?"OUTSIDE":"OBSCURED":"OUTSIDE"},this._getTriggerEvent=function(){return"input"===a.tagName&&y(T,a.originNode.type)||y(["select","textarea"],a.tagName)?"VIEW_CHANGE":"VIEW_CLICK"},this._getXParents=function(e,n){var r=e.parentElement,i=[];if(n.length>0)i.push.apply(i,n);else for(;r&&!q(r);)i.push(new t(r,void 0,a.actionType,W(r,a.actionType))),r=r.parentElement;return i},this.tagName=e.tagName.toLocaleLowerCase(),this.classList=this._getClassList(e),this.id=e.id,this.currentXpath=this._getCurrentXpath(),this.isIgnored=F(this.originNode,D),this.isContainer=this._getIsContainer(),this.isPureList=this._getIsPureList(),this.isPseudoList=this._getIsInPseudoList(),this.index=this._getIndex(),this.hyperlink=tt(e,this.tagName),this.content=nt(this.originNode,this.tagName),this.triggerEvent=this._getTriggerEvent(),this.isOutFlow=this._getIsOutFlow(),n&&(this.rect=this._getRect(),this.viewStatus=this._getViewStatus()),this.xParents=this._getXParents(e,o)},ct=function t(e,n,r,i,o){var a=this;this.origin=e,this.action=n,this.lengthThreshold=r,this.deviceInfo=i,this.parentNode=o,this.trackNodes=function(){var t;if(!a.trackable)return[];var e=[a.xNode];if(y(["click","circleClick","change"],a.actionType))for(var n=a._getParent();n;){if(!(null==n?void 0:n.xNode)||(null===(t=n.xNode)||void 0===t?void 0:t.isIgnored))return[];n.trackable&&e.push(n.xNode),n=n._getParent()}var r,i=[];return e.reverse().forEach((function(t,n){if(F(t.originNode,H)&&(i=[],r=void 0),v(t.index)&&!v(r)&&(r=t.index),v(r)&&(t.index=r),n===e.length-1)i.push(a.getGioNodeInfo(t));else{var o=t.isPureList||t.isPseudoList;(t.isContainer||o)&&i.push(a.getGioNodeInfo(t))}})),i},this.getGioNodeInfo=function(t){var e=a.computeXpath(t),n=e.skeleton,r=e.fullXpath,i=e.xcontent,o=t.hyperlink,u=t.index,c=t.peerNodes,s=t.content,l=t.triggerEvent,h=t.originNode;return{skeleton:n,xpath:n,fullXpath:r,xcontent:i,hyperlink:o,index:u,peerNodes:null!=c?c:[],content:J(s),triggerEvent:l,originNode:h}},this.computeXpath=function(t){var e,n="/"+t.tagName,r=t.currentXpath,i="/"+((t.id?"#"+t.id:"")+(E(t.classList)?"":"."+t.classList.join("."))||"-");return null===(e=t.xParents)||void 0===e||e.forEach((function(t,e){if(r=t.currentXpath+r,e<a.xpathThreshold-1){n="/"+t.tagName+n;var o=(t.id?"#"+t.id:"")+(E(t.classList)?"":"."+t.classList.join("."));i="/"+(o||"-")+i}})),{skeleton:n,fullXpath:r,xcontent:i}},this._getParent=function(){var e=U(a.originElement);if(e&&e.nodeName&&!q(e))return new t(e,a.actionType)},this.actionType=y(["circleClick","circleHover","click","change"],n)?n:"click",this.originElement=V(e),this.xpathThreshold=v(r)?r:4,this.trackable=W(this.originElement,this.actionType),this.originElement.isSameNode(e)||(o=null);var u=[];o&&o.xNode&&(u.push(o.xNode),o.xNode.xParents&&u.push.apply(u,o.xNode.xParents)),this.xNode=new ut(this.originElement,this.deviceInfo,this.actionType,this.trackable,u)},st=function(){function t(t){this.handler=t;var e=navigator.userAgent,n=/chrome/i.exec(e),r=/android/i.exec(e);this.hasTouch="ontouchstart"in window&&!(n&&!r)}return t.prototype.main=function(){for(var t=this.hasTouch?["touchstart"]:["mousedown"],e=this.hasTouch?["touchend","touchcancel"]:["mouseup","mouseleave"],n=this.hasTouch?["touchmove"]:["mousemove"],r=0,i=t;i.length>r;r++)d(window,i[r],this.touchStartHandler.bind(this));for(var o=0,a=n;a.length>o;o++)d(window,a[o],this.touchMoveHandler.bind(this));for(var u=0,c=e;c.length>u;u++)d(window,c[u],this.touchStopHandler.bind(this))},t.prototype.touchStartHandler=function(t){if(1>=t.which){var e=+Date.now();this.safeguard!==e&&(this.touchTimeout&&clearTimeout(this.touchTimeout),this.safeguard=e,this.touchEvent={time:e,target:t.target,x:this._page("x",t),y:this._page("y",t),isTrusted:!0,type:"click"})}},t.prototype.touchMoveHandler=function(t){var e=Math.abs(this._page("x",t)-(this.touchEvent&&this.touchEvent.x)||0),n=Math.abs(this._page("y",t)-(this.touchEvent&&this.touchEvent.y)||0);(e>10||n>10)&&(this.touchEvent=null)},t.prototype.touchStopHandler=function(t){var e=this,n=+Date.now()-(this.touchEvent&&this.touchEvent.time)||0;this.touchEvent&&200>n?this.touchTimeout=setTimeout((function(){e.handler(e.touchEvent),e.touchEvent=null}),200):this.touchEvent&&n>=200&&700>n&&(this.handler(this.touchEvent),this.touchEvent=null)},t.prototype._page=function(t,e){return(this.hasTouch?e.touches[0]:e)["page".concat(t.toUpperCase())]},t}(),lt={click:"VIEW_CLICK",change:"VIEW_CHANGE"},ht={name:"gioEventAutoTracking",method:function(t){var e=this;this.growingIO=t,this.main=function(){d(document,"change",e._handleAction),e.growingIO.vdsConfig.touch?new st(e._handleAction).main():d(document,"click",e._handleAction)},this._handleAction=function(t,r){var i,o,a,s,l=e.growingIO,d=l.vdsConfig,f=l.emitter,g=t.target;if(!d.autotrack||!g)return!1;if(!(null==g?void 0:g.tagName)||"circle-shape"===(null===(i=null==g?void 0:g.tagName)||void 0===i?void 0:i.toLowerCase())||"heatmap-page"===(null===(o=null==g?void 0:g.tagName)||void 0===o?void 0:o.toLowerCase())||(null===(a=null==g?void 0:g.id)||void 0===a?void 0:a.indexOf("__vconsole"))>-1||(null===(s=null==g?void 0:g.id)||void 0===s?void 0:s.indexOf("__giokit"))>-1)return!1;var v=new ct(g,t.type).trackNodes();if(function(t){return function(t){return Array.isArray(t)&&"array"===h(t)}(t)?0===t.length:u(t)?0===function(t){return u(t)?Object.keys(t):[]}(t).length:!t}(v))return!1;"click"!==t.type&&(v=[c(v)]),null==f||f.emit("ON_COMPOSE_BEFORE",{event:r,params:null!=t?t:{}}),v.forEach((function(r){var i=r.fullXpath,o=r.skeleton,a=r.xcontent,u=r.index,c=r.content,s=r.hyperlink;if(0>i.indexOf("#__giokit")&&0>i.indexOf("#__vconsole")&&(d.debug&&console.log("Action：",t.type,Date.now()),i)){var l=e.growingIO.dataStore,h=l.eventContextBuilder;(0,l.eventConverter)(n({eventType:lt[t.type],element:[{xpath:o,xcontent:a,textValue:c,index:u,hyperlink:s}]},h()))}}))}}};export{ht as default};
