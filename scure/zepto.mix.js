!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t)}(this,function(t){var e=function(){function e(t){return null==t?String(t):_[Y.call(t)]||"object"}function n(t){return"function"==e(t)}function r(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function o(t){return"object"==e(t)}function a(t){return o(t)&&!r(t)&&Object.getPrototypeOf(t)==Object.prototype}function s(t){var e=!!t&&"length"in t&&t.length,n=C.type(t)
return"function"!=n&&!r(t)&&("array"==n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function u(t){return t in A?A[t]:A[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function l(t,e){return"number"!=typeof e||M[c(t)]?e:e+"px"}function f(t){return"children"in t?O.call(t.children):C.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function h(t,e){var n,r=t?t.length:0
for(n=0;r>n;n++)this[n]=t[n]
this.length=r,this.selector=e||""}function p(t,e,n){for(x in e)n&&(a(e[x])||J(e[x]))?(a(e[x])&&!a(t[x])&&(t[x]={}),J(e[x])&&!J(t[x])&&(t[x]=[]),p(t[x],e[x],n)):e[x]!==b&&(t[x]=e[x])}function d(t,e){return null==e?C(t):C(t).filter(e)}function m(t,e,r,i){return n(e)?e.call(t,r,i):e}function v(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function g(t,e){var n=t.className||"",r=n&&n.baseVal!==b
return e===b?r?n.baseVal:n:void(r?n.baseVal=e:t.className=e)}function y(t){try{return t?"true"==t||"false"!=t&&("null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?C.parseJSON(t):t):t}catch(e){return t}}function E(t,e){e(t)
for(var n=0,r=t.childNodes.length;r>n;n++)E(t.childNodes[n],e)}var b,x,C,T,S,k,w=[],N=w.concat,j=w.filter,O=w.slice,L=t.document,P={},A={},M={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},D=/^\s*<(\w+|!)[^>]*>/,F=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,$=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,R=/^(?:body|html)$/i,q=/([A-Z])/g,I=["val","css","html","text","data","width","height","offset"],X=L.createElement("table"),Z=L.createElement("tr"),z={tr:L.createElement("tbody"),tbody:X,thead:X,tfoot:X,td:Z,th:Z,"*":L.createElement("div")},B=/complete|loaded|interactive/,H=/^[\w-]*$/,_={},Y=_.toString,V={},W=L.createElement("div"),U={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},J=Array.isArray||function(t){return t instanceof Array}
return V.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1
var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector
if(n)return n.call(t,e)
var r,i=t.parentNode,o=!i
return o&&(i=W).appendChild(t),r=~V.qsa(i,e).indexOf(t),o&&W.removeChild(t),r},S=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},k=function(t){return j.call(t,function(e,n){return t.indexOf(e)==n})},V.fragment=function(t,e,n){var r,i,o
return F.test(t)&&(r=C(L.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace($,"<$1></$2>")),e===b&&(e=D.test(t)&&RegExp.$1),e in z||(e="*"),o=z[e],o.innerHTML=""+t,r=C.each(O.call(o.childNodes),function(){o.removeChild(this)})),a(n)&&(i=C(r),C.each(n,function(t,e){I.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},V.Z=function(t,e){return new h(t,e)},V.isZ=function(t){return t instanceof V.Z},V.init=function(t,e){var r
if(!t)return V.Z()
if("string"==typeof t)if("<"==(t=t.trim())[0]&&D.test(t))r=V.fragment(t,RegExp.$1,e),t=null
else{if(e!==b)return C(e).find(t)
r=V.qsa(L,t)}else{if(n(t))return C(L).ready(t)
if(V.isZ(t))return t
if(J(t))r=function(t){return j.call(t,function(t){return null!=t})}(t)
else if(o(t))r=[t],t=null
else if(D.test(t))r=V.fragment(t.trim(),RegExp.$1,e),t=null
else{if(e!==b)return C(e).find(t)
r=V.qsa(L,t)}}return V.Z(r,t)},C=function(t,e){return V.init(t,e)},C.extend=function(t){var e,n=O.call(arguments,1)
return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){p(t,n,e)}),t},V.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,a=H.test(o)
return t.getElementById&&a&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:O.call(a&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},C.contains=L.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0
return!1},C.type=e,C.isFunction=n,C.isWindow=r,C.isArray=J,C.isPlainObject=a,C.isEmptyObject=function(t){var e
for(e in t)return!1
return!0},C.isNumeric=function(t){var e=Number(t),n=typeof t
return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},C.inArray=function(t,e,n){return w.indexOf.call(e,t,n)},C.camelCase=S,C.trim=function(t){return null==t?"":String.prototype.trim.call(t)},C.uuid=0,C.support={},C.expr={},C.noop=function(){},C.map=function(t,e){var n,r,i,o=[]
if(s(t))for(r=0;r<t.length;r++)null!=(n=e(t[r],r))&&o.push(n)
else for(i in t)null!=(n=e(t[i],i))&&o.push(n)
return function(t){return t.length>0?C.fn.concat.apply([],t):t}(o)},C.each=function(t,e){var n,r
if(s(t)){for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(r in t)if(!1===e.call(t[r],r,t[r]))return t
return t},C.grep=function(t,e){return j.call(t,e)},t.JSON&&(C.parseJSON=JSON.parse),C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){_["[object "+e+"]"]=e.toLowerCase()}),C.fn={constructor:V.Z,length:0,forEach:w.forEach,reduce:w.reduce,push:w.push,sort:w.sort,splice:w.splice,indexOf:w.indexOf,concat:function(){var t,e,n=[]
for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=V.isZ(e)?e.toArray():e
return N.apply(V.isZ(this)?this.toArray():this,n)},map:function(t){return C(C.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return C(O.apply(this,arguments))},ready:function(t){return B.test(L.readyState)&&L.body?t(C):L.addEventListener("DOMContentLoaded",function(){t(C)},!1),this},get:function(t){return t===b?O.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return w.every.call(this,function(e,n){return!1!==t.call(e,n,e)}),this},filter:function(t){return n(t)?this.not(this.not(t)):C(j.call(this,function(e){return V.matches(e,t)}))},add:function(t,e){return C(k(this.concat(C(t,e))))},is:function(t){return this.length>0&&V.matches(this[0],t)},not:function(t){var e=[]
if(n(t)&&t.call!==b)this.each(function(n){t.call(this,n)||e.push(this)})
else{var r="string"==typeof t?this.filter(t):s(t)&&n(t.item)?O.call(t):C(t)
this.forEach(function(t){r.indexOf(t)<0&&e.push(t)})}return C(e)},has:function(t){return this.filter(function(){return o(t)?C.contains(this,t):C(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0]
return t&&!o(t)?t:C(t)},last:function(){var t=this[this.length-1]
return t&&!o(t)?t:C(t)},find:function(t){var e=this
return t?"object"==typeof t?C(t).filter(function(){var t=this
return w.some.call(e,function(e){return C.contains(e,t)})}):1==this.length?C(V.qsa(this[0],t)):this.map(function(){return V.qsa(this,t)}):C()},closest:function(t,e){var n=[],r="object"==typeof t&&C(t)
return this.each(function(o,a){for(;a&&!(r?r.indexOf(a)>=0:V.matches(a,t));)a=a!==e&&!i(a)&&a.parentNode
a&&n.indexOf(a)<0&&n.push(a)}),C(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=C.map(n,function(t){return(t=t.parentNode)&&!i(t)&&e.indexOf(t)<0?(e.push(t),t):void 0})
return d(e,t)},parent:function(t){return d(k(this.pluck("parentNode")),t)},children:function(t){return d(this.map(function(){return f(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||O.call(this.childNodes)})},siblings:function(t){return d(this.map(function(t,e){return j.call(f(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return C.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=function(t){var e,n
return P[t]||(e=L.createElement(t),L.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),P[t]=n),P[t]}(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=n(t)
if(this[0]&&!e)var r=C(t).get(0),i=r.parentNode||this.length>1
return this.each(function(n){C(this).wrapAll(e?t.call(this,n):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){C(this[0]).before(t=C(t))
for(var e;(e=t.children()).length;)t=e.first()
C(t).append(this)}return this},wrapInner:function(t){var e=n(t)
return this.each(function(n){var r=C(this),i=r.contents(),o=e?t.call(this,n):t
i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){C(this).replaceWith(C(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=C(this);(t===b?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return C(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return C(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML
C(this).empty().append(m(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=m(this,t,e,this.textContent)
this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,e){var n
return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(o(t))for(x in t)v(this,x,t[x])
else v(this,t,m(this,e,n,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(n=this[0].getAttribute(t))?n:b},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){v(this,t)},this)})},prop:function(t,e){return t=U[t]||t,1 in arguments?this.each(function(n){this[t]=m(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=U[t]||t,this.each(function(){delete this[t]})},data:function(t,e){var n="data-"+t.replace(q,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n)
return null!==r?y(r):b},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=m(this,t,e,this.value)})):this[0]&&(this[0].multiple?C(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each(function(t){var n=C(this),r=m(this,e,t,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left}
"static"==n.css("position")&&(o.position="relative"),n.css(o)})
if(!this.length)return null
if(L.documentElement!==this[0]&&!C.contains(L.documentElement,this[0]))return{top:0,left:0}
var n=this[0].getBoundingClientRect()
return{left:n.left+t.pageXOffset,top:n.top+t.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(t,n){if(arguments.length<2){var r=this[0]
if("string"==typeof t){if(!r)return
return r.style[S(t)]||getComputedStyle(r,"").getPropertyValue(t)}if(J(t)){if(!r)return
var i={},o=getComputedStyle(r,"")
return C.each(t,function(t,e){i[e]=r.style[S(e)]||o.getPropertyValue(e)}),i}}var a=""
if("string"==e(t))n||0===n?a=c(t)+":"+l(t,n):this.each(function(){this.style.removeProperty(c(t))})
else for(x in t)t[x]||0===t[x]?a+=c(x)+":"+l(x,t[x])+";":this.each(function(){this.style.removeProperty(c(x))})
return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(C(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&w.some.call(this,function(t){return this.test(g(t))},u(t))},addClass:function(t){return t?this.each(function(e){if("className"in this){T=[]
var n=g(this)
m(this,t,e,n).split(/\s+/g).forEach(function(t){C(this).hasClass(t)||T.push(t)},this),T.length&&g(this,n+(n?" ":"")+T.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===b)return g(this,"")
T=g(this),m(this,t,e,T).split(/\s+/g).forEach(function(t){T=T.replace(u(t)," ")}),g(this,T.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var r=C(this)
m(this,t,n,g(this)).split(/\s+/g).forEach(function(t){(e===b?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0]
return t===b?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0]
return t===b?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=R.test(e[0].nodeName)?{top:0,left:0}:e.offset()
return n.top-=parseFloat(C(t).css("margin-top"))||0,n.left-=parseFloat(C(t).css("margin-left"))||0,r.top+=parseFloat(C(e[0]).css("border-top-width"))||0,r.left+=parseFloat(C(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||L.body;t&&!R.test(t.nodeName)&&"static"==C(t).css("position");)t=t.offsetParent
return t})}},C.fn.detach=C.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()})
C.fn[t]=function(n){var o,a=this[0]
return n===b?r(a)?a["inner"+e]:i(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){(a=C(this)).css(t,m(this,n,e,a[t]()))})}}),["after","prepend","before","append"].forEach(function(n,r){var i=r%2
C.fn[n]=function(){var n,o,a=C.map(arguments,function(t){var r=[]
return"array"==(n=e(t))?(t.forEach(function(t){return t.nodeType!==b?r.push(t):C.zepto.isZ(t)?r=r.concat(t.get()):void(r=r.concat(V.fragment(t)))}),r):"object"==n||null==t?t:V.fragment(t)}),s=this.length>1
return a.length<1?this:this.each(function(e,n){o=i?n:n.parentNode,n=0==r?n.nextSibling:1==r?n.firstChild:2==r?n:null
var c=C.contains(L.documentElement,o)
a.forEach(function(e){if(s)e=e.cloneNode(!0)
else if(!o)return C(e).remove()
o.insertBefore(e,n),c&&E(e,function(e){if(!(null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src)){var n=e.ownerDocument?e.ownerDocument.defaultView:t
n.eval.call(n,e.innerHTML)}})})})},C.fn[i?n+"To":"insert"+(r?"Before":"After")]=function(t){return C(t)[n](this),this}}),V.Z.prototype=h.prototype=C.fn,V.uniq=k,V.deserializeValue=y,C.zepto=V,C}()
return t.Zepto=e,void 0===t.$&&(t.$=e),function(e){function n(t){return t._zid||(t._zid=h++)}function r(t,e,r,o){if((e=i(e)).ns)var a=function(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}(e.ns)
return(v[n(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||a.test(t.ns))&&(!r||n(t.fn)===n(r))&&(!o||t.sel==o)})}function i(t){var e=(""+t).split(".")
return{e:e[0],ns:e.slice(1).sort().join(" ")}}function o(t,e){return t.del&&!y&&t.e in E||!!e}function a(t){return b[t]||y&&E[t]||t}function s(t,r,s,c,l,h,p){var d=n(t),m=v[d]||(v[d]=[])
r.split(/\s/).forEach(function(n){if("ready"==n)return e(document).ready(s)
var r=i(n)
r.fn=s,r.sel=l,r.e in b&&(s=function(t){var n=t.relatedTarget
return!n||n!==this&&!e.contains(this,n)?r.fn.apply(this,arguments):void 0}),r.del=h
var d=h||s
r.proxy=function(e){if(!(e=u(e)).isImmediatePropagationStopped()){e.data=c
var n=d.apply(t,e._args==f?[e]:[e].concat(e._args))
return!1===n&&(e.preventDefault(),e.stopPropagation()),n}},r.i=m.length,m.push(r),"addEventListener"in t&&t.addEventListener(a(r.e),r.proxy,o(r,p))})}function c(t,e,i,s,c){var u=n(t);(e||"").split(/\s/).forEach(function(e){r(t,e,i,s).forEach(function(e){delete v[u][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,o(e,c))})})}function u(t,n){return(n||!t.isDefaultPrevented)&&(n||(n=t),e.each(S,function(e,r){var i=n[e]
t[e]=function(){return this[r]=x,i&&i.apply(n,arguments)},t[r]=C}),t.timeStamp||(t.timeStamp=Date.now()),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?!1===n.returnValue:n.getPreventDefault&&n.getPreventDefault())&&(t.isDefaultPrevented=x)),t}function l(t){var e,n={originalEvent:t}
for(e in t)T.test(e)||t[e]===f||(n[e]=t[e])
return u(n,t)}var f,h=1,p=Array.prototype.slice,d=e.isFunction,m=function(t){return"string"==typeof t},v={},g={},y="onfocusin"in t,E={focus:"focusin",blur:"focusout"},b={mouseenter:"mouseover",mouseleave:"mouseout"}
g.click=g.mousedown=g.mouseup=g.mousemove="MouseEvents",e.event={add:s,remove:c},e.proxy=function(t,r){var i=2 in arguments&&p.call(arguments,2)
if(d(t)){var o=function(){return t.apply(r,i?i.concat(p.call(arguments)):arguments)}
return o._zid=n(t),o}if(m(r))return i?(i.unshift(t[r],t),e.proxy.apply(null,i)):e.proxy(t[r],t)
throw new TypeError("expected function")},e.fn.bind=function(t,e,n){return this.on(t,e,n)},e.fn.unbind=function(t,e){return this.off(t,e)},e.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)}
var x=function(){return!0},C=function(){return!1},T=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,S={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"}
e.fn.delegate=function(t,e,n){return this.on(e,t,n)},e.fn.undelegate=function(t,e,n){return this.off(e,t,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,r,i,o){var a,u,h=this
return t&&!m(t)?(e.each(t,function(t,e){h.on(t,n,r,e,o)}),h):(m(n)||d(i)||!1===i||(i=r,r=n,n=f),(i===f||!1===r)&&(i=r,r=f),!1===i&&(i=C),h.each(function(f,h){o&&(a=function(t){return c(h,t.type,i),i.apply(this,arguments)}),n&&(u=function(t){var r,o=e(t.target).closest(n,h).get(0)
return o&&o!==h?(r=e.extend(l(t),{currentTarget:o,liveFired:h}),(a||i).apply(o,[r].concat(p.call(arguments,1)))):void 0}),s(h,t,i,r,n,u||a)}))},e.fn.off=function(t,n,r){var i=this
return t&&!m(t)?(e.each(t,function(t,e){i.off(t,n,e)}),i):(m(n)||d(r)||!1===r||(r=n,n=f),!1===r&&(r=C),i.each(function(){c(this,t,r,n)}))},e.fn.trigger=function(t,n){return t=m(t)||e.isPlainObject(t)?e.Event(t):u(t),t._args=n,this.each(function(){t.type in E&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)})},e.fn.triggerHandler=function(t,n){var i,o
return this.each(function(a,s){(i=l(m(t)?e.Event(t):t))._args=n,i.target=s,e.each(r(s,t.type||t),function(t,e){return o=e.proxy(i),!i.isImmediatePropagationStopped()&&void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return 0 in arguments?this.bind(t,e):this.trigger(t)}}),e.Event=function(t,e){m(t)||(e=t,t=e.type)
var n=document.createEvent(g[t]||"Events"),r=!0
if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i]
return n.initEvent(t,r,!0),u(n)}}(e),function(e){function n(t,n,r,i){return t.global?function(t,n,r){var i=e.Event(n)
return e(t).trigger(i,r),!i.isDefaultPrevented()}(n||d,r,i):void 0}function r(t,e){var r=e.context
return!1!==e.beforeSend.call(r,t,e)&&!1!==n(e,r,"ajaxBeforeSend",[t,e])&&void n(e,r,"ajaxSend",[t,e])}function i(t,e,r,i){var o=r.context
r.success.call(o,t,"success",e),i&&i.resolveWith(o,[t,"success",e]),n(r,o,"ajaxSuccess",[e,r,t]),a("success",e,r)}function o(t,e,r,i,o){var s=i.context
i.error.call(s,r,e,t),o&&o.rejectWith(s,[r,e,t]),n(i,s,"ajaxError",[r,i,t||e]),a(e,r,i)}function a(t,r,i){var o=i.context
i.complete.call(o,r,t),n(i,o,"ajaxComplete",[r,i]),function(t){t.global&&!--e.active&&n(t,null,"ajaxStop")}(i)}function s(){}function c(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function u(t,n,r,i){return e.isFunction(n)&&(i=r,r=n,n=void 0),e.isFunction(r)||(i=r,r=void 0),{url:t,data:n,success:r,dataType:i}}function l(t,n,r,i){var o,a=e.isArray(n),s=e.isPlainObject(n)
e.each(n,function(n,c){o=e.type(c),i&&(n=r?i:i+"["+(s||"object"==o||"array"==o?n:"")+"]"),!i&&a?t.add(c.name,c.value):"array"==o||!r&&"object"==o?l(t,c,r,n):t.add(n,c)})}var f,h,p=+new Date,d=t.document,m=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,v=/^(?:text|application)\/javascript/i,g=/^(?:text|application)\/xml/i,y="application/json",E="text/html",b=/^\s*$/,x=d.createElement("a")
x.href=t.location.href,e.active=0,e.ajaxJSONP=function(n,a){if(!("type"in n))return e.ajax(n)
var s,c,u=n.jsonpCallback,l=(e.isFunction(u)?u():u)||"Zepto"+p++,f=d.createElement("script"),h=t[l],m=function(t){e(f).triggerHandler("error",t||"abort")},v={abort:m}
return a&&a.promise(v),e(f).on("load error",function(r,u){clearTimeout(c),e(f).off().remove(),"error"!=r.type&&s?i(s[0],v,n,a):o(null,u||"error",v,n,a),t[l]=h,s&&e.isFunction(h)&&h(s[0]),h=s=void 0}),!1===r(v,n)?(m("abort"),v):(t[l]=function(){s=arguments},f.src=n.url.replace(/\?(.+)=\?/,"?$1="+l),d.head.appendChild(f),n.timeout>0&&(c=setTimeout(function(){m("timeout")},n.timeout)),v)},e.ajaxSettings={type:"GET",beforeSend:s,success:s,error:s,complete:s,context:null,global:!0,xhr:function(){return new t.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:y,xml:"application/xml, text/xml",html:E,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:s},e.ajax=function(a){var u,l,p=e.extend({},a||{}),m=e.Deferred&&e.Deferred()
for(f in e.ajaxSettings)void 0===p[f]&&(p[f]=e.ajaxSettings[f]);(function(t){t.global&&0==e.active++&&n(t,null,"ajaxStart")})(p),p.crossDomain||(u=d.createElement("a"),u.href=p.url,u.href=u.href,p.crossDomain=x.protocol+"//"+x.host!=u.protocol+"//"+u.host),p.url||(p.url=t.location.toString()),(l=p.url.indexOf("#"))>-1&&(p.url=p.url.slice(0,l)),function(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()&&"jsonp"!=t.dataType||(t.url=c(t.url,t.data),t.data=void 0)}(p)
var C=p.dataType,T=/\?.+=\?/.test(p.url)
if(T&&(C="jsonp"),!1!==p.cache&&(a&&!0===a.cache||"script"!=C&&"jsonp"!=C)||(p.url=c(p.url,"_="+Date.now())),"jsonp"==C)return T||(p.url=c(p.url,p.jsonp?p.jsonp+"=?":!1===p.jsonp?"":"callback=?")),e.ajaxJSONP(p,m)
var S,k=p.accepts[C],w={},N=function(t,e){w[t.toLowerCase()]=[t,e]},j=/^([\w-]+:)\/\//.test(p.url)?RegExp.$1:t.location.protocol,O=p.xhr(),L=O.setRequestHeader
if(m&&m.promise(O),p.crossDomain||N("X-Requested-With","XMLHttpRequest"),N("Accept",k||"*/*"),(k=p.mimeType||k)&&(k.indexOf(",")>-1&&(k=k.split(",",2)[0]),O.overrideMimeType&&O.overrideMimeType(k)),(p.contentType||!1!==p.contentType&&p.data&&"GET"!=p.type.toUpperCase())&&N("Content-Type",p.contentType||"application/x-www-form-urlencoded"),p.headers)for(h in p.headers)N(h,p.headers[h])
if(O.setRequestHeader=N,O.onreadystatechange=function(){if(4==O.readyState){O.onreadystatechange=s,clearTimeout(S)
var t,n=!1
if(O.status>=200&&O.status<300||304==O.status||0==O.status&&"file:"==j){if(C=C||function(t){return t&&(t=t.split(";",2)[0]),t&&(t==E?"html":t==y?"json":v.test(t)?"script":g.test(t)&&"xml")||"text"}(p.mimeType||O.getResponseHeader("content-type")),"arraybuffer"==O.responseType||"blob"==O.responseType)t=O.response
else{t=O.responseText
try{t=function(t,e,n){if(n.dataFilter==s)return t
var r=n.context
return n.dataFilter.call(r,t,e)}(t,C,p),"script"==C?(0,eval)(t):"xml"==C?t=O.responseXML:"json"==C&&(t=b.test(t)?null:e.parseJSON(t))}catch(t){n=t}if(n)return o(n,"parsererror",O,p,m)}i(t,O,p,m)}else o(O.statusText||null,O.status?"error":"abort",O,p,m)}},!1===r(O,p))return O.abort(),o(null,"abort",O,p,m),O
var P=!("async"in p)||p.async
if(O.open(p.type,p.url,P,p.username,p.password),p.xhrFields)for(h in p.xhrFields)O[h]=p.xhrFields[h]
for(h in w)L.apply(O,w[h])
return p.timeout>0&&(S=setTimeout(function(){O.onreadystatechange=s,O.abort(),o(null,"timeout",O,p,m)},p.timeout)),O.send(p.data?p.data:null),O},e.get=function(){return e.ajax(u.apply(null,arguments))},e.post=function(){var t=u.apply(null,arguments)
return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=u.apply(null,arguments)
return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,r){if(!this.length)return this
var i,o=this,a=t.split(/\s/),s=u(t,n,r),c=s.success
return a.length>1&&(s.url=a[0],i=a[1]),s.success=function(t){o.html(i?e("<div>").html(t.replace(m,"")).find(i):t),c&&c.apply(o,arguments)},e.ajax(s),this}
var C=encodeURIComponent
e.param=function(t,n){var r=[]
return r.add=function(t,n){e.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(C(t)+"="+C(n))},l(r,t,n),r.join("&").replace(/%20/g,"+")}}(e),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})}
return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,(e=o.name)&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[]
return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e)
else if(this.length){var n=t.Event("submit")
this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(e),function(){try{getComputedStyle(void 0)}catch(n){var e=getComputedStyle
t.getComputedStyle=function(t,n){try{return e(t,n)}catch(t){return null}}}}(),e}),function(){"use strict"
function t(e,r){function i(t,e){return function(){return t.apply(e,arguments)}}var o
if(r=r||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=r.touchBoundary||10,this.layer=e,this.tapDelay=r.tapDelay||200,this.tapTimeout=r.tapTimeout||700,!t.notNeeded(e)){for(var a=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],s=0,c=a.length;c>s;s++)this[a[s]]=i(this[a[s]],this)
n&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,r){var i=Node.prototype.removeEventListener
"click"===t?i.call(e,t,n.hijacked||n,r):i.call(e,t,n,r)},e.addEventListener=function(t,n,r){var i=Node.prototype.addEventListener
"click"===t?i.call(e,t,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),r):i.call(e,t,n,r)}),"function"==typeof e.onclick&&(o=e.onclick,e.addEventListener("click",function(t){o(t)},!1),e.onclick=null)}}var e=navigator.userAgent.indexOf("Windows Phone")>=0,n=navigator.userAgent.indexOf("Android")>0&&!e,r=/iP(ad|hone|od)/.test(navigator.userAgent)&&!e,i=r&&/OS 4_\d(_\d)?/.test(navigator.userAgent),o=r&&/OS [6-7]_\d/.test(navigator.userAgent),a=navigator.userAgent.indexOf("BB10")>0
t.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0
break
case"input":if(r&&"file"===t.type||t.disabled)return!0
break
case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},t.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0
case"select":return!n
case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly
default:return/\bneedsfocus\b/.test(t.className)}},t.prototype.sendClick=function(t,e){var n,r
document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),r=e.changedTouches[0],(n=document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(t),!0,!0,window,1,r.screenX,r.screenY,r.clientX,r.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},t.prototype.determineEventType=function(t){return n&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},t.prototype.focus=function(t){var e
r&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},t.prototype.updateScrollParent=function(t){var e,n
if(!(e=t.fastClickScrollParent)||!e.contains(t)){n=t
do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n
break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},t.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},t.prototype.onTouchStart=function(t){var e,n,o
if(t.targetTouches.length>1)return!0
if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],r){if((o=window.getSelection()).rangeCount&&!o.isCollapsed)return!0
if(!i){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1
this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},t.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary
return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n},t.prototype.onTouchMove=function(t){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0)},t.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},t.prototype.onTouchEnd=function(t){var e,a,s,c,u,l=this.targetElement
if(!this.trackingClick)return!0
if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0
if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0
if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,a=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,o&&(u=t.changedTouches[0],l=document.elementFromPoint(u.pageX-window.pageXOffset,u.pageY-window.pageYOffset)||l,l.fastClickScrollParent=this.targetElement.fastClickScrollParent),"label"===(s=l.tagName.toLowerCase())){if(e=this.findControl(l)){if(this.focus(l),n)return!1
l=e}}else if(this.needsFocus(l))return t.timeStamp-a>100||r&&window.top!==window&&"input"===s?(this.targetElement=null,!1):(this.focus(l),this.sendClick(l,t),r&&"select"===s||(this.targetElement=null,t.preventDefault()),!1)
return!(!r||i||!(c=l.fastClickScrollParent)||c.fastClickLastScrollTop===c.scrollTop)||(this.needsClick(l)||(t.preventDefault(),this.sendClick(l,t)),!1)},t.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},t.prototype.onMouse=function(t){return!this.targetElement||(!!t.forwardedTouchEvent||(!(t.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick))||(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1)))},t.prototype.onClick=function(t){var e
return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail||((e=this.onMouse(t))||(this.targetElement=null),e)},t.prototype.destroy=function(){var t=this.layer
n&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},t.notNeeded=function(t){var e,r,i
if(void 0===window.ontouchstart)return!0
if(r=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!n)return!0
if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0
if(r>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(a&&(i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1]>=10&&i[2]>=3&&(e=document.querySelector("meta[name=viewport]"))){if(-1!==e.content.indexOf("user-scalable=no"))return!0
if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction||(!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]>=27&&(e=document.querySelector("meta[name=viewport]"))&&(-1!==e.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))||"none"===t.style.touchAction||"manipulation"===t.style.touchAction)},t.attach=function(e,n){return new t(e,n)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?(module.exports=t.attach,module.exports.FastClick=t):window.FastClick=t}()
