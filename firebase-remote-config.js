!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app"],e):e((t=t||self).firebase)}(this,function(Jt){"use strict";try{(function(){Jt=Jt&&Jt.hasOwnProperty("default")?Jt.default:Jt;var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};var s=function(){return(s=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function f(o,s,a,c){return new(a=a||Promise)(function(t,e){function r(t){try{i(c.next(t))}catch(t){e(t)}}function n(t){try{i(c.throw(t))}catch(t){e(t)}}function i(e){e.done?t(e.value):new a(function(t){t(e.value)}).then(r,n)}i((c=c.apply(o,s||[])).next())})}function _(r,n){var i,o,s,t,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return t={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,o&&(s=2&e[0]?o.return:e[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,e[1])).done)return s;switch(o=0,s&&(e=[2&e[0],s.value]),e[0]){case 0:case 1:s=e;break;case 4:return a.label++,{value:e[1],done:!1};case 5:a.label++,o=e[1],e=[0];continue;case 7:e=a.ops.pop(),a.trys.pop();continue;default:if(!(s=0<(s=a.trys).length&&s[s.length-1])&&(6===e[0]||2===e[0])){a=0;continue}if(3===e[0]&&(!s||e[1]>s[0]&&e[1]<s[3])){a.label=e[1];break}if(6===e[0]&&a.label<s[1]){a.label=s[1],s=e;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(e);break}s[2]&&a.ops.pop(),a.trys.pop();continue}e=n.call(r,a)}catch(t){e=[6,t],o=0}finally{i=s=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}}function n(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,i,o=r.call(t),s=[];try{for(;(void 0===e||0<e--)&&!(n=o.next()).done;)s.push(n.value)}catch(t){i={error:t}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return s}var t,e,i,h=(i=Error,r(t=a,e=i),void(t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)),a);function o(){this.constructor=t}function a(t,e){var r=i.call(this,e)||this;return r.code=t,r.name="FirebaseError",Object.setPrototypeOf(r,a.prototype),Error.captureStackTrace&&Error.captureStackTrace(r,c.prototype.create),r}var c=(u.prototype.create=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];for(var n=e[0]||{},i=this.service+"/"+t,o=this.errors[t],s=o?function(t,n){return t.replace(p,function(t,e){var r=n[e];return null!=r?r.toString():"<"+e+"?>"})}(o,n):"Error",a=this.serviceName+": "+s+" ("+i+").",c=new h(i,a),u=0,l=Object.keys(n);u<l.length;u++){var f=l[u];"_"!==f.slice(-1)&&(f in c&&console.warn('Overwriting FirebaseError base field "'+f+'" can cause unexpected behavior.'),c[f]=n[f])}return c},u);function u(t,e,r){this.service=t,this.serviceName=e,this.errors=r}var p=/\{\$([^}]+)}/g,l=(g.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},g.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},g.prototype.setServiceProps=function(t){return this.serviceProps=t,this},g);function g(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}function d(r){return new Promise(function(t,e){r.onsuccess=function(){t(r.result)},r.onerror=function(){e(r.error)}})}function v(r,n,i){var o,t=new Promise(function(t,e){d(o=r[n].apply(r,i)).then(t,e)});return t.request=o,t}function m(t,r,e){e.forEach(function(e){Object.defineProperty(t.prototype,e,{get:function(){return this[r][e]},set:function(t){this[r][e]=t}})})}function y(e,r,n,t){t.forEach(function(t){t in n.prototype&&(e.prototype[t]=function(){return v(this[r],t,arguments)})})}function b(e,r,n,t){t.forEach(function(t){t in n.prototype&&(e.prototype[t]=function(){return this[r][t].apply(this[r],arguments)})})}function w(e,r,n,t){t.forEach(function(t){t in n.prototype&&(e.prototype[t]=function(){return function(t,e,r){var n=v(t,e,r);return n.then(function(t){if(t)return new E(t,n.request)})}(this[r],t,arguments)})})}function S(t){this._index=t}function E(t,e){this._cursor=t,this._request=e}function C(t){this._store=t}function T(r){this._tx=r,this.complete=new Promise(function(t,e){r.oncomplete=function(){t()},r.onerror=function(){e(r.error)},r.onabort=function(){e(r.error)}})}function I(t,e,r){this._db=t,this.oldVersion=e,this.transaction=new T(r)}function P(t){this._db=t}m(S,"_index",["name","keyPath","multiEntry","unique"]),y(S,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),w(S,"_index",IDBIndex,["openCursor","openKeyCursor"]),m(E,"_cursor",["direction","key","primaryKey","value"]),y(E,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(r){r in IDBCursor.prototype&&(E.prototype[r]=function(){var e=this,t=arguments;return Promise.resolve().then(function(){return e._cursor[r].apply(e._cursor,t),d(e._request).then(function(t){if(t)return new E(t,e._request)})})})}),C.prototype.createIndex=function(){return new S(this._store.createIndex.apply(this._store,arguments))},C.prototype.index=function(){return new S(this._store.index.apply(this._store,arguments))},m(C,"_store",["name","keyPath","indexNames","autoIncrement"]),y(C,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),w(C,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),b(C,"_store",IDBObjectStore,["deleteIndex"]),T.prototype.objectStore=function(){return new C(this._tx.objectStore.apply(this._tx,arguments))},m(T,"_tx",["objectStoreNames","mode"]),b(T,"_tx",IDBTransaction,["abort"]),I.prototype.createObjectStore=function(){return new C(this._db.createObjectStore.apply(this._db,arguments))},m(I,"_db",["name","version","objectStoreNames"]),b(I,"_db",IDBDatabase,["deleteObjectStore","close"]),P.prototype.transaction=function(){return new T(this._db.transaction.apply(this._db,arguments))},m(P,"_db",["name","version","objectStoreNames"]),b(P,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(i){[C,S].forEach(function(t){i in t.prototype&&(t.prototype[i.replace("open","iterate")]=function(){var t=function(t){return Array.prototype.slice.call(t)}(arguments),e=t[t.length-1],r=this._store||this._index,n=r[i].apply(r,t.slice(0,-1));n.onsuccess=function(){e(n.result)}})})}),[S,C].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(t,r){var n=this,i=[];return new Promise(function(e){n.iterateCursor(t,function(t){t?(i.push(t.value),void 0===r||i.length!=r?t.continue():e(i)):e(i)})})})});var k,M="0.3.9",O=1e4,F="w:"+M,j="FIS_v2",L="https://firebaseinstallations.googleapis.com/v1",A=36e5,N=((k={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',k["not-registered"]="Firebase Installation is not registered.",k["installation-not-found"]="Firebase Installation not found.",k["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',k["app-offline"]="Could not process request. Application offline.",k["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",k),D=new c("installations","Installations",N);function x(t){return t instanceof h&&t.code.includes("request-failed")}function R(t){var e=t.projectId;return L+"/projects/"+e+"/installations"}function q(t){return{token:t.token,requestStatus:2,expiresIn:function(t){return Number(t.replace("s","000"))}(t.expiresIn),creationTime:Date.now()}}function B(n,i){return f(this,void 0,void 0,function(){var e,r;return _(this,function(t){switch(t.label){case 0:return[4,i.json()];case 1:return e=t.sent(),r=e.error,[2,D.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}})})}function K(t){var e=t.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function V(t,e){var r=e.refreshToken,n=K(t);return n.append("Authorization",function(t){return j+" "+t}(r)),n}function z(r){return f(this,void 0,void 0,function(){var e;return _(this,function(t){switch(t.label){case 0:return[4,r()];case 1:return 500<=(e=t.sent()).status&&e.status<600?[2,r()]:[2,e]}})})}function U(e){return new Promise(function(t){setTimeout(t,e)})}function $(t){return btoa(String.fromCharCode.apply(String,function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(n(arguments[e]));return t}(t))).replace(/\+/g,"-").replace(/\//g,"_")}var H=/^[cdef][\w-]{21}$/,G="";function W(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;var e=function(t){return $(t).substr(0,22)}(t);return H.test(e)?e:G}catch(t){return G}}var J,Y,Z,Q="firebase-installations-database",X=1,tt="firebase-installations-store",et=null;function rt(){return et=et||function(t,e,r){var n=v(indexedDB,"open",[t,e]),i=n.request;return i&&(i.onupgradeneeded=function(t){r&&r(new I(i.result,t.oldVersion,i.transaction))}),n.then(function(t){return new P(t)})}(Q,X,function(t){switch(t.oldVersion){case 0:t.createObjectStore(tt)}})}function nt(i,o){return f(this,void 0,void 0,function(){var e,r,n;return _(this,function(t){switch(t.label){case 0:return e=st(i),[4,rt()];case 1:return r=t.sent(),[4,(n=r.transaction(tt,"readwrite")).objectStore(tt).put(o,e)];case 2:return t.sent(),[4,n.complete];case 3:return t.sent(),[2,o]}})})}function it(i){return f(this,void 0,void 0,function(){var e,r,n;return _(this,function(t){switch(t.label){case 0:return e=st(i),[4,rt()];case 1:return r=t.sent(),[4,(n=r.transaction(tt,"readwrite")).objectStore(tt).delete(e)];case 2:return t.sent(),[4,n.complete];case 3:return t.sent(),[2]}})})}function ot(a,c){return f(this,void 0,void 0,function(){var e,r,n,i,o,s;return _(this,function(t){switch(t.label){case 0:return e=st(a),[4,rt()];case 1:return r=t.sent(),n=r.transaction(tt,"readwrite"),[4,(i=n.objectStore(tt)).get(e)];case 2:return o=t.sent(),void 0!==(s=c(o))?[3,4]:[4,i.delete(e)];case 3:return t.sent(),[3,6];case 4:return[4,i.put(s,e)];case 5:t.sent(),t.label=6;case 6:return[4,n.complete];case 7:return t.sent(),[2,s]}})})}function st(t){return t.appName+"!"+t.appId}function at(i){return f(this,void 0,void 0,function(){var n,e,r;return _(this,function(t){switch(t.label){case 0:return[4,ot(i,function(t){var e=function(t){return ut(t||{fid:W(),registrationStatus:0})}(t),r=function(t,e){{if(0!==e.registrationStatus)return 1===e.registrationStatus?{installationEntry:e,registrationPromise:function(o){return f(this,void 0,void 0,function(){var e,r,n,i;return _(this,function(t){switch(t.label){case 0:return[4,ct(o)];case 1:e=t.sent(),t.label=2;case 2:return 1!==e.registrationStatus?[3,5]:[4,U(100)];case 3:return t.sent(),[4,ct(o)];case 4:return e=t.sent(),[3,2];case 5:return 0!==e.registrationStatus?[3,7]:[4,at(o)];case 6:return r=t.sent(),n=r.installationEntry,(i=r.registrationPromise)?[2,i]:[2,n];case 7:return[2,e]}})})}(t)}:{installationEntry:e};if(!navigator.onLine){var r=Promise.reject(D.create("app-offline"));return{installationEntry:e,registrationPromise:r}}var n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=function(n,i){return f(this,void 0,void 0,function(){var e,r;return _(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,7]),[4,function(a,t){var c=t.fid;return f(this,void 0,void 0,function(){var e,r,n,i,o,s;return _(this,function(t){switch(t.label){case 0:return e=R(a),r=K(a),n={fid:c,authVersion:j,appId:a.appId,sdkVersion:F},i={method:"POST",headers:r,body:JSON.stringify(n)},[4,z(function(){return fetch(e,i)})];case 1:return(o=t.sent()).ok?[4,o.json()]:[3,3];case 2:return s=t.sent(),[2,{fid:s.fid||c,registrationStatus:2,refreshToken:s.refreshToken,authToken:q(s.authToken)}];case 3:return[4,B("Create Installation",o)];case 4:throw t.sent()}})})}(n,i)];case 1:return e=t.sent(),[2,nt(n,e)];case 2:return x(r=t.sent())&&409===r.serverCode?[4,it(n)]:[3,4];case 3:return t.sent(),[3,6];case 4:return[4,nt(n,{fid:i.fid,registrationStatus:0})];case 5:t.sent(),t.label=6;case 6:throw r;case 7:return[2]}})})}(t,n);return{installationEntry:n,registrationPromise:i}}}(i,e);return n=r.registrationPromise,r.installationEntry})];case 1:return(e=t.sent()).fid!==G?[3,3]:(r={},[4,n]);case 2:return[2,(r.installationEntry=t.sent(),r)];case 3:return[2,{installationEntry:e,registrationPromise:n}]}})})}function ct(t){return ot(t,function(t){if(!t)throw D.create("installation-not-found");return ut(t)})}function ut(t){return function(t){return 1===t.registrationStatus&&t.registrationTime+O<Date.now()}(t)?{fid:t.fid,registrationStatus:0}:t}function lt(t,c){var u=t.appConfig,l=t.platformLoggerProvider;return f(this,void 0,void 0,function(){var e,r,n,i,o,s,a;return _(this,function(t){switch(t.label){case 0:return e=function(t,e){var r=e.fid;return R(t)+"/"+r+"/authTokens:generate"}(u,c),r=V(u,c),(n=l.getImmediate({optional:!0}))&&r.append("x-firebase-client",n.getPlatformInfoString()),i={installation:{sdkVersion:F}},o={method:"POST",headers:r,body:JSON.stringify(i)},[4,z(function(){return fetch(e,o)})];case 1:return(s=t.sent()).ok?[4,s.json()]:[3,3];case 2:return a=t.sent(),[2,q(a)];case 3:return[4,B("Generate Auth Token",s)];case 4:throw t.sent()}})})}function ft(i,o){return void 0===o&&(o=!1),f(this,void 0,void 0,function(){var n,e,r;return _(this,function(t){switch(t.label){case 0:return[4,ot(i.appConfig,function(t){if(!pt(t))throw D.create("not-registered");var e=t.authToken;if(!o&&function(t){return 2===t.requestStatus&&!function(t){var e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+A}(t)}(e))return t;if(1===e.requestStatus)return n=function(n,i){return f(this,void 0,void 0,function(){var e,r;return _(this,function(t){switch(t.label){case 0:return[4,ht(n.appConfig)];case 1:e=t.sent(),t.label=2;case 2:return 1!==e.authToken.requestStatus?[3,5]:[4,U(100)];case 3:return t.sent(),[4,ht(n.appConfig)];case 4:return e=t.sent(),[3,2];case 5:return 0===(r=e.authToken).requestStatus?[2,ft(n,i)]:[2,r]}})})}(i,o),t;if(!navigator.onLine)throw D.create("app-offline");var r=function(t){var e={requestStatus:1,requestTime:Date.now()};return s(s({},t),{authToken:e})}(t);return n=function(i,o){return f(this,void 0,void 0,function(){var e,r,n;return _(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,8]),[4,lt(i,o)];case 1:return e=t.sent(),n=s(s({},o),{authToken:e}),[4,nt(i.appConfig,n)];case 2:return t.sent(),[2,e];case 3:return!x(r=t.sent())||401!==r.serverCode&&404!==r.serverCode?[3,5]:[4,it(i.appConfig)];case 4:return t.sent(),[3,7];case 5:return n=s(s({},o),{authToken:{requestStatus:0}}),[4,nt(i.appConfig,n)];case 6:t.sent(),t.label=7;case 7:throw r;case 8:return[2]}})})}(i,r),r})];case 1:return e=t.sent(),n?[4,n]:[3,3];case 2:return r=t.sent(),[3,4];case 3:r=e.authToken,t.label=4;case 4:return[2,r]}})})}function ht(t){return ot(t,function(t){if(!pt(t))throw D.create("not-registered");return function(t){return 1===t.requestStatus&&t.requestTime+O<Date.now()}(t.authToken)?s(s({},t),{authToken:{requestStatus:0}}):t})}function pt(t){return void 0!==t&&2===t.registrationStatus}function gt(e,r){return void 0===r&&(r=!1),f(this,void 0,void 0,function(){return _(this,function(t){switch(t.label){case 0:return[4,function(r){return f(this,void 0,void 0,function(){var e;return _(this,function(t){switch(t.label){case 0:return[4,at(r)];case 1:return(e=t.sent().registrationPromise)?[4,e]:[3,3];case 2:t.sent(),t.label=3;case 3:return[2]}})})}(e.appConfig)];case 1:return t.sent(),[4,ft(e,r)];case 2:return[2,t.sent().token]}})})}function dt(o,s){return f(this,void 0,void 0,function(){var e,r,n,i;return _(this,function(t){switch(t.label){case 0:return e=function(t,e){var r=e.fid;return R(t)+"/"+r}(o,s),r=V(o,s),n={method:"DELETE",headers:r},[4,z(function(){return fetch(e,n)})];case 1:return(i=t.sent()).ok?[3,3]:[4,B("Delete Installation",i)];case 2:throw t.sent();case 3:return[2]}})})}function vt(t){var e,r;if(!t||!t.options)throw mt("App Configuration");if(!t.name)throw mt("App Name");try{for(var n=function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],r=0;return e?e.call(t):{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}}}(["projectId","apiKey","appId"]),i=n.next();!i.done;i=n.next()){var o=i.value;if(!t.options[o])throw mt(o)}}catch(t){e={error:t}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(e)throw e.error}}return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function mt(t){return D.create("missing-app-config-values",{valueName:t})}function yt(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),i=0;for(e=0;e<r;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)n[i]=o[s];return n}(J=Jt).INTERNAL.registerComponent(new l("installations",function(t){var e=t.getProvider("app").getImmediate(),r={appConfig:vt(e),platformLoggerProvider:t.getProvider("platform-logger")};return{app:e,getId:function(){return function(i){return f(this,void 0,void 0,function(){var e,r,n;return _(this,function(t){switch(t.label){case 0:return[4,at(i.appConfig)];case 1:return e=t.sent(),r=e.installationEntry,(n=e.registrationPromise)?n.catch(console.error):ft(i).catch(console.error),[2,r.fid]}})})}(r)},getToken:function(t){return gt(r,t)},delete:function(){return function(n){return f(this,void 0,void 0,function(){var e,r;return _(this,function(t){switch(t.label){case 0:return[4,ot(e=n.appConfig,function(t){if(!t||0!==t.registrationStatus)return t})];case 1:if(!(r=t.sent()))return[3,6];if(1!==r.registrationStatus)return[3,2];throw D.create("delete-pending-registration");case 2:if(2!==r.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw D.create("app-offline");case 3:return[4,dt(e,r)];case 4:return t.sent(),[4,it(e)];case 5:t.sent(),t.label=6;case 6:return[2]}})})}(r)}}},"PUBLIC")),J.registerVersion("@firebase/installations",M),(Z=Y=Y||{})[Z.DEBUG=0]="DEBUG",Z[Z.VERBOSE=1]="VERBOSE",Z[Z.INFO=2]="INFO",Z[Z.WARN=3]="WARN",Z[Z.ERROR=4]="ERROR",Z[Z.SILENT=5]="SILENT";function bt(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];if(!(e<t.logLevel)){var i=(new Date).toISOString();switch(e){case Y.DEBUG:case Y.VERBOSE:console.log.apply(console,yt(["["+i+"]  "+t.name+":"],r));break;case Y.INFO:console.info.apply(console,yt(["["+i+"]  "+t.name+":"],r));break;case Y.WARN:console.warn.apply(console,yt(["["+i+"]  "+t.name+":"],r));break;case Y.ERROR:console.error.apply(console,yt(["["+i+"]  "+t.name+":"],r));break;default:throw new Error("Attempted to log a message with an invalid logType (value: "+e+")")}}}var wt=Y.INFO,_t=(Object.defineProperty(St.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in Y))throw new TypeError("Invalid value assigned to `logLevel`");this._logLevel=t},enumerable:!0,configurable:!0}),Object.defineProperty(St.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!0,configurable:!0}),St.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._logHandler.apply(this,yt([this,Y.DEBUG],t))},St.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._logHandler.apply(this,yt([this,Y.VERBOSE],t))},St.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._logHandler.apply(this,yt([this,Y.INFO],t))},St.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._logHandler.apply(this,yt([this,Y.WARN],t))},St.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._logHandler.apply(this,yt([this,Y.ERROR],t))},St);function St(t){this.name=t,this._logLevel=wt,this._logHandler=bt}var Et,Ct=(Tt.prototype.isCachedDataFresh=function(t,e){if(!e)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;var r=Date.now()-e,n=r<=t;return this.logger.debug("Config fetch cache check. Cache age millis: "+r+". Cache max age millis (minimumFetchIntervalMillis setting): "+t+". Is cache hit: "+n+"."),n},Tt.prototype.fetch=function(s){return f(this,void 0,void 0,function(){var e,r,n,i,o;return _(this,function(t){switch(t.label){case 0:return[4,Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()])];case 1:return e=t.sent(),r=e[0],(n=e[1])&&this.isCachedDataFresh(s.cacheMaxAgeMillis,r)?[2,n]:(s.eTag=n&&n.eTag,[4,this.client.fetch(s)]);case 2:return i=t.sent(),o=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())],200===i.status&&o.push(this.storage.setLastSuccessfulFetchResponse(i)),[4,Promise.all(o)];case 3:return t.sent(),[2,i]}})})},Tt);function Tt(t,e,r,n){this.client=t,this.storage=e,this.storageCache=r,this.logger=n}var It=((Et={})["registration-window"]="Undefined window object. This SDK only supports usage in a browser environment.",Et["registration-project-id"]="Undefined project identifier. Check Firebase app initialization.",Et["registration-api-key"]="Undefined API key. Check Firebase app initialization.",Et["registration-app-id"]="Undefined app identifier. Check Firebase app initialization.",Et["storage-open"]="Error thrown when opening storage. Original error: {$originalErrorMessage}.",Et["storage-get"]="Error thrown when reading from storage. Original error: {$originalErrorMessage}.",Et["storage-set"]="Error thrown when writing to storage. Original error: {$originalErrorMessage}.",Et["storage-delete"]="Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",Et["fetch-client-network"]="Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",Et["fetch-timeout"]='The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',Et["fetch-throttle"]='The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',Et["fetch-client-parse"]="Fetch client could not parse response. Original error: {$originalErrorMessage}.",Et["fetch-status"]="Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",Et),Pt=new c("remoteconfig","Remote Config",It);var kt=(Mt.prototype.fetch=function(w){return f(this,void 0,void 0,function(){var e,r,n,i,o,s,a,c,u,l,f,h,p,g,d,v,m,y,b;return _(this,function(t){switch(t.label){case 0:return[4,Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()])];case 1:e=t.sent(),r=e[0],n=e[1],i=window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com",o=i+"/v1/projects/"+this.projectId+"/namespaces/"+this.namespace+":fetch?key="+this.apiKey,s={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":w.eTag||"*"},a={sdk_version:this.sdkVersion,app_instance_id:r,app_instance_id_token:n,app_id:this.appId,language_code:function(t){return void 0===t&&(t=navigator),t.languages&&t.languages[0]||t.language}()},c={method:"POST",headers:s,body:JSON.stringify(a)},u=fetch(o,c),l=new Promise(function(t,e){w.signal.addEventListener(function(){var t=new Error("The operation was aborted.");t.name="AbortError",e(t)})}),t.label=2;case 2:return t.trys.push([2,5,,6]),[4,Promise.race([u,l])];case 3:return t.sent(),[4,u];case 4:return f=t.sent(),[3,6];case 5:throw h=t.sent(),p="fetch-client-network","AbortError"===h.name&&(p="fetch-timeout"),Pt.create(p,{originalErrorMessage:h.message});case 6:if(g=f.status,d=f.headers.get("ETag")||void 0,200!==f.status)return[3,11];y=void 0,t.label=7;case 7:return t.trys.push([7,9,,10]),[4,f.json()];case 8:return y=t.sent(),[3,10];case 9:throw b=t.sent(),Pt.create("fetch-client-parse",{originalErrorMessage:b.message});case 10:v=y.entries,m=y.state,t.label=11;case 11:if("INSTANCE_STATE_UNSPECIFIED"===m?g=500:"NO_CHANGE"===m?g=304:"NO_TEMPLATE"!==m&&"EMPTY_CONFIG"!==m||(v={}),304!==g&&200!==g)throw Pt.create("fetch-status",{httpStatus:g});return[2,{status:g,eTag:d,config:v}]}})})},Mt);function Mt(t,e,r,n,i,o){this.firebaseInstallations=t,this.sdkVersion=e,this.namespace=r,this.projectId=n,this.apiKey=i,this.appId=o}var Ot=(Ft.prototype.addEventListener=function(t){this.listeners.push(t)},Ft.prototype.abort=function(){this.listeners.forEach(function(t){return t()})},Ft);function Ft(){this.listeners=[]}var jt=["1","true","t","yes","y","on"],Lt=(At.prototype.asString=function(){return this._value},At.prototype.asBoolean=function(){return"static"!==this._source&&0<=jt.indexOf(this._value.toLowerCase())},At.prototype.asNumber=function(){if("static"===this._source)return 0;var t=Number(this._value);return isNaN(t)&&(t=0),t},At.prototype.getSource=function(){return this._source},At);function At(t,e){void 0===e&&(e=""),this._source=t,this._value=e}var Nt=(Dt.prototype.setLogLevel=function(t){switch(t){case"debug":this._logger.logLevel=Y.DEBUG;break;case"silent":this._logger.logLevel=Y.SILENT;break;default:this._logger.logLevel=Y.ERROR}},Object.defineProperty(Dt.prototype,"fetchTimeMillis",{get:function(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1},enumerable:!0,configurable:!0}),Object.defineProperty(Dt.prototype,"lastFetchStatus",{get:function(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"},enumerable:!0,configurable:!0}),Dt.prototype.activate=function(){return f(this,void 0,void 0,function(){var e,r,n;return _(this,function(t){switch(t.label){case 0:return[4,Promise.all([this._storage.getLastSuccessfulFetchResponse(),this._storage.getActiveConfigEtag()])];case 1:return e=t.sent(),r=e[0],n=e[1],r&&r.config&&r.eTag&&r.eTag!==n?[4,Promise.all([this._storageCache.setActiveConfig(r.config),this._storage.setActiveConfigEtag(r.eTag)])]:[2,!1];case 2:return t.sent(),[2,!0]}})})},Dt.prototype.ensureInitialized=function(){var t=this;return this._initializePromise||(this._initializePromise=this._storageCache.loadFromStorage().then(function(){t._isInitializationComplete=!0})),this._initializePromise},Dt.prototype.fetch=function(){return f(this,void 0,void 0,function(){var e,r,n,i=this;return _(this,function(t){switch(t.label){case 0:e=new Ot,setTimeout(function(){return f(i,void 0,void 0,function(){return _(this,function(t){return e.abort(),[2]})})},this.settings.fetchTimeoutMillis),t.label=1;case 1:return t.trys.push([1,4,,6]),[4,this._client.fetch({cacheMaxAgeMillis:this.settings.minimumFetchIntervalMillis,signal:e})];case 2:return t.sent(),[4,this._storageCache.setLastFetchStatus("success")];case 3:return t.sent(),[3,6];case 4:return r=t.sent(),n=function(t,e){return t instanceof h&&-1!==t.code.indexOf(e)}(r,"fetch-throttle")?"throttle":"failure",[4,this._storageCache.setLastFetchStatus(n)];case 5:throw t.sent(),r;case 6:return[2]}})})},Dt.prototype.fetchAndActivate=function(){return f(this,void 0,void 0,function(){return _(this,function(t){switch(t.label){case 0:return[4,this.fetch()];case 1:return t.sent(),[2,this.activate()]}})})},Dt.prototype.getAll=function(){var r=this;return function(t,e){return void 0===t&&(t={}),void 0===e&&(e={}),Object.keys(s(s({},t),e))}(this._storageCache.getActiveConfig(),this.defaultConfig).reduce(function(t,e){return t[e]=r.getValue(e),t},{})},Dt.prototype.getBoolean=function(t){return this.getValue(t).asBoolean()},Dt.prototype.getNumber=function(t){return this.getValue(t).asNumber()},Dt.prototype.getString=function(t){return this.getValue(t).asString()},Dt.prototype.getValue=function(t){this._isInitializationComplete||this._logger.debug('A value was requested for key "'+t+'" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.');var e=this._storageCache.getActiveConfig();return e&&void 0!==e[t]?new Lt("remote",e[t]):this.defaultConfig&&void 0!==this.defaultConfig[t]?new Lt("default",String(this.defaultConfig[t])):(this._logger.debug('Returning static value for key "'+t+'". Define a default or remote value if this is unintentional.'),new Lt("static"))},Dt);function Dt(t,e,r,n,i){this.app=t,this._client=e,this._storageCache=r,this._storage=n,this._logger=i,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:6e4,minimumFetchIntervalMillis:432e5},this.defaultConfig={}}function xt(t,e){var r=t.target.error||void 0;return Pt.create(e,{originalErrorMessage:r&&r.message})}var Rt="app_namespace_store",qt="firebase_remote_config",Bt=1;var Kt=(Vt.prototype.getLastFetchStatus=function(){return this.get("last_fetch_status")},Vt.prototype.setLastFetchStatus=function(t){return this.set("last_fetch_status",t)},Vt.prototype.getLastSuccessfulFetchTimestampMillis=function(){return this.get("last_successful_fetch_timestamp_millis")},Vt.prototype.setLastSuccessfulFetchTimestampMillis=function(t){return this.set("last_successful_fetch_timestamp_millis",t)},Vt.prototype.getLastSuccessfulFetchResponse=function(){return this.get("last_successful_fetch_response")},Vt.prototype.setLastSuccessfulFetchResponse=function(t){return this.set("last_successful_fetch_response",t)},Vt.prototype.getActiveConfig=function(){return this.get("active_config")},Vt.prototype.setActiveConfig=function(t){return this.set("active_config",t)},Vt.prototype.getActiveConfigEtag=function(){return this.get("active_config_etag")},Vt.prototype.setActiveConfigEtag=function(t){return this.set("active_config_etag",t)},Vt.prototype.getThrottleMetadata=function(){return this.get("throttle_metadata")},Vt.prototype.setThrottleMetadata=function(t){return this.set("throttle_metadata",t)},Vt.prototype.deleteThrottleMetadata=function(){return this.delete("throttle_metadata")},Vt.prototype.get=function(a){return f(this,void 0,void 0,function(){var o,s=this;return _(this,function(t){switch(t.label){case 0:return[4,this.openDbPromise];case 1:return o=t.sent(),[2,new Promise(function(r,e){var t=o.transaction([Rt],"readonly").objectStore(Rt),n=s.createCompositeKey(a);try{var i=t.get(n);i.onerror=function(t){e(xt(t,"storage-get"))},i.onsuccess=function(t){var e=t.target.result;r(e?e.value:void 0)}}catch(t){e(Pt.create("storage-get",{originalErrorMessage:t&&t.message}))}})]}})})},Vt.prototype.set=function(a,c){return f(this,void 0,void 0,function(){var o,s=this;return _(this,function(t){switch(t.label){case 0:return[4,this.openDbPromise];case 1:return o=t.sent(),[2,new Promise(function(t,e){var r=o.transaction([Rt],"readwrite").objectStore(Rt),n=s.createCompositeKey(a);try{var i=r.put({compositeKey:n,value:c});i.onerror=function(t){e(xt(t,"storage-set"))},i.onsuccess=function(){t()}}catch(t){e(Pt.create("storage-set",{originalErrorMessage:t&&t.message}))}})]}})})},Vt.prototype.delete=function(a){return f(this,void 0,void 0,function(){var o,s=this;return _(this,function(t){switch(t.label){case 0:return[4,this.openDbPromise];case 1:return o=t.sent(),[2,new Promise(function(t,e){var r=o.transaction([Rt],"readwrite").objectStore(Rt),n=s.createCompositeKey(a);try{var i=r.delete(n);i.onerror=function(t){e(xt(t,"storage-delete"))},i.onsuccess=function(){t()}}catch(t){e(Pt.create("storage-delete",{originalErrorMessage:t&&t.message}))}})]}})})},Vt.prototype.createCompositeKey=function(t){return[this.appId,this.appName,this.namespace,t].join()},Vt);function Vt(t,e,r,n){void 0===n&&(n=new Promise(function(e,r){var t=indexedDB.open(qt,Bt);t.onerror=function(t){r(xt(t,"storage-open"))},t.onsuccess=function(t){e(t.target.result)},t.onupgradeneeded=function(t){var e=t.target.result;switch(t.oldVersion){case 0:e.createObjectStore(Rt,{keyPath:"compositeKey"})}}})),this.appId=t,this.appName=e,this.namespace=r,this.openDbPromise=n}var zt=(Ut.prototype.getLastFetchStatus=function(){return this.lastFetchStatus},Ut.prototype.getLastSuccessfulFetchTimestampMillis=function(){return this.lastSuccessfulFetchTimestampMillis},Ut.prototype.getActiveConfig=function(){return this.activeConfig},Ut.prototype.loadFromStorage=function(){return f(this,void 0,void 0,function(){var e,r,n,i,o,s;return _(this,function(t){switch(t.label){case 0:return e=this.storage.getLastFetchStatus(),r=this.storage.getLastSuccessfulFetchTimestampMillis(),n=this.storage.getActiveConfig(),[4,e];case 1:return(i=t.sent())&&(this.lastFetchStatus=i),[4,r];case 2:return(o=t.sent())&&(this.lastSuccessfulFetchTimestampMillis=o),[4,n];case 3:return(s=t.sent())&&(this.activeConfig=s),[2]}})})},Ut.prototype.setLastFetchStatus=function(t){return this.lastFetchStatus=t,this.storage.setLastFetchStatus(t)},Ut.prototype.setLastSuccessfulFetchTimestampMillis=function(t){return this.lastSuccessfulFetchTimestampMillis=t,this.storage.setLastSuccessfulFetchTimestampMillis(t)},Ut.prototype.setActiveConfig=function(t){return this.activeConfig=t,this.storage.setActiveConfig(t)},Ut);function Ut(t){this.storage=t}var $t=(Ht.prototype.fetch=function(r){return f(this,void 0,void 0,function(){var e;return _(this,function(t){switch(t.label){case 0:return[4,this.storage.getThrottleMetadata()];case 1:return e=t.sent()||{backoffCount:0,throttleEndTimeMillis:Date.now()},[2,this.attemptFetch(r,e)]}})})},Ht.prototype.attemptFetch=function(i,t){var o=t.throttleEndTimeMillis,s=t.backoffCount;return f(this,void 0,void 0,function(){var e,r,n;return _(this,function(t){switch(t.label){case 0:return[4,function(i,o){return new Promise(function(t,e){var r=Math.max(o-Date.now(),0),n=setTimeout(t,r);i.addEventListener(function(){clearTimeout(n),e(Pt.create("fetch-throttle",{throttleEndTimeMillis:o}))})})}(i.signal,o)];case 1:t.sent(),t.label=2;case 2:return t.trys.push([2,5,,7]),[4,this.client.fetch(i)];case 3:return e=t.sent(),[4,this.storage.deleteThrottleMetadata()];case 4:return t.sent(),[2,e];case 5:if(!function(t){if(!(t instanceof h))return!1;var e=Number(t.httpStatus);return 429===e||500===e||503===e||504===e}(r=t.sent()))throw r;return n={throttleEndTimeMillis:Date.now()+function(t){var e=1e3*Math.pow(2,t),r=Math.round(.5*e*(Math.random()-.5)*2);return Math.min(144e5,e+r)}(s),backoffCount:s+1},[4,this.storage.setThrottleMetadata(n)];case 6:return t.sent(),[2,this.attemptFetch(i,n)];case 7:return[2]}})})},Ht);function Ht(t,e){this.client=t,this.storage=e}var Gt,Wt="@firebase/remote-config";(Gt=Jt).INTERNAL.registerComponent(new l("remoteConfig",function(t,e){var r=t.getProvider("app").getImmediate(),n=t.getProvider("installations").getImmediate();if("undefined"==typeof window)throw Pt.create("registration-window");var i=r.options,o=i.projectId,s=i.apiKey,a=i.appId;if(!o)throw Pt.create("registration-project-id");if(!s)throw Pt.create("registration-api-key");if(!a)throw Pt.create("registration-app-id");e=e||"firebase";var c=new Kt(a,r.name,e),u=new zt(c),l=new _t(Wt);l.logLevel=Y.ERROR;var f=new kt(n,Gt.SDK_VERSION,e,o,s,a),h=new $t(f,c),p=new Ct(h,c,u,l),g=new Nt(r,p,u,c,l);return g.ensureInitialized(),g},"PUBLIC").setMultipleInstances(!0)),Gt.registerVersion(Wt,"0.1.10")}).apply(this,arguments)}catch(t){throw console.error(t),new Error("Cannot instantiate firebase-remote-config - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-remote-config.js.map
