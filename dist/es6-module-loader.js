/*
 *  es6-module-loader v1.0.0-alpha
 *  https://github.com/ModuleLoader/es6-module-loader
 *  Copyright (c) 2015 Guy Bedford, Luke Hoban, Addy Osmani; Licensed MIT
 */

!function(a){"object"==typeof exports?module.exports=a():"function"==typeof define&&define.amd?define(a):"undefined"!=typeof window?window.Promise=a():"undefined"!=typeof global?global.Promise=a():"undefined"!=typeof self&&(self.Promise=a())}(function(){var a;return function b(a,c,d){function e(g,h){if(!c[g]){if(!a[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};a[g][0].call(j.exports,function(b){var c=a[g][1][b];return e(c?c:b)},j,j.exports,b,a,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b){var c=a("../lib/decorators/unhandledRejection"),d=c(a("../lib/Promise"));b.exports="undefined"!=typeof global?global.Promise=d:"undefined"!=typeof self?self.Promise=d:d},{"../lib/Promise":2,"../lib/decorators/unhandledRejection":4}],2:[function(b,c){!function(a){"use strict";a(function(a){var b=a("./makePromise"),c=a("./Scheduler"),d=a("./env").asap;return b({scheduler:new c(d)})})}("function"==typeof a&&a.amd?a:function(a){c.exports=a(b)})},{"./Scheduler":3,"./env":5,"./makePromise":7}],3:[function(b,c){!function(a){"use strict";a(function(){function a(a){this._async=a,this._running=!1,this._queue=this,this._queueLen=0,this._afterQueue={},this._afterQueueLen=0;var b=this;this.drain=function(){b._drain()}}return a.prototype.enqueue=function(a){this._queue[this._queueLen++]=a,this.run()},a.prototype.afterQueue=function(a){this._afterQueue[this._afterQueueLen++]=a,this.run()},a.prototype.run=function(){this._running||(this._running=!0,this._async(this.drain))},a.prototype._drain=function(){for(var a=0;a<this._queueLen;++a)this._queue[a].run(),this._queue[a]=void 0;for(this._queueLen=0,this._running=!1,a=0;a<this._afterQueueLen;++a)this._afterQueue[a].run(),this._afterQueue[a]=void 0;this._afterQueueLen=0},a})}("function"==typeof a&&a.amd?a:function(a){c.exports=a()})},{}],4:[function(b,c){!function(a){"use strict";a(function(a){function b(a){throw a}function c(){}var d=a("../env").setTimer,e=a("../format");return function(a){function f(a){a.handled||(n.push(a),k("Potentially unhandled rejection ["+a.id+"] "+e.formatError(a.value)))}function g(a){var b=n.indexOf(a);b>=0&&(n.splice(b,1),l("Handled previous rejection ["+a.id+"] "+e.formatObject(a.value)))}function h(a,b){m.push(a,b),null===o&&(o=d(i,0))}function i(){for(o=null;m.length>0;)m.shift()(m.shift())}var j,k=c,l=c;"undefined"!=typeof console&&(j=console,k="undefined"!=typeof j.error?function(a){j.error(a)}:function(a){j.log(a)},l="undefined"!=typeof j.info?function(a){j.info(a)}:function(a){j.log(a)}),a.onPotentiallyUnhandledRejection=function(a){h(f,a)},a.onPotentiallyUnhandledRejectionHandled=function(a){h(g,a)},a.onFatalRejection=function(a){h(b,a.value)};var m=[],n=[],o=null;return a}})}("function"==typeof a&&a.amd?a:function(a){c.exports=a(b)})},{"../env":5,"../format":6}],5:[function(b,c){!function(a){"use strict";a(function(a){function b(){return"undefined"!=typeof process&&null!==process&&"function"==typeof process.nextTick}function c(){return"function"==typeof MutationObserver&&MutationObserver||"function"==typeof WebKitMutationObserver&&WebKitMutationObserver}function d(a){function b(){var a=c;c=void 0,a()}var c,d=document.createTextNode(""),e=new a(b);e.observe(d,{characterData:!0});var f=0;return function(a){c=a,d.data=f^=1}}var e,f="undefined"!=typeof setTimeout&&setTimeout,g=function(a,b){return setTimeout(a,b)},h=function(a){return clearTimeout(a)},i=function(a){return f(a,0)};if(b())i=function(a){return process.nextTick(a)};else if(e=c())i=d(e);else if(!f){var j=a,k=j("vertx");g=function(a,b){return k.setTimer(b,a)},h=k.cancelTimer,i=k.runOnLoop||k.runOnContext}return{setTimer:g,clearTimer:h,asap:i}})}("function"==typeof a&&a.amd?a:function(a){c.exports=a(b)})},{}],6:[function(b,c){!function(a){"use strict";a(function(){function a(a){var c="object"==typeof a&&null!==a&&a.stack?a.stack:b(a);return a instanceof Error?c:c+" (WARNING: non-Error used)"}function b(a){var b=String(a);return"[object Object]"===b&&"undefined"!=typeof JSON&&(b=c(a,b)),b}function c(a,b){try{return JSON.stringify(a)}catch(c){return b}}return{formatError:a,formatObject:b,tryStringify:c}})}("function"==typeof a&&a.amd?a:function(a){c.exports=a()})},{}],7:[function(b,c){!function(a){"use strict";a(function(){return function(a){function b(a,b){this._handler=a===t?b:c(a)}function c(a){function b(a){e.resolve(a)}function c(a){e.reject(a)}function d(a){e.notify(a)}var e=new v;try{a(b,c,d)}catch(f){c(f)}return e}function d(a){return I(a)?a:new b(t,new w(q(a)))}function e(a){return new b(t,new w(new z(a)))}function f(){return _}function g(){return new b(t,new v)}function h(a,b){var c=new v(a.receiver,a.join().context);return new b(t,c)}function i(a){return k(S,null,a)}function j(a,b){return k(N,a,b)}function k(a,c,d){function e(b,e,g){g.resolved||l(d,f,b,a(c,e,b),g)}function f(a,b,c){k[a]=b,0===--j&&c.become(new y(k))}for(var g,h="function"==typeof c?e:f,i=new v,j=d.length>>>0,k=new Array(j),m=0;m<d.length&&!i.resolved;++m)g=d[m],void 0!==g||m in d?l(d,h,m,g,i):--j;return 0===j&&i.become(new y(k)),new b(t,i)}function l(a,b,c,d,e){if(J(d)){var f=r(d),g=f.state();0===g?f.fold(b,c,void 0,e):g>0?b(c,f.value,e):(e.become(f),m(a,c+1,f))}else b(c,d,e)}function m(a,b,c){for(var d=b;d<a.length;++d)n(q(a[d]),c)}function n(a,b){if(a!==b){var c=a.state();0===c?a.visit(a,void 0,a._unreport):0>c&&a._unreport()}}function o(a){return"object"!=typeof a||null===a?e(new TypeError("non-iterable passed to race()")):0===a.length?f():1===a.length?d(a[0]):p(a)}function p(a){var c,d,e,f=new v;for(c=0;c<a.length;++c)if(d=a[c],void 0!==d||c in a){if(e=q(d),0!==e.state()){f.become(e),m(a,c+1,e);break}e.visit(f,f.resolve,f.reject)}return new b(t,f)}function q(a){return I(a)?a._handler.join():J(a)?s(a):new y(a)}function r(a){return I(a)?a._handler.join():s(a)}function s(a){try{var b=a.then;return"function"==typeof b?new x(b,a):new y(a)}catch(c){return new z(c)}}function t(){}function u(){}function v(a,c){b.createContext(this,c),this.consumers=void 0,this.receiver=a,this.handler=void 0,this.resolved=!1}function w(a){this.handler=a}function x(a,b){v.call(this),V.enqueue(new F(a,b,this))}function y(a){b.createContext(this),this.value=a}function z(a){b.createContext(this),this.id=++Z,this.value=a,this.handled=!1,this.reported=!1,this._report()}function A(a,b){this.rejection=a,this.context=b}function B(a){this.rejection=a}function C(){return new z(new TypeError("Promise cycle"))}function D(a,b){this.continuation=a,this.handler=b}function E(a,b){this.handler=b,this.value=a}function F(a,b,c){this._then=a,this.thenable=b,this.resolver=c}function G(a,b,c,d,e){try{a.call(b,c,d,e)}catch(f){d(f)}}function H(a,b,c,d){this.f=a,this.z=b,this.c=c,this.to=d,this.resolver=Y,this.receiver=this}function I(a){return a instanceof b}function J(a){return("object"==typeof a||"function"==typeof a)&&null!==a}function K(a,c,d,e){return"function"!=typeof a?e.become(c):(b.enterContext(c),O(a,c.value,d,e),void b.exitContext())}function L(a,c,d,e,f){return"function"!=typeof a?f.become(d):(b.enterContext(d),P(a,c,d.value,e,f),void b.exitContext())}function M(a,c,d,e,f){return"function"!=typeof a?f.notify(c):(b.enterContext(d),Q(a,c,e,f),void b.exitContext())}function N(a,b,c){try{return a(b,c)}catch(d){return e(d)}}function O(a,b,c,d){try{d.become(q(a.call(c,b)))}catch(e){d.become(new z(e))}}function P(a,b,c,d,e){try{a.call(d,b,c,e)}catch(f){e.become(new z(f))}}function Q(a,b,c,d){try{d.notify(a.call(c,b))}catch(e){d.notify(e)}}function R(a,b){b.prototype=X(a.prototype),b.prototype.constructor=b}function S(a,b){return b}function T(){}function U(){return"undefined"!=typeof process&&null!==process&&"function"==typeof process.emit?function(a,b){return"unhandledRejection"===a?process.emit(a,b.value,b):process.emit(a,b)}:"undefined"!=typeof self&&"function"==typeof CustomEvent?function(a,b,c){var d=!1;try{var e=new c("unhandledRejection");d=e instanceof c}catch(f){}return d?function(a,d){var e=new c(a,{detail:{reason:d.value,key:d},bubbles:!1,cancelable:!0});return!b.dispatchEvent(e)}:a}(T,self,CustomEvent):T}var V=a.scheduler,W=U(),X=Object.create||function(a){function b(){}return b.prototype=a,new b};b.resolve=d,b.reject=e,b.never=f,b._defer=g,b._handler=q,b.prototype.then=function(a,b,c){var d=this._handler,e=d.join().state();if("function"!=typeof a&&e>0||"function"!=typeof b&&0>e)return new this.constructor(t,d);var f=this._beget(),g=f._handler;return d.chain(g,d.receiver,a,b,c),f},b.prototype["catch"]=function(a){return this.then(void 0,a)},b.prototype._beget=function(){return h(this._handler,this.constructor)},b.all=i,b.race=o,b._traverse=j,b._visitRemaining=m,t.prototype.when=t.prototype.become=t.prototype.notify=t.prototype.fail=t.prototype._unreport=t.prototype._report=T,t.prototype._state=0,t.prototype.state=function(){return this._state},t.prototype.join=function(){for(var a=this;void 0!==a.handler;)a=a.handler;return a},t.prototype.chain=function(a,b,c,d,e){this.when({resolver:a,receiver:b,fulfilled:c,rejected:d,progress:e})},t.prototype.visit=function(a,b,c,d){this.chain(Y,a,b,c,d)},t.prototype.fold=function(a,b,c,d){this.when(new H(a,b,c,d))},R(t,u),u.prototype.become=function(a){a.fail()};var Y=new u;R(t,v),v.prototype._state=0,v.prototype.resolve=function(a){this.become(q(a))},v.prototype.reject=function(a){this.resolved||this.become(new z(a))},v.prototype.join=function(){if(!this.resolved)return this;for(var a=this;void 0!==a.handler;)if(a=a.handler,a===this)return this.handler=C();return a},v.prototype.run=function(){var a=this.consumers,b=this.handler;this.handler=this.handler.join(),this.consumers=void 0;for(var c=0;c<a.length;++c)b.when(a[c])},v.prototype.become=function(a){this.resolved||(this.resolved=!0,this.handler=a,void 0!==this.consumers&&V.enqueue(this),void 0!==this.context&&a._report(this.context))},v.prototype.when=function(a){this.resolved?V.enqueue(new D(a,this.handler)):void 0===this.consumers?this.consumers=[a]:this.consumers.push(a)},v.prototype.notify=function(a){this.resolved||V.enqueue(new E(a,this))},v.prototype.fail=function(a){var b="undefined"==typeof a?this.context:a;this.resolved&&this.handler.join().fail(b)},v.prototype._report=function(a){this.resolved&&this.handler.join()._report(a)},v.prototype._unreport=function(){this.resolved&&this.handler.join()._unreport()},R(t,w),w.prototype.when=function(a){V.enqueue(new D(a,this))},w.prototype._report=function(a){this.join()._report(a)},w.prototype._unreport=function(){this.join()._unreport()},R(v,x),R(t,y),y.prototype._state=1,y.prototype.fold=function(a,b,c,d){L(a,b,this,c,d)},y.prototype.when=function(a){K(a.fulfilled,this,a.receiver,a.resolver)};var Z=0;R(t,z),z.prototype._state=-1,z.prototype.fold=function(a,b,c,d){d.become(this)},z.prototype.when=function(a){"function"==typeof a.rejected&&this._unreport(),K(a.rejected,this,a.receiver,a.resolver)},z.prototype._report=function(a){V.afterQueue(new A(this,a))},z.prototype._unreport=function(){this.handled||(this.handled=!0,V.afterQueue(new B(this)))},z.prototype.fail=function(a){this.reported=!0,W("unhandledRejection",this),b.onFatalRejection(this,void 0===a?this.context:a)},A.prototype.run=function(){this.rejection.handled||this.rejection.reported||(this.rejection.reported=!0,W("unhandledRejection",this.rejection)||b.onPotentiallyUnhandledRejection(this.rejection,this.context))},B.prototype.run=function(){this.rejection.reported&&(W("rejectionHandled",this.rejection)||b.onPotentiallyUnhandledRejectionHandled(this.rejection))},b.createContext=b.enterContext=b.exitContext=b.onPotentiallyUnhandledRejection=b.onPotentiallyUnhandledRejectionHandled=b.onFatalRejection=T;var $=new t,_=new b(t,$);return D.prototype.run=function(){this.handler.join().when(this.continuation)},E.prototype.run=function(){var a=this.handler.consumers;if(void 0!==a)for(var b,c=0;c<a.length;++c)b=a[c],M(b.progress,this.value,this.handler,b.receiver,b.resolver)},F.prototype.run=function(){function a(a){d.resolve(a)}function b(a){d.reject(a)}function c(a){d.notify(a)}var d=this.resolver;G(this._then,this.thenable,a,b,c)},H.prototype.fulfilled=function(a){this.f.call(this.c,this.z,a,this.to)},H.prototype.rejected=function(a){this.to.reject(a)},H.prototype.progress=function(a){this.to.notify(a)},b}})}("function"==typeof a&&a.amd?a:function(a){c.exports=a()})},{}]},{},[1])(1)}),function(a){function b(){this._loader={loaderObj:this,resolve:void 0,fetch:void 0,translate:void 0,instantiate:void 0,haveGraph:!1,registry:{}}}function c(a,b,c){return a.registry[b]||(a.registry[b]={key:b,state:H,metadata:c||{},fetch:void 0,translate:void 0,instantiate:void 0,dependencies:void 0,module:void 0,declare:void 0,error:null})}function d(a,b,c){b.fetch=b.fetch||E.resolve(c),b.state=I}function e(a,b,c){b.translate=b.translate||E.resolve(c),b.state=J}function f(a,b,c,d){return b.instantiate=b.instantiate||E.resolve(c),g(a,b,c,d)}function g(a,b,d,e){if(void 0===d){var f=b.key,g=a.loaderObj.parse(f,e,b.metadata);b.declare=g.declare;for(var h=[],i=[],k=0,l=g.deps.length;l>k;k++)(function(d){i.push(E.resolve().then(function(){return a.resolve(d,f,b.metadata)})["catch"](function(a){throw s(a,"Resolving "+name+", "+f)}).then(function(b){var d=c(a,b);return h.push(d),d.state===L?d:void j(a,b,null,d)}))})(g.deps[k]);return E.all(i).then(function(){return b.dependencies=h,b.state=K,b})}return b.dependencies=[],b.module=d,b}function h(a,b,d,e){return e=e||c(a,b,d),e.error?E.reject(e.error):e.state===L?E.reject(new Error(b+" cannot be fetched as it is already linked.")):e.fetch?e.fetch:e.fetch=E.resolve().then(function(){return a.fetch(b,e.metadata)})["catch"](function(a){throw e.error=s(a,"Fetching "+b)}).then(function(a){return e.state=I,a})}function i(a,b,d,e){return e=e||c(a,b,d),e.error?E.reject(e.error):e.state===L?E.reject(new Error(b+" cannot initiate translate as it is already linked.")):e.translate?e.translate:e.translate=h(a,b,null,e).then(function(c){return E.resolve().then(function(){return a.translate(b,c,e.metadata)})["catch"](function(a){throw e.error=s(a,"Translating "+b)})}).then(function(a){return e.state=J,a})}function j(a,b,d,e){return e=e||c(a,b,d),e.error?E.reject(e.error):e.state===L?E.reject(new Error(b+" cannot instantiate as it is already linked.")):e.instantiate?e.instantiate:e.instantiate=i(a,b,null,e).then(function(c){return E.resolve().then(function(){return a.instantiate(b,c,e.metadata)})["catch"](function(a){throw e.error=s(a,"Instantiating "+b)}).then(function(b){return g(a,e,b,c)})})}function k(a,b,d,e){return e=e||c(a,b,d),e.error?E.reject(e.error):e.state===L?E.resolve(e):j(a,b,null,e).then(function(a){return n(a)}).then(function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];d.state==K&&"function"==typeof d.module&&(m(d),d.state=L)}return e.state==K&&p(e),e},function(a){throw e.error=a,a})}function l(a,b,d,e){return e=e||c(a,b,d),k(a,b,d,e).then(function(a){var c=a.module;if(c instanceof u)return c;var d=q(c,[]);if(d)throw d=s(d,"Error evaluating "+b),a.error=d,d;return c.module},function(a){throw e.error=a,a})}function m(a){if(a.error)throw a.error;try{a.module=a.module()}catch(b){throw a.error=b,b}}function n(a){var b=[];return o(a,b).then(function(){return b})["catch"](function(b){throw s(b,"Loading "+a.key)})}function o(a,b){if(-1==F.call(b,a)){b.push(a);for(var c=E.resolve(),d=0,e=a.dependencies.length;e>d;d++)(function(a){c=c.then(function(){return E.resolve(a.instantiate).then(function(){return o(a,b)})})})(a.dependencies[d]);return c}}function p(b){var c=b.module=t(b.key),d=c.module,e=b.declare.call(a,function(a,b){c.locked=!0,d[a]=b;for(var e=0,f=c.importers.length;f>e;e++){var g=c.importers[e];if(!g.locked){var h=F.call(g.dependencies,c);g.setters[h](d)}}return c.locked=!1,b});c.setters=e.setters,c.execute=e.execute;for(var f=0,g=b.dependencies.length;g>f;f++){var h=b.dependencies[f];h.module||p(h);var i=h.module;i instanceof u?c.dependencies.push(null):(c.dependencies.push(i),i.importers.push(c)),c.setters[f]&&c.setters[f](i.module)}b.state=L}function q(a,b){if(-1==F.call(b,a)){if(a.error)return a.error;b.push(a);for(var c,d=a.dependencies,e=0,f=d.length;f>e;e++){var g=d[e];if(g&&(c=q(d[e],b)))return a.error=s(c,"Error evaluating "+g.key),a.error}return c=r(a),c&&(a.error=c),c}}function r(a){try{a.execute.call({})}catch(b){return b}}function s(a,b){var c;if(a instanceof Error){var c=new a.constructor(a.message,a.fileName,a.lineNumber);c.message=a.message+"\n  "+b,c.stack=a.stack}else c=a+"\n  "+b;return c}function t(a){return P[a]||(P[a]={key:a,dependencies:[],module:new u({}),importers:[],locked:!1,error:null})}function u(a){for(var b in a)this[b]=a[b]}function v(a,b,c){var d=this.traceurOptions||{};d.modules="instantiate",d.script=!1,d.sourceMaps="inline",d.inputSourceMap=c.sourceMap,d.filename=a;var e=new O.Compiler(d),b=w(b,e,d.filename);return b+="!eval"}function w(a,b,c){try{return b.compile(a,c)}catch(d){throw d[0]||d}}function x(a,b){var c=this.babelOptions||{};c.modules="system",c.sourceMap="inline",c.filename=a,c.code=!0,c.ast=!1,c.blacklist=c.blacklist||[],c.blacklist.push("react");var b=O.transform(b,c).code;return b+"\n//# sourceURL="+a+"!eval"}function y(b,c){var d,e=a.System=a.System||V,f=e.register;return e.register=function(a,b){d={deps:a,declare:b}},z(c),e.register=f,d}function z(a){try{eval.call({},a)}catch(b){throw("SyntaxError"==b.name||"TypeError"==b.name)&&(b.message="Evaluating "+key+"\n	"+b.message),b}}function A(a,b){if("string"!=typeof a)throw new TypeError("URL must be a string");var c=String(a).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(?:\/\/(?:([^:@\/?#]*)(?::([^:@\/?#]*))?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);if(!c)throw new RangeError;var d=c[1]||"",e=c[2]||"",f=c[3]||"",g=c[4]||"",h=c[5]||"",i=c[6]||"",j=c[7]||"",k=c[8]||"",l=c[9]||"";if(void 0!==b){var m=b instanceof A?b:new A(b),n=""===d&&""===g&&""===e;n&&""===j&&""===k&&(k=m.search),n&&"/"!==j.charAt(0)&&(j=""!==j?(""===m.host&&""===m.username||""!==m.pathname?"":"/")+m.pathname.slice(0,m.pathname.lastIndexOf("/")+1)+j:m.pathname);var o=[];j.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(a){"/.."===a?o.pop():o.push(a)}),j=o.join("").replace(/^\//,"/"===j.charAt(0)?"/":""),n&&(i=m.port,h=m.hostname,g=m.host,f=m.password,e=m.username),""===d&&(d=m.protocol)}this.origin=d+(""!==d||""!==g?"//":"")+g,this.href=d+(""!==d||""!==g?"//":"")+(""!==e?e+(""!==f?":"+f:"")+"@":"")+g+j+k+l,this.protocol=d,this.username=e,this.password=f,this.host=g,this.hostname=h,this.port=i,this.pathname=j,this.search=k,this.hash=l}function B(){}function C(){document.removeEventListener("DOMContentLoaded",C,!1),window.removeEventListener("load",C,!1),D()}function D(){for(var a=document.getElementsByTagName("script"),b=0,c=0;c<a.length;c++){var d=a[c];if("module"==d.type){var e=d.src;e?V.load(e,"ready"):(V.provide("anon"+ ++b,"fetch",d.innerHTML.substr(1)),V.load("anon"+b,"ready"))}}}var E=a.Promise||require("when/es6-shim/Promise"),F=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},G="object"==typeof exports&&"function"==typeof require,H=0,I=1,J=2,K=3,L=4;b.prototype["import"]=function(a,b){var c=this._loader,d={};return E.resolve().then(function(){return c.resolve(a,b,d)})["catch"](function(c){throw s(c,"Resolving "+a+(b?", "+b:""))}).then(function(a){return l(c,a,d)})},b.prototype.resolve=function(a,b,c){var d=this._loader;return d.resolve(a,b,c||{})},b.prototype.load=function(a,b,c){var d=this._loader;if("fetch"==b)return h(d,a,c);if("translate"==b)return i(d,a,c);if("instantiate"==b)return j(d,a,c).then(function(a){return a.module instanceof u?void 0:a.module});if("link"==b)return k(d,a,c).then(function(){});if(b&&"ready"!=b)throw new TypeError("Invalid stage "+b);return l(d,a,c).then(function(a){return a.module})},b.prototype.provide=function(a,b,g,h){var i=this._loader,j=c(i,a,h);if("fetch"==b){if(j.state>H)throw new TypeError(a+" has already been fetched.");d(i,j,g)}else if("translate"==b){if(j.state>I)throw new TypeError(a+" has already been translated.");e(i,j,g)}else{if("instantiate"!=b)throw new TypeError("Invalid stage "+b);if(j.state>J)throw new TypeError(a+" has already been instantiated.");d(i,j,void 0),e(i,j,void 0),j.translate.then(function(a){f(i,j,g,a)})}},b.prototype.error=function(){},b.prototype.lookup=function(a){var b=this._loader,c=b.registry[a];if(!c)return null;var d;return c.state==H?d="fetch":c.state==I?d="translate":c.state==J?d="instantiate":c.state==K?d="link":c.state==L&&(d="ready"),{state:d,metadata:c.metadata,fetch:c.fetch&&E.resolve(c.fetch),translate:c.translate&&E.resolve(c.translate),instantiate:c.instantiate&&E.resolve(c.instantiate),module:c.state==L&&(c.module instanceof u?c.module:c.module.module),error:c.error}},b.prototype.install=function(a,b){var c=this._loader;if(c.registry[a])throw new TypeError(a+" is already defined in the Loader registry.");c.registry[a]={key:a,state:L,metadata:metadata,fetch:void 0,translate:void 0,instantiate:void 0,dependencies:void 0,module:b,declare:void 0,error:null}},b.prototype.uninstall=function(a){var b=this._loader,c=b.registry[a];if(!c)throw new TypeError(a+" is not defined in the Loader registry.");if(c.state<K)throw new TypeError(a+" is still loading.");delete b.registry[a]},b.prototype.cancel=function(a){var b=this._loader,c=b.registry[a];if(!c)throw new TypeError(a+" does not exist.");if(c.state>=K)throw new TypeError(a+" is already past linking.");delete b.registry[a]};var M=["resolve","fetch","translate","instantiate"];b.prototype.hook=function(a,b){var c=this._loader;if(-1==F.call(M,a))throw new TypeError(a+" is not a valid hook.");return b?void(c[a]=b):c[a]};var N,O,P={};b.prototype.transpiler="traceur",b.prototype.parse=function(b,c,d){if(!N)if("babel"==this.transpiler){if(O=G?require("babel-core"):a.babel,!O)throw new TypeError("Unable to find the Babel transpiler.");N=x}else{if(O=G?require("traceur"):a.traceur,!O)throw new TypeError("Unable to find the Traceur transpiler.");N=v}return y(b,N.call(this,b,c,d))};var Q,R="undefined"!=typeof process&&!!process.platform.match(/^win/);if("undefined"!=typeof XMLHttpRequest)Q=function(a,b,c){function d(){b(f.responseText)}function e(){c(new Error("GET "+a+" "+f.status+" ("+f.statusText+")"))}var f=new XMLHttpRequest,g=!0,h=!1;if(!("withCredentials"in f)){var i=/^(\w+:)?\/\/([^\/]+)/.exec(a);i&&(g=i[2]===window.location.host,i[1]&&(g&=i[1]===window.location.protocol))}g||"undefined"==typeof XDomainRequest||(f=new XDomainRequest,f.onload=d,f.onerror=e,f.ontimeout=e,f.onprogress=function(){},f.timeout=0,h=!0),f.onreadystatechange=function(){4===f.readyState&&(200===f.status||0==f.status&&f.responseText?d():e())},f.open("GET",a,!0),h&&setTimeout(function(){f.send()},0),f.send(null)};else{if(!G)throw new TypeError("No environment fetch API available.");var S;Q=function(a,b,c){if("file:///"!=a.substr(0,8))throw"Only file URLs of the form file: allowed running in Node.";S=S||require("fs"),a=R?a.replace(/\//g,"\\").substr(8):a.substr(7),S.readFile(a,function(a,d){a?c(a):b(d+"")})}}var T=function(){function a(a){for(var b in c){var d="*"===b.charAt(b.length-1);if(d){if(a.substr(0,b.length-1)===b.substr(0,b.length-1))return c[b].replace("*",a.substr(b.length-1,a.length-b.length+1))}else if(a===b)return c[b]}}b.call(this,arguments);var c={};this.site=function(a){for(var b in a)c[b]=a[b]},this.site.get=function(a){return c[a]},this.site.set=function(a,b){c[a]=b},this.site.has=function(a){return!!c[a]},this.site["delete"]=function(a){delete c[a]},this.hook("resolve",function(b,c){var d=a(b);return(d||!c)&&(c=U),new A(d||b,c).href}),this.hook("fetch",function(a){return new E(function(b,c){Q(a,b,c)})}),this.hook("translate",function(a,b){return b}),this.hook("instantiate",function(){})};B.prototype=b.prototype,T.prototype=new B;var U;"undefined"!=typeof document&&document.baseURI?U=document.baseURI:"undefined"!=typeof location&&location.href?U=location.href:"undefined"!=typeof document&&document.getElementsByTagName&&(U=document.getElementsByTagName("base")[0],U=U&&U.href),U?(U=U.split("#")[0].split("?")[0],U=U.substr(0,U.lastIndexOf("/")+1)):"undefined"!=typeof process&&process.cwd&&(U="file://"+(R?"/":"")+process.cwd()+"/",R&&(U=U.replace(/\\/g,"/"))),U=new A(U);var V=new T;if(V.constructor=T,"undefined"!=typeof document&&document.getElementsByTagName){var W=document.getElementsByTagName("script");W=W[W.length-1],"complete"===document.readyState?setTimeout(D):document.addEventListener&&(document.addEventListener("DOMContentLoaded",C,!1),window.addEventListener("load",C,!1)),W&&W.getAttribute("data-init")&&window[W.getAttribute("data-init")]()}var X;!function(c){X=c.Reflect||{},X.Loader=X.Loader||b,X.Module=X.Module||u,X.global=X.global||a,c.LoaderPolyfill=b,c.ModulePolyfill=u,c.Reflect=X,c.System=V}(G?exports:a)}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope?self:global);
//# sourceMappingURL=es6-module-loader.js.map