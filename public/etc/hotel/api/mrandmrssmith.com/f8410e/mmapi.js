/*! mmapi v1.7 Copyright 2006-2015 Maxymiser Inc */
/*v1.7.18.2625*/
/*Please do not modify this file except configuration section at the bottom.*/
(function(c,H){function L(b){this.enableUtility=function(c){var e=b.getParam("un",b.baseStorage.storeStrategy.persistent)||"";(new RegExp("(^|,)"+c+"($|,)")).test(e)||(e=e.split(","),e.push(c),b.setParam("un",e.join(",").replace(/(^,)|(,$)/g,""),b.baseStorage.storeStrategy.persistent));return this};this.disableUtility=function(c){var e=b.getParam("un",b.baseStorage.storeStrategy.persistent)||"";(new RegExp("(^|,)"+c+"($|,)")).test(e)&&(e=e.replace(new RegExp("(^|,)"+c+"($|,)","gi"),",").replace(/(^,)|(,$)/g,
""),b.setParam("un",e,b.baseStorage.storeStrategy.persistent));return this};this.enable=function(){b.enable();return this};this.disable=function(){b.disable();return this};this.getConfig=function(){return{storageType:b.storageType,cprefix:b.cprefix,domain:b.domain,baseContentUrl:b.baseContentUrl,cookie_domain:b.cookie_domain,srv:b.srv,async:b.async,beforeInit:b.beforeInit,beforeRequest:b.beforeRequest,afterResponse:b.afterResponse,afterResponseExecution:b.afterResponseExecution}}}function S(b){var c=
this,e=b.domain,v=encodeURIComponent,x=decodeURIComponent;c.set=function(c,b,m,n){n||(b=v(b));c=v(c)+"="+b+";domain="+e+";path=/";m?(b=new Date,b.setTime(b.getTime()+864E5*m),m=";expires="+b.toGMTString()):m="";document.cookie=c+m;return this};c.remove=function(b){c.set(b,"",-1);return this};c.get=function(b,c){var e=new RegExp("(?:^|; )"+v(b).replace(/([.$?*|{}()\[\]\\\/+^])/g,"\\$1")+"=([^;]+)"),e=(document.cookie.match(e)||[,""])[1];return c?e:x(e)}}function W(b){function t(b){for(var c={},e="",
k=0,h;h=B.getItem(b+k++);)e+=h;"cookie"==n&&(e=decodeURIComponent(e));try{c=JSON.parse(e)}catch(m){}return c}function e(){r=t(I);m=t(J);D&&"cookie"!==n&&(u.set(w+"store.s","s"),D=!1,m={});var b=(new Date).getTime(),c=r[p],e;for(e in c)c.hasOwnProperty(e)&&y(c[e]).e<=b&&delete c[e];x();r[p]=r[p]||{};m[p]=m[p]||{}}function v(b,c,e){c=JSON.stringify(c);var k="{}"===c,h=0;for("cookie"==n&&(c=encodeURIComponent(c));B.getItem(b+h);)B.removeItem(b+h++);if(!k)for(h=0;k=c.substr(3E3*h,3E3);)B.setItem(b+h++,
k,e)}function x(){v(I,r);v(J,m,0)}function y(c){var b=c.indexOf("|");return{v:JSON.parse(c.substring(b+1,c.length)),e:c.substring(0,b)}}if(!/^(cookie)$/.test(b.type))throw"(mm module: storage) Invalid storage type: "+b.type;var r,m,n=b.type||"cookie",w=b.cprefix+".",I=w+"store.p.",J=w+"store.s.",u=new S({domain:b.domain}),p=b.namespace||"def",D=!u.get(w+"store.s"),B="local"===n&&c.localStorage?c.localStorage:"session"===n&&c.sessionStorage?c.sessionStorage:{setItem:function(c,b,e){u.set(c,b,e==H?
365:e,!0)},getItem:function(c){return u.get(c,!0)},removeItem:function(c){u.remove(c)}};this.get=function(c){e();var b=r[p],n=m[p],k={},h;for(h in b)b.hasOwnProperty(h)&&(k[h]=b[h]);for(h in n)n.hasOwnProperty(h)&&(k[h]=n[h]);if(!c){c={};for(var t in k)k.hasOwnProperty(t)&&(c[t]=y(k[t]).v);return c}return(k[c]?y(k[c]):0).v};this.set=function(c,b,n){e();var k=r[p],h=m[p];delete k[c];delete h[c];null!==b&&b!==H&&(n?(h=new Date,h.setTime(h.getTime()+864E5*n),b=h.getTime()+"|"+JSON.stringify(b),k[c]=
b):h[c]="0|"+JSON.stringify(b));x();return this};this.removeAll=function(){e();r[p]={};m[p]={};x();return this};this.testStorage=function(){var c=(""+Math.random()).substring(0,5);u.set(w+"tst",c,10);c=u.get(w+"tst",!0)===c?1:0;u.remove(w+"tst");return c};e()}function N(b){function t(a,f){return a.hasOwnProperty(f)&&"string"===typeof a[f]}function e(a,f,d){try{"function"===typeof a&&a.apply(f,d)}catch(c){O&&O.log(c)}}function v(a,f){if(z[a])for(var d=z[a].length-1;0<=d;d--)z[a][d].call({},f)}function x(a){F=
"boolean"===typeof a?a:!1}function y(a){if(F){var f=document.getElementsByTagName("head")[0];f.insertBefore(a,f.lastChild)}else document.write(a.outerHTML||(new XMLSerializer).serializeToString(a))}function r(a,f){var d=document.createElement("script");d.type="text/javascript";d.id=f;d.src=a;return d}function m(a){if("object"!==typeof a)return a;if(a.constructor===Array)return a.join(";");var f=[],d;for(d in a)if(a.hasOwnProperty(d))if(a[d].constructor===Array)for(var c in a[d])a[d].hasOwnProperty(c)&&
f.push(d+"="+a[d][c]);else f.push(d+"="+encodeURIComponent(a[d]));return f.join(";")}function n(a){a=a?B(a):{};var f={};"string"===typeof a["mm-dlp-api"]&&(f.fv={ref:a["original-ref"].substring(0,256),url:a["original-url"].substring(0,1024)},f.origin=/http(s)?:\/\/.*?([^/]|$)+/.exec(f.fv.url)[0]);for(var d in a){var c=a[d];a.hasOwnProperty(d)&&"mmcore."===d.substring(0,7)&&(f[d.substring(7)]=c)}return f}function w(){var a="mmRequestCallbacks["+G+"]",f={},d=c.screen;f.fv={dmn:b.domain,ref:document.referrer.substring(0,
256),url:location.href.substring(0,1024),scrw:d.width,scrh:d.height,clrd:d.colorDepth,cok:q[l.persistent].testStorage()};f.lver="1.7";f.jsncl=a;f.ri=G;return f}function I(a,f){var d=a&&a.Packages||[],E=d.length;if(0<E){c.mmInitCallback=function(d){d(g,a,{skipResponseProcessing:!0,skipPersistentData:!0,useLoaderStorage:!0,debug:X});0===--E&&(f(),c.mmInitCallback=H)};for(var A=0;A<d.length;A++){var e=r(0===d[A].indexOf("//")?d[A]:b.baseContentUrl+d[A],"mmpack."+A);y(e)}}else f()}function J(a){a=document.getElementById(a);
a.parentNode?a.parentNode.removeChild(a):a&&a.removeAttribute("src")}function u(a,f,d){a=(T[a-1]=f)&&f.PersistData||[];for(var b=a.length;b--;)g.setParam(a[b].Name,a[b].Value,l.persistent,a[b].Expiration);if(t(f,"mmcoreResponse")&&c.hasOwnProperty("mmcore"))try{Function(f.mmcoreResponse).call(c)}catch(A){O.log(A)}v("response",f);d(!!f);v("responseExecuted",f)}function p(a,f){var d=r(a,"mmrequest."+G);(function(a,f){c.mmRequestCallbacks[a]=function(b){J(d.id);1===a?I(b,function(){u(a,b,f);F=!0;var d=
n(document.location.search).origin;d&&c.parent&&c.parent.postMessage&&c.parent.postMessage(JSON.stringify({hash:"unhide",command:"unhide",data:{}}),d)}):u(a,b,f);delete c.mmRequestCallbacks[a]}})(G,f);d.setAttribute("onerror","window['mmRequestCallbacks']["+G+"](false);");y(d);G++}function D(){var a={};return{get:function(f){return f?a[f]:a},set:function(f,d){a[f]=d},removeAll:function(){a={}}}}function B(a){a=a.split(/\?|&/);for(var f={},d,c,b=0;b<a.length;b++)if(a[b]){d=a[b].split("=");try{c=decodeURIComponent(d[1]||
"")}catch(e){c=d[1]||""}f[d[0]]=c}return f}function L(a){var f={};a=B(a);K||(f.pageid=a.pageid);f.jsver=a.jsver;var d,c,b;if(b=a.uv){f.uv={};var e=decodeURIComponent(b).split(/;/);for(b=0;b<e.length;b++)d=e[b].split("="),c=d[0].replace(/^\s+|\s+$/gm,""),d=d[1],0<c.length&&(f.uv.hasOwnProperty(c)||(f.uv[c]=[]),f.uv[c].push(d))}if(b=a.uat)for(f.uat={},e=decodeURIComponent(b).split(/;/),b=0;b<e.length;b++)d=e[b].split("="),c=d[0].replace(/^\s+|\s+$/gm,""),d=d[1],0<c.length&&(f.uat[c]=d);if(b=a.ids)for(f.ids=
{},e=b.split(/;/),b=0;b<e.length;b++)d=e[b].split("="),c=d[0],d=d[1],c&&d&&(f.ids[c]=decodeURIComponent(d));if(a=a.rul)for(f.rul=[],a=a.split(/;/),b=0;b<a.length;b++)(d=a[b])&&f.rul.push(d);return f}function N(){if(c.hasOwnProperty("mmcore")){var a=c.mmcore;a.server=b.srv;g.CGRequestInternal=g.CGRequest;g.CGRequest=function(f,b){K=!0;P=f;Q=b;a.CGRequest()};var f=a._Tag;a._Tag=function(c){if(-1==c.indexOf(b.srv))f.apply(a,arguments);else{a._Clear.call(a);var d=g.mergeParams(Q,L(c));U=F;K||(F=a._async);
g.CGRequestInternal(P,d);F=U;Q=P=H;K=!1}};var d=a.SetCookie;a.SetCookie=function(f){/^(mmid|pd|srv)$/.test(f)||d.apply(a,arguments)}}}function M(a){return a||c.location.hostname.replace(/^www\./i,"")}function k(a,f,c){var b="";0<f.length&&"."!=f.substring(f.length-1)&&(b=".");f=f+b+c;b=a.get(f);"string"===typeof b&&b&&(g.setParam(c,b,l.persistent,365),a.remove(f))}function h(a){var b;b=c.hasOwnProperty("mmcore")&&c.mmcore.cookie_domain?c.mmcore.cookie_domain:t(a,"mmcoreCookieDomain")?a.mmcoreCookieDomain:
a.cookie_domain;a=c.hasOwnProperty("mmcore")&&c.mmcore.cprefix?c.mmcore.cprefix:t(a,"mmcoreCprefix")?a.mmcoreCprefix:a.cprefix+".";b=new S({domain:M(b)});k(b,a,"pd");k(b,a,"srv");k(b,"","mmid")}function R(a){var b=g.getParam,c=function(a,b,c,f){g.setParam(a,b,"undefined"===typeof c?1:c,f)};e(a.beforeInit,{},[b,c,{getParam:b,setParam:c,disable:function(){C[l.page].set("disabled",1)},setAsync:x}]);V()||(g.on("request",function(){e(a.beforeRequest,{},[b,c])}),g.on("response",function(E){e(a.afterResponse,
{},[b,c,E])}),g.on("responseExecuted",function(E){e(a.afterResponseExecution,{},[b,c,E])}))}function Y(a){c.mmcoreInitCallback=function(b){h(a);N();g.CGRequest(function(){"function"===typeof b&&b.apply(c.mmcore,arguments)},{});delete c.mmcoreInitCallback};"local"!==a.mmcoreUrl&&y(r(a.mmcoreUrl,"mmcoreIntegration"))}function V(){return 1==C[l.persistent].get("disabled")||1==C[l.page].get("disabled")}this.version="1.7";var g=this,T=[],G=1,F=!1,z={},X={},q=[],C=[],l={persistent:0,deferredRequest:1,request:2,
page:3},P,Q,U,K=!1;this.baseStorage=function(a){return new W({type:b.storageType,namespace:a,domain:M(b.cookie_domain),cprefix:b.cprefix})};this.baseStorage.storeStrategy=l;this.mergeParams=function(a,b){a="undefined"===typeof a?{}:a;b="undefined"===typeof b?{}:b;if("object"!==typeof b)return b;var c={},e;if("object"===typeof a)for(e in a)a.hasOwnProperty(e)&&(c[e]=a[e]);for(e in b)b.hasOwnProperty(e)&&(c[e]=c[e]?c[e].constructor===Array&&b[e].constructor===Array?c[e].concat(b[e]):g.mergeParams(c[e],
b[e]):b[e]);return c};this.CGRequest=function(a,f){a=a||function(){};f=f||{};c.mmRequestCallbacks=c.mmRequestCallbacks||{};v("request");var d=g.mergeParams(w(),g.mergeParams(g.mergeParams(q[l.persistent].get(),g.mergeParams(q[l.deferredRequest].get(),g.mergeParams(q[l.page].get(),q[l.request].get()))),n(location.search))),e=[],h=b.srv,d=g.mergeParams(d,f),k;for(k in d)d.hasOwnProperty(k)&&e.push(encodeURIComponent(k)+"="+encodeURIComponent(m(d[k])));q[l.deferredRequest].removeAll();q[l.request].removeAll();
p(h+e.join("&"),a);return this};this.getResponses=function(){return T};this.setParam=function(a,b,c,e){q[c].set(a,b,e);return this};this.getParam=function(a,b){return q[b].get(a)};this.removeParam=function(a,b){q[b].set(a,null,-1);return this};this.on=function(a,b){z[a]&&z[a].push(b);return g};this.disable=function(){C[l.persistent].set("disabled",1,0);return this};this.enable=function(){C[l.persistent].set("disabled",null,-1);return this};(function(a){function b(){R(a);V()||(t(a,"mmcoreUrl")&&a.mmcoreUrl?
Y(a):(h(a),g.CGRequest(H,{})))}for(var d in a)a.hasOwnProperty(d)&&(g[d]=a[d]);var e=n(document.location.search);if(1!=e.disabled){g.calcCookieDomain=M(g.cookie_domain);x(a.async);C[l.persistent]=g.baseStorage("ls");C[l.page]=D();q[l.persistent]=g.baseStorage("mmparams.p");q[l.deferredRequest]=g.baseStorage("mmparams.d");q[l.request]=D();q[l.page]=D();z.request=[];z.response=[];z.responseExecuted=[];d=n(document.referrer).pruh;var e=e.pruh,k=c.mmpruh,m=g.getParam("pruh",0),p=(d?d+",":"")+(e?e+",":
"")+(k?k+",":"")+(m?m:"");p?(c.mmInitCallback=function(a){a(g,p,b)},y(r(a.baseContentUrl+"utils/pruh.js","MM.PRUH"))):b()}})(b);return this}if(!c.mmsystem){var O=c.console||{log:function(){},error:function(){}},R=new N({
  storageType:'cookie',
  cprefix:'mmapi',
  domain:'mrandmrssmith.com',
  baseContentUrl:'//service.maxymiser.net/platform/eu/api/',
  cookie_domain:location.hostname.match(/^[\d.]+$|/)[0]||('.'+(location.hostname.match(/[^.]+\.(\w{2,3}\.\w{2}|\w{2,})$/)||[location.hostname])[0]),
  srv:'//service.maxymiser.net/cg/v5/?',
  async:false,
  mmcoreUrl:'',
  mmcoreCookieDomain:'',
  mmcoreCprefix:'',
  beforeInit:function( getParam, setParam, loader ){/* Cross-domain data restore from window.name */
   function restoreVisitorIdFromWindow() {
   var key, crossDomainData;

   if (window.JSON && window.JSON.stringify && window.JSON.parse) {
     window.name = window.name.replace(/\|\*mm(.*)mm\*\|/, function(matchedString, capturedData) {
       crossDomainData = JSON.parse(capturedData);
       for (key in crossDomainData) {
         if (crossDomainData.hasOwnProperty(key)) {
           setParam(key, crossDomainData[key], 0);
         }
       }
       return '';
     });
   }
  }
  restoreVisitorIdFromWindow();
  },
  beforeRequest:function( getParam, setParam ){ /* custom code placeholder */ },
  afterResponse:function( getParam, setParam, genInfo ){ /* Cross-domain data capture to window.name */
   function captureVisitorIdToWindow(crossDomainParams) {
    var i, cgParamName, cgParamValue,
      crossDomainData = {},
      hasCrossDomainParams = false;

    if (window.JSON && window.JSON.stringify && window.JSON.parse) {
      for (i = crossDomainParams.length; i--;) {
        cgParamName = crossDomainParams[i];
        cgParamValue = getParam(cgParamName, 0);

        if (typeof cgParamValue === 'undefined' || cgParamValue === 'undefined') {
          // nothing to save
        } else {
          hasCrossDomainParams = true;
          crossDomainData[cgParamName] = cgParamValue;
        }
      }

      if (hasCrossDomainParams) {
        window.name = window.name.replace(/\|\*mm(.*)mm\*\|/, '') + ('|*mm' + JSON.stringify(crossDomainData) + 'mm*|');
      }
    }
  }
  captureVisitorIdToWindow(['pd', 'mmid', 'srv']);
  },
  afterResponseExecution:function( getParam, setParam, genInfo ){ /* custom code placeholder */ }
});c.mmsystem=
new L(R)}})(window);
