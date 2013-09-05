/*
 AngularJS v1.0.8
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(P,T,q){'use strict';function m(b,a,c){var d;if(b)if(H(b))for(d in b)d!="prototype"&&d!="length"&&d!="name"&&b.hasOwnProperty(d)&&a.call(c,b[d],d);else if(b.forEach&&b.forEach!==m)b.forEach(a,c);else if(!b||typeof b.length!=="number"?0:typeof b.hasOwnProperty!="function"&&typeof b.constructor!="function"||b instanceof L||aa&&b instanceof aa||ma.call(b)!=="[object Object]"||typeof b.callee==="function")for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],
d);return b}function nb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function hc(b,a,c){for(var d=nb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function ob(b){return function(a,c){b(c,a)}}function xa(){for(var b=Z.length,a;b;){b--;a=Z[b].charCodeAt(0);if(a==57)return Z[b]="A",Z.join("");if(a==90)Z[b]="0";else return Z[b]=String.fromCharCode(a+1),Z.join("")}Z.unshift("0");return Z.join("")}function pb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function D(b){var a=
b.$$hashKey;m(arguments,function(a){a!==b&&m(a,function(a,c){b[c]=a})});pb(b,a);return b}function G(b){return parseInt(b,10)}function ya(b,a){return D(new (D(function(){},{prototype:b})),a)}function s(){}function na(b){return b}function I(b){return function(){return b}}function u(b){return typeof b=="undefined"}function v(b){return typeof b!="undefined"}function M(b){return b!=null&&typeof b=="object"}function B(b){return typeof b=="string"}function Ra(b){return typeof b=="number"}function oa(b){return ma.apply(b)==
"[object Date]"}function E(b){return ma.apply(b)=="[object Array]"}function H(b){return typeof b=="function"}function Sa(b){return ma.apply(b)=="[object RegExp]"}function pa(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function ic(b){return b&&(b.nodeName||b.bind&&b.find)}function Ta(b,a,c){var d=[];m(b,function(b,g,h){d.push(a.call(c,b,g,h))});return d}function za(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Ua(b,a){var c=
za(b,a);c>=0&&b.splice(c,1);return a}function U(b,a){if(pa(b)||b&&b.$evalAsync&&b.$watch)throw Error("Can't copy Window or Scope");if(a){if(b===a)throw Error("Can't copy equivalent objects or arrays");if(E(b))for(var c=a.length=0;c<b.length;c++)a.push(U(b[c]));else{c=a.$$hashKey;m(a,function(b,c){delete a[c]});for(var d in b)a[d]=U(b[d]);pb(a,c)}}else(a=b)&&(E(b)?a=U(b,[]):oa(b)?a=new Date(b.getTime()):Sa(b)?a=RegExp(b.source):M(b)&&(a=U(b,{})));return a}function jc(b,a){var a=a||{},c;for(c in b)b.hasOwnProperty(c)&&
c.substr(0,2)!=="$$"&&(a[c]=b[c]);return a}function ea(b,a){if(b===a)return!0;if(b===null||a===null)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&c=="object")if(E(b)){if(!E(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ea(b[d],a[d]))return!1;return!0}}else if(oa(b))return oa(a)&&b.getTime()==a.getTime();else if(Sa(b)&&Sa(a))return b.toString()==a.toString();else{if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||pa(b)||pa(a)||E(a))return!1;c={};for(d in b)if(!(d.charAt(0)===
"$"||H(b[d]))){if(!ea(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c[d]&&d.charAt(0)!=="$"&&a[d]!==q&&!H(a[d]))return!1;return!0}return!1}function Va(b,a){var c=arguments.length>2?ha.call(arguments,2):[];return H(a)&&!(a instanceof RegExp)?c.length?function(){return arguments.length?a.apply(b,c.concat(ha.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}:a}function kc(b,a){var c=a;/^\$+/.test(b)?c=q:pa(a)?c="$WINDOW":a&&T===a?c="$DOCUMENT":a&&a.$evalAsync&&
a.$watch&&(c="$SCOPE");return c}function ba(b,a){return typeof b==="undefined"?q:JSON.stringify(b,kc,a?"  ":null)}function qb(b){return B(b)?JSON.parse(b):b}function Wa(b){b&&b.length!==0?(b=y(""+b),b=!(b=="f"||b=="0"||b=="false"||b=="no"||b=="n"||b=="[]")):b=!1;return b}function qa(b){b=w(b).clone();try{b.html("")}catch(a){}var c=w("<div>").append(b).html();try{return b[0].nodeType===3?y(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+y(b)})}catch(d){return y(c)}}function rb(b){try{return decodeURIComponent(b)}catch(a){}}
function Xa(b){var a={},c,d;m((b||"").split("&"),function(b){b&&(c=b.split("="),d=rb(c[0]),v(d)&&(a[d]=v(c[1])?rb(c[1]):!0))});return a}function sb(b){var a=[];m(b,function(b,d){a.push(Ya(d,!0)+(b===!0?"":"="+Ya(b,!0)))});return a.length?a.join("&"):""}function Za(b){return Ya(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ya(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}
function lc(b,a){function c(a){a&&d.push(a)}var d=[b],e,g,h=["ng:app","ng-app","x-ng-app","data-ng-app"],f=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;m(h,function(a){h[a]=!0;c(T.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(m(b.querySelectorAll("."+a),c),m(b.querySelectorAll("."+a+"\\:"),c),m(b.querySelectorAll("["+a+"]"),c))});m(d,function(a){if(!e){var b=f.exec(" "+a.className+" ");b?(e=a,g=(b[2]||"").replace(/\s+/g,",")):m(a.attributes,function(b){if(!e&&h[b.name])e=a,g=b.value})}});
e&&a(e,g?[g]:[])}function tb(b,a){var c=function(){b=w(b);a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");var c=ub(a);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(P&&!d.test(P.name))return c();P.name=P.name.replace(d,"");$a.resumeBootstrap=function(b){m(b,function(b){a.push(b)});c()}}function ab(b,a){a=a||"_";return b.replace(mc,function(b,
d){return(d?a:"")+b.toLowerCase()})}function bb(b,a,c){if(!b)throw Error("Argument '"+(a||"?")+"' is "+(c||"required"));return b}function ra(b,a,c){c&&E(b)&&(b=b[b.length-1]);bb(H(b),a,"not a function, got "+(b&&typeof b=="object"?b.constructor.name||"Object":typeof b));return b}function cb(b,a,c){if(!a)return b;for(var a=a.split("."),d,e=b,g=a.length,h=0;h<g;h++)d=a[h],b&&(b=(e=b)[d]);return!c&&H(b)?Va(e,b):b}function nc(b){function a(a,b,e){return a[b]||(a[b]=e())}return a(a(b,"angular",Object),
"module",function(){var b={};return function(d,e,g){e&&b.hasOwnProperty(d)&&(b[d]=null);return a(b,d,function(){function a(c,d,e){return function(){b[e||"push"]([c,d,arguments]);return k}}if(!e)throw Error("No module: "+d);var b=[],c=[],j=a("$injector","invoke"),k={_invokeQueue:b,_runBlocks:c,requires:e,name:d,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),filter:a("$filterProvider",
"register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:j,run:function(a){c.push(a);return this}};g&&j(g);return k})}})}function vb(b){return b.replace(oc,function(a,b,d,e){return e?d.toUpperCase():d}).replace(pc,"Moz$1")}function db(b,a,c,d){function e(b){var f;var e=c&&b?[this.filter(b)]:[this],i=a,j,k,l,n,o,p;if(!d||b!=null)for(;e.length;){j=e.shift();k=0;for(l=j.length;k<l;k++){n=w(j[k]);i?n.triggerHandler("$destroy"):i=!i;o=0;for(f=(p=n.children()).length,
n=f;o<n;o++)e.push(aa(p[o]))}}return g.apply(this,arguments)}var g=aa.fn[b],g=g.$original||g;e.$original=g;aa.fn[b]=e}function L(b){if(b instanceof L)return b;if(!(this instanceof L)){if(B(b)&&b.charAt(0)!="<")throw Error("selectors not implemented");return new L(b)}if(B(b)){var a=T.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);eb(this,a.childNodes);this.remove()}else eb(this,b)}function fb(b){return b.cloneNode(!0)}function sa(b){wb(b);for(var a=0,b=b.childNodes||
[];a<b.length;a++)sa(b[a])}function xb(b,a,c){var d=$(b,"events");$(b,"handle")&&(u(a)?m(d,function(a,c){gb(b,c,a);delete d[c]}):u(c)?(gb(b,a,d[a]),delete d[a]):Ua(d[a]||[],c))}function wb(b){var a=b[Aa],c=Ba[a];c&&(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),xb(b)),delete Ba[a],b[Aa]=q)}function $(b,a,c){var d=b[Aa],d=Ba[d||-1];if(v(c))d||(b[Aa]=d=++qc,d=Ba[d]={}),d[a]=c;else return d&&d[a]}function yb(b,a,c){var d=$(b,"data"),e=v(c),g=!e&&v(a),h=g&&!M(a);!d&&!h&&$(b,"data",d={});if(e)d[a]=
c;else if(g)if(h)return d&&d[a];else D(d,a);else return d}function Ca(b,a){return(" "+b.className+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" ")>-1}function zb(b,a){a&&m(a.split(" "),function(a){b.className=S((" "+b.className+" ").replace(/[\n\t]/g," ").replace(" "+S(a)+" "," "))})}function Ab(b,a){a&&m(a.split(" "),function(a){if(!Ca(b,a))b.className=S(b.className+" "+S(a))})}function eb(b,a){if(a)for(var a=!a.nodeName&&v(a.length)&&!pa(a)?a:[a],c=0;c<a.length;c++)b.push(a[c])}function Bb(b,a){return Da(b,
"$"+(a||"ngController")+"Controller")}function Da(b,a,c){b=w(b);for(b[0].nodeType==9&&(b=b.find("html"));b.length;){if(c=b.data(a))return c;b=b.parent()}}function Cb(b,a){var c=Ea[a.toLowerCase()];return c&&Db[b.nodeName]&&c}function rc(b,a){var c=function(c,e){if(!c.preventDefault)c.preventDefault=function(){c.returnValue=!1};if(!c.stopPropagation)c.stopPropagation=function(){c.cancelBubble=!0};if(!c.target)c.target=c.srcElement||T;if(u(c.defaultPrevented)){var g=c.preventDefault;c.preventDefault=
function(){c.defaultPrevented=!0;g.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented};m(a[e||c.type],function(a){a.call(b,c)});V<=8?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function fa(b){var a=typeof b,c;if(a=="object"&&b!==null)if(typeof(c=b.$$hashKey)=="function")c=b.$$hashKey();else{if(c===q)c=b.$$hashKey=xa()}else c=b;return a+
":"+c}function Fa(b){m(b,this.put,this)}function hb(){}function Eb(b){var a,c;if(typeof b=="function"){if(!(a=b.$inject))a=[],c=b.toString().replace(sc,""),c=c.match(tc),m(c[1].split(uc),function(b){b.replace(vc,function(b,c,d){a.push(d)})}),b.$inject=a}else E(b)?(c=b.length-1,ra(b[c],"fn"),a=b.slice(0,c)):ra(b,"fn",!0);return a}function ub(b){function a(a){return function(b,c){if(M(b))m(b,ob(a));else return a(b,c)}}function c(a,b){if(H(b)||E(b))b=l.instantiate(b);if(!b.$get)throw Error("Provider "+
a+" must define $get factory method.");return k[a+f]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[];m(a,function(a){if(!j.get(a))if(j.put(a,!0),B(a)){var c=ta(a);b=b.concat(e(c.requires)).concat(c._runBlocks);try{for(var d=c._invokeQueue,c=0,f=d.length;c<f;c++){var g=d[c],p=g[0]=="$injector"?l:l.get(g[0]);p[g[1]].apply(p,g[2])}}catch(h){throw h.message&&(h.message+=" from "+a),h;}}else if(H(a))try{b.push(l.invoke(a))}catch(i){throw i.message&&(i.message+=" from "+a),i;}else if(E(a))try{b.push(l.invoke(a))}catch(o){throw o.message&&
(o.message+=" from "+String(a[a.length-1])),o;}else ra(a,"module")});return b}function g(a,b){function c(d){if(typeof d!=="string")throw Error("Service name expected");if(a.hasOwnProperty(d)){if(a[d]===h)throw Error("Circular dependency: "+i.join(" <- "));return a[d]}else try{return i.unshift(d),a[d]=h,a[d]=b(d)}finally{i.shift()}}function d(a,b,e){var f=[],j=Eb(a),g,h,p;h=0;for(g=j.length;h<g;h++)p=j[h],f.push(e&&e.hasOwnProperty(p)?e[p]:c(p));a.$inject||(a=a[g]);switch(b?-1:f.length){case 0:return a();
case 1:return a(f[0]);case 2:return a(f[0],f[1]);case 3:return a(f[0],f[1],f[2]);case 4:return a(f[0],f[1],f[2],f[3]);case 5:return a(f[0],f[1],f[2],f[3],f[4]);case 6:return a(f[0],f[1],f[2],f[3],f[4],f[5]);case 7:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6]);case 8:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7]);case 9:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8]);case 10:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8],f[9]);default:return a.apply(b,f)}}return{invoke:d,instantiate:function(a,
b){var c=function(){},e;c.prototype=(E(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return M(e)?e:c},get:c,annotate:Eb}}var h={},f="Provider",i=[],j=new Fa,k={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,I(b))}),constant:a(function(a,b){k[a]=b;n[a]=b}),decorator:function(a,b){var c=l.get(a+f),d=c.$get;c.$get=function(){var a=o.invoke(d,c);return o.invoke(b,null,{$delegate:a})}}}},
l=g(k,function(){throw Error("Unknown provider: "+i.join(" <- "));}),n={},o=n.$injector=g(n,function(a){a=l.get(a+f);return o.invoke(a.$get,a)});m(e(b),function(a){o.invoke(a||s)});return o}function wc(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;m(a,function(a){!b&&y(a.nodeName)==="a"&&(b=a)});return b}function g(){var b=c.hash(),d;b?(d=h.getElementById(b))?d.scrollIntoView():(d=e(h.getElementsByName(b)))?
d.scrollIntoView():b==="top"&&a.scrollTo(0,0):a.scrollTo(0,0)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(g)});return g}]}function xc(b,a,c,d){function e(a){try{a.apply(null,ha.call(arguments,1))}finally{if(p--,p===0)for(;z.length;)try{z.pop()()}catch(b){c.error(b)}}}function g(a,b){(function yc(){m(r,function(a){a()});x=b(yc,a)})()}function h(){N!=f.url()&&(N=f.url(),m(K,function(a){a(f.url())}))}var f=this,i=a[0],j=b.location,k=b.history,l=b.setTimeout,n=b.clearTimeout,
o={};f.isMock=!1;var p=0,z=[];f.$$completeOutstandingRequest=e;f.$$incOutstandingRequestCount=function(){p++};f.notifyWhenNoOutstandingRequests=function(a){m(r,function(a){a()});p===0?a():z.push(a)};var r=[],x;f.addPollFn=function(a){u(x)&&g(100,l);r.push(a);return a};var N=j.href,A=a.find("base"),J=null;f.url=function(a,b){if(a){if(N!=a)return N=a,d.history?b?k.replaceState(null,"",a):(k.pushState(null,"",a),A.attr("href",A.attr("href"))):b?(j.replace(a),J=a):(j.href=a,J=null),f}else return J||j.href.replace(/%27/g,
"'")};var K=[],C=!1;f.onUrlChange=function(a){C||(d.history&&w(b).bind("popstate",h),d.hashchange?w(b).bind("hashchange",h):f.addPollFn(h),C=!0);K.push(a);return a};f.baseHref=function(){var a=A.attr("href");return a?a.replace(/^https?\:\/\/[^\/]*/,""):""};var ga={},Q="",t=f.baseHref();f.cookies=function(a,b){var d,e,f,j;if(a)if(b===q)i.cookie=escape(a)+"=;path="+t+";expires=Thu, 01 Jan 1970 00:00:00 GMT";else{if(B(b))d=(i.cookie=escape(a)+"="+escape(b)+";path="+t).length+1,d>4096&&c.warn("Cookie '"+
a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!")}else{if(i.cookie!==Q){Q=i.cookie;d=Q.split("; ");ga={};for(f=0;f<d.length;f++)e=d[f],j=e.indexOf("="),j>0&&(a=unescape(e.substring(0,j)),ga[a]===q&&(ga[a]=unescape(e.substring(j+1))))}return ga}};f.defer=function(a,b){var c;p++;c=l(function(){delete o[c];e(a)},b||0);o[c]=!0;return c};f.defer.cancel=function(a){return o[a]?(delete o[a],n(a),e(s),!0):!1}}function zc(){this.$get=["$window","$log","$sniffer","$document",
function(b,a,c,d){return new xc(b,d,a,c)}]}function Ac(){this.$get=function(){function b(b,d){function e(a){if(a!=l){if(n){if(n==a)n=a.n}else n=a;g(a.n,a.p);g(a,l);l=a;l.n=null}}function g(a,b){if(a!=b){if(a)a.p=b;if(b)b.n=a}}if(b in a)throw Error("cacheId "+b+" taken");var h=0,f=D({},d,{id:b}),i={},j=d&&d.capacity||Number.MAX_VALUE,k={},l=null,n=null;return a[b]={put:function(a,b){var c=k[a]||(k[a]={key:a});e(c);u(b)||(a in i||h++,i[a]=b,h>j&&this.remove(n.key))},get:function(a){var b=k[a];if(b)return e(b),
i[a]},remove:function(a){var b=k[a];if(b){if(b==l)l=b.p;if(b==n)n=b.n;g(b.n,b.p);delete k[a];delete i[a];h--}},removeAll:function(){i={};h=0;k={};l=n=null},destroy:function(){k=f=i=null;delete a[b]},info:function(){return D({},f,{size:h})}}}var a={};b.info=function(){var b={};m(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Bc(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function Fb(b){var a={},c="Directive",d=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,
e=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,g="Template must have exactly one root element. was: ",h=/^\s*(https?|ftp|mailto|file):/;this.directive=function i(d,e){B(d)?(bb(e,"directive"),a.hasOwnProperty(d)||(a[d]=[],b.factory(d+c,["$injector","$exceptionHandler",function(b,c){var e=[];m(a[d],function(a){try{var g=b.invoke(a);if(H(g))g={compile:I(g)};else if(!g.compile&&g.link)g.compile=I(g.link);g.priority=g.priority||0;g.name=g.name||d;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"A";
e.push(g)}catch(h){c(h)}});return e}])),a[d].push(e)):m(d,ob(i));return this};this.urlSanitizationWhitelist=function(a){return v(a)?(h=a,this):h};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document",function(b,j,k,l,n,o,p,z,r){function x(a,b,c){a instanceof w||(a=w(a));m(a,function(b,c){b.nodeType==3&&b.nodeValue.match(/\S+/)&&(a[c]=w(b).wrap("<span></span>").parent()[0])});var d=A(a,b,a,c);return function(b,c){bb(b,"scope");
for(var e=c?va.clone.call(a):a,g=0,j=e.length;g<j;g++){var h=e[g];(h.nodeType==1||h.nodeType==9)&&e.eq(g).data("$scope",b)}N(e,"ng-scope");c&&c(e,b);d&&d(b,e,e);return e}}function N(a,b){try{a.addClass(b)}catch(c){}}function A(a,b,c,d){function e(a,c,d,j){var h,i,k,p,o,l,n,r=[];o=0;for(l=c.length;o<l;o++)r.push(c[o]);n=o=0;for(l=g.length;o<l;n++)i=r[n],c=g[o++],h=g[o++],c?(c.scope?(k=a.$new(M(c.scope)),w(i).data("$scope",k)):k=a,(p=c.transclude)||!j&&b?c(h,k,i,d,function(b){return function(c){var d=
a.$new();d.$$transcluded=!0;return b(d,c).bind("$destroy",Va(d,d.$destroy))}}(p||b)):c(h,k,i,q,j)):h&&h(a,i.childNodes,q,j)}for(var g=[],j,h,i,k=0;k<a.length;k++)h=new ia,j=J(a[k],[],h,d),h=(j=j.length?K(j,a[k],h,b,c):null)&&j.terminal||!a[k].childNodes||!a[k].childNodes.length?null:A(a[k].childNodes,j?j.transclude:b),g.push(j),g.push(h),i=i||j||h;return i?e:null}function J(a,b,c,g){var j=c.$attr,h;switch(a.nodeType){case 1:C(b,ca(Ga(a).toLowerCase()),"E",g);var i,k,o;h=a.attributes;for(var p=0,l=
h&&h.length;p<l;p++)if(i=h[p],!V||V>=8||i.specified)k=i.name,o=ca(k.toLowerCase()),j[o]=k,c[o]=i=S(V&&k=="href"?decodeURIComponent(a.getAttribute(k,2)):i.value),Cb(a,o)&&(c[o]=!0),R(a,b,i,o),C(b,o,"A",g);a=a.className;if(B(a)&&a!=="")for(;h=e.exec(a);)o=ca(h[2]),C(b,o,"C",g)&&(c[o]=S(h[3])),a=a.substr(h.index+h[0].length);break;case 3:Y(b,a.nodeValue);break;case 8:try{if(h=d.exec(a.nodeValue))o=ca(h[1]),C(b,o,"M",g)&&(c[o]=S(h[2]))}catch(n){}}b.sort(t);return b}function K(a,b,c,d,e){function j(a,
b){if(a)a.require=t.require,n.push(a);if(b)b.require=t.require,r.push(b)}function h(a,b){var c,d="data",e=!1;if(B(a)){for(;(c=a.charAt(0))=="^"||c=="?";)a=a.substr(1),c=="^"&&(d="inheritedData"),e=e||c=="?";c=b[d]("$"+a+"Controller");if(!c&&!e)throw Error("No controller: "+a);}else E(a)&&(c=[],m(a,function(a){c.push(h(a,b))}));return c}function i(a,d,e,g,j){var l,z,t,F,N;l=b===e?c:jc(c,new ia(w(e),c.$attr));z=l.$$element;if(K){var Cc=/^\s*([@=&])\s*(\w*)\s*$/,x=d.$parent||d;m(K.scope,function(a,b){var c=
a.match(Cc)||[],e=c[2]||b,c=c[1],g,j,h;d.$$isolateBindings[b]=c+e;switch(c){case "@":l.$observe(e,function(a){d[b]=a});l.$$observers[e].$$scope=x;break;case "=":j=o(l[e]);h=j.assign||function(){g=d[b]=j(x);throw Error(Gb+l[e]+" (directive: "+K.name+")");};g=d[b]=j(x);d.$watch(function(){var a=j(x);a!==d[b]&&(a!==g?g=d[b]=a:h(x,a=g=d[b]));return a});break;case "&":j=o(l[e]);d[b]=function(a){return j(x,a)};break;default:throw Error("Invalid isolate scope definition for directive "+K.name+": "+a);}})}Y&&
m(Y,function(a){var b={$scope:d,$element:z,$attrs:l,$transclude:j};N=a.controller;N=="@"&&(N=l[a.name]);z.data("$"+a.name+"Controller",p(N,b))});g=0;for(t=n.length;g<t;g++)try{F=n[g],F(d,z,l,F.require&&h(F.require,z))}catch(A){k(A,qa(z))}a&&a(d,e.childNodes,q,j);g=0;for(t=r.length;g<t;g++)try{F=r[g],F(d,z,l,F.require&&h(F.require,z))}catch(Dc){k(Dc,qa(z))}}for(var l=-Number.MAX_VALUE,n=[],r=[],z=null,K=null,A=null,F=c.$$element=w(b),t,C,R,ja,da=d,Y,s,u,D=0,y=a.length;D<y;D++){t=a[D];R=q;if(l>t.priority)break;
if(u=t.scope)ua("isolated scope",K,t,F),M(u)&&(N(F,"ng-isolate-scope"),K=t),N(F,"ng-scope"),z=z||t;C=t.name;if(u=t.controller)Y=Y||{},ua("'"+C+"' controller",Y[C],t,F),Y[C]=t;if(u=t.transclude)ua("transclusion",ja,t,F),ja=t,l=t.priority,u=="element"?(R=w(b),F=c.$$element=w(T.createComment(" "+C+": "+c[C]+" ")),b=F[0],v(e,w(R[0]),b),da=x(R,d,l)):(R=w(fb(b)).contents(),F.html(""),da=x(R,d));if(u=t.template)if(ua("template",A,t,F),A=t,u=Hb(u),t.replace){R=w("<div>"+S(u)+"</div>").contents();b=R[0];if(R.length!=
1||b.nodeType!==1)throw Error(g+u);v(e,F,b);C={$attr:{}};a=a.concat(J(b,a.splice(D+1,a.length-(D+1)),C));ga(c,C);y=a.length}else F.html(u);if(t.templateUrl)ua("template",A,t,F),A=t,i=Q(a.splice(D,a.length-D),i,F,c,e,t.replace,da),y=a.length;else if(t.compile)try{s=t.compile(F,c,da),H(s)?j(null,s):s&&j(s.pre,s.post)}catch(G){k(G,qa(F))}if(t.terminal)i.terminal=!0,l=Math.max(l,t.priority)}i.scope=z&&z.scope;i.transclude=ja&&da;return i}function C(d,e,g,j){var h=!1;if(a.hasOwnProperty(e))for(var o,e=
b.get(e+c),l=0,p=e.length;l<p;l++)try{if(o=e[l],(j===q||j>o.priority)&&o.restrict.indexOf(g)!=-1)d.push(o),h=!0}catch(n){k(n)}return h}function ga(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;m(a,function(d,e){e.charAt(0)!="$"&&(b[e]&&(d+=(e==="style"?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});m(b,function(b,g){g=="class"?(N(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):g=="style"?e.attr("style",e.attr("style")+";"+b):g.charAt(0)!="$"&&!a.hasOwnProperty(g)&&(a[g]=b,d[g]=c[g])})}function Q(a,b,c,d,e,
j,h){var i=[],k,o,p=c[0],r=a.shift(),z=D({},r,{controller:null,templateUrl:null,transclude:null,scope:null});c.html("");l.get(r.templateUrl,{cache:n}).success(function(l){var n,r,l=Hb(l);if(j){r=w("<div>"+S(l)+"</div>").contents();n=r[0];if(r.length!=1||n.nodeType!==1)throw Error(g+l);l={$attr:{}};v(e,c,n);J(n,a,l);ga(d,l)}else n=p,c.html(l);a.unshift(z);k=K(a,n,d,h);for(o=A(c[0].childNodes,h);i.length;){var ia=i.pop(),l=i.pop();r=i.pop();var F=i.pop(),t=n;r!==p&&(t=fb(n),v(l,w(r),t));k(function(){b(o,
F,t,e,ia)},F,t,e,ia)}i=null}).error(function(a,b,c,d){throw Error("Failed to load template: "+d.url);});return function(a,c,d,e,g){i?(i.push(c),i.push(d),i.push(e),i.push(g)):k(function(){b(o,c,d,e,g)},c,d,e,g)}}function t(a,b){return b.priority-a.priority}function ua(a,b,c,d){if(b)throw Error("Multiple directives ["+b.name+", "+c.name+"] asking for "+a+" on: "+qa(d));}function Y(a,b){var c=j(b,!0);c&&a.push({priority:0,compile:I(function(a,b){var d=b.parent(),e=d.data("$binding")||[];e.push(c);N(d.data("$binding",
e),"ng-binding");a.$watch(c,function(a){b[0].nodeValue=a})})})}function R(a,b,c,d){var e=j(c,!0);e&&b.push({priority:100,compile:I(function(a,b,c){b=c.$$observers||(c.$$observers={});d==="class"&&(e=j(c[d],!0));c[d]=q;(b[d]||(b[d]=[])).$$inter=!0;(c.$$observers&&c.$$observers[d].$$scope||a).$watch(e,function(a){c.$set(d,a)})})})}function v(a,b,c){var d=b[0],e=d.parentNode,g,j;if(a){g=0;for(j=a.length;g<j;g++)if(a[g]==d){a[g]=c;break}}e&&e.replaceChild(c,d);c[w.expando]=d[w.expando];b[0]=c}var ia=
function(a,b){this.$$element=a;this.$attr=b||{}};ia.prototype={$normalize:ca,$set:function(a,b,c,d){var e=Cb(this.$$element[0],a),g=this.$$observers;e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=ab(a,"-"));if(Ga(this.$$element[0])==="A"&&a==="href")F.setAttribute("href",b),e=F.href,e!==""&&!e.match(h)&&(this[a]=b="unsafe:"+e);c!==!1&&(b===null||b===q?this.$$element.removeAttr(d):this.$$element.attr(d,b));g&&m(g[a],function(a){try{a(b)}catch(c){k(c)}})},
$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);z.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var F=r[0].createElement("a"),ja=j.startSymbol(),da=j.endSymbol(),Hb=ja=="{{"||da=="}}"?na:function(a){return a.replace(/\{\{/g,ja).replace(/}}/g,da)};return x}]}function ca(b){return vb(b.replace(Ec,""))}function Fc(){var b={};this.register=function(a,c){M(a)?D(b,a):b[a]=c};this.$get=["$injector","$window",function(a,c){return function(d,e){if(B(d)){var g=
d,d=b.hasOwnProperty(g)?b[g]:cb(e.$scope,g,!0)||cb(c,g,!0);ra(d,g,!0)}return a.instantiate(d,e)}}]}function Gc(){this.$get=["$window",function(b){return w(b.document)}]}function Hc(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Ic(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse",function(c){function d(d,f){for(var i,j,k=0,l=[],n=d.length,o=!1,p=[];k<n;)(i=d.indexOf(b,
k))!=-1&&(j=d.indexOf(a,i+e))!=-1?(k!=i&&l.push(d.substring(k,i)),l.push(k=c(o=d.substring(i+e,j))),k.exp=o,k=j+g,o=!0):(k!=n&&l.push(d.substring(k)),k=n);if(!(n=l.length))l.push(""),n=1;if(!f||o)return p.length=n,k=function(a){for(var b=0,c=n,d;b<c;b++){if(typeof(d=l[b])=="function")d=d(a),d==null||d==q?d="":typeof d!="string"&&(d=ba(d));p[b]=d}return p.join("")},k.exp=d,k.parts=l,k}var e=b.length,g=a.length;d.startSymbol=function(){return b};d.endSymbol=function(){return a};return d}]}function Ib(b){for(var b=
b.split("/"),a=b.length;a--;)b[a]=Za(b[a]);return b.join("/")}function wa(b,a){var c=Jb.exec(b),c={protocol:c[1],host:c[3],port:G(c[5])||Kb[c[1]]||null,path:c[6]||"/",search:c[8],hash:c[10]};if(a)a.$$protocol=c.protocol,a.$$host=c.host,a.$$port=c.port;return c}function ka(b,a,c){return b+"://"+a+(c==Kb[b]?"":":"+c)}function Jc(b,a,c){var d=wa(b);return decodeURIComponent(d.path)!=a||u(d.hash)||d.hash.indexOf(c)!==0?b:ka(d.protocol,d.host,d.port)+a.substr(0,a.lastIndexOf("/"))+d.hash.substr(c.length)}
function Kc(b,a,c){var d=wa(b);if(decodeURIComponent(d.path)==a&&!u(d.hash)&&d.hash.indexOf(c)===0)return b;else{var e=d.search&&"?"+d.search||"",g=d.hash&&"#"+d.hash||"",h=a.substr(0,a.lastIndexOf("/")),f=d.path.substr(h.length);if(d.path.indexOf(h)!==0)throw Error('Invalid url "'+b+'", missing path prefix "'+h+'" !');return ka(d.protocol,d.host,d.port)+a+"#"+c+f+e+g}}function ib(b,a,c){a=a||"";this.$$parse=function(b){var c=wa(b,this);if(c.path.indexOf(a)!==0)throw Error('Invalid url "'+b+'", missing path prefix "'+
a+'" !');this.$$path=decodeURIComponent(c.path.substr(a.length));this.$$search=Xa(c.search);this.$$hash=c.hash&&decodeURIComponent(c.hash)||"";this.$$compose()};this.$$compose=function(){var b=sb(this.$$search),c=this.$$hash?"#"+Za(this.$$hash):"";this.$$url=Ib(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=ka(this.$$protocol,this.$$host,this.$$port)+a+this.$$url};this.$$rewriteAppUrl=function(a){if(a.indexOf(c)==0)return a};this.$$parse(b)}function Ha(b,a,c){var d;this.$$parse=function(b){var c=wa(b,
this);if(c.hash&&c.hash.indexOf(a)!==0)throw Error('Invalid url "'+b+'", missing hash prefix "'+a+'" !');d=c.path+(c.search?"?"+c.search:"");c=Lc.exec((c.hash||"").substr(a.length));this.$$path=c[1]?(c[1].charAt(0)=="/"?"":"/")+decodeURIComponent(c[1]):"";this.$$search=Xa(c[3]);this.$$hash=c[5]&&decodeURIComponent(c[5])||"";this.$$compose()};this.$$compose=function(){var b=sb(this.$$search),c=this.$$hash?"#"+Za(this.$$hash):"";this.$$url=Ib(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=ka(this.$$protocol,
this.$$host,this.$$port)+d+(this.$$url?"#"+a+this.$$url:"")};this.$$rewriteAppUrl=function(a){if(a.indexOf(c)==0)return a};this.$$parse(b)}function Lb(b,a,c,d){Ha.apply(this,arguments);this.$$rewriteAppUrl=function(b){if(b.indexOf(c)==0)return c+d+"#"+a+b.substr(c.length)}}function Ia(b){return function(){return this[b]}}function Mb(b,a){return function(c){if(u(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Mc(){var b="",a=!1;this.hashPrefix=function(a){return v(a)?(b=a,this):
b};this.html5Mode=function(b){return v(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,g){function h(a){c.$broadcast("$locationChangeSuccess",f.absUrl(),a)}var f,i,j,k=d.url(),l=wa(k);a?(i=d.baseHref()||"/",j=i.substr(0,i.lastIndexOf("/")),l=ka(l.protocol,l.host,l.port)+j+"/",f=e.history?new ib(Jc(k,i,b),j,l):new Lb(Kc(k,i,b),b,l,i.substr(j.length+1))):(l=ka(l.protocol,l.host,l.port)+(l.path||"")+(l.search?"?"+l.search:"")+"#"+b+"/",f=new Ha(k,b,l));g.bind("click",
function(a){if(!a.ctrlKey&&!(a.metaKey||a.which==2)){for(var b=w(a.target);y(b[0].nodeName)!=="a";)if(b[0]===g[0]||!(b=b.parent())[0])return;var d=b.prop("href"),e=f.$$rewriteAppUrl(d);d&&!b.attr("target")&&e&&(f.$$parse(e),c.$apply(),a.preventDefault(),P.angular["ff-684208-preventDefault"]=!0)}});f.absUrl()!=k&&d.url(f.absUrl(),!0);d.onUrlChange(function(a){f.absUrl()!=a&&(c.$broadcast("$locationChangeStart",a,f.absUrl()).defaultPrevented?d.url(f.absUrl()):(c.$evalAsync(function(){var b=f.absUrl();
f.$$parse(a);h(b)}),c.$$phase||c.$digest()))});var n=0;c.$watch(function(){var a=d.url(),b=f.$$replace;if(!n||a!=f.absUrl())n++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",f.absUrl(),a).defaultPrevented?f.$$parse(a):(d.url(f.absUrl(),b),h(a))});f.$$replace=!1;return n});return f}]}function Nc(){this.$get=["$window",function(b){function a(a){a instanceof Error&&(a.stack?a=a.message&&a.stack.indexOf(a.message)===-1?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+
a.sourceURL+":"+a.line));return a}function c(c){var e=b.console||{},g=e[c]||e.log||s;return g.apply?function(){var b=[];m(arguments,function(c){b.push(a(c))});return g.apply(e,b)}:function(a,b){g(a,b)}}return{log:c("log"),warn:c("warn"),info:c("info"),error:c("error")}}]}function Oc(b,a){function c(a){return a.indexOf(r)!=-1}function d(){return p+1<b.length?b.charAt(p+1):!1}function e(a){return"0"<=a&&a<="9"}function g(a){return a==" "||a=="\r"||a=="\t"||a=="\n"||a=="\u000b"||a=="\u00a0"}function h(a){return"a"<=
a&&a<="z"||"A"<=a&&a<="Z"||"_"==a||a=="$"}function f(a){return a=="-"||a=="+"||e(a)}function i(a,c,d){d=d||p;throw Error("Lexer Error: "+a+" at column"+(v(c)?"s "+c+"-"+p+" ["+b.substring(c,d)+"]":" "+d)+" in expression ["+b+"].");}function j(){for(var a="",c=p;p<b.length;){var g=y(b.charAt(p));if(g=="."||e(g))a+=g;else{var j=d();if(g=="e"&&f(j))a+=g;else if(f(g)&&j&&e(j)&&a.charAt(a.length-1)=="e")a+=g;else if(f(g)&&(!j||!e(j))&&a.charAt(a.length-1)=="e")i("Invalid exponent");else break}p++}a*=1;
n.push({index:c,text:a,json:!0,fn:function(){return a}})}function k(){for(var c="",d=p,f,j,i,k;p<b.length;){k=b.charAt(p);if(k=="."||h(k)||e(k))k=="."&&(f=p),c+=k;else break;p++}if(f)for(j=p;j<b.length;){k=b.charAt(j);if(k=="("){i=c.substr(f-d+1);c=c.substr(0,f-d);p=j;break}if(g(k))j++;else break}d={index:d,text:c};if(Ja.hasOwnProperty(c))d.fn=d.json=Ja[c];else{var l=Nb(c,a);d.fn=D(function(a,b){return l(a,b)},{assign:function(a,b){return Ob(a,c,b)}})}n.push(d);i&&(n.push({index:f,text:".",json:!1}),
n.push({index:f+1,text:i,json:!1}))}function l(a){var c=p;p++;for(var d="",e=a,f=!1;p<b.length;){var g=b.charAt(p);e+=g;if(f)g=="u"?(g=b.substring(p+1,p+5),g.match(/[\da-f]{4}/i)||i("Invalid unicode escape [\\u"+g+"]"),p+=4,d+=String.fromCharCode(parseInt(g,16))):(f=Pc[g],d+=f?f:g),f=!1;else if(g=="\\")f=!0;else if(g==a){p++;n.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}else d+=g;p++}i("Unterminated quote",c)}for(var n=[],o,p=0,z=[],r,x=":";p<b.length;){r=b.charAt(p);if(c("\"'"))l(r);
else if(e(r)||c(".")&&e(d()))j();else if(h(r)){if(k(),"{,".indexOf(x)!=-1&&z[0]=="{"&&(o=n[n.length-1]))o.json=o.text.indexOf(".")==-1}else if(c("(){}[].,;:"))n.push({index:p,text:r,json:":[,".indexOf(x)!=-1&&c("{[")||c("}]:,")}),c("{[")&&z.unshift(r),c("}]")&&z.shift(),p++;else if(g(r)){p++;continue}else{var m=r+d(),A=Ja[r],J=Ja[m];J?(n.push({index:p,text:m,fn:J}),p+=2):A?(n.push({index:p,text:r,fn:A,json:"[,:".indexOf(x)!=-1&&c("+-")}),p+=1):i("Unexpected next character ",p,p+1)}x=r}return n}function Qc(b,
a,c,d){function e(a,c){throw Error("Syntax Error: Token '"+c.text+"' "+a+" at column "+(c.index+1)+" of the expression ["+b+"] starting at ["+b.substring(c.index)+"].");}function g(){if(Q.length===0)throw Error("Unexpected end of expression: "+b);return Q[0]}function h(a,b,c,d){if(Q.length>0){var e=Q[0],f=e.text;if(f==a||f==b||f==c||f==d||!a&&!b&&!c&&!d)return e}return!1}function f(b,c,d,f){return(b=h(b,c,d,f))?(a&&!b.json&&e("is not valid json",b),Q.shift(),b):!1}function i(a){f(a)||e("is unexpected, expecting ["+
a+"]",h())}function j(a,b){return function(c,d){return a(c,d,b)}}function k(a,b,c){return function(d,e){return b(d,e,a,c)}}function l(){for(var a=[];;)if(Q.length>0&&!h("}",")",";","]")&&a.push(v()),!f(";"))return a.length==1?a[0]:function(b,c){for(var d,e=0;e<a.length;e++){var f=a[e];f&&(d=f(b,c))}return d}}function n(){for(var a=f(),b=c(a.text),d=[];;)if(a=f(":"))d.push(t());else{var e=function(a,c,e){for(var e=[e],f=0;f<d.length;f++)e.push(d[f](a,c));return b.apply(a,e)};return function(){return e}}}
function o(){for(var a=p(),b;;)if(b=f("||"))a=k(a,b.fn,p());else return a}function p(){var a=z(),b;if(b=f("&&"))a=k(a,b.fn,p());return a}function z(){var a=r(),b;if(b=f("==","!="))a=k(a,b.fn,z());return a}function r(){var a;a=x();for(var b;b=f("+","-");)a=k(a,b.fn,x());if(b=f("<",">","<=",">="))a=k(a,b.fn,r());return a}function x(){for(var a=m(),b;b=f("*","/","%");)a=k(a,b.fn,m());return a}function m(){var a;return f("+")?A():(a=f("-"))?k(C,a.fn,m()):(a=f("!"))?j(a.fn,m()):A()}function A(){var a;
if(f("("))a=v(),i(")");else if(f("["))a=J();else if(f("{"))a=K();else{var b=f();(a=b.fn)||e("not a primary expression",b)}for(var c;b=f("(","[",".");)b.text==="("?(a=w(a,c),c=null):b.text==="["?(c=a,a=R(a)):b.text==="."?(c=a,a=Y(a)):e("IMPOSSIBLE");return a}function J(){var a=[];if(g().text!="]"){do a.push(t());while(f(","))}i("]");return function(b,c){for(var d=[],e=0;e<a.length;e++)d.push(a[e](b,c));return d}}function K(){var a=[];if(g().text!="}"){do{var b=f(),b=b.string||b.text;i(":");var c=t();
a.push({key:b,value:c})}while(f(","))}i("}");return function(b,c){for(var d={},e=0;e<a.length;e++){var f=a[e];d[f.key]=f.value(b,c)}return d}}var C=I(0),u,Q=Oc(b,d),t=function(){var a=o(),c,d;return(d=f("="))?(a.assign||e("implies assignment but ["+b.substring(0,d.index)+"] can not be assigned to",d),c=o(),function(b,d){return a.assign(b,c(b,d),d)}):a},w=function(a,b){var c=[];if(g().text!=")"){do c.push(t());while(f(","))}i(")");return function(d,e){for(var f=[],g=b?b(d,e):d,j=0;j<c.length;j++)f.push(c[j](d,
e));j=a(d,e,g)||s;return j.apply?j.apply(g,f):j(f[0],f[1],f[2],f[3],f[4])}},Y=function(a){var b=f().text,c=Nb(b,d);return D(function(b,d,e){return c(e||a(b,d),d)},{assign:function(c,d,e){return Ob(a(c,e),b,d)}})},R=function(a){var b=t();i("]");return D(function(c,d){var e=a(c,d),f=b(c,d),g;if(!e)return q;if((e=e[f])&&e.then){g=e;if(!("$$v"in e))g.$$v=q,g.then(function(a){g.$$v=a});e=e.$$v}return e},{assign:function(c,d,e){return a(c,e)[b(c,e)]=d}})},v=function(){for(var a=t(),b;;)if(b=f("|"))a=k(a,
b.fn,n());else return a};a?(t=o,w=Y=R=v=function(){e("is not valid json",{text:b,index:0})},u=A()):u=l();Q.length!==0&&e("is an unexpected token",Q[0]);return u}function Ob(b,a,c){for(var a=a.split("."),d=0;a.length>1;d++){var e=a.shift(),g=b[e];g||(g={},b[e]=g);b=g}return b[a.shift()]=c}function Pb(b,a,c,d,e){return function(g,h){var f=h&&h.hasOwnProperty(b)?h:g,i;if(f===null||f===q)return f;if((f=f[b])&&f.then){if(!("$$v"in f))i=f,i.$$v=q,i.then(function(a){i.$$v=a});f=f.$$v}if(!a||f===null||f===
q)return f;if((f=f[a])&&f.then){if(!("$$v"in f))i=f,i.$$v=q,i.then(function(a){i.$$v=a});f=f.$$v}if(!c||f===null||f===q)return f;if((f=f[c])&&f.then){if(!("$$v"in f))i=f,i.$$v=q,i.then(function(a){i.$$v=a});f=f.$$v}if(!d||f===null||f===q)return f;if((f=f[d])&&f.then){if(!("$$v"in f))i=f,i.$$v=q,i.then(function(a){i.$$v=a});f=f.$$v}if(!e||f===null||f===q)return f;if((f=f[e])&&f.then){if(!("$$v"in f))i=f,i.$$v=q,i.then(function(a){i.$$v=a});f=f.$$v}return f}}function Nb(b,a){if(jb.hasOwnProperty(b))return jb[b];
var c=b.split("."),d=c.length,e;if(a)e=d<6?Pb(c[0],c[1],c[2],c[3],c[4]):function(a,b){var e=0,g;do g=Pb(c[e++],c[e++],c[e++],c[e++],c[e++])(a,b),b=q,a=g;while(e<d);return g};else{var g="var l, fn, p;\n";m(c,function(a,b){g+="if(s === null || s === undefined) return s;\nl=s;\ns="+(b?"s":'((k&&k.hasOwnProperty("'+a+'"))?k:s)')+'["'+a+'"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n'});g+="return s;";e=Function("s","k",g);
e.toString=function(){return g}}return jb[b]=e}function Rc(){var b={};this.$get=["$filter","$sniffer",function(a,c){return function(d){switch(typeof d){case "string":return b.hasOwnProperty(d)?b[d]:b[d]=Qc(d,!1,a,c.csp);case "function":return d;default:return s}}}]}function Sc(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Tc(function(a){b.$evalAsync(a)},a)}]}function Tc(b,a){function c(a){return a}function d(a){return h(a)}var e=function(){var f=[],i,j;return j={resolve:function(a){if(f){var c=
f;f=q;i=g(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],i.then(a[0],a[1])})}},reject:function(a){j.resolve(h(a))},promise:{then:function(b,g){var j=e(),h=function(d){try{j.resolve((b||c)(d))}catch(e){j.reject(e),a(e)}},p=function(b){try{j.resolve((g||d)(b))}catch(c){j.reject(c),a(c)}};f?f.push([h,p]):i.then(h,p);return j.promise}}}},g=function(a){return a&&a.then?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},h=function(a){return{then:function(c,
g){var h=e();b(function(){h.resolve((g||d)(a))});return h.promise}}};return{defer:e,reject:h,when:function(f,i,j){var k=e(),l,n=function(b){try{return(i||c)(b)}catch(d){return a(d),h(d)}},o=function(b){try{return(j||d)(b)}catch(c){return a(c),h(c)}};b(function(){g(f).then(function(a){l||(l=!0,k.resolve(g(a).then(n,o)))},function(a){l||(l=!0,k.resolve(o(a)))})});return k.promise},all:function(a){var b=e(),c=a.length,d=[];c?m(a,function(a,e){g(a).then(function(a){e in d||(d[e]=a,--c||b.resolve(d))},
function(a){e in d||b.reject(a)})}):b.resolve(d);return b.promise}}}function Uc(){var b={};this.when=function(a,c){b[a]=D({reloadOnSearch:!0},c);if(a){var d=a[a.length-1]=="/"?a.substr(0,a.length-1):a+"/";b[d]={redirectTo:a}}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache",function(a,c,d,e,g,h,f){function i(a,b){for(var b="^"+b.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")+"$",c="",d=[],e=
{},f=/:(\w+)/g,g,j=0;(g=f.exec(b))!==null;)c+=b.slice(j,g.index),c+="([^\\/]*)",d.push(g[1]),j=f.lastIndex;c+=b.substr(j);var h=a.match(RegExp(c));h&&m(d,function(a,b){e[a]=h[b+1]});return h?e:null}function j(){var b=k(),j=o.current;if(b&&j&&b.$$route===j.$$route&&ea(b.pathParams,j.pathParams)&&!b.reloadOnSearch&&!n)j.params=b.params,U(j.params,d),a.$broadcast("$routeUpdate",j);else if(b||j)n=!1,a.$broadcast("$routeChangeStart",b,j),(o.current=b)&&b.redirectTo&&(B(b.redirectTo)?c.path(l(b.redirectTo,
b.params)).search(b.params).replace():c.url(b.redirectTo(b.pathParams,c.path(),c.search())).replace()),e.when(b).then(function(){if(b){var a=[],c=[],d;m(b.resolve||{},function(b,d){a.push(d);c.push(B(b)?g.get(b):g.invoke(b))});if(!v(d=b.template))if(v(d=b.templateUrl))d=h.get(d,{cache:f}).then(function(a){return a.data});v(d)&&(a.push("$template"),c.push(d));return e.all(c).then(function(b){var c={};m(b,function(b,d){c[a[d]]=b});return c})}}).then(function(c){if(b==o.current){if(b)b.locals=c,U(b.params,
d);a.$broadcast("$routeChangeSuccess",b,j)}},function(c){b==o.current&&a.$broadcast("$routeChangeError",b,j,c)})}function k(){var a,d;m(b,function(b,e){if(!d&&(a=i(c.path(),e)))d=ya(b,{params:D({},c.search(),a),pathParams:a}),d.$$route=b});return d||b[null]&&ya(b[null],{params:{},pathParams:{}})}function l(a,b){var c=[];m((a||"").split(":"),function(a,d){if(d==0)c.push(a);else{var e=a.match(/(\w+)(.*)/),f=e[1];c.push(b[f]);c.push(e[2]||"");delete b[f]}});return c.join("")}var n=!1,o={routes:b,reload:function(){n=
!0;a.$evalAsync(j)}};a.$on("$locationChangeSuccess",j);return o}]}function Vc(){this.$get=I({})}function Wc(){var b=10;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse",function(a,c,d){function e(){this.$id=xa();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$listeners={};this.$$isolateBindings=
{}}function g(a){if(i.$$phase)throw Error(i.$$phase+" already in progress");i.$$phase=a}function h(a,b){var c=d(a);ra(c,b);return c}function f(){}e.prototype={$new:function(a){if(H(a))throw Error("API-CHANGE: Use $controller to instantiate controllers.");a?(a=new e,a.$root=this.$root):(a=function(){},a.prototype=this,a=new a,a.$id=xa());a["this"]=a;a.$$listeners={};a.$parent=this;a.$$asyncQueue=[];a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?
this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,c){var d=h(a,"watch"),e=this.$$watchers,g={fn:b,last:f,get:d,exp:a,eq:!!c};if(!H(b)){var i=h(b||s,"listener");g.fn=function(a,b,c){i(c)}}if(!e)e=this.$$watchers=[];e.unshift(g);return function(){Ua(e,g)}},$digest:function(){var a,d,e,h,o,p,m,r=b,x,q=[],A,J;g("$digest");do{m=!1;x=this;do{for(o=x.$$asyncQueue;o.length;)try{x.$eval(o.shift())}catch(K){c(K)}if(h=x.$$watchers)for(p=h.length;p--;)try{if((a=
h[p])&&(d=a.get(x))!==(e=a.last)&&!(a.eq?ea(d,e):typeof d=="number"&&typeof e=="number"&&isNaN(d)&&isNaN(e)))m=!0,a.last=a.eq?U(d):d,a.fn(d,e===f?d:e,x),r<5&&(A=4-r,q[A]||(q[A]=[]),J=H(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,J+="; newVal: "+ba(d)+"; oldVal: "+ba(e),q[A].push(J))}catch(C){c(C)}if(!(h=x.$$childHead||x!==this&&x.$$nextSibling))for(;x!==this&&!(h=x.$$nextSibling);)x=x.$parent}while(x=h);if(m&&!r--)throw i.$$phase=null,Error(b+" $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: "+
ba(q));}while(m||o.length);i.$$phase=null},$destroy:function(){if(!(i==this||this.$$destroyed)){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(a.$$childHead==this)a.$$childHead=this.$$nextSibling;if(a.$$childTail==this)a.$$childTail=this.$$prevSibling;if(this.$$prevSibling)this.$$prevSibling.$$nextSibling=this.$$nextSibling;if(this.$$nextSibling)this.$$nextSibling.$$prevSibling=this.$$prevSibling;this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=
null}},$eval:function(a,b){return d(a)(this,b)},$evalAsync:function(a){this.$$asyncQueue.push(a)},$apply:function(a){try{return g("$apply"),this.$eval(a)}catch(b){c(b)}finally{i.$$phase=null;try{i.$digest()}catch(d){throw c(d),d;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);return function(){c[za(c,b)]=null}},$emit:function(a,b){var d=[],e,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},
defaultPrevented:!1},i=[h].concat(ha.call(arguments,1)),m,q;do{e=f.$$listeners[a]||d;h.currentScope=f;m=0;for(q=e.length;m<q;m++)if(e[m])try{if(e[m].apply(null,i),g)return h}catch(A){c(A)}else e.splice(m,1),m--,q--;f=f.$parent}while(f);return h},$broadcast:function(a,b){var d=this,e=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(ha.call(arguments,1)),h,i;do{d=e;f.currentScope=d;e=d.$$listeners[a]||[];h=0;for(i=e.length;h<i;h++)if(e[h])try{e[h].apply(null,
g)}catch(m){c(m)}else e.splice(h,1),h--,i--;if(!(e=d.$$childHead||d!==this&&d.$$nextSibling))for(;d!==this&&!(e=d.$$nextSibling);)d=d.$parent}while(d=e);return f}};var i=new e;return i}]}function Xc(){this.$get=["$window",function(b){var a={},c=G((/android (\d+)/.exec(y(b.navigator.userAgent))||[])[1]);return{history:!(!b.history||!b.history.pushState||c<4),hashchange:"onhashchange"in b&&(!b.document.documentMode||b.document.documentMode>7),hasEvent:function(c){if(c=="input"&&V==9)return!1;if(u(a[c])){var e=
b.document.createElement("div");a[c]="on"+c in e}return a[c]},csp:!1}}]}function Yc(){this.$get=I(P)}function Qb(b){var a={},c,d,e;if(!b)return a;m(b.split("\n"),function(b){e=b.indexOf(":");c=y(S(b.substr(0,e)));d=S(b.substr(e+1));c&&(a[c]?a[c]+=", "+d:a[c]=d)});return a}function Rb(b){var a=M(b)?b:q;return function(c){a||(a=Qb(b));return c?a[y(c)]||null:a}}function Sb(b,a,c){if(H(c))return c(b,a);m(c,function(c){b=c(b,a)});return b}function Zc(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,
d=this.defaults={transformResponse:[function(d){B(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=qb(d,!0)));return d}],transformRequest:[function(a){return M(a)&&ma.apply(a)!=="[object File]"?ba(a):a}],headers:{common:{Accept:"application/json, text/plain, */*","X-Requested-With":"XMLHttpRequest"},post:{"Content-Type":"application/json;charset=utf-8"},put:{"Content-Type":"application/json;charset=utf-8"}}},e=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope",
"$q","$injector",function(a,b,c,i,j,k){function l(a){function c(a){var b=D({},a,{data:Sb(a.data,a.headers,f)});return 200<=a.status&&a.status<300?b:j.reject(b)}a.method=la(a.method);var e=a.transformRequest||d.transformRequest,f=a.transformResponse||d.transformResponse,g=D({},a.headers),i=D({"X-XSRF-TOKEN":b.cookies()["XSRF-TOKEN"]},d.headers.common,d.headers[y(a.method)]),k,l,o,p;a:for(k in i){l=y(k);for(o in a.headers)if(y(o)===l)continue a;g[k]=i[k]}if(u(a.data))for(var q in g)if(y(q)==="content-type"){delete g[q];
break}e=Sb(a.data,Rb(g),e);p=n(a,e,g);p=p.then(c,c);m(z,function(a){p=a(p)});p.success=function(b){p.then(function(c){b(c.data,c.status,c.headers,a)});return p};p.error=function(b){p.then(null,function(c){b(c.data,c.status,c.headers,a)});return p};return p}function n(b,c,d){function e(a,b,c){m&&(200<=a&&a<300?m.put(q,[a,b,Qb(c)]):m.remove(q));f(b,a,c);i.$apply()}function f(a,c,d){c=Math.max(c,0);(200<=c&&c<300?k.resolve:k.reject)({data:a,status:c,headers:Rb(d),config:b})}function h(){var a=za(l.pendingRequests,
b);a!==-1&&l.pendingRequests.splice(a,1)}var k=j.defer(),n=k.promise,m,t,q=o(b.url,b.params);l.pendingRequests.push(b);n.then(h,h);b.cache&&b.method=="GET"&&(m=M(b.cache)?b.cache:p);if(m)if(t=m.get(q))if(t.then)return t.then(h,h),t;else E(t)?f(t[1],t[0],U(t[2])):f(t,200,{});else m.put(q,n);t||a(b.method,q,c,e,d,b.timeout,b.withCredentials);return n}function o(a,b){if(!b)return a;var c=[];hc(b,function(a,b){a==null||a==q||(M(a)&&(a=ba(a)),c.push(encodeURIComponent(b)+"="+encodeURIComponent(a)))});
return a+(a.indexOf("?")==-1?"?":"&")+c.join("&")}var p=c("$http"),z=[];m(e,function(a){z.push(B(a)?k.get(a):k.invoke(a))});l.pendingRequests=[];(function(a){m(arguments,function(a){l[a]=function(b,c){return l(D(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){m(arguments,function(a){l[a]=function(b,c,d){return l(D(d||{},{method:a,url:b,data:c}))}})})("post","put");l.defaults=d;return l}]}function $c(){this.$get=["$browser","$window","$document",function(b,a,c){return ad(b,
bd,b.defer,a.angular.callbacks,c[0],a.location.protocol.replace(":",""))}]}function ad(b,a,c,d,e,g){function h(a,b){var c=e.createElement("script"),d=function(){e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;V?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=d;e.body.appendChild(c)}return function(e,i,j,k,l,n,o){function p(a,c,d,e){c=(i.match(Jb)||["",g])[1]=="file"?d?200:404:c;a(c==1223?204:c,d,e);b.$$completeOutstandingRequest(s)}b.$$incOutstandingRequestCount();
i=i||b.url();if(y(e)=="jsonp"){var q="_"+(d.counter++).toString(36);d[q]=function(a){d[q].data=a};h(i.replace("JSON_CALLBACK","angular.callbacks."+q),function(){d[q].data?p(k,200,d[q].data):p(k,-2);delete d[q]})}else{var r=new a;r.open(e,i,!0);m(l,function(a,b){a&&r.setRequestHeader(b,a)});var x;r.onreadystatechange=function(){if(r.readyState==4){var a=r.getAllResponseHeaders(),b=["Cache-Control","Content-Language","Content-Type","Expires","Last-Modified","Pragma"];a||(a="",m(b,function(b){var c=
r.getResponseHeader(b);c&&(a+=b+": "+c+"\n")}));p(k,x||r.status,r.responseText,a)}};if(o)r.withCredentials=!0;r.send(j||"");n>0&&c(function(){x=-1;r.abort()},n)}}}function cd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),
SHORTMONTH:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),DAY:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),SHORTDAY:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return b===1?"one":"other"}}}}function dd(){this.$get=["$rootScope","$browser","$q",
"$exceptionHandler",function(b,a,c,d){function e(e,f,i){var j=c.defer(),k=j.promise,l=v(i)&&!i,f=a.defer(function(){try{j.resolve(e())}catch(a){j.reject(a),d(a)}finally{delete g[k.$$timeoutId]}l||b.$apply()},f);k.$$timeoutId=f;g[f]=j;return k}var g={};e.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function Tb(b){function a(a,e){return b.factory(a+c,e)}var c="Filter";this.register=a;this.$get=
["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Ub);a("date",Vb);a("filter",ed);a("json",fd);a("limitTo",gd);a("lowercase",hd);a("number",Wb);a("orderBy",Xb);a("uppercase",id)}function ed(){return function(b,a){if(!E(b))return b;var c=[];c.check=function(a){for(var b=0;b<c.length;b++)if(!c[b](a))return!1;return!0};var d=function(a,b){if(b.charAt(0)==="!")return!d(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return(""+a).toLowerCase().indexOf(b)>
-1;case "object":for(var c in a)if(c.charAt(0)!=="$"&&d(a[c],b))return!0;return!1;case "array":for(c=0;c<a.length;c++)if(d(a[c],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var e in a)e=="$"?function(){var b=(""+a[e]).toLowerCase();b&&c.push(function(a){return d(a,b)})}():function(){var b=e,f=(""+a[e]).toLowerCase();f&&c.push(function(a){return d(cb(a,b),f)})}();break;case "function":c.push(a);break;default:return b}for(var g=
[],h=0;h<b.length;h++){var f=b[h];c.check(f)&&g.push(f)}return g}}function Ub(b){var a=b.NUMBER_FORMATS;return function(b,d){if(u(d))d=a.CURRENCY_SYM;return Yb(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Wb(b){var a=b.NUMBER_FORMATS;return function(b,d){return Yb(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Yb(b,a,c,d,e){if(isNaN(b)||!isFinite(b))return"";var g=b<0,b=Math.abs(b),h=b+"",f="",i=[],j=!1;if(h.indexOf("e")!==-1){var k=h.match(/([\d\.]+)e(-?)(\d+)/);
k&&k[2]=="-"&&k[3]>e+1?h="0":(f=h,j=!0)}if(j)e>0&&b>-1&&b<1&&(f=b.toFixed(e));else{h=(h.split(Zb)[1]||"").length;u(e)&&(e=Math.min(Math.max(a.minFrac,h),a.maxFrac));var h=Math.pow(10,e),b=Math.round(b*h)/h,b=(""+b).split(Zb),h=b[0],b=b[1]||"",j=0,k=a.lgSize,l=a.gSize;if(h.length>=k+l)for(var j=h.length-k,n=0;n<j;n++)(j-n)%l===0&&n!==0&&(f+=c),f+=h.charAt(n);for(n=j;n<h.length;n++)(h.length-n)%k===0&&n!==0&&(f+=c),f+=h.charAt(n);for(;b.length<e;)b+="0";e&&e!=="0"&&(f+=d+b.substr(0,e))}i.push(g?a.negPre:
a.posPre);i.push(f);i.push(g?a.negSuf:a.posSuf);return i.join("")}function kb(b,a,c){var d="";b<0&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function O(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(c>0||e>-c)e+=c;e===0&&c==-12&&(e=12);return kb(e,a,d)}}function Ka(b,a){return function(c,d){var e=c["get"+b](),g=la(a?"SHORT"+b:b);return d[g][e]}}function Vb(b){function a(a){var b;if(b=a.match(c)){var a=new Date(0),g=0,h=0;b[9]&&(g=G(b[9]+b[10]),h=G(b[9]+
b[11]));a.setUTCFullYear(G(b[1]),G(b[2])-1,G(b[3]));a.setUTCHours(G(b[4]||0)-g,G(b[5]||0)-h,G(b[6]||0),G(b[7]||0))}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var g="",h=[],f,i,e=e||"mediumDate",e=b.DATETIME_FORMATS[e]||e;B(c)&&(c=jd.test(c)?G(c):a(c));Ra(c)&&(c=new Date(c));if(!oa(c))return c;for(;e;)(i=kd.exec(e))?(h=h.concat(ha.call(i,1)),e=h.pop()):(h.push(e),e=null);m(h,function(a){f=ld[a];g+=f?f(c,
b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function fd(){return function(b){return ba(b,!0)}}function gd(){return function(b,a){if(!(b instanceof Array))return b;var a=G(a),c=[],d,e;if(!b||!(b instanceof Array))return c;a>b.length?a=b.length:a<-b.length&&(a=-b.length);a>0?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Xb(b){return function(a,c,d){function e(a,b){return Wa(b)?function(b,c){return a(c,b)}:a}if(!E(a))return a;if(!c)return a;
for(var c=E(c)?c:[c],c=Ta(c,function(a){var c=!1,d=a||na;if(B(a)){if(a.charAt(0)=="+"||a.charAt(0)=="-")c=a.charAt(0)=="-",a=a.substring(1);d=b(a)}return e(function(a,b){var c;c=d(a);var e=d(b),f=typeof c,g=typeof e;f==g?(f=="string"&&(c=c.toLowerCase(),e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=f<g?-1:1;return c},c)}),g=[],h=0;h<a.length;h++)g.push(a[h]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(e!==0)return e}return 0},d))}}function W(b){H(b)&&(b={link:b});b.restrict=
b.restrict||"AC";return I(b)}function $b(b,a){function c(a,c){c=c?"-"+ab(c,"-"):"";b.removeClass((a?La:Ma)+c).addClass((a?Ma:La)+c)}var d=this,e=b.parent().controller("form")||Na,g=0,h=d.$error={};d.$name=a.name||a.ngForm;d.$dirty=!1;d.$pristine=!0;d.$valid=!0;d.$invalid=!1;e.$addControl(d);b.addClass(Oa);c(!0);d.$addControl=function(a){a.$name&&!d.hasOwnProperty(a.$name)&&(d[a.$name]=a)};d.$removeControl=function(a){a.$name&&d[a.$name]===a&&delete d[a.$name];m(h,function(b,c){d.$setValidity(c,!0,
a)})};d.$setValidity=function(a,b,j){var k=h[a];if(b){if(k&&(Ua(k,j),!k.length)){g--;if(!g)c(b),d.$valid=!0,d.$invalid=!1;h[a]=!1;c(!0,a);e.$setValidity(a,!0,d)}}else{g||c(b);if(k){if(za(k,j)!=-1)return}else h[a]=k=[],g++,c(!1,a),e.$setValidity(a,!1,d);k.push(j);d.$valid=!1;d.$invalid=!0}};d.$setDirty=function(){b.removeClass(Oa).addClass(ac);d.$dirty=!0;d.$pristine=!1;e.$setDirty()}}function X(b){return u(b)||b===""||b===null||b!==b}function Pa(b,a,c,d,e,g){var h=function(){var c=S(a.val());d.$viewValue!==
c&&b.$apply(function(){d.$setViewValue(c)})};if(e.hasEvent("input"))a.bind("input",h);else{var f,i=function(){f||(f=g.defer(function(){h();f=null}))};a.bind("keydown",function(a){a=a.keyCode;a===91||15<a&&a<19||37<=a&&a<=40||i()});a.bind("change",h);e.hasEvent("paste")&&a.bind("paste cut",i)}d.$render=function(){a.val(X(d.$viewValue)?"":d.$viewValue)};var j=c.ngPattern,k=function(a,b){return X(b)||a.test(b)?(d.$setValidity("pattern",!0),b):(d.$setValidity("pattern",!1),q)};j&&(j.match(/^\/(.*)\/$/)?
(j=RegExp(j.substr(1,j.length-2)),e=function(a){return k(j,a)}):e=function(a){var c=b.$eval(j);if(!c||!c.test)throw Error("Expected "+j+" to be a RegExp but was "+c);return k(c,a)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var l=G(c.ngMinlength),e=function(a){return!X(a)&&a.length<l?(d.$setValidity("minlength",!1),q):(d.$setValidity("minlength",!0),a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var n=G(c.ngMaxlength),c=function(a){return!X(a)&&a.length>n?(d.$setValidity("maxlength",
!1),q):(d.$setValidity("maxlength",!0),a)};d.$parsers.push(c);d.$formatters.push(c)}}function lb(b,a){b="ngClass"+b;return W(function(c,d,e){function g(b){if(a===!0||c.$index%2===a)i&&!ea(b,i)&&h(i),f(b);i=U(b)}function h(a){M(a)&&!E(a)&&(a=Ta(a,function(a,b){if(a)return b}));d.removeClass(E(a)?a.join(" "):a)}function f(a){M(a)&&!E(a)&&(a=Ta(a,function(a,b){if(a)return b}));a&&d.addClass(E(a)?a.join(" "):a)}var i=q;c.$watch(e[b],g,!0);e.$observe("class",function(){var a=c.$eval(e[b]);g(a,a)});b!==
"ngClass"&&c.$watch("$index",function(d,g){var i=d&1;i!==g&1&&(i===a?f(c.$eval(e[b])):h(c.$eval(e[b])))})})}var y=function(b){return B(b)?b.toLowerCase():b},la=function(b){return B(b)?b.toUpperCase():b},V=G((/msie (\d+)/.exec(y(navigator.userAgent))||[])[1]),w,aa,ha=[].slice,Qa=[].push,ma=Object.prototype.toString,$a=P.angular||(P.angular={}),ta,Ga,Z=["0","0","0"];s.$inject=[];na.$inject=[];var S=function(){return!String.prototype.trim?function(b){return B(b)?b.replace(/^\s*/,"").replace(/\s*$/,""):
b}:function(b){return B(b)?b.trim():b}}();Ga=V<9?function(b){b=b.nodeName?b:b[0];return b.scopeName&&b.scopeName!="HTML"?la(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var mc=/[A-Z]/g,md={full:"1.0.8",major:1,minor:0,dot:8,codeName:"bubble-burst"},Ba=L.cache={},Aa=L.expando="ng-"+(new Date).getTime(),qc=1,bc=P.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},gb=P.document.removeEventListener?
function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)},oc=/([\:\-\_]+(.))/g,pc=/^moz([A-Z])/,va=L.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;this.bind("DOMContentLoaded",a);L(P).bind("load",a)},toString:function(){var b=[];m(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return b>=0?w(this[b]):w(this[this.length+b])},length:0,push:Qa,sort:[].sort,splice:[].splice},Ea={};m("multiple,selected,checked,disabled,readOnly,required".split(","),
function(b){Ea[y(b)]=b});var Db={};m("input,select,option,textarea,button,form".split(","),function(b){Db[la(b)]=!0});m({data:yb,inheritedData:Da,scope:function(b){return Da(b,"$scope")},controller:Bb,injector:function(b){return Da(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ca,css:function(b,a,c){a=vb(a);if(v(c))b.style[a]=c;else{var d;V<=8&&(d=b.currentStyle&&b.currentStyle[a],d===""&&(d="auto"));d=d||b.style[a];V<=8&&(d=d===""?q:d);return d}},attr:function(b,a,c){var d=
y(a);if(Ea[d])if(v(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||s).specified?d:q;else if(v(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),b===null?q:b},prop:function(b,a,c){if(v(c))b[a]=c;else return b[a]},text:D(V<9?function(b,a){if(b.nodeType==1){if(u(a))return b.innerText;b.innerText=a}else{if(u(a))return b.nodeValue;b.nodeValue=a}}:function(b,a){if(u(a))return b.textContent;b.textContent=a},{$dv:""}),
val:function(b,a){if(u(a)){if(Ga(b)==="SELECT"&&b.multiple){var c=[];m(b.options,function(a){a.selected&&c.push(a.value||a.text)});return c.length===0?null:c}return b.value}b.value=a},html:function(b,a){if(u(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)sa(d[c]);b.innerHTML=a}},function(b,a){L.prototype[a]=function(a,d){var e,g;if((b.length==2&&b!==Ca&&b!==Bb?a:d)===q)if(M(a)){for(e=0;e<this.length;e++)if(b===yb)b(this[e],a);else for(g in a)b(this[e],g,a[g]);return this}else{if(this.length)return b(this[0],
a,d)}else{for(e=0;e<this.length;e++)b(this[e],a,d);return this}return b.$dv}});m({removeData:wb,dealoc:sa,bind:function a(c,d,e){var g=$(c,"events"),h=$(c,"handle");g||$(c,"events",g={});h||$(c,"handle",h=rc(c,g));m(d.split(" "),function(d){var i=g[d];if(!i){if(d=="mouseenter"||d=="mouseleave"){var j=T.body.contains||T.body.compareDocumentPosition?function(a,c){var d=a.nodeType===9?a.documentElement:a,e=c&&c.parentNode;return a===e||!(!e||!(e.nodeType===1&&(d.contains?d.contains(e):a.compareDocumentPosition&&
a.compareDocumentPosition(e)&16)))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;(!c||c!==this&&!j(this,c))&&h(a,d)})}else bc(c,d,h),g[d]=[];i=g[d]}i.push(e)})},unbind:xb,replaceWith:function(a,c){var d,e=a.parentNode;sa(a);m(new L(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];m(a.childNodes,function(a){a.nodeType===1&&c.push(a)});
return c},contents:function(a){return a.childNodes||[]},append:function(a,c){m(new L(c),function(c){a.nodeType===1&&a.appendChild(c)})},prepend:function(a,c){if(a.nodeType===1){var d=a.firstChild;m(new L(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){var c=w(c)[0],d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){sa(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;m(new L(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},
addClass:Ab,removeClass:zb,toggleClass:function(a,c,d){u(d)&&(d=!Ca(a,c));(d?Ab:zb)(a,c)},parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;a!=null&&a.nodeType!==1;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName(c)},clone:fb,triggerHandler:function(a,c){var d=($(a,"events")||{})[c];m(d,function(c){c.call(a,null)})}},function(a,c){L.prototype[c]=function(c,e){for(var g,
h=0;h<this.length;h++)g==q?(g=a(this[h],c,e),g!==q&&(g=w(g))):eb(g,a(this[h],c,e));return g==q?this:g}});Fa.prototype={put:function(a,c){this[fa(a)]=c},get:function(a){return this[fa(a)]},remove:function(a){var c=this[a=fa(a)];delete this[a];return c}};hb.prototype={push:function(a,c){var d=this[a=fa(a)];d?d.push(c):this[a]=[c]},shift:function(a){var c=this[a=fa(a)];if(c)return c.length==1?(delete this[a],c[0]):c.shift()},peek:function(a){if(a=this[fa(a)])return a[0]}};var tc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,
uc=/,/,vc=/^\s*(_?)(\S+?)\1\s*$/,sc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Gb="Non-assignable model expression: ";Fb.$inject=["$provide"];var Ec=/^(x[\:\-_]|data[\:\-_])/i,Jb=/^([^:]+):\/\/(\w+:{0,1}\w*@)?(\{?[\w\.-]*\}?)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,cc=/^([^\?#]*)?(\?([^#]*))?(#(.*))?$/,Lc=cc,Kb={http:80,https:443,ftp:21};ib.prototype={$$replace:!1,absUrl:Ia("$$absUrl"),url:function(a,c){if(u(a))return this.$$url;var d=cc.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));if(d[2]||d[1])this.search(d[3]||
"");this.hash(d[5]||"",c);return this},protocol:Ia("$$protocol"),host:Ia("$$host"),port:Ia("$$port"),path:Mb("$$path",function(a){return a.charAt(0)=="/"?a:"/"+a}),search:function(a,c){if(u(a))return this.$$search;v(c)?c===null?delete this.$$search[a]:this.$$search[a]=c:this.$$search=B(a)?Xa(a):a;this.$$compose();return this},hash:Mb("$$hash",na),replace:function(){this.$$replace=!0;return this}};Ha.prototype=ya(ib.prototype);Lb.prototype=ya(Ha.prototype);var Ja={"null":function(){return null},"true":function(){return!0},
"false":function(){return!1},undefined:s,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return v(d)?v(e)?d+e:d:v(e)?e:q},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(v(d)?d:0)-(v(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":s,"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},
">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Pc={n:"\n",f:"\u000c",r:"\r",t:"\t",v:"\u000b","'":"'",'"':'"'},jb={},bd=P.XMLHttpRequest||function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw Error("This browser does not support XMLHttpRequest.");
};Tb.$inject=["$provide"];Ub.$inject=["$locale"];Wb.$inject=["$locale"];var Zb=".",ld={yyyy:O("FullYear",4),yy:O("FullYear",2,0,!0),y:O("FullYear",1),MMMM:Ka("Month"),MMM:Ka("Month",!0),MM:O("Month",2,1),M:O("Month",1,1),dd:O("Date",2),d:O("Date",1),HH:O("Hours",2),H:O("Hours",1),hh:O("Hours",2,-12),h:O("Hours",1,-12),mm:O("Minutes",2),m:O("Minutes",1),ss:O("Seconds",2),s:O("Seconds",1),EEEE:Ka("Day"),EEE:Ka("Day",!0),a:function(a,c){return a.getHours()<12?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){var a=
-1*a.getTimezoneOffset(),c=a>=0?"+":"";c+=kb(Math[a>0?"floor":"ceil"](a/60),2)+kb(Math.abs(a%60),2);return c}},kd=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,jd=/^\d+$/;Vb.$inject=["$locale"];var hd=I(y),id=I(la);Xb.$inject=["$parse"];var nd=I({restrict:"E",compile:function(a,c){V<=8&&(!c.href&&!c.name&&c.$set("href",""),a.append(T.createComment("IE fix")));return function(a,c){c.bind("click",function(a){c.attr("href")||a.preventDefault()})}}}),mb={};m(Ea,function(a,
c){var d=ca("ng-"+c);mb[d]=function(){return{priority:100,compile:function(){return function(a,g,h){a.$watch(h[d],function(a){h.$set(c,!!a)})}}}}});m(["src","href"],function(a){var c=ca("ng-"+a);mb[c]=function(){return{priority:99,link:function(d,e,g){g.$observe(c,function(c){c&&(g.$set(a,c),V&&e.prop(a,g[a]))})}}}});var Na={$addControl:s,$removeControl:s,$setValidity:s,$setDirty:s};$b.$inject=["$element","$attrs","$scope"];var Qa=function(a){return["$timeout",function(c){var d={name:"form",restrict:"E",
controller:$b,compile:function(){return{pre:function(a,d,h,f){if(!h.action){var i=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};bc(d[0],"submit",i);d.bind("$destroy",function(){c(function(){gb(d[0],"submit",i)},0,!1)})}var j=d.parent().controller("form"),k=h.name||h.ngForm;k&&(a[k]=f);j&&d.bind("$destroy",function(){j.$removeControl(f);k&&(a[k]=q);D(f,Na)})}}}};return a?D(U(d),{restrict:"EAC"}):d}]},od=Qa(),pd=Qa(!0),qd=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
rd=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/,sd=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,dc={text:Pa,number:function(a,c,d,e,g,h){Pa(a,c,d,e,g,h);e.$parsers.push(function(a){var c=X(a);return c||sd.test(a)?(e.$setValidity("number",!0),a===""?null:c?a:parseFloat(a)):(e.$setValidity("number",!1),q)});e.$formatters.push(function(a){return X(a)?"":""+a});if(d.min){var f=parseFloat(d.min),a=function(a){return!X(a)&&a<f?(e.$setValidity("min",!1),q):(e.$setValidity("min",!0),a)};e.$parsers.push(a);
e.$formatters.push(a)}if(d.max){var i=parseFloat(d.max),d=function(a){return!X(a)&&a>i?(e.$setValidity("max",!1),q):(e.$setValidity("max",!0),a)};e.$parsers.push(d);e.$formatters.push(d)}e.$formatters.push(function(a){return X(a)||Ra(a)?(e.$setValidity("number",!0),a):(e.$setValidity("number",!1),q)})},url:function(a,c,d,e,g,h){Pa(a,c,d,e,g,h);a=function(a){return X(a)||qd.test(a)?(e.$setValidity("url",!0),a):(e.$setValidity("url",!1),q)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,
c,d,e,g,h){Pa(a,c,d,e,g,h);a=function(a){return X(a)||rd.test(a)?(e.$setValidity("email",!0),a):(e.$setValidity("email",!1),q)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){u(d.name)&&c.attr("name",xa());c.bind("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var g=d.ngTrueValue,h=d.ngFalseValue;B(g)||(g=!0);B(h)||(h=!1);c.bind("click",
function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$formatters.push(function(a){return a===g});e.$parsers.push(function(a){return a?g:h})},hidden:s,button:s,submit:s,reset:s},ec=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,g,h){h&&(dc[y(g.type)]||dc.text)(d,e,g,h,c,a)}}}],Ma="ng-valid",La="ng-invalid",Oa="ng-pristine",ac="ng-dirty",td=["$scope","$exceptionHandler","$attrs","$element","$parse",
function(a,c,d,e,g){function h(a,c){c=c?"-"+ab(c,"-"):"";e.removeClass((a?La:Ma)+c).addClass((a?Ma:La)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var f=g(d.ngModel),i=f.assign;if(!i)throw Error(Gb+d.ngModel+" ("+qa(e)+")");this.$render=s;var j=e.inheritedData("$formController")||Na,k=0,l=this.$error={};e.addClass(Oa);h(!0);this.$setValidity=function(a,
c){if(l[a]!==!c){if(c){if(l[a]&&k--,!k)h(!0),this.$valid=!0,this.$invalid=!1}else h(!1),this.$invalid=!0,this.$valid=!1,k++;l[a]=!c;h(c,a);j.$setValidity(a,c,this)}};this.$setViewValue=function(d){this.$viewValue=d;if(this.$pristine)this.$dirty=!0,this.$pristine=!1,e.removeClass(Oa).addClass(ac),j.$setDirty();m(this.$parsers,function(a){d=a(d)});if(this.$modelValue!==d)this.$modelValue=d,i(a,d),m(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};var n=this;a.$watch(function(){var c=
f(a);if(n.$modelValue!==c){var d=n.$formatters,e=d.length;for(n.$modelValue=c;e--;)c=d[e](c);if(n.$viewValue!==c)n.$viewValue=c,n.$render()}})}],ud=function(){return{require:["ngModel","^?form"],controller:td,link:function(a,c,d,e){var g=e[0],h=e[1]||Na;h.$addControl(g);c.bind("$destroy",function(){h.$removeControl(g)})}}},vd=I({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),fc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=
!0;var g=function(a){if(d.required&&(X(a)||a===!1))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(g);e.$parsers.unshift(g);d.$observe("required",function(){g(e.$viewValue)})}}}},wd=function(){return{require:"ngModel",link:function(a,c,d,e){var g=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){var c=[];a&&m(a.split(g),function(a){a&&c.push(S(a))});return c});e.$formatters.push(function(a){return E(a)?a.join(", "):
q})}}},xd=/^(true|false|\d+)$/,yd=function(){return{priority:100,compile:function(a,c){return xd.test(c.ngValue)?function(a,c,g){g.$set("value",a.$eval(g.ngValue))}:function(a,c,g){a.$watch(g.ngValue,function(a){g.$set("value",a)})}}}},zd=W(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==q?"":a)})}),Ad=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",
function(a){d.text(a)})}}],Bd=[function(){return function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBindHtmlUnsafe);a.$watch(d.ngBindHtmlUnsafe,function(a){c.html(a||"")})}}],Cd=lb("",!0),Dd=lb("Odd",0),Ed=lb("Even",1),Fd=W({compile:function(a,c){c.$set("ngCloak",q);a.removeClass("ng-cloak")}}),Gd=[function(){return{scope:!0,controller:"@"}}],Hd=["$sniffer",function(a){return{priority:1E3,compile:function(){a.csp=!0}}}],gc={};m("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave submit".split(" "),
function(a){var c=ca("ng-"+a);gc[c]=["$parse",function(d){return function(e,g,h){var f=d(h[c]);g.bind(y(a),function(a){e.$apply(function(){f(e,{$event:a})})})}}]});var Id=["$http","$templateCache","$anchorScroll","$compile",function(a,c,d,e){return{restrict:"ECA",terminal:!0,compile:function(g,h){var f=h.ngInclude||h.src,i=h.onload||"",j=h.autoscroll;return function(g,h){var n=0,o,p=function(){o&&(o.$destroy(),o=null);h.html("")};g.$watch(f,function(f){var m=++n;f?a.get(f,{cache:c}).success(function(a){m===
n&&(o&&o.$destroy(),o=g.$new(),h.html(a),e(h.contents())(o),v(j)&&(!j||g.$eval(j))&&d(),o.$emit("$includeContentLoaded"),g.$eval(i))}).error(function(){m===n&&p()}):p()})}}}}],Jd=W({compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Kd=W({terminal:!0,priority:1E3}),Ld=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,g,h){var f=h.count,i=g.attr(h.$attr.when),j=h.offset||0,k=e.$eval(i),l={},n=c.startSymbol(),o=c.endSymbol();m(k,function(a,e){l[e]=
c(a.replace(d,n+f+"-"+j+o))});e.$watch(function(){var c=parseFloat(e.$eval(f));return isNaN(c)?"":(c in k||(c=a.pluralCat(c-j)),l[c](e,g,!0))},function(a){g.text(a)})}}}],Md=W({transclude:"element",priority:1E3,terminal:!0,compile:function(a,c,d){return function(a,c,h){var f=h.ngRepeat,h=f.match(/^\s*(.+)\s+in\s+(.*)\s*$/),i,j,k;if(!h)throw Error("Expected ngRepeat in form of '_item_ in _collection_' but got '"+f+"'.");f=h[1];i=h[2];h=f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!h)throw Error("'item' in 'item in collection' should be identifier or (key, value) but got '"+
f+"'.");j=h[3]||h[1];k=h[2];var l=new hb;a.$watch(function(a){var e,f,h=a.$eval(i),m=c,q=new hb,u,A,w,v,C,s;if(E(h))C=h||[];else{C=[];for(w in h)h.hasOwnProperty(w)&&w.charAt(0)!="$"&&C.push(w);C.sort()}u=C.length-1;e=0;for(f=C.length;e<f;e++){w=h===C?e:C[e];v=h[w];if(s=l.shift(v)){A=s.scope;q.push(v,s);if(e!==s.index)s.index=e,m.after(s.element);m=s.element}else A=a.$new();A[j]=v;k&&(A[k]=w);A.$index=e;A.$first=e===0;A.$last=e===u;A.$middle=!(A.$first||A.$last);s||d(A,function(a){m.after(a);s={scope:A,
element:m=a,index:e};q.push(v,s)})}for(w in l)if(l.hasOwnProperty(w))for(C=l[w];C.length;)v=C.pop(),v.element.remove(),v.scope.$destroy();l=q})}}}),Nd=W(function(a,c,d){a.$watch(d.ngShow,function(a){c.css("display",Wa(a)?"":"none")})}),Od=W(function(a,c,d){a.$watch(d.ngHide,function(a){c.css("display",Wa(a)?"none":"")})}),Pd=W(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&m(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Qd=I({restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases=
{}}],link:function(a,c,d,e){var g,h,f;a.$watch(d.ngSwitch||d.on,function(i){h&&(f.$destroy(),h.remove(),h=f=null);if(g=e.cases["!"+i]||e.cases["?"])a.$eval(d.change),f=a.$new(),g(f,function(a){h=a;c.append(a)})})}}),Rd=W({transclude:"element",priority:500,require:"^ngSwitch",compile:function(a,c,d){return function(a,g,h,f){f.cases["!"+c.ngSwitchWhen]=d}}}),Sd=W({transclude:"element",priority:500,require:"^ngSwitch",compile:function(a,c,d){return function(a,c,h,f){f.cases["?"]=d}}}),Td=W({controller:["$transclude",
"$element",function(a,c){a(function(a){c.append(a)})}]}),Ud=["$http","$templateCache","$route","$anchorScroll","$compile","$controller",function(a,c,d,e,g,h){return{restrict:"ECA",terminal:!0,link:function(a,c,j){function k(){var j=d.current&&d.current.locals,k=j&&j.$template;if(k){c.html(k);l&&(l.$destroy(),l=null);var k=g(c.contents()),m=d.current;l=m.scope=a.$new();if(m.controller)j.$scope=l,j=h(m.controller,j),c.children().data("$ngControllerController",j);k(l);l.$emit("$viewContentLoaded");l.$eval(n);
e()}else c.html(""),l&&(l.$destroy(),l=null)}var l,n=j.onload||"";a.$on("$routeChangeSuccess",k);k()}}}],Vd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){d.type=="text/ng-template"&&a.put(d.id,c[0].text)}}}],Wd=I({terminal:!0}),Xd=["$compile","$parse",function(a,c){var d=/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/,e={$setViewValue:s};return{restrict:"E",
require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var i=this,j={},k=e,l;i.databound=d.ngModel;i.init=function(a,c,d){k=a;l=d};i.addOption=function(c){j[c]=!0;k.$viewValue==c&&(a.val(c),l.parent()&&l.remove())};i.removeOption=function(a){this.hasOption(a)&&(delete j[a],k.$viewValue==a&&this.renderUnknownOption(a))};i.renderUnknownOption=function(c){c="? "+fa(c)+" ?";l.val(c);a.prepend(l);a.val(c);l.prop("selected",!0)};i.hasOption=function(a){return j.hasOwnProperty(a)};
c.$on("$destroy",function(){i.renderUnknownOption=s})}],link:function(e,h,f,i){function j(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(y.parent()&&y.remove(),c.val(a),a===""&&x.prop("selected",!0)):u(a)&&x?c.val(""):e.renderUnknownOption(a)};c.bind("change",function(){a.$apply(function(){y.parent()&&y.remove();d.$setViewValue(c.val())})})}function k(a,c,d){var e;d.$render=function(){var a=new Fa(d.$viewValue);m(c.find("option"),function(c){c.selected=v(a.get(c.value))})};a.$watch(function(){ea(e,
d.$viewValue)||(e=U(d.$viewValue),d.$render())});c.bind("change",function(){a.$apply(function(){var a=[];m(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function l(e,f,g){function h(){var a={"":[]},c=[""],d,i,s,v,u;s=g.$modelValue;v=o(e)||[];var x=l?nb(v):v,C,y,z;y={};u=!1;var B,E;p&&(u=new Fa(s));for(z=0;C=x.length,z<C;z++){y[k]=v[l?y[l]=x[z]:z];d=m(e,y)||"";if(!(i=a[d]))i=a[d]=[],c.push(d);p?d=u.remove(n(e,y))!=q:(d=s===n(e,y),u=u||d);B=j(e,y);B=B===q?"":B;i.push({id:l?
x[z]:z,label:B,selected:d})}p||(r||s===null?a[""].unshift({id:"",label:"",selected:!u}):u||a[""].unshift({id:"?",label:"",selected:!0}));y=0;for(x=c.length;y<x;y++){d=c[y];i=a[d];if(w.length<=y)s={element:A.clone().attr("label",d),label:i.label},v=[s],w.push(v),f.append(s.element);else if(v=w[y],s=v[0],s.label!=d)s.element.attr("label",s.label=d);B=null;z=0;for(C=i.length;z<C;z++)if(d=i[z],u=v[z+1]){B=u.element;if(u.label!==d.label)B.text(u.label=d.label);if(u.id!==d.id)B.val(u.id=d.id);if(B[0].selected!==
d.selected)B.prop("selected",u.selected=d.selected)}else d.id===""&&r?E=r:(E=D.clone()).val(d.id).attr("selected",d.selected).text(d.label),v.push({element:E,label:d.label,id:d.id,selected:d.selected}),B?B.after(E):s.element.append(E),B=E;for(z++;v.length>z;)v.pop().element.remove()}for(;w.length>y;)w.pop()[0].element.remove()}var i;if(!(i=s.match(d)))throw Error("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '"+s+"'.");var j=c(i[2]||i[1]),k=i[4]||
i[6],l=i[5],m=c(i[3]||""),n=c(i[2]?i[1]:k),o=c(i[7]),w=[[{element:f,label:""}]];r&&(a(r)(e),r.removeClass("ng-scope"),r.remove());f.html("");f.bind("change",function(){e.$apply(function(){var a,c=o(e)||[],d={},h,i,j,m,r,s;if(p){i=[];m=0;for(s=w.length;m<s;m++){a=w[m];j=1;for(r=a.length;j<r;j++)if((h=a[j].element)[0].selected)h=h.val(),l&&(d[l]=h),d[k]=c[h],i.push(n(e,d))}}else h=f.val(),h=="?"?i=q:h==""?i=null:(d[k]=c[h],l&&(d[l]=h),i=n(e,d));g.$setViewValue(i)})});g.$render=h;e.$watch(h)}if(i[1]){for(var n=
i[0],o=i[1],p=f.multiple,s=f.ngOptions,r=!1,x,D=w(T.createElement("option")),A=w(T.createElement("optgroup")),y=D.clone(),i=0,B=h.children(),C=B.length;i<C;i++)if(B[i].value==""){x=r=B.eq(i);break}n.init(o,r,y);if(p&&(f.required||f.ngRequired)){var E=function(a){o.$setValidity("required",!f.required||a&&a.length);return a};o.$parsers.push(E);o.$formatters.unshift(E);f.$observe("required",function(){E(o.$viewValue)})}s?l(e,h,o):p?k(e,h,o):j(e,h,o,n)}}}}],Yd=["$interpolate",function(a){var c={addOption:s,
removeOption:s};return{restrict:"E",priority:100,compile:function(d,e){if(u(e.value)){var g=a(d.text(),!0);g||e.$set("value",d.text())}return function(a,d,e){var j=d.parent(),k=j.data("$selectController")||j.parent().data("$selectController");k&&k.databound?d.prop("selected",!1):k=c;g?a.$watch(g,function(a,c){e.$set("value",a);a!==c&&k.removeOption(c);k.addOption(a)}):k.addOption(e.value);d.bind("$destroy",function(){k.removeOption(e.value)})}}}}],Zd=I({restrict:"E",terminal:!0});(aa=P.jQuery)?(w=
aa,D(aa.fn,{scope:va.scope,controller:va.controller,injector:va.injector,inheritedData:va.inheritedData}),db("remove",!0,!0,!1),db("empty",!1,!1,!1),db("html",!1,!1,!0)):w=L;$a.element=w;(function(a){D(a,{bootstrap:tb,copy:U,extend:D,equals:ea,element:w,forEach:m,injector:ub,noop:s,bind:Va,toJson:ba,fromJson:qb,identity:na,isUndefined:u,isDefined:v,isString:B,isFunction:H,isObject:M,isNumber:Ra,isElement:ic,isArray:E,version:md,isDate:oa,lowercase:y,uppercase:la,callbacks:{counter:0}});ta=nc(P);try{ta("ngLocale")}catch(c){ta("ngLocale",
[]).provider("$locale",cd)}ta("ng",["ngLocale"],["$provide",function(a){a.provider("$compile",Fb).directive({a:nd,input:ec,textarea:ec,form:od,script:Vd,select:Xd,style:Zd,option:Yd,ngBind:zd,ngBindHtmlUnsafe:Bd,ngBindTemplate:Ad,ngClass:Cd,ngClassEven:Ed,ngClassOdd:Dd,ngCsp:Hd,ngCloak:Fd,ngController:Gd,ngForm:pd,ngHide:Od,ngInclude:Id,ngInit:Jd,ngNonBindable:Kd,ngPluralize:Ld,ngRepeat:Md,ngShow:Nd,ngStyle:Pd,ngSwitch:Qd,ngSwitchWhen:Rd,ngSwitchDefault:Sd,ngOptions:Wd,ngView:Ud,ngTransclude:Td,ngModel:ud,
ngList:wd,ngChange:vd,required:fc,ngRequired:fc,ngValue:yd}).directive(mb).directive(gc);a.provider({$anchorScroll:wc,$browser:zc,$cacheFactory:Ac,$controller:Fc,$document:Gc,$exceptionHandler:Hc,$filter:Tb,$interpolate:Ic,$http:Zc,$httpBackend:$c,$location:Mc,$log:Nc,$parse:Rc,$route:Uc,$routeParams:Vc,$rootScope:Wc,$q:Sc,$sniffer:Xc,$templateCache:Bc,$timeout:dd,$window:Yc})}])})($a);w(T).ready(function(){lc(T,tb)})})(window,document);angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none !important;}ng\\:form{display:block;}</style>');
;/*
 AngularJS v1.0.8
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(C,d,w){'use strict';d.module("ngResource",["ng"]).factory("$resource",["$http","$parse",function(x,y){function s(b,e){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,e?"%20":"+")}function t(b,e){this.template=b+="#";this.defaults=e||{};var a=this.urlParams={};h(b.split(/\W/),function(f){f&&RegExp("(^|[^\\\\]):"+f+"\\W").test(b)&&(a[f]=!0)});this.template=b.replace(/\\:/g,":")}function u(b,e,a){function f(m,a){var b=
{},a=o({},e,a);h(a,function(a,z){var c;a.charAt&&a.charAt(0)=="@"?(c=a.substr(1),c=y(c)(m)):c=a;b[z]=c});return b}function g(a){v(a||{},this)}var k=new t(b),a=o({},A,a);h(a,function(a,b){a.method=d.uppercase(a.method);var e=a.method=="POST"||a.method=="PUT"||a.method=="PATCH";g[b]=function(b,c,d,B){var j={},i,l=p,q=null;switch(arguments.length){case 4:q=B,l=d;case 3:case 2:if(r(c)){if(r(b)){l=b;q=c;break}l=c;q=d}else{j=b;i=c;l=d;break}case 1:r(b)?l=b:e?i=b:j=b;break;case 0:break;default:throw"Expected between 0-4 arguments [params, data, success, error], got "+
arguments.length+" arguments.";}var n=this instanceof g?this:a.isArray?[]:new g(i);x({method:a.method,url:k.url(o({},f(i,a.params||{}),j)),data:i}).then(function(b){var c=b.data;if(c)a.isArray?(n.length=0,h(c,function(a){n.push(new g(a))})):v(c,n);(l||p)(n,b.headers)},q);return n};g.prototype["$"+b]=function(a,d,h){var m=f(this),j=p,i;switch(arguments.length){case 3:m=a;j=d;i=h;break;case 2:case 1:r(a)?(j=a,i=d):(m=a,j=d||p);case 0:break;default:throw"Expected between 1-3 arguments [params, success, error], got "+
arguments.length+" arguments.";}g[b].call(this,m,e?this:w,j,i)}});g.bind=function(d){return u(b,o({},e,d),a)};return g}var A={get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}},p=d.noop,h=d.forEach,o=d.extend,v=d.copy,r=d.isFunction;t.prototype={url:function(b){var e=this,a=this.template,f,g,b=b||{};h(this.urlParams,function(h,c){f=b.hasOwnProperty(c)?b[c]:e.defaults[c];d.isDefined(f)&&f!==null?(g=s(f,!0).replace(/%26/gi,"&").replace(/%3D/gi,
"=").replace(/%2B/gi,"+"),a=a.replace(RegExp(":"+c+"(\\W)","g"),g+"$1")):a=a.replace(RegExp("(/?):"+c+"(\\W)","g"),function(a,b,c){return c.charAt(0)=="/"?c:b+c})});var a=a.replace(/\/?#$/,""),k=[];h(b,function(a,b){e.urlParams[b]||k.push(s(b)+"="+s(a))});k.sort();a=a.replace(/\/*$/,"");return a+(k.length?"?"+k.join("&"):"")}};return u}])})(window,window.angular);
;/*
 AngularJS v1.0.8
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(m,f,l){'use strict';f.module("ngCookies",["ng"]).factory("$cookies",["$rootScope","$browser",function(d,b){var c={},g={},h,i=!1,j=f.copy,k=f.isUndefined;b.addPollFn(function(){var a=b.cookies();h!=a&&(h=a,j(a,g),j(a,c),i&&d.$apply())})();i=!0;d.$watch(function(){var a,e,d;for(a in g)k(c[a])&&b.cookies(a,l);for(a in c)e=c[a],f.isString(e)?e!==g[a]&&(b.cookies(a,e),d=!0):f.isDefined(g[a])?c[a]=g[a]:delete c[a];if(d)for(a in e=b.cookies(),c)c[a]!==e[a]&&(k(e[a])?delete c[a]:c[a]=e[a])});return c}]).factory("$cookieStore",
["$cookies",function(d){return{get:function(b){return(b=d[b])?f.fromJson(b):b},put:function(b,c){d[b]=f.toJson(c)},remove:function(b){delete d[b]}}}])})(window,window.angular);
;angular.module("ui.bootstrap",["ui.bootstrap.transition","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dialog","ui.bootstrap.dropdownToggle","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.transition",[]).factory("$transition",["$q","$timeout","$rootScope",function(e,t,n){function a(e){for(var t in e)if(void 0!==o.style[t])return e[t]}var i=function(a,o,r){r=r||{};var l=e.defer(),s=i[r.animation?"animationEndEventName":"transitionEndEventName"],c=function(){n.$apply(function(){a.unbind(s,c),l.resolve(a)})};return s&&a.bind(s,c),t(function(){angular.isString(o)?a.addClass(o):angular.isFunction(o)?o(a):angular.isObject(o)&&a.css(o),s||l.resolve(a)}),l.promise.cancel=function(){s&&a.unbind(s,c),l.reject("Transition cancelled")},l.promise},o=document.createElement("trans"),r={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},l={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return i.transitionEndEventName=a(r),i.animationEndEventName=a(l),i}]),angular.module("ui.bootstrap.collapse",["ui.bootstrap.transition"]).directive("collapse",["$transition",function(e){var t=function(e,t,n){t.removeClass("collapse"),t.css({height:n}),t[0].offsetWidth,t.addClass("collapse")};return{link:function(n,a,i){var o,r=!0;n.$watch(function(){return a[0].scrollHeight},function(){0!==a[0].scrollHeight&&(o||(r?t(n,a,a[0].scrollHeight+"px"):t(n,a,"auto")))}),n.$watch(i.collapse,function(e){e?u():c()});var l,s=function(t){return l&&l.cancel(),l=e(a,t),l.then(function(){l=void 0},function(){l=void 0}),l},c=function(){r?(r=!1,o||t(n,a,"auto")):s({height:a[0].scrollHeight+"px"}).then(function(){o||t(n,a,"auto")}),o=!1},u=function(){o=!0,r?(r=!1,t(n,a,0)):(t(n,a,a[0].scrollHeight+"px"),s({height:"0"}))}}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("accordionConfig",{closeOthers:!0}).controller("AccordionController",["$scope","$attrs","accordionConfig",function(e,t,n){this.groups=[],this.closeOthers=function(a){var i=angular.isDefined(t.closeOthers)?e.$eval(t.closeOthers):n.closeOthers;i&&angular.forEach(this.groups,function(e){e!==a&&(e.isOpen=!1)})},this.addGroup=function(e){var t=this;this.groups.push(e),e.$on("$destroy",function(){t.removeGroup(e)})},this.removeGroup=function(e){var t=this.groups.indexOf(e);-1!==t&&this.groups.splice(this.groups.indexOf(e),1)}}]).directive("accordion",function(){return{restrict:"EA",controller:"AccordionController",transclude:!0,replace:!1,templateUrl:"template/accordion/accordion.html"}}).directive("accordionGroup",["$parse","$transition","$timeout",function(e){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/accordion/accordion-group.html",scope:{heading:"@"},controller:["$scope",function(){this.setHeading=function(e){this.heading=e}}],link:function(t,n,a,i){var o,r;i.addGroup(t),t.isOpen=!1,a.isOpen&&(o=e(a.isOpen),r=o.assign,t.$watch(function(){return o(t.$parent)},function(e){t.isOpen=e}),t.isOpen=o?o(t.$parent):!1),t.$watch("isOpen",function(e){e&&i.closeOthers(t),r&&r(t.$parent,e)})}}}]).directive("accordionHeading",function(){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",compile:function(e,t,n){return function(e,t,a,i){i.setHeading(n(e,function(){}))}}}}).directive("accordionTransclude",function(){return{require:"^accordionGroup",link:function(e,t,n,a){e.$watch(function(){return a[n.accordionTransclude]},function(e){e&&(t.html(""),t.append(e))})}}}),angular.module("ui.bootstrap.alert",[]).directive("alert",function(){return{restrict:"EA",templateUrl:"template/alert/alert.html",transclude:!0,replace:!0,scope:{type:"=",close:"&"},link:function(e,t,n){e.closeable="close"in n}}}),angular.module("ui.bootstrap.buttons",[]).constant("buttonConfig",{activeClass:"active",toggleEvent:"click"}).directive("btnRadio",["buttonConfig",function(e){var t=e.activeClass||"active",n=e.toggleEvent||"click";return{require:"ngModel",link:function(e,a,i,o){o.$render=function(){a.toggleClass(t,angular.equals(o.$modelValue,e.$eval(i.btnRadio)))},a.bind(n,function(){a.hasClass(t)||e.$apply(function(){o.$setViewValue(e.$eval(i.btnRadio)),o.$render()})})}}}]).directive("btnCheckbox",["buttonConfig",function(e){var t=e.activeClass||"active",n=e.toggleEvent||"click";return{require:"ngModel",link:function(e,a,i,o){function r(){var t=e.$eval(i.btnCheckboxTrue);return angular.isDefined(t)?t:!0}function l(){var t=e.$eval(i.btnCheckboxFalse);return angular.isDefined(t)?t:!1}o.$render=function(){a.toggleClass(t,angular.equals(o.$modelValue,r()))},a.bind(n,function(){e.$apply(function(){o.$setViewValue(a.hasClass(t)?l():r()),o.$render()})})}}}]),angular.module("ui.bootstrap.carousel",["ui.bootstrap.transition"]).controller("CarouselController",["$scope","$timeout","$transition","$q",function(e,t,n){function a(){function n(){o?(e.next(),a()):e.pause()}i&&t.cancel(i);var r=+e.interval;!isNaN(r)&&r>=0&&(i=t(n,r))}var i,o,r=this,l=r.slides=[],s=-1;r.currentSlide=null,r.select=function(i,o){function c(){r.currentSlide&&angular.isString(o)&&!e.noTransition&&i.$element?(i.$element.addClass(o),i.$element[0].offsetWidth=i.$element[0].offsetWidth,angular.forEach(l,function(e){angular.extend(e,{direction:"",entering:!1,leaving:!1,active:!1})}),angular.extend(i,{direction:o,active:!0,entering:!0}),angular.extend(r.currentSlide||{},{direction:o,leaving:!0}),e.$currentTransition=n(i.$element,{}),function(t,n){e.$currentTransition.then(function(){u(t,n)},function(){u(t,n)})}(i,r.currentSlide)):u(i,r.currentSlide),r.currentSlide=i,s=p,a()}function u(t,n){angular.extend(t,{direction:"",active:!0,leaving:!1,entering:!1}),angular.extend(n||{},{direction:"",active:!1,leaving:!1,entering:!1}),e.$currentTransition=null}var p=l.indexOf(i);void 0===o&&(o=p>s?"next":"prev"),i&&i!==r.currentSlide&&(e.$currentTransition?(e.$currentTransition.cancel(),t(c)):c())},r.indexOfSlide=function(e){return l.indexOf(e)},e.next=function(){var t=(s+1)%l.length;return e.$currentTransition?void 0:r.select(l[t],"next")},e.prev=function(){var t=0>s-1?l.length-1:s-1;return e.$currentTransition?void 0:r.select(l[t],"prev")},e.select=function(e){r.select(e)},e.isActive=function(e){return r.currentSlide===e},e.slides=function(){return l},e.$watch("interval",a),e.play=function(){o||(o=!0,a())},e.pause=function(){e.noPause||(o=!1,i&&t.cancel(i))},r.addSlide=function(t,n){t.$element=n,l.push(t),1===l.length||t.active?(r.select(l[l.length-1]),1==l.length&&e.play()):t.active=!1},r.removeSlide=function(e){var t=l.indexOf(e);l.splice(t,1),l.length>0&&e.active?t>=l.length?r.select(l[t-1]):r.select(l[t]):s>t&&s--}}]).directive("carousel",[function(){return{restrict:"EA",transclude:!0,replace:!0,controller:"CarouselController",require:"carousel",templateUrl:"template/carousel/carousel.html",scope:{interval:"=",noTransition:"=",noPause:"="}}}]).directive("slide",["$parse",function(e){return{require:"^carousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/carousel/slide.html",scope:{},link:function(t,n,a,i){if(a.active){var o=e(a.active),r=o.assign,l=t.active=o(t.$parent);t.$watch(function(){var e=o(t.$parent);return e!==t.active&&(e!==l?l=t.active=e:r(t.$parent,e=l=t.active)),e})}i.addSlide(t,n),t.$on("$destroy",function(){i.removeSlide(t)}),t.$watch("active",function(e){e&&i.select(t)})}}}]),angular.module("ui.bootstrap.position",[]).factory("$position",["$document","$window",function(e,t){function n(e,n){return e.currentStyle?e.currentStyle[n]:t.getComputedStyle?t.getComputedStyle(e)[n]:e.style[n]}function a(e){return"static"===(n(e,"position")||"static")}var i,o;e.bind("mousemove",function(e){i=e.pageX,o=e.pageY});var r=function(t){for(var n=e[0],i=t.offsetParent||n;i&&i!==n&&a(i);)i=i.offsetParent;return i||n};return{position:function(t){var n=this.offset(t),a={top:0,left:0},i=r(t[0]);return i!=e[0]&&(a=this.offset(angular.element(i)),a.top+=i.clientTop-i.scrollTop,a.left+=i.clientLeft-i.scrollLeft),{width:t.prop("offsetWidth"),height:t.prop("offsetHeight"),top:n.top-a.top,left:n.left-a.left}},offset:function(n){var a=n[0].getBoundingClientRect();return{width:n.prop("offsetWidth"),height:n.prop("offsetHeight"),top:a.top+(t.pageYOffset||e[0].body.scrollTop),left:a.left+(t.pageXOffset||e[0].body.scrollLeft)}},mouse:function(){return{x:i,y:o}}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.position"]).constant("datepickerConfig",{dayFormat:"dd",monthFormat:"MMMM",yearFormat:"yyyy",dayHeaderFormat:"EEE",dayTitleFormat:"MMMM yyyy",monthTitleFormat:"yyyy",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null}).controller("DatepickerController",["$scope","$attrs","dateFilter","datepickerConfig",function(e,t,n,a){function i(t,n){return angular.isDefined(t)?e.$parent.$eval(t):n}function o(e,t){return new Date(e,t,0).getDate()}function r(e,t){for(var n=Array(t),a=e,i=0;t>i;)n[i++]=new Date(a),a.setDate(a.getDate()+1);return n}function l(e,t,a,i){return{date:e,label:n(e,t),selected:!!a,secondary:!!i}}var s={day:i(t.dayFormat,a.dayFormat),month:i(t.monthFormat,a.monthFormat),year:i(t.yearFormat,a.yearFormat),dayHeader:i(t.dayHeaderFormat,a.dayHeaderFormat),dayTitle:i(t.dayTitleFormat,a.dayTitleFormat),monthTitle:i(t.monthTitleFormat,a.monthTitleFormat)},c=i(t.startingDay,a.startingDay),u=i(t.yearRange,a.yearRange);this.minDate=a.minDate?new Date(a.minDate):null,this.maxDate=a.maxDate?new Date(a.maxDate):null,this.modes=[{name:"day",getVisibleDates:function(e,t){var a=e.getFullYear(),i=e.getMonth(),u=new Date(a,i,1),p=c-u.getDay(),d=p>0?7-p:-p,f=new Date(u),m=0;d>0&&(f.setDate(-d+1),m+=d),m+=o(a,i+1),m+=(7-m%7)%7;for(var g=r(f,m),h=Array(7),v=0;m>v;v++){var b=new Date(g[v]);g[v]=l(b,s.day,t&&t.getDate()===b.getDate()&&t.getMonth()===b.getMonth()&&t.getFullYear()===b.getFullYear(),b.getMonth()!==i)}for(var $=0;7>$;$++)h[$]=n(g[$].date,s.dayHeader);return{objects:g,title:n(e,s.dayTitle),labels:h}},compare:function(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate())-new Date(t.getFullYear(),t.getMonth(),t.getDate())},split:7,step:{months:1}},{name:"month",getVisibleDates:function(e,t){for(var a=Array(12),i=e.getFullYear(),o=0;12>o;o++){var r=new Date(i,o,1);a[o]=l(r,s.month,t&&t.getMonth()===o&&t.getFullYear()===i)}return{objects:a,title:n(e,s.monthTitle)}},compare:function(e,t){return new Date(e.getFullYear(),e.getMonth())-new Date(t.getFullYear(),t.getMonth())},split:3,step:{years:1}},{name:"year",getVisibleDates:function(e,t){for(var n=Array(u),a=e.getFullYear(),i=parseInt((a-1)/u,10)*u+1,o=0;u>o;o++){var r=new Date(i+o,0,1);n[o]=l(r,s.year,t&&t.getFullYear()===r.getFullYear())}return{objects:n,title:[n[0].label,n[u-1].label].join(" - ")}},compare:function(e,t){return e.getFullYear()-t.getFullYear()},split:5,step:{years:u}}],this.isDisabled=function(t,n){var a=this.modes[n||0];return this.minDate&&0>a.compare(t,this.minDate)||this.maxDate&&a.compare(t,this.maxDate)>0||e.dateDisabled&&e.dateDisabled({date:t,mode:a.name})}}]).directive("datepicker",["dateFilter","$parse","datepickerConfig","$log",function(e,t,n,a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/datepicker.html",scope:{dateDisabled:"&"},require:["datepicker","?^ngModel"],controller:"DatepickerController",link:function(e,i,o,r){function l(){e.showWeekNumbers=0===m&&h}function s(e,t){for(var n=[];e.length>0;)n.push(e.splice(0,t));return n}function c(t){var n=null,i=!0;f.$modelValue&&(n=new Date(f.$modelValue),isNaN(n)?(i=!1,a.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):t&&(g=n)),f.$setValidity("date",i);var o=d.modes[m],r=o.getVisibleDates(g,n);angular.forEach(r.objects,function(e){e.disabled=d.isDisabled(e.date,m)}),f.$setValidity("date-disabled",!n||!d.isDisabled(n)),e.rows=s(r.objects,o.split),e.labels=r.labels||[],e.title=r.title}function u(e){m=e,l(),c()}function p(e){var t=new Date(e);t.setDate(t.getDate()+4-(t.getDay()||7));var n=t.getTime();return t.setMonth(0),t.setDate(1),Math.floor(Math.round((n-t)/864e5)/7)+1}var d=r[0],f=r[1];if(f){var m=0,g=new Date,h=n.showWeeks;o.showWeeks?e.$parent.$watch(t(o.showWeeks),function(e){h=!!e,l()}):l(),o.min&&e.$parent.$watch(t(o.min),function(e){d.minDate=e?new Date(e):null,c()}),o.max&&e.$parent.$watch(t(o.max),function(e){d.maxDate=e?new Date(e):null,c()}),f.$render=function(){c(!0)},e.select=function(e){if(0===m){var t=new Date(f.$modelValue);t.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),f.$setViewValue(t),c(!0)}else g=e,u(m-1)},e.move=function(e){var t=d.modes[m].step;g.setMonth(g.getMonth()+e*(t.months||0)),g.setFullYear(g.getFullYear()+e*(t.years||0)),c()},e.toggleMode=function(){u((m+1)%d.modes.length)},e.getWeekNumber=function(t){return 0===m&&e.showWeekNumbers&&7===t.length?p(t[0].date):null}}}}}]).constant("datepickerPopupConfig",{dateFormat:"yyyy-MM-dd",closeOnDateSelection:!0}).directive("datepickerPopup",["$compile","$parse","$document","$position","dateFilter","datepickerPopupConfig",function(e,t,n,a,i,o){return{restrict:"EA",require:"ngModel",link:function(r,l,s,c){function u(e){return e?i(e,h):null}function p(e){if(e){var t=new Date(e);if(!isNaN(t))return t}return e}function d(e){$?$(r,!!e):v.isOpen=!!e}function f(e,n,a){e&&(r.$watch(t(e),function(e){v[n]=e}),D.attr(a||n,n))}function m(){v.position=a.position(l),v.position.top=v.position.top+l.prop("offsetHeight")}var g=angular.isDefined(s.closeOnDateSelection)?v.$eval(s.closeOnDateSelection):o.closeOnDateSelection,h=s.datepickerPopup||o.dateFormat,v=r.$new();r.$on("$destroy",function(){v.$destroy()}),c.$formatters.push(u),c.$parsers.push(p);var b,$;s.open&&(b=t(s.open),$=b.assign,r.$watch(b,function(e){v.isOpen=!!e})),v.isOpen=b?b(r):!1;var y=function(e){v.isOpen&&e.target!==l[0]&&v.$apply(function(){d(!1)})},w=function(){v.$apply(function(){d(!0)})},k=angular.element("<datepicker-popup-wrap><datepicker></datepicker></datepicker-popup-wrap>");k.attr({"ng-model":"date","ng-change":"dateSelection()"});var D=k.find("datepicker");s.datepickerOptions&&D.attr(angular.extend({},r.$eval(s.datepickerOptions)));var x=t(s.ngModel).assign;v.dateSelection=function(){x(r,v.date),g&&d(!1)},v.$watch(function(){return c.$modelValue},function(e){if(angular.isString(e)){var t=p(e);if(e&&!t)throw x(r,null),Error(e+" cannot be parsed to a date object.");e=t}v.date=e,m()}),f(s.min,"min"),f(s.max,"max"),s.showWeeks?f(s.showWeeks,"showWeeks","show-weeks"):(v.showWeeks=!0,D.attr("show-weeks","showWeeks")),s.dateDisabled&&D.attr("date-disabled",s.dateDisabled),v.$watch("isOpen",function(e){e?(m(),n.bind("click",y),l.unbind("focus",w),l.focus()):(n.unbind("click",y),l.bind("focus",w)),$&&$(r,e)}),v.today=function(){x(r,new Date)},v.clear=function(){x(r,null)},l.after(e(k)(v))}}}]).directive("datepickerPopupWrap",[function(){return{restrict:"E",replace:!0,transclude:!0,templateUrl:"template/datepicker/popup.html",link:function(e,t){t.bind("click",function(e){e.preventDefault(),e.stopPropagation()})}}}]);var dialogModule=angular.module("ui.bootstrap.dialog",["ui.bootstrap.transition"]);dialogModule.controller("MessageBoxController",["$scope","dialog","model",function(e,t,n){e.title=n.title,e.message=n.message,e.buttons=n.buttons,e.close=function(e){t.close(e)}}]),dialogModule.provider("$dialog",function(){var e={backdrop:!0,dialogClass:"modal",backdropClass:"modal-backdrop",transitionClass:"fade",triggerClass:"in",resolve:{},backdropFade:!1,dialogFade:!1,keyboard:!0,backdropClick:!0},t={},n={value:0};this.options=function(e){t=e},this.$get=["$http","$document","$compile","$rootScope","$controller","$templateCache","$q","$transition","$injector",function(a,i,o,r,l,s,c,u,p){function d(e){var t=angular.element("<div>");return t.addClass(e),t}function f(n){var a=this,i=this.options=angular.extend({},e,t,n);this._open=!1,this.backdropEl=d(i.backdropClass),i.backdropFade&&(this.backdropEl.addClass(i.transitionClass),this.backdropEl.removeClass(i.triggerClass)),this.modalEl=d(i.dialogClass),i.dialogFade&&(this.modalEl.addClass(i.transitionClass),this.modalEl.removeClass(i.triggerClass)),this.handledEscapeKey=function(e){27===e.which&&(a.close(),e.preventDefault(),a.$scope.$apply())},this.handleBackDropClick=function(e){a.close(),e.preventDefault(),a.$scope.$apply()}}var m=i.find("body");return f.prototype.isOpen=function(){return this._open},f.prototype.open=function(e,t){var n=this,a=this.options;if(e&&(a.templateUrl=e),t&&(a.controller=t),!a.template&&!a.templateUrl)throw Error("Dialog.open expected template or templateUrl, neither found. Use options or open method to specify them.");return this._loadResolves().then(function(e){var t=e.$scope=n.$scope=e.$scope?e.$scope:r.$new();if(n.modalEl.html(e.$template),n.options.controller){var a=l(n.options.controller,e);n.modalEl.children().data("ngControllerController",a)}o(n.modalEl)(t),n._addElementsToDom(),setTimeout(function(){n.options.dialogFade&&n.modalEl.addClass(n.options.triggerClass),n.options.backdropFade&&n.backdropEl.addClass(n.options.triggerClass)}),n._bindEvents()}),this.deferred=c.defer(),this.deferred.promise},f.prototype.close=function(e){function t(e){e.removeClass(a.options.triggerClass)}function n(){a._open&&a._onCloseComplete(e)}var a=this,i=this._getFadingElements();if(i.length>0)for(var o=i.length-1;o>=0;o--)u(i[o],t).then(n);else this._onCloseComplete(e)},f.prototype._getFadingElements=function(){var e=[];return this.options.dialogFade&&e.push(this.modalEl),this.options.backdropFade&&e.push(this.backdropEl),e},f.prototype._bindEvents=function(){this.options.keyboard&&m.bind("keydown",this.handledEscapeKey),this.options.backdrop&&this.options.backdropClick&&this.backdropEl.bind("click",this.handleBackDropClick)},f.prototype._unbindEvents=function(){this.options.keyboard&&m.unbind("keydown",this.handledEscapeKey),this.options.backdrop&&this.options.backdropClick&&this.backdropEl.unbind("click",this.handleBackDropClick)},f.prototype._onCloseComplete=function(e){this._removeElementsFromDom(),this._unbindEvents(),this.deferred.resolve(e)},f.prototype._addElementsToDom=function(){m.append(this.modalEl),this.options.backdrop&&(0===n.value&&m.append(this.backdropEl),n.value++),this._open=!0},f.prototype._removeElementsFromDom=function(){this.modalEl.remove(),this.options.backdrop&&(n.value--,0===n.value&&this.backdropEl.remove()),this._open=!1},f.prototype._loadResolves=function(){var e,t=[],n=[],i=this;return this.options.template?e=c.when(this.options.template):this.options.templateUrl&&(e=a.get(this.options.templateUrl,{cache:s}).then(function(e){return e.data})),angular.forEach(this.options.resolve||[],function(e,a){n.push(a),t.push(angular.isString(e)?p.get(e):p.invoke(e))}),n.push("$template"),t.push(e),c.all(t).then(function(e){var t={};return angular.forEach(e,function(e,a){t[n[a]]=e}),t.dialog=i,t})},{dialog:function(e){return new f(e)},messageBox:function(e,t,n){return new f({templateUrl:"template/dialog/message.html",controller:"MessageBoxController",resolve:{model:function(){return{title:e,message:t,buttons:n}}}})}}}]}),angular.module("ui.bootstrap.dropdownToggle",[]).directive("dropdownToggle",["$document","$location",function(e){var t=null,n=angular.noop;return{restrict:"CA",link:function(a,i){a.$watch("$location.path",function(){n()}),i.parent().bind("click",function(){n()}),i.bind("click",function(a){var o=i===t;a.preventDefault(),a.stopPropagation(),t&&n(),o||(i.parent().addClass("open"),t=i,n=function(a){a&&(a.preventDefault(),a.stopPropagation()),e.unbind("click",n),i.parent().removeClass("open"),n=angular.noop,t=null},e.bind("click",n))})}}}]),angular.module("ui.bootstrap.modal",["ui.bootstrap.dialog"]).directive("modal",["$parse","$dialog",function(e,t){return{restrict:"EA",terminal:!0,link:function(n,a,i){var o,r=angular.extend({},n.$eval(i.uiOptions||i.bsOptions||i.options)),l=i.modal||i.show;r=angular.extend(r,{template:a.html(),resolve:{$scope:function(){return n}}});var s=t.dialog(r);a.remove(),o=i.close?function(){e(i.close)(n)}:function(){angular.isFunction(e(l).assign)&&e(l).assign(n,!1)},n.$watch(l,function(e){e?s.open().then(function(){o()}):s.isOpen()&&s.close()})}}}]),angular.module("ui.bootstrap.pagination",[]).controller("PaginationController",["$scope","$interpolate",function(e,t){this.currentPage=1,this.noPrevious=function(){return 1===this.currentPage},this.noNext=function(){return this.currentPage===e.numPages},this.isActive=function(e){return this.currentPage===e},this.reset=function(){e.pages=[],this.currentPage=parseInt(e.currentPage,10),this.currentPage>e.numPages&&e.selectPage(e.numPages)};var n=this;e.selectPage=function(t){!n.isActive(t)&&t>0&&e.numPages>=t&&(e.currentPage=t,e.onSelectPage({page:t}))},this.getAttributeValue=function(n,a,i){return angular.isDefined(n)?i?t(n)(e.$parent):e.$parent.$eval(n):a}}]).constant("paginationConfig",{boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("pagination",["paginationConfig",function(e){return{restrict:"EA",scope:{numPages:"=",currentPage:"=",maxSize:"=",onSelectPage:"&"},controller:"PaginationController",templateUrl:"template/pagination/pagination.html",replace:!0,link:function(t,n,a,i){function o(e,t,n,a){return{number:e,text:t,active:n,disabled:a}}var r=i.getAttributeValue(a.boundaryLinks,e.boundaryLinks),l=i.getAttributeValue(a.directionLinks,e.directionLinks),s=i.getAttributeValue(a.firstText,e.firstText,!0),c=i.getAttributeValue(a.previousText,e.previousText,!0),u=i.getAttributeValue(a.nextText,e.nextText,!0),p=i.getAttributeValue(a.lastText,e.lastText,!0),d=i.getAttributeValue(a.rotate,e.rotate);t.$watch("numPages + currentPage + maxSize",function(){i.reset();var e=1,n=t.numPages,a=angular.isDefined(t.maxSize)&&t.maxSize<t.numPages;a&&(d?(e=Math.max(i.currentPage-Math.floor(t.maxSize/2),1),n=e+t.maxSize-1,n>t.numPages&&(n=t.numPages,e=n-t.maxSize+1)):(e=(Math.ceil(i.currentPage/t.maxSize)-1)*t.maxSize+1,n=Math.min(e+t.maxSize-1,t.numPages)));for(var f=e;n>=f;f++){var m=o(f,f,i.isActive(f),!1);t.pages.push(m)}if(a&&!d){if(e>1){var g=o(e-1,"...",!1,!1);t.pages.unshift(g)}if(t.numPages>n){var h=o(n+1,"...",!1,!1);t.pages.push(h)}}if(l){var v=o(i.currentPage-1,c,!1,i.noPrevious());t.pages.unshift(v);var b=o(i.currentPage+1,u,!1,i.noNext());t.pages.push(b)}if(r){var $=o(1,s,!1,i.noPrevious());t.pages.unshift($);var y=o(t.numPages,p,!1,i.noNext());t.pages.push(y)}})}}}]).constant("pagerConfig",{previousText:"« Previous",nextText:"Next »",align:!0}).directive("pager",["pagerConfig",function(e){return{restrict:"EA",scope:{numPages:"=",currentPage:"=",onSelectPage:"&"},controller:"PaginationController",templateUrl:"template/pagination/pager.html",replace:!0,link:function(t,n,a,i){function o(e,t,n,a,i){return{number:e,text:t,disabled:n,previous:s&&a,next:s&&i}}var r=i.getAttributeValue(a.previousText,e.previousText,!0),l=i.getAttributeValue(a.nextText,e.nextText,!0),s=i.getAttributeValue(a.align,e.align);t.$watch("numPages + currentPage",function(){i.reset();var e=o(i.currentPage-1,r,i.noPrevious(),!0,!1);t.pages.unshift(e);var n=o(i.currentPage+1,l,i.noNext(),!1,!0);t.pages.push(n)})}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position"]).provider("$tooltip",function(){function e(e){var t=/[A-Z]/g,n="-";return e.replace(t,function(e,t){return(t?n:"")+e.toLowerCase()})}var t={placement:"top",animation:!0,popupDelay:0},n={mouseenter:"mouseleave",click:"click",focus:"blur"},a={};this.options=function(e){angular.extend(a,e)},this.setTriggers=function(e){angular.extend(n,e)},this.$get=["$window","$compile","$timeout","$parse","$document","$position","$interpolate",function(i,o,r,l,s,c,u){return function(i,p,d){function f(e){var t=e||m.trigger||d,a=n[t]||t;return{show:t,hide:a}}var m=angular.extend({},t,a),g=e(i),h=u.startSymbol(),v=u.endSymbol(),b="<"+g+"-popup "+'title="'+h+"tt_title"+v+'" '+'content="'+h+"tt_content"+v+'" '+'placement="'+h+"tt_placement"+v+'" '+'animation="tt_animation()" '+'is-open="tt_isOpen"'+">"+"</"+g+"-popup>";return{restrict:"EA",scope:!0,link:function(e,t,n){function a(){e.tt_isOpen?d():u()}function u(){e.tt_popupDelay?$=r(g,e.tt_popupDelay):e.$apply(g)}function d(){e.$apply(function(){h()})}function g(){var n,a,i,o;if(e.tt_content){switch(v&&r.cancel(v),w.css({top:0,left:0,display:"block"}),k?(y=y||s.find("body"),y.append(w)):t.after(w),n=k?c.offset(t):c.position(t),a=w.prop("offsetWidth"),i=w.prop("offsetHeight"),e.tt_placement){case"mouse":var l=c.mouse();o={top:l.y,left:l.x};break;case"right":o={top:n.top+n.height/2-i/2,left:n.left+n.width};break;case"bottom":o={top:n.top+n.height,left:n.left+n.width/2-a/2};break;case"left":o={top:n.top+n.height/2-i/2,left:n.left-a};break;default:o={top:n.top-i,left:n.left+n.width/2-a/2}}o.top+="px",o.left+="px",w.css(o),e.tt_isOpen=!0}}function h(){e.tt_isOpen=!1,r.cancel($),angular.isDefined(e.tt_animation)&&e.tt_animation()?v=r(function(){w.remove()},500):w.remove()}var v,$,y,w=o(b)(e),k=angular.isDefined(m.appendToBody)?m.appendToBody:!1,D=f(void 0),x=!1;e.tt_isOpen=!1,n.$observe(i,function(t){e.tt_content=t}),n.$observe(p+"Title",function(t){e.tt_title=t}),n.$observe(p+"Placement",function(t){e.tt_placement=angular.isDefined(t)?t:m.placement}),n.$observe(p+"Animation",function(t){e.tt_animation=angular.isDefined(t)?l(t):function(){return m.animation}}),n.$observe(p+"PopupDelay",function(t){var n=parseInt(t,10);e.tt_popupDelay=isNaN(n)?m.popupDelay:n}),n.$observe(p+"Trigger",function(e){x&&(t.unbind(D.show,u),t.unbind(D.hide,d)),D=f(e),D.show===D.hide?t.bind(D.show,a):(t.bind(D.show,u),t.bind(D.hide,d)),x=!0}),n.$observe(p+"AppendToBody",function(t){k=angular.isDefined(t)?l(t)(e):k}),k&&e.$on("$locationChangeSuccess",function(){e.tt_isOpen&&h()}),e.$on("$destroy",function(){e.tt_isOpen?h():w.remove()})}}}}]}).directive("tooltipPopup",function(){return{restrict:"E",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html"}}).directive("tooltip",["$tooltip",function(e){return e("tooltip","tooltip","mouseenter")}]).directive("tooltipHtmlUnsafePopup",function(){return{restrict:"E",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-unsafe-popup.html"}}).directive("tooltipHtmlUnsafe",["$tooltip",function(e){return e("tooltipHtmlUnsafe","tooltip","mouseenter")}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("popoverPopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html"}}).directive("popover",["$compile","$timeout","$parse","$window","$tooltip",function(e,t,n,a,i){return i("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",["ui.bootstrap.transition"]).constant("progressConfig",{animate:!0,autoType:!1,stackedTypes:["success","info","warning","danger"]}).controller("ProgressBarController",["$scope","$attrs","progressConfig",function(e,t,n){function a(e){return r[e]}var i=angular.isDefined(t.animate)?e.$eval(t.animate):n.animate,o=angular.isDefined(t.autoType)?e.$eval(t.autoType):n.autoType,r=angular.isDefined(t.stackedTypes)?e.$eval("["+t.stackedTypes+"]"):n.stackedTypes;this.makeBar=function(e,t,n){var r=angular.isObject(e)?e.value:e||0,l=angular.isObject(t)?t.value:t||0,s=angular.isObject(e)&&angular.isDefined(e.type)?e.type:o?a(n||0):null;return{from:l,to:r,type:s,animate:i}},this.addBar=function(t){e.bars.push(t),e.totalPercent+=t.to},this.clearBars=function(){e.bars=[],e.totalPercent=0},this.clearBars()}]).directive("progress",function(){return{restrict:"EA",replace:!0,controller:"ProgressBarController",scope:{value:"=percent",onFull:"&",onEmpty:"&"},templateUrl:"template/progressbar/progress.html",link:function(e,t,n,a){e.$watch("value",function(e,t){if(a.clearBars(),angular.isArray(e))for(var n=0,i=e.length;i>n;n++)a.addBar(a.makeBar(e[n],t[n],n));else a.addBar(a.makeBar(e,t))},!0),e.$watch("totalPercent",function(t){t>=100?e.onFull():0>=t&&e.onEmpty()},!0)}}}).directive("progressbar",["$transition",function(e){return{restrict:"EA",replace:!0,scope:{width:"=",old:"=",type:"=",animate:"="},templateUrl:"template/progressbar/bar.html",link:function(t,n){t.$watch("width",function(a){t.animate?(n.css("width",t.old+"%"),e(n,{width:a+"%"})):n.css("width",a+"%")})}}}]),angular.module("ui.bootstrap.rating",[]).constant("ratingConfig",{max:5}).directive("rating",["ratingConfig","$parse",function(e,t){return{restrict:"EA",scope:{value:"=",onHover:"&",onLeave:"&"},templateUrl:"template/rating/rating.html",replace:!0,link:function(n,a,i){var o=angular.isDefined(i.max)?n.$parent.$eval(i.max):e.max;n.range=[];for(var r=1;o>=r;r++)n.range.push(r);n.rate=function(e){n.readonly||(n.value=e)},n.enter=function(e){n.readonly||(n.val=e),n.onHover({value:e})},n.reset=function(){n.val=angular.copy(n.value),n.onLeave()},n.reset(),n.$watch("value",function(e){n.val=e}),n.readonly=!1,i.readonly&&n.$parent.$watch(t(i.readonly),function(e){n.readonly=!!e})}}}]),angular.module("ui.bootstrap.tabs",[]).directive("tabs",function(){return function(){throw Error("The `tabs` directive is deprecated, please migrate to `tabset`. Instructions can be found at http://github.com/angular-ui/bootstrap/tree/master/CHANGELOG.md")}}).controller("TabsetController",["$scope","$element",function(e){var t=this,n=t.tabs=e.tabs=[];t.select=function(e){angular.forEach(n,function(e){e.active=!1}),e.active=!0},t.addTab=function(e){n.push(e),(1===n.length||e.active)&&t.select(e)},t.removeTab=function(e){var a=n.indexOf(e);if(e.active&&n.length>1){var i=a==n.length-1?a-1:a+1;t.select(n[i])}n.splice(a,1)}}]).directive("tabset",function(){return{restrict:"EA",transclude:!0,replace:!0,require:"^tabset",scope:{},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",compile:function(e,t,n){return function(e,t,a,i){e.vertical=angular.isDefined(a.vertical)?e.$eval(a.vertical):!1,e.type=angular.isDefined(a.type)?e.$parent.$eval(a.type):"tabs",e.direction=angular.isDefined(a.direction)?e.$parent.$eval(a.direction):"top",e.tabsAbove="below"!=e.direction,i.$scope=e,i.$transcludeFn=n}}}}).directive("tab",["$parse","$http","$templateCache","$compile",function(e){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},compile:function(t,n,a){return function(t,n,i,o){var r,l;i.active?(r=e(i.active),l=r.assign,t.$parent.$watch(r,function(e){t.active=!!e}),t.active=r(t.$parent)):l=r=angular.noop,t.$watch("active",function(e){l(t.$parent,e),e?(o.select(t),t.onSelect()):t.onDeselect()}),t.disabled=!1,i.disabled&&t.$parent.$watch(e(i.disabled),function(e){t.disabled=!!e}),t.select=function(){t.disabled||(t.active=!0)},o.addTab(t),t.$on("$destroy",function(){o.removeTab(t)}),t.active&&l(t.$parent,!0),t.$transcludeFn=a}}}}]).directive("tabHeadingTransclude",[function(){return{restrict:"A",require:"^tab",link:function(e,t){e.$watch("headingElement",function(e){e&&(t.html(""),t.append(e))})}}}]).directive("tabContentTransclude",["$compile","$parse",function(){function e(e){return e.tagName&&(e.hasAttribute("tab-heading")||e.hasAttribute("data-tab-heading")||"tab-heading"===e.tagName.toLowerCase()||"data-tab-heading"===e.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(t,n,a){var i=t.$eval(a.tabContentTransclude);i.$transcludeFn(i.$parent,function(t){angular.forEach(t,function(t){e(t)?i.headingElement=t:n.append(t)
})})}}}]).directive("tabsetTitles",function(){return{restrict:"A",require:"^tabset",templateUrl:"template/tabs/tabset-titles.html",replace:!0,link:function(e,t,n,a){e.$eval(n.tabsetTitles)?a.$transcludeFn(a.$scope.$parent,function(e){t.append(e)}):t.remove()}}}),angular.module("ui.bootstrap.timepicker",[]).filter("pad",function(){return function(e){return angular.isDefined(e)&&2>(""+e).length&&(e="0"+e),e}}).constant("timepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:["AM","PM"],readonlyInput:!1,mousewheel:!0}).directive("timepicker",["padFilter","$parse","timepickerConfig",function(e,t,n){return{restrict:"EA",require:"ngModel",replace:!0,templateUrl:"template/timepicker/timepicker.html",scope:{model:"=ngModel"},link:function(a,i,o){function r(){var e=parseInt(a.hours,10),t=a.showMeridian?e>0&&13>e:e>=0&&24>e;return t?(a.showMeridian&&(12===e&&(e=0),a.meridian===u[1]&&(e+=12)),e):void 0}function l(){var t=c.getHours();a.showMeridian&&(t=0===t||12===t?12:t%12),a.hours="h"===b?t:e(t),a.validHours=!0;var n=c.getMinutes();a.minutes="m"===b?n:e(n),a.validMinutes=!0,a.meridian=a.showMeridian?12>c.getHours()?u[0]:u[1]:"",b=!1}function s(e){var t=new Date(c.getTime()+6e4*e);c.setHours(t.getHours()),c.setMinutes(t.getMinutes()),a.model=new Date(c)}var c=new Date,u=n.meridians,p=n.hourStep;o.hourStep&&a.$parent.$watch(t(o.hourStep),function(e){p=parseInt(e,10)});var d=n.minuteStep;o.minuteStep&&a.$parent.$watch(t(o.minuteStep),function(e){d=parseInt(e,10)}),a.showMeridian=n.showMeridian,o.showMeridian&&a.$parent.$watch(t(o.showMeridian),function(e){if(a.showMeridian=!!e,a.model)l();else{var t=new Date(c),n=r();angular.isDefined(n)&&t.setHours(n),a.model=new Date(t)}});var f=i.find("input"),m=f.eq(0),g=f.eq(1),h=angular.isDefined(o.mousewheel)?a.$eval(o.mousewheel):n.mousewheel;if(h){var v=function(e){e.originalEvent&&(e=e.originalEvent);var t=e.wheelDelta?e.wheelDelta:-e.deltaY;return e.detail||t>0};m.bind("mousewheel wheel",function(e){a.$apply(v(e)?a.incrementHours():a.decrementHours()),e.preventDefault()}),g.bind("mousewheel wheel",function(e){a.$apply(v(e)?a.incrementMinutes():a.decrementMinutes()),e.preventDefault()})}var b=!1;a.readonlyInput=angular.isDefined(o.readonlyInput)?a.$eval(o.readonlyInput):n.readonlyInput,a.readonlyInput?(a.updateHours=angular.noop,a.updateMinutes=angular.noop):(a.updateHours=function(){var e=r();angular.isDefined(e)?(b="h",null===a.model&&(a.model=new Date(c)),a.model.setHours(e)):(a.model=null,a.validHours=!1)},m.bind("blur",function(){a.validHours&&10>a.hours&&a.$apply(function(){a.hours=e(a.hours)})}),a.updateMinutes=function(){var e=parseInt(a.minutes,10);e>=0&&60>e?(b="m",null===a.model&&(a.model=new Date(c)),a.model.setMinutes(e)):(a.model=null,a.validMinutes=!1)},g.bind("blur",function(){a.validMinutes&&10>a.minutes&&a.$apply(function(){a.minutes=e(a.minutes)})})),a.$watch(function(){return+a.model},function(e){!isNaN(e)&&e>0&&(c=new Date(e),l())}),a.incrementHours=function(){s(60*p)},a.decrementHours=function(){s(60*-p)},a.incrementMinutes=function(){s(d)},a.decrementMinutes=function(){s(-d)},a.toggleMeridian=function(){s(720*(12>c.getHours()?1:-1))}}}}]),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position"]).factory("typeaheadParser",["$parse",function(e){var t=/^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;return{parse:function(n){var a=n.match(t);if(!a)throw Error("Expected typeahead specification in form of '_modelValue_ (as _label_)? for _item_ in _collection_' but got '"+n+"'.");return{itemName:a[3],source:e(a[4]),viewMapper:e(a[2]||a[1]),modelMapper:e(a[1])}}}}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$position","typeaheadParser",function(e,t,n,a,i,o,r){var l=[9,13,27,38,40];return{require:"ngModel",link:function(s,c,u,p){var d=s.$eval(u.typeaheadMinLength)||1,f=s.$eval(u.typeaheadWaitMs)||0,m=s.$eval(u.typeaheadEditable)!==!1,g=t(u.typeaheadLoading).assign||angular.noop,h=t(u.typeaheadOnSelect),v=u.typeaheadInputFormatter?t(u.typeaheadInputFormatter):void 0,b=t(u.ngModel).assign,$=r.parse(u.typeahead),y=angular.element("<typeahead-popup></typeahead-popup>");y.attr({matches:"matches",active:"activeIdx",select:"select(activeIdx)",query:"query",position:"position"}),angular.isDefined(u.typeaheadTemplateUrl)&&y.attr("template-url",u.typeaheadTemplateUrl);var w=s.$new();s.$on("$destroy",function(){w.$destroy()});var k=function(){w.matches=[],w.activeIdx=-1},D=function(e){var t={$viewValue:e};g(s,!0),n.when($.source(w,t)).then(function(n){if(e===p.$viewValue){if(n.length>0){w.activeIdx=0,w.matches.length=0;for(var a=0;n.length>a;a++)t[$.itemName]=n[a],w.matches.push({label:$.viewMapper(w,t),model:n[a]});w.query=e,w.position=o.position(c),w.position.top=w.position.top+c.prop("offsetHeight")}else k();g(s,!1)}},function(){k(),g(s,!1)})};k(),w.query=void 0;var x;p.$parsers.push(function(e){return k(),e&&e.length>=d&&(f>0?(x&&a.cancel(x),x=a(function(){D(e)},f)):D(e)),m?e:void 0}),p.$formatters.push(function(e){var t,n,a={};return v?(a.$model=e,v(s,a)):(a[$.itemName]=e,t=$.viewMapper(s,a),n=$.viewMapper(s,{}),t!==n?t:e)}),w.select=function(e){var t,n,a={};a[$.itemName]=n=w.matches[e].model,t=$.modelMapper(s,a),b(s,t),h(s,{$item:n,$model:t,$label:$.viewMapper(s,a)}),k(),c[0].focus()},c.bind("keydown",function(e){0!==w.matches.length&&-1!==l.indexOf(e.which)&&(e.preventDefault(),40===e.which?(w.activeIdx=(w.activeIdx+1)%w.matches.length,w.$digest()):38===e.which?(w.activeIdx=(w.activeIdx?w.activeIdx:w.matches.length)-1,w.$digest()):13===e.which||9===e.which?w.$apply(function(){w.select(w.activeIdx)}):27===e.which&&(e.stopPropagation(),k(),w.$digest()))}),i.bind("click",function(){k(),w.$digest()}),c.after(e(y)(w))}}}]).directive("typeaheadPopup",function(){return{restrict:"E",scope:{matches:"=",query:"=",active:"=",position:"=",select:"&"},replace:!0,templateUrl:"template/typeahead/typeahead-popup.html",link:function(e,t,n){e.templateUrl=n.templateUrl,e.isOpen=function(){return e.matches.length>0},e.isActive=function(t){return e.active==t},e.selectActive=function(t){e.active=t},e.selectMatch=function(t){e.select({activeIdx:t})}}}}).directive("typeaheadMatch",["$http","$templateCache","$compile","$parse",function(e,t,n,a){return{restrict:"E",scope:{index:"=",match:"=",query:"="},link:function(i,o,r){var l=a(r.templateUrl)(i.$parent)||"template/typeahead/typeahead-match.html";e.get(l,{cache:t}).success(function(e){o.replaceWith(n(e.trim())(i))})}}}]).filter("typeaheadHighlight",function(){function e(e){return e.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(t,n){return n?t.replace(RegExp(e(n),"gi"),"<strong>$&</strong>"):n}});;angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.transition","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dialog","ui.bootstrap.dropdownToggle","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/popup.html","template/dialog/message.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-unsafe-popup.html","template/tooltip/tooltip-popup.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset-titles.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.transition",[]).factory("$transition",["$q","$timeout","$rootScope",function(e,t,n){function a(e){for(var t in e)if(void 0!==o.style[t])return e[t]}var i=function(a,o,r){r=r||{};var l=e.defer(),s=i[r.animation?"animationEndEventName":"transitionEndEventName"],c=function(){n.$apply(function(){a.unbind(s,c),l.resolve(a)})};return s&&a.bind(s,c),t(function(){angular.isString(o)?a.addClass(o):angular.isFunction(o)?o(a):angular.isObject(o)&&a.css(o),s||l.resolve(a)}),l.promise.cancel=function(){s&&a.unbind(s,c),l.reject("Transition cancelled")},l.promise},o=document.createElement("trans"),r={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},l={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return i.transitionEndEventName=a(r),i.animationEndEventName=a(l),i}]),angular.module("ui.bootstrap.collapse",["ui.bootstrap.transition"]).directive("collapse",["$transition",function(e){var t=function(e,t,n){t.removeClass("collapse"),t.css({height:n}),t[0].offsetWidth,t.addClass("collapse")};return{link:function(n,a,i){var o,r=!0;n.$watch(function(){return a[0].scrollHeight},function(){0!==a[0].scrollHeight&&(o||(r?t(n,a,a[0].scrollHeight+"px"):t(n,a,"auto")))}),n.$watch(i.collapse,function(e){e?u():c()});var l,s=function(t){return l&&l.cancel(),l=e(a,t),l.then(function(){l=void 0},function(){l=void 0}),l},c=function(){r?(r=!1,o||t(n,a,"auto")):s({height:a[0].scrollHeight+"px"}).then(function(){o||t(n,a,"auto")}),o=!1},u=function(){o=!0,r?(r=!1,t(n,a,0)):(t(n,a,a[0].scrollHeight+"px"),s({height:"0"}))}}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("accordionConfig",{closeOthers:!0}).controller("AccordionController",["$scope","$attrs","accordionConfig",function(e,t,n){this.groups=[],this.closeOthers=function(a){var i=angular.isDefined(t.closeOthers)?e.$eval(t.closeOthers):n.closeOthers;i&&angular.forEach(this.groups,function(e){e!==a&&(e.isOpen=!1)})},this.addGroup=function(e){var t=this;this.groups.push(e),e.$on("$destroy",function(){t.removeGroup(e)})},this.removeGroup=function(e){var t=this.groups.indexOf(e);-1!==t&&this.groups.splice(this.groups.indexOf(e),1)}}]).directive("accordion",function(){return{restrict:"EA",controller:"AccordionController",transclude:!0,replace:!1,templateUrl:"template/accordion/accordion.html"}}).directive("accordionGroup",["$parse","$transition","$timeout",function(e){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/accordion/accordion-group.html",scope:{heading:"@"},controller:["$scope",function(){this.setHeading=function(e){this.heading=e}}],link:function(t,n,a,i){var o,r;i.addGroup(t),t.isOpen=!1,a.isOpen&&(o=e(a.isOpen),r=o.assign,t.$watch(function(){return o(t.$parent)},function(e){t.isOpen=e}),t.isOpen=o?o(t.$parent):!1),t.$watch("isOpen",function(e){e&&i.closeOthers(t),r&&r(t.$parent,e)})}}}]).directive("accordionHeading",function(){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",compile:function(e,t,n){return function(e,t,a,i){i.setHeading(n(e,function(){}))}}}}).directive("accordionTransclude",function(){return{require:"^accordionGroup",link:function(e,t,n,a){e.$watch(function(){return a[n.accordionTransclude]},function(e){e&&(t.html(""),t.append(e))})}}}),angular.module("ui.bootstrap.alert",[]).directive("alert",function(){return{restrict:"EA",templateUrl:"template/alert/alert.html",transclude:!0,replace:!0,scope:{type:"=",close:"&"},link:function(e,t,n){e.closeable="close"in n}}}),angular.module("ui.bootstrap.buttons",[]).constant("buttonConfig",{activeClass:"active",toggleEvent:"click"}).directive("btnRadio",["buttonConfig",function(e){var t=e.activeClass||"active",n=e.toggleEvent||"click";return{require:"ngModel",link:function(e,a,i,o){o.$render=function(){a.toggleClass(t,angular.equals(o.$modelValue,e.$eval(i.btnRadio)))},a.bind(n,function(){a.hasClass(t)||e.$apply(function(){o.$setViewValue(e.$eval(i.btnRadio)),o.$render()})})}}}]).directive("btnCheckbox",["buttonConfig",function(e){var t=e.activeClass||"active",n=e.toggleEvent||"click";return{require:"ngModel",link:function(e,a,i,o){function r(){var t=e.$eval(i.btnCheckboxTrue);return angular.isDefined(t)?t:!0}function l(){var t=e.$eval(i.btnCheckboxFalse);return angular.isDefined(t)?t:!1}o.$render=function(){a.toggleClass(t,angular.equals(o.$modelValue,r()))},a.bind(n,function(){e.$apply(function(){o.$setViewValue(a.hasClass(t)?l():r()),o.$render()})})}}}]),angular.module("ui.bootstrap.carousel",["ui.bootstrap.transition"]).controller("CarouselController",["$scope","$timeout","$transition","$q",function(e,t,n){function a(){function n(){o?(e.next(),a()):e.pause()}i&&t.cancel(i);var r=+e.interval;!isNaN(r)&&r>=0&&(i=t(n,r))}var i,o,r=this,l=r.slides=[],s=-1;r.currentSlide=null,r.select=function(i,o){function c(){r.currentSlide&&angular.isString(o)&&!e.noTransition&&i.$element?(i.$element.addClass(o),i.$element[0].offsetWidth=i.$element[0].offsetWidth,angular.forEach(l,function(e){angular.extend(e,{direction:"",entering:!1,leaving:!1,active:!1})}),angular.extend(i,{direction:o,active:!0,entering:!0}),angular.extend(r.currentSlide||{},{direction:o,leaving:!0}),e.$currentTransition=n(i.$element,{}),function(t,n){e.$currentTransition.then(function(){u(t,n)},function(){u(t,n)})}(i,r.currentSlide)):u(i,r.currentSlide),r.currentSlide=i,s=p,a()}function u(t,n){angular.extend(t,{direction:"",active:!0,leaving:!1,entering:!1}),angular.extend(n||{},{direction:"",active:!1,leaving:!1,entering:!1}),e.$currentTransition=null}var p=l.indexOf(i);void 0===o&&(o=p>s?"next":"prev"),i&&i!==r.currentSlide&&(e.$currentTransition?(e.$currentTransition.cancel(),t(c)):c())},r.indexOfSlide=function(e){return l.indexOf(e)},e.next=function(){var t=(s+1)%l.length;return e.$currentTransition?void 0:r.select(l[t],"next")},e.prev=function(){var t=0>s-1?l.length-1:s-1;return e.$currentTransition?void 0:r.select(l[t],"prev")},e.select=function(e){r.select(e)},e.isActive=function(e){return r.currentSlide===e},e.slides=function(){return l},e.$watch("interval",a),e.play=function(){o||(o=!0,a())},e.pause=function(){e.noPause||(o=!1,i&&t.cancel(i))},r.addSlide=function(t,n){t.$element=n,l.push(t),1===l.length||t.active?(r.select(l[l.length-1]),1==l.length&&e.play()):t.active=!1},r.removeSlide=function(e){var t=l.indexOf(e);l.splice(t,1),l.length>0&&e.active?t>=l.length?r.select(l[t-1]):r.select(l[t]):s>t&&s--}}]).directive("carousel",[function(){return{restrict:"EA",transclude:!0,replace:!0,controller:"CarouselController",require:"carousel",templateUrl:"template/carousel/carousel.html",scope:{interval:"=",noTransition:"=",noPause:"="}}}]).directive("slide",["$parse",function(e){return{require:"^carousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/carousel/slide.html",scope:{},link:function(t,n,a,i){if(a.active){var o=e(a.active),r=o.assign,l=t.active=o(t.$parent);t.$watch(function(){var e=o(t.$parent);return e!==t.active&&(e!==l?l=t.active=e:r(t.$parent,e=l=t.active)),e})}i.addSlide(t,n),t.$on("$destroy",function(){i.removeSlide(t)}),t.$watch("active",function(e){e&&i.select(t)})}}}]),angular.module("ui.bootstrap.position",[]).factory("$position",["$document","$window",function(e,t){function n(e,n){return e.currentStyle?e.currentStyle[n]:t.getComputedStyle?t.getComputedStyle(e)[n]:e.style[n]}function a(e){return"static"===(n(e,"position")||"static")}var i,o;e.bind("mousemove",function(e){i=e.pageX,o=e.pageY});var r=function(t){for(var n=e[0],i=t.offsetParent||n;i&&i!==n&&a(i);)i=i.offsetParent;return i||n};return{position:function(t){var n=this.offset(t),a={top:0,left:0},i=r(t[0]);return i!=e[0]&&(a=this.offset(angular.element(i)),a.top+=i.clientTop-i.scrollTop,a.left+=i.clientLeft-i.scrollLeft),{width:t.prop("offsetWidth"),height:t.prop("offsetHeight"),top:n.top-a.top,left:n.left-a.left}},offset:function(n){var a=n[0].getBoundingClientRect();return{width:n.prop("offsetWidth"),height:n.prop("offsetHeight"),top:a.top+(t.pageYOffset||e[0].body.scrollTop),left:a.left+(t.pageXOffset||e[0].body.scrollLeft)}},mouse:function(){return{x:i,y:o}}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.position"]).constant("datepickerConfig",{dayFormat:"dd",monthFormat:"MMMM",yearFormat:"yyyy",dayHeaderFormat:"EEE",dayTitleFormat:"MMMM yyyy",monthTitleFormat:"yyyy",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null}).controller("DatepickerController",["$scope","$attrs","dateFilter","datepickerConfig",function(e,t,n,a){function i(t,n){return angular.isDefined(t)?e.$parent.$eval(t):n}function o(e,t){return new Date(e,t,0).getDate()}function r(e,t){for(var n=Array(t),a=e,i=0;t>i;)n[i++]=new Date(a),a.setDate(a.getDate()+1);return n}function l(e,t,a,i){return{date:e,label:n(e,t),selected:!!a,secondary:!!i}}var s={day:i(t.dayFormat,a.dayFormat),month:i(t.monthFormat,a.monthFormat),year:i(t.yearFormat,a.yearFormat),dayHeader:i(t.dayHeaderFormat,a.dayHeaderFormat),dayTitle:i(t.dayTitleFormat,a.dayTitleFormat),monthTitle:i(t.monthTitleFormat,a.monthTitleFormat)},c=i(t.startingDay,a.startingDay),u=i(t.yearRange,a.yearRange);this.minDate=a.minDate?new Date(a.minDate):null,this.maxDate=a.maxDate?new Date(a.maxDate):null,this.modes=[{name:"day",getVisibleDates:function(e,t){var a=e.getFullYear(),i=e.getMonth(),u=new Date(a,i,1),p=c-u.getDay(),d=p>0?7-p:-p,m=new Date(u),g=0;d>0&&(m.setDate(-d+1),g+=d),g+=o(a,i+1),g+=(7-g%7)%7;for(var f=r(m,g),h=Array(7),v=0;g>v;v++){var b=new Date(f[v]);f[v]=l(b,s.day,t&&t.getDate()===b.getDate()&&t.getMonth()===b.getMonth()&&t.getFullYear()===b.getFullYear(),b.getMonth()!==i)}for(var $=0;7>$;$++)h[$]=n(f[$].date,s.dayHeader);return{objects:f,title:n(e,s.dayTitle),labels:h}},compare:function(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate())-new Date(t.getFullYear(),t.getMonth(),t.getDate())},split:7,step:{months:1}},{name:"month",getVisibleDates:function(e,t){for(var a=Array(12),i=e.getFullYear(),o=0;12>o;o++){var r=new Date(i,o,1);a[o]=l(r,s.month,t&&t.getMonth()===o&&t.getFullYear()===i)}return{objects:a,title:n(e,s.monthTitle)}},compare:function(e,t){return new Date(e.getFullYear(),e.getMonth())-new Date(t.getFullYear(),t.getMonth())},split:3,step:{years:1}},{name:"year",getVisibleDates:function(e,t){for(var n=Array(u),a=e.getFullYear(),i=parseInt((a-1)/u,10)*u+1,o=0;u>o;o++){var r=new Date(i+o,0,1);n[o]=l(r,s.year,t&&t.getFullYear()===r.getFullYear())}return{objects:n,title:[n[0].label,n[u-1].label].join(" - ")}},compare:function(e,t){return e.getFullYear()-t.getFullYear()},split:5,step:{years:u}}],this.isDisabled=function(t,n){var a=this.modes[n||0];return this.minDate&&0>a.compare(t,this.minDate)||this.maxDate&&a.compare(t,this.maxDate)>0||e.dateDisabled&&e.dateDisabled({date:t,mode:a.name})}}]).directive("datepicker",["dateFilter","$parse","datepickerConfig","$log",function(e,t,n,a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/datepicker.html",scope:{dateDisabled:"&"},require:["datepicker","?^ngModel"],controller:"DatepickerController",link:function(e,i,o,r){function l(){e.showWeekNumbers=0===g&&h}function s(e,t){for(var n=[];e.length>0;)n.push(e.splice(0,t));return n}function c(t){var n=null,i=!0;m.$modelValue&&(n=new Date(m.$modelValue),isNaN(n)?(i=!1,a.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):t&&(f=n)),m.$setValidity("date",i);var o=d.modes[g],r=o.getVisibleDates(f,n);angular.forEach(r.objects,function(e){e.disabled=d.isDisabled(e.date,g)}),m.$setValidity("date-disabled",!n||!d.isDisabled(n)),e.rows=s(r.objects,o.split),e.labels=r.labels||[],e.title=r.title}function u(e){g=e,l(),c()}function p(e){var t=new Date(e);t.setDate(t.getDate()+4-(t.getDay()||7));var n=t.getTime();return t.setMonth(0),t.setDate(1),Math.floor(Math.round((n-t)/864e5)/7)+1}var d=r[0],m=r[1];if(m){var g=0,f=new Date,h=n.showWeeks;o.showWeeks?e.$parent.$watch(t(o.showWeeks),function(e){h=!!e,l()}):l(),o.min&&e.$parent.$watch(t(o.min),function(e){d.minDate=e?new Date(e):null,c()}),o.max&&e.$parent.$watch(t(o.max),function(e){d.maxDate=e?new Date(e):null,c()}),m.$render=function(){c(!0)},e.select=function(e){if(0===g){var t=new Date(m.$modelValue);t.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),m.$setViewValue(t),c(!0)}else f=e,u(g-1)},e.move=function(e){var t=d.modes[g].step;f.setMonth(f.getMonth()+e*(t.months||0)),f.setFullYear(f.getFullYear()+e*(t.years||0)),c()},e.toggleMode=function(){u((g+1)%d.modes.length)},e.getWeekNumber=function(t){return 0===g&&e.showWeekNumbers&&7===t.length?p(t[0].date):null}}}}}]).constant("datepickerPopupConfig",{dateFormat:"yyyy-MM-dd",closeOnDateSelection:!0}).directive("datepickerPopup",["$compile","$parse","$document","$position","dateFilter","datepickerPopupConfig",function(e,t,n,a,i,o){return{restrict:"EA",require:"ngModel",link:function(r,l,s,c){function u(e){return e?i(e,h):null}function p(e){if(e){var t=new Date(e);if(!isNaN(t))return t}return e}function d(e){$?$(r,!!e):v.isOpen=!!e}function m(e,n,a){e&&(r.$watch(t(e),function(e){v[n]=e}),D.attr(a||n,n))}function g(){v.position=a.position(l),v.position.top=v.position.top+l.prop("offsetHeight")}var f=angular.isDefined(s.closeOnDateSelection)?v.$eval(s.closeOnDateSelection):o.closeOnDateSelection,h=s.datepickerPopup||o.dateFormat,v=r.$new();r.$on("$destroy",function(){v.$destroy()}),c.$formatters.push(u),c.$parsers.push(p);var b,$;s.open&&(b=t(s.open),$=b.assign,r.$watch(b,function(e){v.isOpen=!!e})),v.isOpen=b?b(r):!1;var y=function(e){v.isOpen&&e.target!==l[0]&&v.$apply(function(){d(!1)})},w=function(){v.$apply(function(){d(!0)})},k=angular.element("<datepicker-popup-wrap><datepicker></datepicker></datepicker-popup-wrap>");k.attr({"ng-model":"date","ng-change":"dateSelection()"});var D=k.find("datepicker");s.datepickerOptions&&D.attr(angular.extend({},r.$eval(s.datepickerOptions)));var x=t(s.ngModel).assign;v.dateSelection=function(){x(r,v.date),f&&d(!1)},v.$watch(function(){return c.$modelValue},function(e){if(angular.isString(e)){var t=p(e);if(e&&!t)throw x(r,null),Error(e+" cannot be parsed to a date object.");e=t}v.date=e,g()}),m(s.min,"min"),m(s.max,"max"),s.showWeeks?m(s.showWeeks,"showWeeks","show-weeks"):(v.showWeeks=!0,D.attr("show-weeks","showWeeks")),s.dateDisabled&&D.attr("date-disabled",s.dateDisabled),v.$watch("isOpen",function(e){e?(g(),n.bind("click",y),l.unbind("focus",w),l.focus()):(n.unbind("click",y),l.bind("focus",w)),$&&$(r,e)}),v.today=function(){x(r,new Date)},v.clear=function(){x(r,null)},l.after(e(k)(v))}}}]).directive("datepickerPopupWrap",[function(){return{restrict:"E",replace:!0,transclude:!0,templateUrl:"template/datepicker/popup.html",link:function(e,t){t.bind("click",function(e){e.preventDefault(),e.stopPropagation()})}}}]);var dialogModule=angular.module("ui.bootstrap.dialog",["ui.bootstrap.transition"]);dialogModule.controller("MessageBoxController",["$scope","dialog","model",function(e,t,n){e.title=n.title,e.message=n.message,e.buttons=n.buttons,e.close=function(e){t.close(e)}}]),dialogModule.provider("$dialog",function(){var e={backdrop:!0,dialogClass:"modal",backdropClass:"modal-backdrop",transitionClass:"fade",triggerClass:"in",resolve:{},backdropFade:!1,dialogFade:!1,keyboard:!0,backdropClick:!0},t={},n={value:0};this.options=function(e){t=e},this.$get=["$http","$document","$compile","$rootScope","$controller","$templateCache","$q","$transition","$injector",function(a,i,o,r,l,s,c,u,p){function d(e){var t=angular.element("<div>");return t.addClass(e),t}function m(n){var a=this,i=this.options=angular.extend({},e,t,n);this._open=!1,this.backdropEl=d(i.backdropClass),i.backdropFade&&(this.backdropEl.addClass(i.transitionClass),this.backdropEl.removeClass(i.triggerClass)),this.modalEl=d(i.dialogClass),i.dialogFade&&(this.modalEl.addClass(i.transitionClass),this.modalEl.removeClass(i.triggerClass)),this.handledEscapeKey=function(e){27===e.which&&(a.close(),e.preventDefault(),a.$scope.$apply())},this.handleBackDropClick=function(e){a.close(),e.preventDefault(),a.$scope.$apply()}}var g=i.find("body");return m.prototype.isOpen=function(){return this._open},m.prototype.open=function(e,t){var n=this,a=this.options;if(e&&(a.templateUrl=e),t&&(a.controller=t),!a.template&&!a.templateUrl)throw Error("Dialog.open expected template or templateUrl, neither found. Use options or open method to specify them.");return this._loadResolves().then(function(e){var t=e.$scope=n.$scope=e.$scope?e.$scope:r.$new();if(n.modalEl.html(e.$template),n.options.controller){var a=l(n.options.controller,e);n.modalEl.children().data("ngControllerController",a)}o(n.modalEl)(t),n._addElementsToDom(),setTimeout(function(){n.options.dialogFade&&n.modalEl.addClass(n.options.triggerClass),n.options.backdropFade&&n.backdropEl.addClass(n.options.triggerClass)}),n._bindEvents()}),this.deferred=c.defer(),this.deferred.promise},m.prototype.close=function(e){function t(e){e.removeClass(a.options.triggerClass)}function n(){a._open&&a._onCloseComplete(e)}var a=this,i=this._getFadingElements();if(i.length>0)for(var o=i.length-1;o>=0;o--)u(i[o],t).then(n);else this._onCloseComplete(e)},m.prototype._getFadingElements=function(){var e=[];return this.options.dialogFade&&e.push(this.modalEl),this.options.backdropFade&&e.push(this.backdropEl),e},m.prototype._bindEvents=function(){this.options.keyboard&&g.bind("keydown",this.handledEscapeKey),this.options.backdrop&&this.options.backdropClick&&this.backdropEl.bind("click",this.handleBackDropClick)},m.prototype._unbindEvents=function(){this.options.keyboard&&g.unbind("keydown",this.handledEscapeKey),this.options.backdrop&&this.options.backdropClick&&this.backdropEl.unbind("click",this.handleBackDropClick)},m.prototype._onCloseComplete=function(e){this._removeElementsFromDom(),this._unbindEvents(),this.deferred.resolve(e)},m.prototype._addElementsToDom=function(){g.append(this.modalEl),this.options.backdrop&&(0===n.value&&g.append(this.backdropEl),n.value++),this._open=!0},m.prototype._removeElementsFromDom=function(){this.modalEl.remove(),this.options.backdrop&&(n.value--,0===n.value&&this.backdropEl.remove()),this._open=!1},m.prototype._loadResolves=function(){var e,t=[],n=[],i=this;return this.options.template?e=c.when(this.options.template):this.options.templateUrl&&(e=a.get(this.options.templateUrl,{cache:s}).then(function(e){return e.data})),angular.forEach(this.options.resolve||[],function(e,a){n.push(a),t.push(angular.isString(e)?p.get(e):p.invoke(e))}),n.push("$template"),t.push(e),c.all(t).then(function(e){var t={};return angular.forEach(e,function(e,a){t[n[a]]=e}),t.dialog=i,t})},{dialog:function(e){return new m(e)},messageBox:function(e,t,n){return new m({templateUrl:"template/dialog/message.html",controller:"MessageBoxController",resolve:{model:function(){return{title:e,message:t,buttons:n}}}})}}}]}),angular.module("ui.bootstrap.dropdownToggle",[]).directive("dropdownToggle",["$document","$location",function(e){var t=null,n=angular.noop;return{restrict:"CA",link:function(a,i){a.$watch("$location.path",function(){n()}),i.parent().bind("click",function(){n()}),i.bind("click",function(a){var o=i===t;a.preventDefault(),a.stopPropagation(),t&&n(),o||(i.parent().addClass("open"),t=i,n=function(a){a&&(a.preventDefault(),a.stopPropagation()),e.unbind("click",n),i.parent().removeClass("open"),n=angular.noop,t=null},e.bind("click",n))})}}}]),angular.module("ui.bootstrap.modal",["ui.bootstrap.dialog"]).directive("modal",["$parse","$dialog",function(e,t){return{restrict:"EA",terminal:!0,link:function(n,a,i){var o,r=angular.extend({},n.$eval(i.uiOptions||i.bsOptions||i.options)),l=i.modal||i.show;r=angular.extend(r,{template:a.html(),resolve:{$scope:function(){return n}}});var s=t.dialog(r);a.remove(),o=i.close?function(){e(i.close)(n)}:function(){angular.isFunction(e(l).assign)&&e(l).assign(n,!1)},n.$watch(l,function(e){e?s.open().then(function(){o()}):s.isOpen()&&s.close()})}}}]),angular.module("ui.bootstrap.pagination",[]).controller("PaginationController",["$scope","$interpolate",function(e,t){this.currentPage=1,this.noPrevious=function(){return 1===this.currentPage},this.noNext=function(){return this.currentPage===e.numPages},this.isActive=function(e){return this.currentPage===e},this.reset=function(){e.pages=[],this.currentPage=parseInt(e.currentPage,10),this.currentPage>e.numPages&&e.selectPage(e.numPages)};var n=this;e.selectPage=function(t){!n.isActive(t)&&t>0&&e.numPages>=t&&(e.currentPage=t,e.onSelectPage({page:t}))},this.getAttributeValue=function(n,a,i){return angular.isDefined(n)?i?t(n)(e.$parent):e.$parent.$eval(n):a}}]).constant("paginationConfig",{boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("pagination",["paginationConfig",function(e){return{restrict:"EA",scope:{numPages:"=",currentPage:"=",maxSize:"=",onSelectPage:"&"},controller:"PaginationController",templateUrl:"template/pagination/pagination.html",replace:!0,link:function(t,n,a,i){function o(e,t,n,a){return{number:e,text:t,active:n,disabled:a}}var r=i.getAttributeValue(a.boundaryLinks,e.boundaryLinks),l=i.getAttributeValue(a.directionLinks,e.directionLinks),s=i.getAttributeValue(a.firstText,e.firstText,!0),c=i.getAttributeValue(a.previousText,e.previousText,!0),u=i.getAttributeValue(a.nextText,e.nextText,!0),p=i.getAttributeValue(a.lastText,e.lastText,!0),d=i.getAttributeValue(a.rotate,e.rotate);t.$watch("numPages + currentPage + maxSize",function(){i.reset();var e=1,n=t.numPages,a=angular.isDefined(t.maxSize)&&t.maxSize<t.numPages;a&&(d?(e=Math.max(i.currentPage-Math.floor(t.maxSize/2),1),n=e+t.maxSize-1,n>t.numPages&&(n=t.numPages,e=n-t.maxSize+1)):(e=(Math.ceil(i.currentPage/t.maxSize)-1)*t.maxSize+1,n=Math.min(e+t.maxSize-1,t.numPages)));for(var m=e;n>=m;m++){var g=o(m,m,i.isActive(m),!1);t.pages.push(g)}if(a&&!d){if(e>1){var f=o(e-1,"...",!1,!1);t.pages.unshift(f)}if(t.numPages>n){var h=o(n+1,"...",!1,!1);t.pages.push(h)}}if(l){var v=o(i.currentPage-1,c,!1,i.noPrevious());t.pages.unshift(v);var b=o(i.currentPage+1,u,!1,i.noNext());t.pages.push(b)}if(r){var $=o(1,s,!1,i.noPrevious());t.pages.unshift($);var y=o(t.numPages,p,!1,i.noNext());t.pages.push(y)}})}}}]).constant("pagerConfig",{previousText:"« Previous",nextText:"Next »",align:!0}).directive("pager",["pagerConfig",function(e){return{restrict:"EA",scope:{numPages:"=",currentPage:"=",onSelectPage:"&"},controller:"PaginationController",templateUrl:"template/pagination/pager.html",replace:!0,link:function(t,n,a,i){function o(e,t,n,a,i){return{number:e,text:t,disabled:n,previous:s&&a,next:s&&i}}var r=i.getAttributeValue(a.previousText,e.previousText,!0),l=i.getAttributeValue(a.nextText,e.nextText,!0),s=i.getAttributeValue(a.align,e.align);t.$watch("numPages + currentPage",function(){i.reset();var e=o(i.currentPage-1,r,i.noPrevious(),!0,!1);t.pages.unshift(e);var n=o(i.currentPage+1,l,i.noNext(),!1,!0);t.pages.push(n)})}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position"]).provider("$tooltip",function(){function e(e){var t=/[A-Z]/g,n="-";return e.replace(t,function(e,t){return(t?n:"")+e.toLowerCase()})}var t={placement:"top",animation:!0,popupDelay:0},n={mouseenter:"mouseleave",click:"click",focus:"blur"},a={};this.options=function(e){angular.extend(a,e)},this.setTriggers=function(e){angular.extend(n,e)},this.$get=["$window","$compile","$timeout","$parse","$document","$position","$interpolate",function(i,o,r,l,s,c,u){return function(i,p,d){function m(e){var t=e||g.trigger||d,a=n[t]||t;return{show:t,hide:a}}var g=angular.extend({},t,a),f=e(i),h=u.startSymbol(),v=u.endSymbol(),b="<"+f+"-popup "+'title="'+h+"tt_title"+v+'" '+'content="'+h+"tt_content"+v+'" '+'placement="'+h+"tt_placement"+v+'" '+'animation="tt_animation()" '+'is-open="tt_isOpen"'+">"+"</"+f+"-popup>";return{restrict:"EA",scope:!0,link:function(e,t,n){function a(){e.tt_isOpen?d():u()}function u(){e.tt_popupDelay?$=r(f,e.tt_popupDelay):e.$apply(f)}function d(){e.$apply(function(){h()})}function f(){var n,a,i,o;if(e.tt_content){switch(v&&r.cancel(v),w.css({top:0,left:0,display:"block"}),k?(y=y||s.find("body"),y.append(w)):t.after(w),n=k?c.offset(t):c.position(t),a=w.prop("offsetWidth"),i=w.prop("offsetHeight"),e.tt_placement){case"mouse":var l=c.mouse();o={top:l.y,left:l.x};break;case"right":o={top:n.top+n.height/2-i/2,left:n.left+n.width};break;case"bottom":o={top:n.top+n.height,left:n.left+n.width/2-a/2};break;case"left":o={top:n.top+n.height/2-i/2,left:n.left-a};break;default:o={top:n.top-i,left:n.left+n.width/2-a/2}}o.top+="px",o.left+="px",w.css(o),e.tt_isOpen=!0}}function h(){e.tt_isOpen=!1,r.cancel($),angular.isDefined(e.tt_animation)&&e.tt_animation()?v=r(function(){w.remove()},500):w.remove()}var v,$,y,w=o(b)(e),k=angular.isDefined(g.appendToBody)?g.appendToBody:!1,D=m(void 0),x=!1;e.tt_isOpen=!1,n.$observe(i,function(t){e.tt_content=t}),n.$observe(p+"Title",function(t){e.tt_title=t}),n.$observe(p+"Placement",function(t){e.tt_placement=angular.isDefined(t)?t:g.placement}),n.$observe(p+"Animation",function(t){e.tt_animation=angular.isDefined(t)?l(t):function(){return g.animation}}),n.$observe(p+"PopupDelay",function(t){var n=parseInt(t,10);e.tt_popupDelay=isNaN(n)?g.popupDelay:n}),n.$observe(p+"Trigger",function(e){x&&(t.unbind(D.show,u),t.unbind(D.hide,d)),D=m(e),D.show===D.hide?t.bind(D.show,a):(t.bind(D.show,u),t.bind(D.hide,d)),x=!0}),n.$observe(p+"AppendToBody",function(t){k=angular.isDefined(t)?l(t)(e):k}),k&&e.$on("$locationChangeSuccess",function(){e.tt_isOpen&&h()}),e.$on("$destroy",function(){e.tt_isOpen?h():w.remove()})}}}}]}).directive("tooltipPopup",function(){return{restrict:"E",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html"}}).directive("tooltip",["$tooltip",function(e){return e("tooltip","tooltip","mouseenter")}]).directive("tooltipHtmlUnsafePopup",function(){return{restrict:"E",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-unsafe-popup.html"}}).directive("tooltipHtmlUnsafe",["$tooltip",function(e){return e("tooltipHtmlUnsafe","tooltip","mouseenter")}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("popoverPopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html"}}).directive("popover",["$compile","$timeout","$parse","$window","$tooltip",function(e,t,n,a,i){return i("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",["ui.bootstrap.transition"]).constant("progressConfig",{animate:!0,autoType:!1,stackedTypes:["success","info","warning","danger"]}).controller("ProgressBarController",["$scope","$attrs","progressConfig",function(e,t,n){function a(e){return r[e]}var i=angular.isDefined(t.animate)?e.$eval(t.animate):n.animate,o=angular.isDefined(t.autoType)?e.$eval(t.autoType):n.autoType,r=angular.isDefined(t.stackedTypes)?e.$eval("["+t.stackedTypes+"]"):n.stackedTypes;this.makeBar=function(e,t,n){var r=angular.isObject(e)?e.value:e||0,l=angular.isObject(t)?t.value:t||0,s=angular.isObject(e)&&angular.isDefined(e.type)?e.type:o?a(n||0):null;return{from:l,to:r,type:s,animate:i}},this.addBar=function(t){e.bars.push(t),e.totalPercent+=t.to},this.clearBars=function(){e.bars=[],e.totalPercent=0},this.clearBars()}]).directive("progress",function(){return{restrict:"EA",replace:!0,controller:"ProgressBarController",scope:{value:"=percent",onFull:"&",onEmpty:"&"},templateUrl:"template/progressbar/progress.html",link:function(e,t,n,a){e.$watch("value",function(e,t){if(a.clearBars(),angular.isArray(e))for(var n=0,i=e.length;i>n;n++)a.addBar(a.makeBar(e[n],t[n],n));else a.addBar(a.makeBar(e,t))},!0),e.$watch("totalPercent",function(t){t>=100?e.onFull():0>=t&&e.onEmpty()},!0)}}}).directive("progressbar",["$transition",function(e){return{restrict:"EA",replace:!0,scope:{width:"=",old:"=",type:"=",animate:"="},templateUrl:"template/progressbar/bar.html",link:function(t,n){t.$watch("width",function(a){t.animate?(n.css("width",t.old+"%"),e(n,{width:a+"%"})):n.css("width",a+"%")})}}}]),angular.module("ui.bootstrap.rating",[]).constant("ratingConfig",{max:5}).directive("rating",["ratingConfig","$parse",function(e,t){return{restrict:"EA",scope:{value:"=",onHover:"&",onLeave:"&"},templateUrl:"template/rating/rating.html",replace:!0,link:function(n,a,i){var o=angular.isDefined(i.max)?n.$parent.$eval(i.max):e.max;n.range=[];for(var r=1;o>=r;r++)n.range.push(r);n.rate=function(e){n.readonly||(n.value=e)},n.enter=function(e){n.readonly||(n.val=e),n.onHover({value:e})},n.reset=function(){n.val=angular.copy(n.value),n.onLeave()},n.reset(),n.$watch("value",function(e){n.val=e}),n.readonly=!1,i.readonly&&n.$parent.$watch(t(i.readonly),function(e){n.readonly=!!e})}}}]),angular.module("ui.bootstrap.tabs",[]).directive("tabs",function(){return function(){throw Error("The `tabs` directive is deprecated, please migrate to `tabset`. Instructions can be found at http://github.com/angular-ui/bootstrap/tree/master/CHANGELOG.md")}}).controller("TabsetController",["$scope","$element",function(e){var t=this,n=t.tabs=e.tabs=[];t.select=function(e){angular.forEach(n,function(e){e.active=!1}),e.active=!0},t.addTab=function(e){n.push(e),(1===n.length||e.active)&&t.select(e)},t.removeTab=function(e){var a=n.indexOf(e);if(e.active&&n.length>1){var i=a==n.length-1?a-1:a+1;t.select(n[i])}n.splice(a,1)}}]).directive("tabset",function(){return{restrict:"EA",transclude:!0,replace:!0,require:"^tabset",scope:{},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",compile:function(e,t,n){return function(e,t,a,i){e.vertical=angular.isDefined(a.vertical)?e.$eval(a.vertical):!1,e.type=angular.isDefined(a.type)?e.$parent.$eval(a.type):"tabs",e.direction=angular.isDefined(a.direction)?e.$parent.$eval(a.direction):"top",e.tabsAbove="below"!=e.direction,i.$scope=e,i.$transcludeFn=n}}}}).directive("tab",["$parse","$http","$templateCache","$compile",function(e){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},compile:function(t,n,a){return function(t,n,i,o){var r,l;i.active?(r=e(i.active),l=r.assign,t.$parent.$watch(r,function(e){t.active=!!e}),t.active=r(t.$parent)):l=r=angular.noop,t.$watch("active",function(e){l(t.$parent,e),e?(o.select(t),t.onSelect()):t.onDeselect()}),t.disabled=!1,i.disabled&&t.$parent.$watch(e(i.disabled),function(e){t.disabled=!!e
}),t.select=function(){t.disabled||(t.active=!0)},o.addTab(t),t.$on("$destroy",function(){o.removeTab(t)}),t.active&&l(t.$parent,!0),t.$transcludeFn=a}}}}]).directive("tabHeadingTransclude",[function(){return{restrict:"A",require:"^tab",link:function(e,t){e.$watch("headingElement",function(e){e&&(t.html(""),t.append(e))})}}}]).directive("tabContentTransclude",["$compile","$parse",function(){function e(e){return e.tagName&&(e.hasAttribute("tab-heading")||e.hasAttribute("data-tab-heading")||"tab-heading"===e.tagName.toLowerCase()||"data-tab-heading"===e.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(t,n,a){var i=t.$eval(a.tabContentTransclude);i.$transcludeFn(i.$parent,function(t){angular.forEach(t,function(t){e(t)?i.headingElement=t:n.append(t)})})}}}]).directive("tabsetTitles",function(){return{restrict:"A",require:"^tabset",templateUrl:"template/tabs/tabset-titles.html",replace:!0,link:function(e,t,n,a){e.$eval(n.tabsetTitles)?a.$transcludeFn(a.$scope.$parent,function(e){t.append(e)}):t.remove()}}}),angular.module("ui.bootstrap.timepicker",[]).filter("pad",function(){return function(e){return angular.isDefined(e)&&2>(""+e).length&&(e="0"+e),e}}).constant("timepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:["AM","PM"],readonlyInput:!1,mousewheel:!0}).directive("timepicker",["padFilter","$parse","timepickerConfig",function(e,t,n){return{restrict:"EA",require:"ngModel",replace:!0,templateUrl:"template/timepicker/timepicker.html",scope:{model:"=ngModel"},link:function(a,i,o){function r(){var e=parseInt(a.hours,10),t=a.showMeridian?e>0&&13>e:e>=0&&24>e;return t?(a.showMeridian&&(12===e&&(e=0),a.meridian===u[1]&&(e+=12)),e):void 0}function l(){var t=c.getHours();a.showMeridian&&(t=0===t||12===t?12:t%12),a.hours="h"===b?t:e(t),a.validHours=!0;var n=c.getMinutes();a.minutes="m"===b?n:e(n),a.validMinutes=!0,a.meridian=a.showMeridian?12>c.getHours()?u[0]:u[1]:"",b=!1}function s(e){var t=new Date(c.getTime()+6e4*e);c.setHours(t.getHours()),c.setMinutes(t.getMinutes()),a.model=new Date(c)}var c=new Date,u=n.meridians,p=n.hourStep;o.hourStep&&a.$parent.$watch(t(o.hourStep),function(e){p=parseInt(e,10)});var d=n.minuteStep;o.minuteStep&&a.$parent.$watch(t(o.minuteStep),function(e){d=parseInt(e,10)}),a.showMeridian=n.showMeridian,o.showMeridian&&a.$parent.$watch(t(o.showMeridian),function(e){if(a.showMeridian=!!e,a.model)l();else{var t=new Date(c),n=r();angular.isDefined(n)&&t.setHours(n),a.model=new Date(t)}});var m=i.find("input"),g=m.eq(0),f=m.eq(1),h=angular.isDefined(o.mousewheel)?a.$eval(o.mousewheel):n.mousewheel;if(h){var v=function(e){e.originalEvent&&(e=e.originalEvent);var t=e.wheelDelta?e.wheelDelta:-e.deltaY;return e.detail||t>0};g.bind("mousewheel wheel",function(e){a.$apply(v(e)?a.incrementHours():a.decrementHours()),e.preventDefault()}),f.bind("mousewheel wheel",function(e){a.$apply(v(e)?a.incrementMinutes():a.decrementMinutes()),e.preventDefault()})}var b=!1;a.readonlyInput=angular.isDefined(o.readonlyInput)?a.$eval(o.readonlyInput):n.readonlyInput,a.readonlyInput?(a.updateHours=angular.noop,a.updateMinutes=angular.noop):(a.updateHours=function(){var e=r();angular.isDefined(e)?(b="h",null===a.model&&(a.model=new Date(c)),a.model.setHours(e)):(a.model=null,a.validHours=!1)},g.bind("blur",function(){a.validHours&&10>a.hours&&a.$apply(function(){a.hours=e(a.hours)})}),a.updateMinutes=function(){var e=parseInt(a.minutes,10);e>=0&&60>e?(b="m",null===a.model&&(a.model=new Date(c)),a.model.setMinutes(e)):(a.model=null,a.validMinutes=!1)},f.bind("blur",function(){a.validMinutes&&10>a.minutes&&a.$apply(function(){a.minutes=e(a.minutes)})})),a.$watch(function(){return+a.model},function(e){!isNaN(e)&&e>0&&(c=new Date(e),l())}),a.incrementHours=function(){s(60*p)},a.decrementHours=function(){s(60*-p)},a.incrementMinutes=function(){s(d)},a.decrementMinutes=function(){s(-d)},a.toggleMeridian=function(){s(720*(12>c.getHours()?1:-1))}}}}]),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position"]).factory("typeaheadParser",["$parse",function(e){var t=/^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;return{parse:function(n){var a=n.match(t);if(!a)throw Error("Expected typeahead specification in form of '_modelValue_ (as _label_)? for _item_ in _collection_' but got '"+n+"'.");return{itemName:a[3],source:e(a[4]),viewMapper:e(a[2]||a[1]),modelMapper:e(a[1])}}}}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$position","typeaheadParser",function(e,t,n,a,i,o,r){var l=[9,13,27,38,40];return{require:"ngModel",link:function(s,c,u,p){var d=s.$eval(u.typeaheadMinLength)||1,m=s.$eval(u.typeaheadWaitMs)||0,g=s.$eval(u.typeaheadEditable)!==!1,f=t(u.typeaheadLoading).assign||angular.noop,h=t(u.typeaheadOnSelect),v=u.typeaheadInputFormatter?t(u.typeaheadInputFormatter):void 0,b=t(u.ngModel).assign,$=r.parse(u.typeahead),y=angular.element("<typeahead-popup></typeahead-popup>");y.attr({matches:"matches",active:"activeIdx",select:"select(activeIdx)",query:"query",position:"position"}),angular.isDefined(u.typeaheadTemplateUrl)&&y.attr("template-url",u.typeaheadTemplateUrl);var w=s.$new();s.$on("$destroy",function(){w.$destroy()});var k=function(){w.matches=[],w.activeIdx=-1},D=function(e){var t={$viewValue:e};f(s,!0),n.when($.source(w,t)).then(function(n){if(e===p.$viewValue){if(n.length>0){w.activeIdx=0,w.matches.length=0;for(var a=0;n.length>a;a++)t[$.itemName]=n[a],w.matches.push({label:$.viewMapper(w,t),model:n[a]});w.query=e,w.position=o.position(c),w.position.top=w.position.top+c.prop("offsetHeight")}else k();f(s,!1)}},function(){k(),f(s,!1)})};k(),w.query=void 0;var x;p.$parsers.push(function(e){return k(),e&&e.length>=d&&(m>0?(x&&a.cancel(x),x=a(function(){D(e)},m)):D(e)),g?e:void 0}),p.$formatters.push(function(e){var t,n,a={};return v?(a.$model=e,v(s,a)):(a[$.itemName]=e,t=$.viewMapper(s,a),n=$.viewMapper(s,{}),t!==n?t:e)}),w.select=function(e){var t,n,a={};a[$.itemName]=n=w.matches[e].model,t=$.modelMapper(s,a),b(s,t),h(s,{$item:n,$model:t,$label:$.viewMapper(s,a)}),k(),c[0].focus()},c.bind("keydown",function(e){0!==w.matches.length&&-1!==l.indexOf(e.which)&&(e.preventDefault(),40===e.which?(w.activeIdx=(w.activeIdx+1)%w.matches.length,w.$digest()):38===e.which?(w.activeIdx=(w.activeIdx?w.activeIdx:w.matches.length)-1,w.$digest()):13===e.which||9===e.which?w.$apply(function(){w.select(w.activeIdx)}):27===e.which&&(e.stopPropagation(),k(),w.$digest()))}),i.bind("click",function(){k(),w.$digest()}),c.after(e(y)(w))}}}]).directive("typeaheadPopup",function(){return{restrict:"E",scope:{matches:"=",query:"=",active:"=",position:"=",select:"&"},replace:!0,templateUrl:"template/typeahead/typeahead-popup.html",link:function(e,t,n){e.templateUrl=n.templateUrl,e.isOpen=function(){return e.matches.length>0},e.isActive=function(t){return e.active==t},e.selectActive=function(t){e.active=t},e.selectMatch=function(t){e.select({activeIdx:t})}}}}).directive("typeaheadMatch",["$http","$templateCache","$compile","$parse",function(e,t,n,a){return{restrict:"E",scope:{index:"=",match:"=",query:"="},link:function(i,o,r){var l=a(r.templateUrl)(i.$parent)||"template/typeahead/typeahead-match.html";e.get(l,{cache:t}).success(function(e){o.replaceWith(n(e.trim())(i))})}}}]).filter("typeaheadHighlight",function(){function e(e){return e.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(t,n){return n?t.replace(RegExp(e(n),"gi"),"<strong>$&</strong>"):n}}),angular.module("template/accordion/accordion-group.html",[]).run(["$templateCache",function(e){e.put("template/accordion/accordion-group.html",'<div class="accordion-group">\n  <div class="accordion-heading" ><a class="accordion-toggle" ng-click="isOpen = !isOpen" accordion-transclude="heading">{{heading}}</a></div>\n  <div class="accordion-body" collapse="!isOpen">\n    <div class="accordion-inner" ng-transclude></div>  </div>\n</div>')}]),angular.module("template/accordion/accordion.html",[]).run(["$templateCache",function(e){e.put("template/accordion/accordion.html",'<div class="accordion" ng-transclude></div>')}]),angular.module("template/alert/alert.html",[]).run(["$templateCache",function(e){e.put("template/alert/alert.html","<div class='alert' ng-class='type && \"alert-\" + type'>\n    <button ng-show='closeable' type='button' class='close' ng-click='close()'>&times;</button>\n    <div ng-transclude></div>\n</div>\n")}]),angular.module("template/carousel/carousel.html",[]).run(["$templateCache",function(e){e.put("template/carousel/carousel.html",'<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel">\n    <ol class="carousel-indicators" ng-show="slides().length > 1">\n        <li ng-repeat="slide in slides()" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a ng-click="prev()" class="carousel-control left" ng-show="slides().length > 1">&lsaquo;</a>\n    <a ng-click="next()" class="carousel-control right" ng-show="slides().length > 1">&rsaquo;</a>\n</div>\n')}]),angular.module("template/carousel/slide.html",[]).run(["$templateCache",function(e){e.put("template/carousel/slide.html","<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item\" ng-transclude></div>\n")}]),angular.module("template/datepicker/datepicker.html",[]).run(["$templateCache",function(e){e.put("template/datepicker/datepicker.html",'<table>\n  <thead>\n    <tr class="text-center">\n      <th><button type="button" class="btn pull-left" ng-click="move(-1)"><i class="icon-chevron-left"></i></button></th>\n      <th colspan="{{rows[0].length - 2 + showWeekNumbers}}"><button type="button" class="btn btn-block" ng-click="toggleMode()"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn pull-right" ng-click="move(1)"><i class="icon-chevron-right"></i></button></th>\n    </tr>\n    <tr class="text-center" ng-show="labels.length > 0">\n      <th ng-show="showWeekNumbers">#</th>\n      <th ng-repeat="label in labels">{{label}}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows">\n      <td ng-show="showWeekNumbers" class="text-center"><em>{{ getWeekNumber(row) }}</em></td>\n      <td ng-repeat="dt in row" class="text-center">\n        <button type="button" style="width:100%;" class="btn" ng-class="{\'btn-info\': dt.selected}" ng-click="select(dt.date)" ng-disabled="dt.disabled"><span ng-class="{muted: dt.secondary}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/popup.html",[]).run(["$templateCache",function(e){e.put("template/datepicker/popup.html",'<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" class="dropdown-menu">\n	<li ng-transclude></li>\n	<li class="divider"></li>\n	<li style="padding: 9px;">\n		<span class="btn-group">\n			<button class="btn btn-small btn-inverse" ng-click="today()">Today</button>\n			<button class="btn btn-small btn-info" ng-click="showWeeks = ! showWeeks" ng-class="{active: showWeeks}">Weeks</button>\n			<button class="btn btn-small btn-danger" ng-click="clear()">Clear</button>\n		</span>\n		<button class="btn btn-small btn-success pull-right" ng-click="isOpen = false">Close</button>\n	</li>\n</ul>')}]),angular.module("template/dialog/message.html",[]).run(["$templateCache",function(e){e.put("template/dialog/message.html",'<div class="modal-header">\n	<h3>{{ title }}</h3>\n</div>\n<div class="modal-body">\n	<p>{{ message }}</p>\n</div>\n<div class="modal-footer">\n	<button ng-repeat="btn in buttons" ng-click="close(btn.result)" class="btn" ng-class="btn.cssClass">{{ btn.label }}</button>\n</div>\n')}]),angular.module("template/modal/backdrop.html",[]).run(["$templateCache",function(e){e.put("template/modal/backdrop.html",'<div class="modal-backdrop fade in"></div>')}]),angular.module("template/modal/window.html",[]).run(["$templateCache",function(e){e.put("template/modal/window.html",'<div class="modal in" ng-transclude></div>')}]),angular.module("template/pagination/pager.html",[]).run(["$templateCache",function(e){e.put("template/pagination/pager.html",'<div class="pager">\n  <ul>\n    <li ng-repeat="page in pages" ng-class="{disabled: page.disabled, previous: page.previous, next: page.next}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  </ul>\n</div>\n')}]),angular.module("template/pagination/pagination.html",[]).run(["$templateCache",function(e){e.put("template/pagination/pagination.html",'<div class="pagination"><ul>\n  <li ng-repeat="page in pages" ng-class="{active: page.active, disabled: page.disabled}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  </ul>\n</div>\n')}]),angular.module("template/tooltip/tooltip-html-unsafe-popup.html",[]).run(["$templateCache",function(e){e.put("template/tooltip/tooltip-html-unsafe-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html-unsafe="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(e){e.put("template/tooltip/tooltip-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("template/popover/popover.html",[]).run(["$templateCache",function(e){e.put("template/popover/popover.html",'<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("template/progressbar/bar.html",[]).run(["$templateCache",function(e){e.put("template/progressbar/bar.html",'<div class="bar" ng-class=\'type && "bar-" + type\'></div>')}]),angular.module("template/progressbar/progress.html",[]).run(["$templateCache",function(e){e.put("template/progressbar/progress.html",'<div class="progress"><progressbar ng-repeat="bar in bars" width="bar.to" old="bar.from" animate="bar.animate" type="bar.type"></progressbar></div>')}]),angular.module("template/rating/rating.html",[]).run(["$templateCache",function(e){e.put("template/rating/rating.html",'<span ng-mouseleave="reset()">\n	<i ng-repeat="number in range" ng-mouseenter="enter(number)" ng-click="rate(number)" ng-class="{\'icon-star\': number <= val, \'icon-star-empty\': number > val}"></i>\n</span>')}]),angular.module("template/tabs/pane.html",[]).run(["$templateCache",function(e){e.put("template/tabs/pane.html",'<div class="tab-pane" ng-class="{active: selected}" ng-show="selected" ng-transclude></div>\n')}]),angular.module("template/tabs/tab.html",[]).run(["$templateCache",function(e){e.put("template/tabs/tab.html",'<li ng-class="{active: active, disabled: disabled}">\n  <a ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("template/tabs/tabs.html",[]).run(["$templateCache",function(e){e.put("template/tabs/tabs.html",'<div class="tabbable">\n  <ul class="nav nav-tabs">\n    <li ng-repeat="pane in panes" ng-class="{active:pane.selected}">\n      <a ng-click="select(pane)">{{pane.heading}}</a>\n    </li>\n  </ul>\n  <div class="tab-content" ng-transclude></div>\n</div>\n')}]),angular.module("template/tabs/tabset-titles.html",[]).run(["$templateCache",function(e){e.put("template/tabs/tabset-titles.html","<ul class=\"nav {{type && 'nav-' + type}}\" ng-class=\"{'nav-stacked': vertical}\">\n</ul>\n")}]),angular.module("template/tabs/tabset.html",[]).run(["$templateCache",function(e){e.put("template/tabs/tabset.html",'\n<div class="tabbable" ng-class="{\'tabs-right\': direction == \'right\', \'tabs-left\': direction == \'left\', \'tabs-below\': direction == \'below\'}">\n  <div tabset-titles="tabsAbove"></div>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n  <div tabset-titles="!tabsAbove"></div>\n</div>\n')}]),angular.module("template/timepicker/timepicker.html",[]).run(["$templateCache",function(e){e.put("template/timepicker/timepicker.html",'<table class="form-inline">\n	<tr class="text-center">\n		<td><a ng-click="incrementHours()" class="btn btn-link"><i class="icon-chevron-up"></i></a></td>\n		<td>&nbsp;</td>\n		<td><a ng-click="incrementMinutes()" class="btn btn-link"><i class="icon-chevron-up"></i></a></td>\n		<td ng-show="showMeridian"></td>\n	</tr>\n	<tr>\n		<td class="control-group" ng-class="{\'error\': !validHours}"><input type="text" ng-model="hours" ng-change="updateHours()" class="span1 text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2" /></td>\n		<td>:</td>\n		<td class="control-group" ng-class="{\'error\': !validMinutes}"><input type="text" ng-model="minutes" ng-change="updateMinutes()" class="span1 text-center" ng-readonly="readonlyInput" maxlength="2"></td>\n		<td ng-show="showMeridian"><button ng-click="toggleMeridian()" class="btn text-center">{{meridian}}</button></td>\n	</tr>\n	<tr class="text-center">\n		<td><a ng-click="decrementHours()" class="btn btn-link"><i class="icon-chevron-down"></i></a></td>\n		<td>&nbsp;</td>\n		<td><a ng-click="decrementMinutes()" class="btn btn-link"><i class="icon-chevron-down"></i></a></td>\n		<td ng-show="showMeridian"></td>\n	</tr>\n</table>')}]),angular.module("template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(e){e.put("template/typeahead/typeahead-match.html",'<a tabindex="-1" ng-bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')}]),angular.module("template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(e){e.put("template/typeahead/typeahead-popup.html",'<ul class="typeahead dropdown-menu" ng-style="{display: isOpen()&&\'block\' || \'none\', top: position.top+\'px\', left: position.left+\'px\'}">\n    <li ng-repeat="match in matches" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)">\n        <typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></typeahead-match>\n    </li>\n</ul>')}]),angular.module("template/typeahead/typeahead.html",[]).run(["$templateCache",function(e){e.put("template/typeahead/typeahead.html",'<ul class="typeahead dropdown-menu" ng-style="{display: isOpen()&&\'block\' || \'none\', top: position.top+\'px\', left: position.left+\'px\'}">\n    <li ng-repeat="match in matches" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)">\n        <a tabindex="-1" ng-click="selectMatch($index)" ng-bind-html-unsafe="match.label | typeaheadHighlight:query"></a>\n    </li>\n</ul>')}]);;'use strict';

var backendUrl = 'http://jcertif-backend.msomda.cloudbees.net';
var app = angular.module('jcertifWeb2013App', ['ui.bootstrap',  'ngCookies' ]);
var googleUser = {};

app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {controller: 'HomeCtrl', templateUrl: 'pages/home/home.html'})
        .when('/register', {controller: 'RegisterCtrl', templateUrl: 'pages/register/register.html'})
        .when('/speakers', {controller: 'SpeakersCtrl', templateUrl: 'pages/speakers/speakers.html'})
        .when('/sessions', {controller: 'SessionsCtrl', templateUrl: 'pages/sessions/sessions.html'})
        .when('/cfp', {controller: 'CfpCtrl', templateUrl: 'pages/cfp/cfp.html'})
        .when('/agenda', {controller: 'AgendaCtrl', templateUrl: 'pages/agenda/agenda.html'})
        .when('/contact', {controller: 'ContactCtrl', templateUrl: 'pages/contact/contact.html'})
        .otherwise({redirectTo: '/home'});
});

function signinCallback(authResult) {
    if (authResult['access_token']) {
        // Authentification Ok
        document.getElementById('googlePlusButton').setAttribute('style', 'display: none');
        googleUser.access_token = authResult['access_token'];
        gapi.auth.setToken(authResult);
        gapi.client.load('oauth2', 'v2', function() {
            var request = gapi.client.oauth2.userinfo.get();
            request.execute(function(obj) {
                googleUser.email=obj['email'];
            });
        });

        gapi.client.load('plus','v1', function(){
            var request = gapi.client.plus.people.get({
                'userId': 'me'
            });
            request.execute(function(resp) {
                googleUser.photo = resp.image.url;
                googleUser.displayName = resp.displayName;
                googleUser.familyName = resp.name.familyName;
                googleUser.givenName = resp.name.givenName;
                googleUser.placesLived = resp.placesLived;
                document.getElementById('connected').innerHTML = "<img src=\"" + googleUser.photo+ "\" height=\"5px\"> &nbsp;" + resp.displayName;
            });
        });
    } else if (authResult['error']) {
        googleUser.access_token = undefined;
        googleUser.email= undefined;
        googleUser.photo = undefined;
        googleUser.displayName = undefined;
        googleUser.familyName = undefined;
        googleUser.givenName = undefined;
        googleUser.placesLived = undefined;
        document.getElementById('connected').innerHTML = '';
    }
}
;'use strict';

app.directive('jcFooter', function () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'directives/footer/footer.html',
        link: function (scope, element, attributes) {
        }
	};
});

;'use strict';

app.directive('jcComboboxPays', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'directives/form/inputText/ComboboxPays.html',
        scope: {
            property: '=',
            label: '=',
       		model: '=',	
        },
        link: function (scope, element, attributes) {

        }
    };
});
;'use strict';

app.directive('jcInputText', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'directives/form/inputText/inputText.html',
        scope: {
            property: '@',
            label: '=',
            model: '=',
            inputType: '@',
            msg: '@'
        }
    };
});

;'use strict';

app.directive('jcTextArea', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'directives/form/textArea/textArea.html',
        scope: {
            property: '@',
            label: '=',
            model: '='
        }
    };
});;'use strict';

app.directive('jcHeader', ['i18nService', 'loginService', '$window',  function (i18nService, loginService, $window) {


    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'directives/header/header.html',
        link: function (scope, element, attributes) {
            scope.changeLang = function(lang){
                i18nService.setLang(lang);
                if(i18nService.getCurrentLang() == 'FR') {
                    scope.FRClass = 'current-lang';
                    scope.ENClass = '';
                } else {
                    scope.ENClass = 'current-lang';
                    scope.FRClass = '';
                }
            };

            if(scope.FRClass == undefined) {
                if($window.navigator.language != undefined && $window.navigator.language.indexOf('FR') != -1) {
                    scope.changeLang('FR');
                } else {
                    scope.changeLang('EN');
                }
            }

            scope.logout = function() {
                loginService.logout();
            }

        }

    };
}]);

;'use strict';

app.directive('jcMenu',  ['$location', '$rootScope', function(location, rootScope) {
    function getClass(path) {
        if (('#' + location.path()) == path) {
            return "active";
        } else {
            return "";
        }
    }


    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'directives/menu/menu.html',
        link: function (scope, element, attributes, location) {
            if(rootScope.logged) {
                scope.menuItems = [
                    {'label': 'header.nav.home', 'url': '#/home'},
                    {'label':"header.nav.cfp", 'url': '#/cfp'},
                    {'label':'header.nav.speakers', 'url': '#/speakers'},
                    {'label':"header.nav.sessions", 'url': '#/sessions'},
                    {'label':"header.nav.agenda", 'url': '#/agenda'},
                    {'label':"header.nav.contact", 'url': '#/contact'}
                ];
            } else {
                scope.menuItems = [
                    {'label': 'header.nav.home', 'url': '#/home'},
                    {'label': "header.nav.register", 'url': '#/register'},
                    {'label':"header.nav.cfp", 'url': '#/cfp'},
                    {'label':'header.nav.speakers', 'url': '#/speakers'},
                    {'label':"header.nav.sessions", 'url': '#/sessions'},
                    {'label':"header.nav.agenda", 'url': '#/agenda'},
                    {'label':"header.nav.contact", 'url': '#/contact'}
                ];
            }

            scope.getClass = getClass;

        }
    };
}]);;'use strict';

/*
 * Thanks to Bitner http://jeradbitner.com
 * https://github.com/sirkitree/angular-directive.g-signin
 */
app.directive('jcGooglePlus', function () {
    return {
        restrict: 'E',
        template: '<span></span>',
        replace: true,
        link: function (scope, element, attrs) {

            // Set class.
            attrs.$set('class', 'g-signin');

            // Set data attributes.
            attrs.$set('data-callback', 'signinCallback');
            attrs.$set('data-clientid', attrs.clientid + '.apps.googleusercontent.com');
            attrs.$set('data-cookiepolicy', 'single_host_origin');
            attrs.$set('data-requestvisibleactions', 'http://schemas.google.com/AddActivity');
            attrs.$set('data-scope', 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email');
            //attrs.$set('data-width', 'wide');

            // Asynchronously load the G+ SDK.
            (function() {
                var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
                po.src = 'https://apis.google.com/js/client:plusone.js';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
            })();
        }
    };
});;'use strict';

app.directive('jcTwitter', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'directives/social/twitter/twitter.html',
        link: function (scope, element, attributes) {
            !function(d,s,id){
                var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';

                js=d.createElement(s);
                js.id=id;
                js.src=p+"://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js,fjs);

            }(document,"script","twitter-wjs");
        }
    };
});;'use strict';

app.controller('AgendaCtrl', ['$http', '$scope', 'backendService', function ($http, $scope, backendService) {

    backendService.getSessions(function(sessionsList) {

        var days = [];
        var sessLength = sessionsList.length;
        for(var i = 0; i < sessLength; i++) {
            var startDate = getDate(sessionsList[i].start);
            if(!contains(days, startDate)) {
                days[days.length] = startDate;
            }
        }

        var coolDays = [];

        function addSession(rooms, session) {

            if(isRoomsHasSessionRoom(rooms, session)) {
                for(var i=0; i < rooms.length; i++) {
                    if (rooms[i].name == session.room) {
                        rooms[i].sessions[rooms[i].sessions.length] = session;
                    }
                }
            } else {
                rooms[rooms.length] = {
                    name : session.room,
                    label : session.roomName,
                    sessions : [session]
                }
            }


        }

        function isRoomsHasSessionRoom(rooms, session) {
            for(var i=0; i < rooms.length; i++) {
                if (rooms[i].name == session.room) {
                    return true;
                }
            }
            return false;
        }


        for(var j = 0; j < days.length; j++) {
            var roomsDay=[];
            for(var i = 0; i < sessLength; i++) {
                var startDate = getDate(sessionsList[i].start);
                if(days[j] == startDate) {
                    addSession(roomsDay,sessionsList[i]);
                }
            }
            coolDays[coolDays.length] = {
                day : days[j],
                rooms : roomsDay
            };
        }



        $scope.days = coolDays;
        $scope.sessions = sessionsList;
    });

    function contains(a, obj) {
        for (var i = 0; i < a.length; i++) {
            if (a[i] === obj) {
                return true;
            }
        }
        return false;
    }

    function getDate(dateHour) {
        return dateHour.substr(0, 5);
    }

    $scope.openSession = function(session){
        $scope.selectedSession = session;
        $scope.shouldBeOpen = true;
    }

    $scope.close = function(){
        $scope.shouldBeOpen = false;
    }

    $scope.opts = {
        backdropFade: true,
        dialogFade:true
    };

}]);;'use strict';

app.controller('CfpCtrl', ['$http', '$scope', '$rootScope', '$dialog', 'backendService', function ($http, $scope, $rootScope, $dialog, backendService) {

    var userFields = ['biography'];
    var cfpFields = ['category', 'title', 'summary', 'keyword', 'description'];

    $scope.submitForm = function () {
        saveOrUpdateSpeaker('register');
    }


    function saveOrUpdateSpeaker(action) {
        $scope.user.password=$rootScope.access_token;
        $http.post(backendUrl + '/speaker/' + action + '?jsonp=JSON_CALLBACK&access_token=' + $rootScope.access_token + '&provider=' + $rootScope.provider + '&user=' + $rootScope.user.email, $scope.user)
            .success(function (result) {
                $scope.cfp.speakers = [$scope.user.email];
                $http.post(backendUrl + '/session/new?jsonp=JSON_CALLBACK', $scope.cfp)
                    .success(function (result) {
                        openConfirmBox();
                    }).error(function (data, status, headers, config) {
                        openErrorBox();
                    });
            }).error(function (data, status, headers, config) {
                if (action === 'register') {
                    saveOrUpdateSpeaker('update');
                } else {
                    openErrorBox();
                }
            });
    }

    function openErrorBox() {
        $dialog.messageBox('Erreur', 'Veuillez verifier les données saisies').open();

    }

    function openConfirmBox() {
        $dialog.messageBox('Yes !', 'Nous avons bien reçu votre demande').open();
    }

    backendService.getCategories(function (categories) {
        $scope.categories = categories;
    });

    $scope.isValid = function () {
        var valid = true;

        if ($scope.user == undefined || $scope.cfp == undefined) {
            valid = false;
        }

        if (valid) {
            angular.forEach(userFields, function (userField) {
                if ($scope.user[userField] == undefined || $scope.user[userField].trim() == '') {
                    valid = false;
                }
            });
        }

        if (valid) {
            angular.forEach(cfpFields, function (cfpField) {
                if ($scope.cfp[cfpField] == undefined || $scope.cfp[cfpField].trim() == '') {
                    valid = false;
                }
            });
        }
        return valid;
    };
}]);
;'use strict';

app.controller('ContactCtrl', function() {

   
});;'use strict';

app.controller('HomeCtrl', ['$http', '$scope', 'backendService', function ($http, $scope, backendService) {
    $scope.carouselInterval = 7000;

    $scope.slides = [
        {image: 'images/banner.jpg'},
        {image: 'images/slide1.jpg'},
        {image: 'images/slide2.jpg'}
    ];

    backendService.getSponsors(function (sponsorsList) {
        var sponsorLevel1 = [];
        var sponsorLevel2 = [];
        var sponsorLevel3 = [];
        angular.forEach(sponsorsList, function (sponsor) {
            if (sponsor.level == 'Titanium' || sponsor.level == 'Platine') {
                sponsorLevel1[sponsorLevel1.length] = sponsor;
            } else if (sponsor.level == 'Or' || sponsor.level == 'Argent') {
                sponsorLevel2[sponsorLevel2.length] = sponsor;
            } else {
                sponsorLevel3[sponsorLevel3.length] = sponsor;
            }
        });
        $scope.sponsorsLevel1 = sponsorLevel1;
        $scope.sponsorsLevel2 = sponsorLevel2;
        $scope.sponsorsLevel3 = sponsorLevel3;
    });
}]);
;'use strict';

app.controller('RegisterCtrl', ['$http', '$scope', '$dialog', '$location', 'i18nService', 'backendService', 'loginService', function ($http, $scope, $dialog, $location, i18nService, backendService, loginService) {
    $http.defaults.useXDomain = true;
    var requiredFields = ['email', 'password', 'firstname', 'lastname', 'city', 'country'];
    $scope.passwordError = '';
    $scope.login = function() {
        loginService.login($scope.login.email, $scope.login.password, function(participant, error){
            if(error == undefined) {
                $location.path('/agenda')
            } else {
                $scope.loginError = i18nService.getText('form.badlogin');
            }
        });
    }

    $scope.goToAgenda = false;

    $scope.submitForm = function () {
        if($scope.user['password'].length < 6) {
            $scope.passwordError =  i18nService.getText('form.password.minlength');
        } else {
            $scope.isInProgress = true;
            $http.post(backendUrl + '/participant/register?jsonp=JSON_CALLBACK',  $scope.user)
                .success(function (result) {
                    $scope.isInProgress = false;
                    openConfirmDialog();
                    loginService.login($scope.user.email, $scope.user.password, function(participant, error){

                        if(error == undefined) {
                            if($scope.goToAgenda) {
                                $location.path('/agenda');
                            } else {
                                $scope.goToAgenda = true;
                            }

                        }
                    });
                    $scope.user = {};
                })
                .error(function (result) {
                    $scope.isInProgress = false;
                    openErrorDialog();
                });
        }
    }

    function openConfirmDialog() {
        $dialog.messageBox(
            i18nService.getText('form.register.ok'),
            i18nService.getText('form.register.ok.msg')
        ).open().then(function(result){
            if($scope.goToAgenda) {
                $location.path('/agenda');
            } else {
                $scope.goToAgenda = true;
            }
        });;
    }

    function openErrorDialog() {
        $dialog.messageBox(
            i18nService.getText('form.register.ko'),
            i18nService.getText('form.register.ko.msg')
        ).open();
    }

    $scope.isValid = function() {
        if($scope.user == undefined) {
            return false;
        }
        for(var i=0; i < requiredFields.length; i++) {
            if( $scope.user[requiredFields[i]] == undefined || $scope.user[requiredFields[i]].trim() == '') {
                return false;
            }
        }
        if($scope.user['password'].length > 4) {
            $scope.passwordError = '';
        }
        return  true;
    };

    $scope.newPassError = '';

    $scope.sendNewPassword = function(email)  {
        if(email == undefined || email.trim() == '' ) {
            $scope.newPassError =  i18nService.getText('form.reinitemail.ko');
        } else {
            backendService.sendNewPassword(email, function(error) {
                if(error) {
                    $scope.newPassError =  i18nService.getText('form.reinitemail.ko');
                } else {
                    $scope.newPassError =  i18nService.getText('form.reinitemail.ok');
                }
            });
        }

    }




}]);
;'use strict';

app.controller('SessionsCtrl', ['$http', '$scope', 'backendService', function ($http, $scope, backendService) {

    backendService.getSessions(function(sessionsList) {
        $scope.sessions = sessionsList;
    });

    $scope.open = function(speaker){
        $scope.selectedSpeaker = speaker;
        $scope.shouldBeOpen = true;
    }

    $scope.close = function(){
        $scope.shouldBeOpen = false;
    }

    $scope.opts = {
        backdropFade: true,
        dialogFade:true
    };
}]);;'use strict';

app.controller('SpeakersCtrl', ['$http', '$scope', '$dialog', 'backendService', function ($http, $scope, $dialog, backendService) {

    backendService.getSpeakers(function(speakersList) {
        var speakersWithSession = [];
        angular.forEach(speakersList, function(speaker){
            if(speaker.sessions != undefined) {
                speakersWithSession[speakersWithSession.length] = speaker;
            }

        });
        $scope.speakers = speakersWithSession;
    });


    $scope.openDialog = function(speaker){
        var dialogSpeaker = $dialog.dialog({
            backdrop: true,
            keyboard: true,
            backdropClick: true,
            backdropFade: true,
            dialogFade:true,
            resolve: {
                speaker: function(){
                    return angular.copy(speaker);
                }
            }
        });
        dialogSpeaker.open('pages/speakers/speakerDetails.html', 'SpeakerDetailsCtrl');
    };

}]);

app.controller('SpeakerDetailsCtrl', ['$scope', '$dialog', 'speaker', function($scope, dialog, speaker){
   $scope.speaker = speaker;
}]);;app.factory('backendService', ['$http', function ($http) {

    var backendData = {};
    var speakers = undefined;
    var sessions = undefined;



    function findAll(entity, callback) {
        if(backendData[entity] == undefined) {
            $http.jsonp(backendUrl + '/' + entity + '/list?jsonp=JSON_CALLBACK')
                .success(function (result) {
                    backendData[entity] = result;
                    callback(result);
                });
        } else {
            callback(backendData[entity]);
        }

    }

    function initSessionsAndSpeakers(callback) {
        findAll('room', function(allRooms) {
            $http.jsonp(backendUrl + '/speaker/list?jsonp=JSON_CALLBACK')
                .success(function (result) {
                    speakers = result;
                    $http.jsonp(backendUrl + '/session/list?jsonp=JSON_CALLBACK')
                        .success(function (result) {
                            sessions = getValidSessions(result);
                            mergeSessionsAndSpeakers(speakers, sessions, allRooms);
                            callback();
                        });
                });
        });

    }

    function getValidSessions(sessions) {
        var sessionsLength = sessions.length;
        var validSessions = [];
        for(var iSes=0;iSes < sessionsLength; iSes++) {
            if(sessions[iSes].start) {
                validSessions[validSessions.length] = sessions[iSes];
            }
        }

        return validSessions;
    };

    function mergeSessionsAndSpeakers(speakers, sessions, allRooms) {
        var sessionsLength = sessions.length;
        var speakersLength = speakers.length;
        for(var iSes=0;iSes < sessionsLength; iSes++) {
            var spLength = sessions[iSes].speakers.length;
            sessions[iSes].roomName = getRoomName(sessions[iSes].room, allRooms);
            for(var iSp=0;iSp < spLength; iSp++) {
                var emailSp = sessions[iSes].speakers[iSp];
                for(var iSpk=0;iSpk < speakersLength; iSpk++) {
                    if(speakers[iSpk].email === emailSp) {
                        joinSpeakerAndSession(speakers[iSpk], sessions[iSes]);
                    }
                }
            }
        }
    }

    function getRoomName(idRoom, allRooms) {
        for(var i=0;i < allRooms.length; i++) {
            if(idRoom === allRooms[i].id) {
                return allRooms[i].name;
            }
        }
    }

    function addSessionIdToSpeaker(speaker, session) {
        if (speaker.sessions == undefined) {
            speaker.sessions = [session.id];
        } else {
            speaker.sessions[speaker.sessions.length] = session.id;
        }
    }



    function joinSpeakerAndSession(speaker, session) {


        if(session.fullSpeakers == undefined) {
            session.fullSpeakers = [speaker];
            addSessionIdToSpeaker(speaker, session);
        } else {
            session.fullSpeakers[session.fullSpeakers.length] = speaker;
            addSessionIdToSpeaker(speaker, session);
        }
    }

    function sendNewPassword(email, callback){
        $http.jsonp(backendUrl + '/participant/' + email + '/lostpassword?jsonp=JSON_CALLBACK')
            .success(function (result) {
                callback();
            }
        ).error(function (result) {
                callback('ERR');
            });
    }

    return {
        getSponsors : function(callback) { findAll('sponsor', callback); },
        getCategories : function(callback) { findAll('ref/category', callback); },
        getRooms : function(callback) { findAll('room', callback); },
        sendNewPassword : function(email, callback) {sendNewPassword(email, callback)},
        getSpeakers : function(callback) {
            if(speakers == undefined) {
                initSessionsAndSpeakers(function getSp(){
                    return callback(speakers);
                });
            } else {
                callback(speakers);
            }
        },
        getSessions : function(callback) {
            if(sessions == undefined) {
                initSessionsAndSpeakers(function getSp(){
                    return callback(sessions);
                });
            } else {
                callback(sessions);
            }
        }

    };
}]);;app.factory('i18nService', function () {

    var FR = {
        "header.conference": "CONFÉRENCE",
        "header.city": "IFC (EX-CCF) - Brazzaville",
        "header.date": "9 - 15 Sept. 2013",
        "header.login": "Se connecter",
        "header.logout": "Se déconnecter",
        "header.nav.home": "Accueil",
        "header.nav.register": "S'inscrire",
        "header.nav.speakers": "Présentateurs",
        "header.nav.sessions": "Sessions",
        "header.nav.cfp": "Proposez un sujet",
        "header.nav.agenda": "Agenda",
        "header.nav.contact": "Contact",
        "home.news": "Une Conférence sur plusieurs Métiers et Compétences",
        "home.sponsors": "Nos Sponsors",
        "home.newsletter": "NEWSLETTER",
        "home.followus": "Suivez-Nous",
        "home.actus": "Actualités",
        "form.email": "Email",
        "form.password": "Mot de passe",
        "form.firstname": "Prénom",
        "form.lastname": "Nom",
        "form.city": "Ville",
        "form.country": "Pays",
        "form.biography": "Bio",
        "form.submit": "S'inscrire",
        "form.submitCfp": "Proposez !",
        'form.title' : 'Titre',
        'form.summary' : 'Résumé',
        'form.description' : 'Description',
        'form.keyword' : 'Mots Clés',
        'form.category' : 'Catégorie',
        'form.password.min' : '6 caractères minimum',
        'form.register.ok' : 'Inscription validée',
        'form.register.ko' : 'Ooops !',
        'form.register.ok.msg' : 'Votre inscription a bien été prise en compte. Vous allez recevoir un email qui vous indiquera les prochaines étapes à suivre.',
        'form.register.ko.msg' : "Vous êtes probablement déjà inscrit, pour vous en assurez, vous pouvez réinitialisez votre mot de passe. Si à la suite de cette opération, vous ne recevez pas votre nouveau mot de passe par email, veuillez nous envoyer un email à l'adresse info@jcertif.com. Dans tous les cas, vous pouvez vous présenter à la Bibliothèque Nationale de l'université dès le lundi 09 septembre à 08h00.",
        'form.register.wait' : 'Inscription en cours...Veuillez patienter svp...',
        'form.send' : 'Envoyer',
        'form.reinitemail.ko' : 'Veuillez saisir un email valide',
        'form.reinitemail.ok' : 'Votre nouveau mot de passe a été envoyé',
        'cfp.speaker' : 'Qui êtes vous ?',
        'cfp.paper' : 'Votre sujet',
        'cfp.notlogged' : "Vous devez vous inscrire pour proposer un sujet.",
        'agenda.day' : 'Jour',
        'session.keyword' : 'Mots Clés',
        'form.register.info' : "Veuillez remplir ce formulaire pour vous inscrire à l'événement JCertif 2013",
        'form.register.notsignup' : 'Pas encore inscrit ?',
        'form.register.alreadysignup' : 'Déjà inscrit ?',
        'form.register.pleaselogin' : 'Veuillez vous connecter !',
        'form.register.forgetpass' : 'Mot de passe oublié ?',
        'form.register.alreadysignin' : 'Vous êtes déjà authentifié !',
        'form.password.minlength' : 'Attention le mot de passe doit être de 6 caractères minimum',
        'form.badlogin' : 'Les informations fournies ne nous permettent pas de vous authentifier'
    }

    var EN = {
        'header.conference': 'CONFERENCE',
        'header.city': 'IFC (EX-CCF) - Brazzaville',
        'header.date': '9 - 15 Sept. 2013',
        'header.login': 'Login',
        "header.logout": "Logout",
        "header.nav.home": "Home",
        "header.nav.register": "Sign Up",
        "header.nav.speakers": "Speakers",
        "header.nav.sessions": "Sessions",
        "header.nav.cfp": "Submit a paper",
        "header.nav.agenda": "Agenda",
        "header.nav.contact": "Contact",
        "home.news": "One Event, Many Opportunities",
        "home.sponsors": "Our Sponsors",
        "home.newsletter": "NEWSLETTER",
        "home.followus": "Follow Us",
        "home.actus": "News",
        "form.email": "Email",
        "form.password": "Password",
        "form.firstname": "First Name",
        "form.lastname": "Last Name",
        "form.city": "City",
        "form.country": "Country",
        "form.biography": "Bio",
        "form.submit": "Sign Up",
        "form.submitCfp": "Submit !",
        'form.title' : 'Title',
        'form.summary' : 'Summary',
        'form.description' : 'Description',
        'form.keyword' : 'Keywords',
        'form.category' : 'Category',
        'form.password.min' : '6 characters min',
        'form.register.ok' : 'Your profile was created',
        'form.register.ko' : 'Ooops !',
        'form.register.ok.msg' : 'Your subscription has been registered. You will receive an email indicating the following steps',
        'form.register.ko.msg' : "Something wrongs... Please contact info@jcertif.com",
        'form.register.wait' : 'Sign up in progress... please wait',
        'form.send' : 'Send',
        'form.reinitemail.ko' : 'Email is invalid',
        'form.reinitemail.ok' : 'Your new password was sent.',
        'cfp.speaker' : 'Who are you ?',
        'cfp.paper' : 'Your proposal',
        'cfp.notlogged' : "You must signup before.",
        'agenda.day' : 'Day',
        'session.keyword' : 'Keyword',
        'form.register.info' : "Please, fill form to sign up",
        'form.register.notsignup' : 'Never sign up ?',
        'form.register.alreadysignup' : 'Already registered ?',
        'form.register.pleaselogin' : 'Login',
        'form.register.forgetpass' : 'Password Forgotten ?',
        'form.register.alreadysignin' : 'You are already sign in !',
        'form.password.minlength' : 'Password : 6 characters min',
        'form.badlogin' : 'Bad login'
    }

    var currentLang = FR;

    return {
        getText : function(code) {
            return currentLang[code];
        },
        setLang : function(lang) {
            if(lang == 'FR') {
                currentLang = FR;
            } else {
                currentLang = EN;
            }
        },
        getCurrentLang : function() {
            if(currentLang == FR) {
                return 'FR';
            } else {
                return 'EN';
            }
        }
    };
});
;app.factory('loginService', ['$http','$rootScope', '$cookieStore', function ($http, $rootScope, $cookieStore) {

    var cookieAccessToken = $cookieStore.get('access_token');
    var cookieEmail = $cookieStore.get('user_email');
    var cookieProvider = $cookieStore.get('provider');

    if(cookieAccessToken && cookieEmail && cookieProvider) {
        findParticipant(cookieEmail,cookieAccessToken, cookieProvider,
            function(participant, error) {
                if(error == undefined) {
                    saveLogin(participant, cookieAccessToken, cookieProvider);
                } else {
                    logout();
                }

            });
    }

    function logout(){
        $rootScope.logged = false;
        $rootScope.user = undefined;
        $rootScope.access_token = undefined;
        $rootScope.provider = undefined;
        $cookieStore.remove('access_token');
        $cookieStore.remove('user_email');
        $cookieStore.remove('provider');
    }

    function saveLogin(participant, access_token, provider){
        $rootScope.logged = true;
        $rootScope.user = participant;
        $rootScope.access_token = access_token;
        $rootScope.provider = provider;
        $cookieStore.put('access_token',access_token);
        $cookieStore.put('user_email',participant.email);
        $cookieStore.put('provider', provider);
    }

    function findParticipant(email, access_token, provider, callback) {
        $http.jsonp(backendUrl + '/participant/get/' + email + '?access_token=' + access_token + '&provider=' + provider + '&jsonp=JSON_CALLBACK')
            .success(function (participant) {
                saveLogin(participant, access_token, provider);
                callback(participant, undefined);
            }
        ).error(function (result) {
                logout();
                callback(undefined, 'ERR');
            });
    }

    function login(email, password, callback) {
        $http.post(
            backendUrl + '/participant/login?jsonp=JSON_CALLBACK',
            {
                email : email,
                password : password
            }
        ).success(function (token) {
                findParticipant(email, token.access_token, 'userpass', callback);
            }).error(function (result) {
                logout();
                callback(undefined, 'ERR');
            });
    }

    return {
        login : function(email, password, callback) {
            login(email, password, callback);
        },
        logout : function(){
            logout();
        }
    };
}]);;app.filter('hour', function () {
    return function (input) {
        return input.substr(10, 6);
    }
});;app.filter('i18n',['i18nService', function(i18nService) {
    return function (input) {
        return i18nService.getText(input);
    }
}]);

