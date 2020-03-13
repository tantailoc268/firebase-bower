!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app"],e):e((t=t||self).firebase)}(this,function(ne){"use strict";try{(function(){ne=ne&&Object.prototype.hasOwnProperty.call(ne,"default")?ne.default:ne;var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};var s=function(){return(s=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function f(t,s,a,c){return new(a=a||Promise)(function(e,n){function r(t){try{o(c.next(t))}catch(t){n(t)}}function i(t){try{o(c.throw(t))}catch(t){n(t)}}function o(t){t.done?e(t.value):function(e){return e instanceof a?e:new a(function(t){t(e)})}(t.value).then(r,i)}o((c=c.apply(t,s||[])).next())})}function _(n,r){var i,o,s,t,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return t={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,o&&(s=2&e[0]?o.return:e[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,e[1])).done)return s;switch(o=0,s&&(e=[2&e[0],s.value]),e[0]){case 0:case 1:s=e;break;case 4:return a.label++,{value:e[1],done:!1};case 5:a.label++,o=e[1],e=[0];continue;case 7:e=a.ops.pop(),a.trys.pop();continue;default:if(!(s=0<(s=a.trys).length&&s[s.length-1])&&(6===e[0]||2===e[0])){a=0;continue}if(3===e[0]&&(!s||e[1]>s[0]&&e[1]<s[3])){a.label=e[1];break}if(6===e[0]&&a.label<s[1]){a.label=s[1],s=e;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(e);break}s[2]&&a.ops.pop(),a.trys.pop();continue}e=r.call(n,a)}catch(t){e=[6,t],o=0}finally{i=s=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}}function a(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function r(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),s=[];try{for(;(void 0===e||0<e--)&&!(r=o.next()).done;)s.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s}var t,e,i,h=(i=Error,n(t=c,e=i),void(t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)),c);function o(){this.constructor=t}function c(t,e){var n=i.call(this,e)||this;return n.code=t,n.name="FirebaseError",Object.setPrototypeOf(n,c.prototype),Error.captureStackTrace&&Error.captureStackTrace(n,u.prototype.create),n}var u=(l.prototype.create=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];for(var r=e[0]||{},i=this.service+"/"+t,o=this.errors[t],s=o?function(t,r){return t.replace(p,function(t,e){var n=r[e];return null!=n?n.toString():"<"+e+"?>"})}(o,r):"Error",a=this.serviceName+": "+s+" ("+i+").",c=new h(i,a),u=0,l=Object.keys(r);u<l.length;u++){var f=l[u];"_"!==f.slice(-1)&&(f in c&&console.warn('Overwriting FirebaseError base field "'+f+'" can cause unexpected behavior.'),c[f]=r[f])}return c},l);function l(t,e,n){this.service=t,this.serviceName=e,this.errors=n}var p=/\{\$([^}]+)}/g,g=(d.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},d.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},d.prototype.setServiceProps=function(t){return this.serviceProps=t,this},d);function d(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}function v(n){return new Promise(function(t,e){n.onsuccess=function(){t(n.result)},n.onerror=function(){e(n.error)}})}function m(n,r,i){var o,t=new Promise(function(t,e){v(o=n[r].apply(n,i)).then(t,e)});return t.request=o,t}function y(t,n,e){e.forEach(function(e){Object.defineProperty(t.prototype,e,{get:function(){return this[n][e]},set:function(t){this[n][e]=t}})})}function b(e,n,r,t){t.forEach(function(t){t in r.prototype&&(e.prototype[t]=function(){return m(this[n],t,arguments)})})}function w(e,n,r,t){t.forEach(function(t){t in r.prototype&&(e.prototype[t]=function(){return this[n][t].apply(this[n],arguments)})})}function S(e,n,r,t){t.forEach(function(t){t in r.prototype&&(e.prototype[t]=function(){return function(t,e,n){var r=m(t,e,n);return r.then(function(t){if(t)return new E(t,r.request)})}(this[n],t,arguments)})})}function C(t){this._index=t}function E(t,e){this._cursor=t,this._request=e}function T(t){this._store=t}function I(n){this._tx=n,this.complete=new Promise(function(t,e){n.oncomplete=function(){t()},n.onerror=function(){e(n.error)},n.onabort=function(){e(n.error)}})}function k(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new I(n)}function P(t){this._db=t}y(C,"_index",["name","keyPath","multiEntry","unique"]),b(C,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),S(C,"_index",IDBIndex,["openCursor","openKeyCursor"]),y(E,"_cursor",["direction","key","primaryKey","value"]),b(E,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(n){n in IDBCursor.prototype&&(E.prototype[n]=function(){var e=this,t=arguments;return Promise.resolve().then(function(){return e._cursor[n].apply(e._cursor,t),v(e._request).then(function(t){if(t)return new E(t,e._request)})})})}),T.prototype.createIndex=function(){return new C(this._store.createIndex.apply(this._store,arguments))},T.prototype.index=function(){return new C(this._store.index.apply(this._store,arguments))},y(T,"_store",["name","keyPath","indexNames","autoIncrement"]),b(T,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),S(T,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),w(T,"_store",IDBObjectStore,["deleteIndex"]),I.prototype.objectStore=function(){return new T(this._tx.objectStore.apply(this._tx,arguments))},y(I,"_tx",["objectStoreNames","mode"]),w(I,"_tx",IDBTransaction,["abort"]),k.prototype.createObjectStore=function(){return new T(this._db.createObjectStore.apply(this._db,arguments))},y(k,"_db",["name","version","objectStoreNames"]),w(k,"_db",IDBDatabase,["deleteObjectStore","close"]),P.prototype.transaction=function(){return new I(this._db.transaction.apply(this._db,arguments))},y(P,"_db",["name","version","objectStoreNames"]),w(P,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(i){[T,C].forEach(function(t){i in t.prototype&&(t.prototype[i.replace("open","iterate")]=function(){var t=function(t){return Array.prototype.slice.call(t)}(arguments),e=t[t.length-1],n=this._store||this._index,r=n[i].apply(n,t.slice(0,-1));r.onsuccess=function(){e(r.result)}})})}),[C,T].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(t,n){var r=this,i=[];return new Promise(function(e){r.iterateCursor(t,function(t){t?(i.push(t.value),void 0===n||i.length!=n?t.continue():e(i)):e(i)})})})});var M,O="0.4.5",F=1e4,j="w:"+O,L="FIS_v2",A="https://firebaseinstallations.googleapis.com/v1",N=36e5,D=((M={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',M["not-registered"]="Firebase Installation is not registered.",M["installation-not-found"]="Firebase Installation not found.",M["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',M["app-offline"]="Could not process request. Application offline.",M["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",M),x=new u("installations","Installations",D);function R(t){return t instanceof h&&t.code.includes("request-failed")}function q(t){var e=t.projectId;return A+"/projects/"+e+"/installations"}function B(t){return{token:t.token,requestStatus:2,expiresIn:function(t){return Number(t.replace("s","000"))}(t.expiresIn),creationTime:Date.now()}}function K(r,i){return f(this,void 0,void 0,function(){var e,n;return _(this,function(t){switch(t.label){case 0:return[4,i.json()];case 1:return e=t.sent(),n=e.error,[2,x.create("request-failed",{requestName:r,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})]}})})}function V(t){var e=t.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function z(t,e){var n=e.refreshToken,r=V(t);return r.append("Authorization",function(t){return L+" "+t}(n)),r}function U(n){return f(this,void 0,void 0,function(){var e;return _(this,function(t){switch(t.label){case 0:return[4,n()];case 1:return 500<=(e=t.sent()).status&&e.status<600?[2,n()]:[2,e]}})})}function $(e){return new Promise(function(t){setTimeout(t,e)})}function H(t){return btoa(String.fromCharCode.apply(String,function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(r(arguments[e]));return t}(t))).replace(/\+/g,"-").replace(/\//g,"_")}var G=/^[cdef][\w-]{21}$/,W="";function J(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;var e=function(t){return H(t).substr(0,22)}(t);return G.test(e)?e:W}catch(t){return W}}function Y(t){return t.appName+"!"+t.appId}var Z=new Map;function Q(t,e){var n=Y(t);X(n,e),function(t,e){var n=et();n&&n.postMessage({key:t,fid:e});nt()}(n,e)}function X(t,e){var n,r,i=Z.get(t);if(i)try{for(var o=a(i),s=o.next();!s.done;s=o.next()){(0,s.value)(e)}}catch(t){n={error:t}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}var tt=null;function et(){return!tt&&"BroadcastChannel"in self&&((tt=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(t){X(t.data.key,t.data.fid)}),tt}function nt(){0===Z.size&&tt&&(tt.close(),tt=null)}var rt,it,ot,st="firebase-installations-database",at=1,ct="firebase-installations-store",ut=null;function lt(){return ut=ut||function(t,e,n){var r=m(indexedDB,"open",[t,e]),i=r.request;return i&&(i.onupgradeneeded=function(t){n&&n(new k(i.result,t.oldVersion,i.transaction))}),r.then(function(t){return new P(t)})}(st,at,function(t){switch(t.oldVersion){case 0:t.createObjectStore(ct)}})}function ft(s,a){return f(this,void 0,void 0,function(){var e,n,r,i,o;return _(this,function(t){switch(t.label){case 0:return e=Y(s),[4,lt()];case 1:return n=t.sent(),r=n.transaction(ct,"readwrite"),[4,(i=r.objectStore(ct)).get(e)];case 2:return o=t.sent(),[4,i.put(a,e)];case 3:return t.sent(),[4,r.complete];case 4:return t.sent(),o&&o.fid===a.fid||Q(s,a.fid),[2,a]}})})}function ht(i){return f(this,void 0,void 0,function(){var e,n,r;return _(this,function(t){switch(t.label){case 0:return e=Y(i),[4,lt()];case 1:return n=t.sent(),[4,(r=n.transaction(ct,"readwrite")).objectStore(ct).delete(e)];case 2:return t.sent(),[4,r.complete];case 3:return t.sent(),[2]}})})}function pt(a,c){return f(this,void 0,void 0,function(){var e,n,r,i,o,s;return _(this,function(t){switch(t.label){case 0:return e=Y(a),[4,lt()];case 1:return n=t.sent(),r=n.transaction(ct,"readwrite"),[4,(i=r.objectStore(ct)).get(e)];case 2:return o=t.sent(),void 0!==(s=c(o))?[3,4]:[4,i.delete(e)];case 3:return t.sent(),[3,6];case 4:return[4,i.put(s,e)];case 5:t.sent(),t.label=6;case 6:return[4,r.complete];case 7:return t.sent(),!s||o&&o.fid===s.fid||Q(a,s.fid),[2,s]}})})}function gt(i){return f(this,void 0,void 0,function(){var r,e,n;return _(this,function(t){switch(t.label){case 0:return[4,pt(i,function(t){var e=function(t){return vt(t||{fid:J(),registrationStatus:0})}(t),n=function(t,e){{if(0!==e.registrationStatus)return 1===e.registrationStatus?{installationEntry:e,registrationPromise:function(o){return f(this,void 0,void 0,function(){var e,n,r,i;return _(this,function(t){switch(t.label){case 0:return[4,dt(o)];case 1:e=t.sent(),t.label=2;case 2:return 1!==e.registrationStatus?[3,5]:[4,$(100)];case 3:return t.sent(),[4,dt(o)];case 4:return e=t.sent(),[3,2];case 5:return 0!==e.registrationStatus?[3,7]:[4,gt(o)];case 6:return n=t.sent(),r=n.installationEntry,(i=n.registrationPromise)?[2,i]:[2,r];case 7:return[2,e]}})})}(t)}:{installationEntry:e};if(!navigator.onLine){var n=Promise.reject(x.create("app-offline"));return{installationEntry:e,registrationPromise:n}}var r={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=function(r,i){return f(this,void 0,void 0,function(){var e,n;return _(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,7]),[4,function(a,t){var c=t.fid;return f(this,void 0,void 0,function(){var e,n,r,i,o,s;return _(this,function(t){switch(t.label){case 0:return e=q(a),n=V(a),r={fid:c,authVersion:L,appId:a.appId,sdkVersion:j},i={method:"POST",headers:n,body:JSON.stringify(r)},[4,U(function(){return fetch(e,i)})];case 1:return(o=t.sent()).ok?[4,o.json()]:[3,3];case 2:return s=t.sent(),[2,{fid:s.fid||c,registrationStatus:2,refreshToken:s.refreshToken,authToken:B(s.authToken)}];case 3:return[4,K("Create Installation",o)];case 4:throw t.sent()}})})}(r,i)];case 1:return e=t.sent(),[2,ft(r,e)];case 2:return R(n=t.sent())&&409===n.serverCode?[4,ht(r)]:[3,4];case 3:return t.sent(),[3,6];case 4:return[4,ft(r,{fid:i.fid,registrationStatus:0})];case 5:t.sent(),t.label=6;case 6:throw n;case 7:return[2]}})})}(t,r);return{installationEntry:r,registrationPromise:i}}}(i,e);return r=n.registrationPromise,n.installationEntry})];case 1:return(e=t.sent()).fid!==W?[3,3]:(n={},[4,r]);case 2:return[2,(n.installationEntry=t.sent(),n)];case 3:return[2,{installationEntry:e,registrationPromise:r}]}})})}function dt(t){return pt(t,function(t){if(!t)throw x.create("installation-not-found");return vt(t)})}function vt(t){return function(t){return 1===t.registrationStatus&&t.registrationTime+F<Date.now()}(t)?{fid:t.fid,registrationStatus:0}:t}function mt(t,c){var u=t.appConfig,l=t.platformLoggerProvider;return f(this,void 0,void 0,function(){var e,n,r,i,o,s,a;return _(this,function(t){switch(t.label){case 0:return e=function(t,e){var n=e.fid;return q(t)+"/"+n+"/authTokens:generate"}(u,c),n=z(u,c),(r=l.getImmediate({optional:!0}))&&n.append("x-firebase-client",r.getPlatformInfoString()),i={installation:{sdkVersion:j}},o={method:"POST",headers:n,body:JSON.stringify(i)},[4,U(function(){return fetch(e,o)})];case 1:return(s=t.sent()).ok?[4,s.json()]:[3,3];case 2:return a=t.sent(),[2,B(a)];case 3:return[4,K("Generate Auth Token",s)];case 4:throw t.sent()}})})}function yt(i,o){return void 0===o&&(o=!1),f(this,void 0,void 0,function(){var r,e,n;return _(this,function(t){switch(t.label){case 0:return[4,pt(i.appConfig,function(t){if(!wt(t))throw x.create("not-registered");var e=t.authToken;if(!o&&function(t){return 2===t.requestStatus&&!function(t){var e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+N}(t)}(e))return t;if(1===e.requestStatus)return r=function(r,i){return f(this,void 0,void 0,function(){var e,n;return _(this,function(t){switch(t.label){case 0:return[4,bt(r.appConfig)];case 1:e=t.sent(),t.label=2;case 2:return 1!==e.authToken.requestStatus?[3,5]:[4,$(100)];case 3:return t.sent(),[4,bt(r.appConfig)];case 4:return e=t.sent(),[3,2];case 5:return 0===(n=e.authToken).requestStatus?[2,yt(r,i)]:[2,n]}})})}(i,o),t;if(!navigator.onLine)throw x.create("app-offline");var n=function(t){var e={requestStatus:1,requestTime:Date.now()};return s(s({},t),{authToken:e})}(t);return r=function(i,o){return f(this,void 0,void 0,function(){var e,n,r;return _(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,8]),[4,mt(i,o)];case 1:return e=t.sent(),r=s(s({},o),{authToken:e}),[4,ft(i.appConfig,r)];case 2:return t.sent(),[2,e];case 3:return!R(n=t.sent())||401!==n.serverCode&&404!==n.serverCode?[3,5]:[4,ht(i.appConfig)];case 4:return t.sent(),[3,7];case 5:return r=s(s({},o),{authToken:{requestStatus:0}}),[4,ft(i.appConfig,r)];case 6:t.sent(),t.label=7;case 7:throw n;case 8:return[2]}})})}(i,n),n})];case 1:return e=t.sent(),r?[4,r]:[3,3];case 2:return n=t.sent(),[3,4];case 3:n=e.authToken,t.label=4;case 4:return[2,n]}})})}function bt(t){return pt(t,function(t){if(!wt(t))throw x.create("not-registered");return function(t){return 1===t.requestStatus&&t.requestTime+F<Date.now()}(t.authToken)?s(s({},t),{authToken:{requestStatus:0}}):t})}function wt(t){return void 0!==t&&2===t.registrationStatus}function _t(e,n){return void 0===n&&(n=!1),f(this,void 0,void 0,function(){return _(this,function(t){switch(t.label){case 0:return[4,function(n){return f(this,void 0,void 0,function(){var e;return _(this,function(t){switch(t.label){case 0:return[4,gt(n)];case 1:return(e=t.sent().registrationPromise)?[4,e]:[3,3];case 2:t.sent(),t.label=3;case 3:return[2]}})})}(e.appConfig)];case 1:return t.sent(),[4,yt(e,n)];case 2:return[2,t.sent().token]}})})}function St(o,s){return f(this,void 0,void 0,function(){var e,n,r,i;return _(this,function(t){switch(t.label){case 0:return e=function(t,e){var n=e.fid;return q(t)+"/"+n}(o,s),n=z(o,s),r={method:"DELETE",headers:n},[4,U(function(){return fetch(e,r)})];case 1:return(i=t.sent()).ok?[3,3]:[4,K("Delete Installation",i)];case 2:throw t.sent();case 3:return[2]}})})}function Ct(t,e){var n=t.appConfig;return function(t,e){et();var n=Y(t),r=Z.get(n);r||(r=new Set,Z.set(n,r)),r.add(e)}(n,e),function(){!function(t,e){var n=Y(t),r=Z.get(n);r&&(r.delete(e),0===r.size&&Z.delete(n),nt())}(n,e)}}function Et(t){return x.create("missing-app-config-values",{valueName:t})}function Tt(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}(rt=ne).INTERNAL.registerComponent(new g("installations",function(t){var e=t.getProvider("app").getImmediate(),n={appConfig:function(t){var e,n;if(!t||!t.options)throw Et("App Configuration");if(!t.name)throw Et("App Name");try{for(var r=a(["projectId","apiKey","appId"]),i=r.next();!i.done;i=r.next()){var o=i.value;if(!t.options[o])throw Et(o)}}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e),platformLoggerProvider:t.getProvider("platform-logger")};return{app:e,getId:function(){return function(i){return f(this,void 0,void 0,function(){var e,n,r;return _(this,function(t){switch(t.label){case 0:return[4,gt(i.appConfig)];case 1:return e=t.sent(),n=e.installationEntry,(r=e.registrationPromise)?r.catch(console.error):yt(i).catch(console.error),[2,n.fid]}})})}(n)},getToken:function(t){return _t(n,t)},delete:function(){return function(r){return f(this,void 0,void 0,function(){var e,n;return _(this,function(t){switch(t.label){case 0:return[4,pt(e=r.appConfig,function(t){if(!t||0!==t.registrationStatus)return t})];case 1:if(!(n=t.sent()))return[3,6];if(1!==n.registrationStatus)return[3,2];throw x.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw x.create("app-offline");case 3:return[4,St(e,n)];case 4:return t.sent(),[4,ht(e)];case 5:t.sent(),t.label=6;case 6:return[2]}})})}(n)},onIdChange:function(t){return Ct(n,t)}}},"PUBLIC")),rt.registerVersion("@firebase/installations",O),(ot=it=it||{})[ot.DEBUG=0]="DEBUG",ot[ot.VERBOSE=1]="VERBOSE",ot[ot.INFO=2]="INFO",ot[ot.WARN=3]="WARN",ot[ot.ERROR=4]="ERROR",ot[ot.SILENT=5]="SILENT";function It(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(e<t.logLevel)){var i=(new Date).toISOString();switch(e){case it.DEBUG:case it.VERBOSE:console.log.apply(console,Tt(["["+i+"]  "+t.name+":"],n));break;case it.INFO:console.info.apply(console,Tt(["["+i+"]  "+t.name+":"],n));break;case it.WARN:console.warn.apply(console,Tt(["["+i+"]  "+t.name+":"],n));break;case it.ERROR:console.error.apply(console,Tt(["["+i+"]  "+t.name+":"],n));break;default:throw new Error("Attempted to log a message with an invalid logType (value: "+e+")")}}}var kt=it.INFO,Pt=(Object.defineProperty(Mt.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in it))throw new TypeError("Invalid value assigned to `logLevel`");this._logLevel=t},enumerable:!0,configurable:!0}),Object.defineProperty(Mt.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!0,configurable:!0}),Mt.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._logHandler.apply(this,Tt([this,it.DEBUG],t))},Mt.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._logHandler.apply(this,Tt([this,it.VERBOSE],t))},Mt.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._logHandler.apply(this,Tt([this,it.INFO],t))},Mt.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._logHandler.apply(this,Tt([this,it.WARN],t))},Mt.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._logHandler.apply(this,Tt([this,it.ERROR],t))},Mt);function Mt(t){this.name=t,this._logLevel=kt,this._logHandler=It}var Ot,Ft=(jt.prototype.isCachedDataFresh=function(t,e){if(!e)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;var n=Date.now()-e,r=n<=t;return this.logger.debug("Config fetch cache check. Cache age millis: "+n+". Cache max age millis (minimumFetchIntervalMillis setting): "+t+". Is cache hit: "+r+"."),r},jt.prototype.fetch=function(s){return f(this,void 0,void 0,function(){var e,n,r,i,o;return _(this,function(t){switch(t.label){case 0:return[4,Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()])];case 1:return e=t.sent(),n=e[0],(r=e[1])&&this.isCachedDataFresh(s.cacheMaxAgeMillis,n)?[2,r]:(s.eTag=r&&r.eTag,[4,this.client.fetch(s)]);case 2:return i=t.sent(),o=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())],200===i.status&&o.push(this.storage.setLastSuccessfulFetchResponse(i)),[4,Promise.all(o)];case 3:return t.sent(),[2,i]}})})},jt);function jt(t,e,n,r){this.client=t,this.storage=e,this.storageCache=n,this.logger=r}var Lt=((Ot={})["registration-window"]="Undefined window object. This SDK only supports usage in a browser environment.",Ot["registration-project-id"]="Undefined project identifier. Check Firebase app initialization.",Ot["registration-api-key"]="Undefined API key. Check Firebase app initialization.",Ot["registration-app-id"]="Undefined app identifier. Check Firebase app initialization.",Ot["storage-open"]="Error thrown when opening storage. Original error: {$originalErrorMessage}.",Ot["storage-get"]="Error thrown when reading from storage. Original error: {$originalErrorMessage}.",Ot["storage-set"]="Error thrown when writing to storage. Original error: {$originalErrorMessage}.",Ot["storage-delete"]="Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",Ot["fetch-client-network"]="Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",Ot["fetch-timeout"]='The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',Ot["fetch-throttle"]='The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',Ot["fetch-client-parse"]="Fetch client could not parse response. Original error: {$originalErrorMessage}.",Ot["fetch-status"]="Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",Ot),At=new u("remoteconfig","Remote Config",Lt);var Nt=(Dt.prototype.fetch=function(w){return f(this,void 0,void 0,function(){var e,n,r,i,o,s,a,c,u,l,f,h,p,g,d,v,m,y,b;return _(this,function(t){switch(t.label){case 0:return[4,Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()])];case 1:e=t.sent(),n=e[0],r=e[1],i=window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com",o=i+"/v1/projects/"+this.projectId+"/namespaces/"+this.namespace+":fetch?key="+this.apiKey,s={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":w.eTag||"*"},a={sdk_version:this.sdkVersion,app_instance_id:n,app_instance_id_token:r,app_id:this.appId,language_code:function(t){return void 0===t&&(t=navigator),t.languages&&t.languages[0]||t.language}()},c={method:"POST",headers:s,body:JSON.stringify(a)},u=fetch(o,c),l=new Promise(function(t,e){w.signal.addEventListener(function(){var t=new Error("The operation was aborted.");t.name="AbortError",e(t)})}),t.label=2;case 2:return t.trys.push([2,5,,6]),[4,Promise.race([u,l])];case 3:return t.sent(),[4,u];case 4:return f=t.sent(),[3,6];case 5:throw h=t.sent(),p="fetch-client-network","AbortError"===h.name&&(p="fetch-timeout"),At.create(p,{originalErrorMessage:h.message});case 6:if(g=f.status,d=f.headers.get("ETag")||void 0,200!==f.status)return[3,11];y=void 0,t.label=7;case 7:return t.trys.push([7,9,,10]),[4,f.json()];case 8:return y=t.sent(),[3,10];case 9:throw b=t.sent(),At.create("fetch-client-parse",{originalErrorMessage:b.message});case 10:v=y.entries,m=y.state,t.label=11;case 11:if("INSTANCE_STATE_UNSPECIFIED"===m?g=500:"NO_CHANGE"===m?g=304:"NO_TEMPLATE"!==m&&"EMPTY_CONFIG"!==m||(v={}),304!==g&&200!==g)throw At.create("fetch-status",{httpStatus:g});return[2,{status:g,eTag:d,config:v}]}})})},Dt);function Dt(t,e,n,r,i,o){this.firebaseInstallations=t,this.sdkVersion=e,this.namespace=n,this.projectId=r,this.apiKey=i,this.appId=o}var xt=(Rt.prototype.addEventListener=function(t){this.listeners.push(t)},Rt.prototype.abort=function(){this.listeners.forEach(function(t){return t()})},Rt);function Rt(){this.listeners=[]}var qt=["1","true","t","yes","y","on"],Bt=(Kt.prototype.asString=function(){return this._value},Kt.prototype.asBoolean=function(){return"static"!==this._source&&0<=qt.indexOf(this._value.toLowerCase())},Kt.prototype.asNumber=function(){if("static"===this._source)return 0;var t=Number(this._value);return isNaN(t)&&(t=0),t},Kt.prototype.getSource=function(){return this._source},Kt);function Kt(t,e){void 0===e&&(e=""),this._source=t,this._value=e}var Vt=(zt.prototype.setLogLevel=function(t){switch(t){case"debug":this._logger.logLevel=it.DEBUG;break;case"silent":this._logger.logLevel=it.SILENT;break;default:this._logger.logLevel=it.ERROR}},Object.defineProperty(zt.prototype,"fetchTimeMillis",{get:function(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1},enumerable:!0,configurable:!0}),Object.defineProperty(zt.prototype,"lastFetchStatus",{get:function(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"},enumerable:!0,configurable:!0}),zt.prototype.activate=function(){return f(this,void 0,void 0,function(){var e,n,r;return _(this,function(t){switch(t.label){case 0:return[4,Promise.all([this._storage.getLastSuccessfulFetchResponse(),this._storage.getActiveConfigEtag()])];case 1:return e=t.sent(),n=e[0],r=e[1],n&&n.config&&n.eTag&&n.eTag!==r?[4,Promise.all([this._storageCache.setActiveConfig(n.config),this._storage.setActiveConfigEtag(n.eTag)])]:[2,!1];case 2:return t.sent(),[2,!0]}})})},zt.prototype.ensureInitialized=function(){var t=this;return this._initializePromise||(this._initializePromise=this._storageCache.loadFromStorage().then(function(){t._isInitializationComplete=!0})),this._initializePromise},zt.prototype.fetch=function(){return f(this,void 0,void 0,function(){var e,n,r,i=this;return _(this,function(t){switch(t.label){case 0:e=new xt,setTimeout(function(){return f(i,void 0,void 0,function(){return _(this,function(t){return e.abort(),[2]})})},this.settings.fetchTimeoutMillis),t.label=1;case 1:return t.trys.push([1,4,,6]),[4,this._client.fetch({cacheMaxAgeMillis:this.settings.minimumFetchIntervalMillis,signal:e})];case 2:return t.sent(),[4,this._storageCache.setLastFetchStatus("success")];case 3:return t.sent(),[3,6];case 4:return n=t.sent(),r=function(t,e){return t instanceof h&&-1!==t.code.indexOf(e)}(n,"fetch-throttle")?"throttle":"failure",[4,this._storageCache.setLastFetchStatus(r)];case 5:throw t.sent(),n;case 6:return[2]}})})},zt.prototype.fetchAndActivate=function(){return f(this,void 0,void 0,function(){return _(this,function(t){switch(t.label){case 0:return[4,this.fetch()];case 1:return t.sent(),[2,this.activate()]}})})},zt.prototype.getAll=function(){var n=this;return function(t,e){return void 0===t&&(t={}),void 0===e&&(e={}),Object.keys(s(s({},t),e))}(this._storageCache.getActiveConfig(),this.defaultConfig).reduce(function(t,e){return t[e]=n.getValue(e),t},{})},zt.prototype.getBoolean=function(t){return this.getValue(t).asBoolean()},zt.prototype.getNumber=function(t){return this.getValue(t).asNumber()},zt.prototype.getString=function(t){return this.getValue(t).asString()},zt.prototype.getValue=function(t){this._isInitializationComplete||this._logger.debug('A value was requested for key "'+t+'" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.');var e=this._storageCache.getActiveConfig();return e&&void 0!==e[t]?new Bt("remote",e[t]):this.defaultConfig&&void 0!==this.defaultConfig[t]?new Bt("default",String(this.defaultConfig[t])):(this._logger.debug('Returning static value for key "'+t+'". Define a default or remote value if this is unintentional.'),new Bt("static"))},zt);function zt(t,e,n,r,i){this.app=t,this._client=e,this._storageCache=n,this._storage=r,this._logger=i,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:6e4,minimumFetchIntervalMillis:432e5},this.defaultConfig={}}function Ut(t,e){var n=t.target.error||void 0;return At.create(e,{originalErrorMessage:n&&n.message})}var $t="app_namespace_store",Ht="firebase_remote_config",Gt=1;var Wt=(Jt.prototype.getLastFetchStatus=function(){return this.get("last_fetch_status")},Jt.prototype.setLastFetchStatus=function(t){return this.set("last_fetch_status",t)},Jt.prototype.getLastSuccessfulFetchTimestampMillis=function(){return this.get("last_successful_fetch_timestamp_millis")},Jt.prototype.setLastSuccessfulFetchTimestampMillis=function(t){return this.set("last_successful_fetch_timestamp_millis",t)},Jt.prototype.getLastSuccessfulFetchResponse=function(){return this.get("last_successful_fetch_response")},Jt.prototype.setLastSuccessfulFetchResponse=function(t){return this.set("last_successful_fetch_response",t)},Jt.prototype.getActiveConfig=function(){return this.get("active_config")},Jt.prototype.setActiveConfig=function(t){return this.set("active_config",t)},Jt.prototype.getActiveConfigEtag=function(){return this.get("active_config_etag")},Jt.prototype.setActiveConfigEtag=function(t){return this.set("active_config_etag",t)},Jt.prototype.getThrottleMetadata=function(){return this.get("throttle_metadata")},Jt.prototype.setThrottleMetadata=function(t){return this.set("throttle_metadata",t)},Jt.prototype.deleteThrottleMetadata=function(){return this.delete("throttle_metadata")},Jt.prototype.get=function(a){return f(this,void 0,void 0,function(){var o,s=this;return _(this,function(t){switch(t.label){case 0:return[4,this.openDbPromise];case 1:return o=t.sent(),[2,new Promise(function(n,e){var t=o.transaction([$t],"readonly").objectStore($t),r=s.createCompositeKey(a);try{var i=t.get(r);i.onerror=function(t){e(Ut(t,"storage-get"))},i.onsuccess=function(t){var e=t.target.result;n(e?e.value:void 0)}}catch(t){e(At.create("storage-get",{originalErrorMessage:t&&t.message}))}})]}})})},Jt.prototype.set=function(a,c){return f(this,void 0,void 0,function(){var o,s=this;return _(this,function(t){switch(t.label){case 0:return[4,this.openDbPromise];case 1:return o=t.sent(),[2,new Promise(function(t,e){var n=o.transaction([$t],"readwrite").objectStore($t),r=s.createCompositeKey(a);try{var i=n.put({compositeKey:r,value:c});i.onerror=function(t){e(Ut(t,"storage-set"))},i.onsuccess=function(){t()}}catch(t){e(At.create("storage-set",{originalErrorMessage:t&&t.message}))}})]}})})},Jt.prototype.delete=function(a){return f(this,void 0,void 0,function(){var o,s=this;return _(this,function(t){switch(t.label){case 0:return[4,this.openDbPromise];case 1:return o=t.sent(),[2,new Promise(function(t,e){var n=o.transaction([$t],"readwrite").objectStore($t),r=s.createCompositeKey(a);try{var i=n.delete(r);i.onerror=function(t){e(Ut(t,"storage-delete"))},i.onsuccess=function(){t()}}catch(t){e(At.create("storage-delete",{originalErrorMessage:t&&t.message}))}})]}})})},Jt.prototype.createCompositeKey=function(t){return[this.appId,this.appName,this.namespace,t].join()},Jt);function Jt(t,e,n,r){void 0===r&&(r=new Promise(function(e,n){var t=indexedDB.open(Ht,Gt);t.onerror=function(t){n(Ut(t,"storage-open"))},t.onsuccess=function(t){e(t.target.result)},t.onupgradeneeded=function(t){var e=t.target.result;switch(t.oldVersion){case 0:e.createObjectStore($t,{keyPath:"compositeKey"})}}})),this.appId=t,this.appName=e,this.namespace=n,this.openDbPromise=r}var Yt=(Zt.prototype.getLastFetchStatus=function(){return this.lastFetchStatus},Zt.prototype.getLastSuccessfulFetchTimestampMillis=function(){return this.lastSuccessfulFetchTimestampMillis},Zt.prototype.getActiveConfig=function(){return this.activeConfig},Zt.prototype.loadFromStorage=function(){return f(this,void 0,void 0,function(){var e,n,r,i,o,s;return _(this,function(t){switch(t.label){case 0:return e=this.storage.getLastFetchStatus(),n=this.storage.getLastSuccessfulFetchTimestampMillis(),r=this.storage.getActiveConfig(),[4,e];case 1:return(i=t.sent())&&(this.lastFetchStatus=i),[4,n];case 2:return(o=t.sent())&&(this.lastSuccessfulFetchTimestampMillis=o),[4,r];case 3:return(s=t.sent())&&(this.activeConfig=s),[2]}})})},Zt.prototype.setLastFetchStatus=function(t){return this.lastFetchStatus=t,this.storage.setLastFetchStatus(t)},Zt.prototype.setLastSuccessfulFetchTimestampMillis=function(t){return this.lastSuccessfulFetchTimestampMillis=t,this.storage.setLastSuccessfulFetchTimestampMillis(t)},Zt.prototype.setActiveConfig=function(t){return this.activeConfig=t,this.storage.setActiveConfig(t)},Zt);function Zt(t){this.storage=t}var Qt=(Xt.prototype.fetch=function(n){return f(this,void 0,void 0,function(){var e;return _(this,function(t){switch(t.label){case 0:return[4,this.storage.getThrottleMetadata()];case 1:return e=t.sent()||{backoffCount:0,throttleEndTimeMillis:Date.now()},[2,this.attemptFetch(n,e)]}})})},Xt.prototype.attemptFetch=function(i,t){var o=t.throttleEndTimeMillis,s=t.backoffCount;return f(this,void 0,void 0,function(){var e,n,r;return _(this,function(t){switch(t.label){case 0:return[4,function(i,o){return new Promise(function(t,e){var n=Math.max(o-Date.now(),0),r=setTimeout(t,n);i.addEventListener(function(){clearTimeout(r),e(At.create("fetch-throttle",{throttleEndTimeMillis:o}))})})}(i.signal,o)];case 1:t.sent(),t.label=2;case 2:return t.trys.push([2,5,,7]),[4,this.client.fetch(i)];case 3:return e=t.sent(),[4,this.storage.deleteThrottleMetadata()];case 4:return t.sent(),[2,e];case 5:if(!function(t){if(!(t instanceof h))return!1;var e=Number(t.httpStatus);return 429===e||500===e||503===e||504===e}(n=t.sent()))throw n;return r={throttleEndTimeMillis:Date.now()+function(t){var e=1e3*Math.pow(2,t),n=Math.round(.5*e*(Math.random()-.5)*2);return Math.min(144e5,e+n)}(s),backoffCount:s+1},[4,this.storage.setThrottleMetadata(r)];case 6:return t.sent(),[2,this.attemptFetch(i,r)];case 7:return[2]}})})},Xt);function Xt(t,e){this.client=t,this.storage=e}var te,ee="@firebase/remote-config";(te=ne).INTERNAL.registerComponent(new g("remoteConfig",function(t,e){var n=t.getProvider("app").getImmediate(),r=t.getProvider("installations").getImmediate();if("undefined"==typeof window)throw At.create("registration-window");var i=n.options,o=i.projectId,s=i.apiKey,a=i.appId;if(!o)throw At.create("registration-project-id");if(!s)throw At.create("registration-api-key");if(!a)throw At.create("registration-app-id");e=e||"firebase";var c=new Wt(a,n.name,e),u=new Yt(c),l=new Pt(ee);l.logLevel=it.ERROR;var f=new Nt(r,te.SDK_VERSION,e,o,s,a),h=new Qt(f,c),p=new Ft(h,c,u,l),g=new Vt(n,p,u,c,l);return g.ensureInitialized(),g},"PUBLIC").setMultipleInstances(!0)),te.registerVersion(ee,"0.1.16")}).apply(this,arguments)}catch(t){throw console.error(t),new Error("Cannot instantiate firebase-remote-config.js - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-remote-config.js.map
