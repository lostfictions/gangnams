/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-cssfilters-cssgradients-csstransforms-cssvminunit-flexbox-svgfilters-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function i(){var e,t,n,i,o,s,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],t=C[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)s=e[o],a=s.split("."),1===a.length?Modernizr[a[0]]=i:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=i),x.push((i?"":"no-")+a.join("-"))}}function o(e){var t=w.className,n=Modernizr._config.classPrefix||"";if(_&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),_?w.className.baseVal=t:w.className=t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):_?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e,t){return e-1===t||e===t||e+1===t}function l(){var e=t.body;return e||(e=s(_?"svg":"body"),e.fake=!0),e}function f(e,n,r,i){var o,a,f,u,d="modernizr",c=s("div"),p=l();if(parseInt(r,10))for(;r--;)f=s("div"),f.id=i?i[r]:d+(r+1),c.appendChild(f);return o=s("style"),o.type="text/css",o.id="s"+d,(p.fake?p:c).appendChild(o),p.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),c.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",u=w.style.overflow,w.style.overflow="hidden",w.appendChild(p)),a=n(c,e),p.fake?(p.parentNode.removeChild(p),w.style.overflow=u,w.offsetHeight):c.parentNode.removeChild(c),!!a}function u(e,t){return!!~(""+e).indexOf(t)}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function c(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var i;for(var o in e)if(e[o]in t)return n===!1?e[o]:(i=t[e[o]],r(i,"function")?c(i,n||t):i);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(m(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+m(t[i])+":"+r+")");return o=o.join(" or "),f("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function g(e,t,i,o){function a(){f&&(delete j.style,delete j.modElem)}if(o=r(o,"undefined")?!1:o,!r(i,"undefined")){var l=h(e,i);if(!r(l,"undefined"))return l}for(var f,c,p,m,g,v=["modernizr","tspan"];!j.style;)f=!0,j.modElem=s(v.shift()),j.style=j.modElem.style;for(p=e.length,c=0;p>c;c++)if(m=e[c],g=j.style[m],u(m,"-")&&(m=d(m)),j.style[m]!==n){if(o||r(i,"undefined"))return a(),"pfx"==t?m:!0;try{j.style[m]=i}catch(y){}if(j.style[m]!=g)return a(),"pfx"==t?m:!0}return a(),!1}function v(e,t,n,i,o){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+N.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?g(a,t,i,o):(a=(e+" "+A.join(s+" ")+s).split(" "),p(a,t,n))}function y(e,t,r){return v(e,n,n,t,r)}var x=[],C=[],S={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr,Modernizr.addTest("svgfilters",function(){var t=!1;try{t="SVGFEColorMatrixElement"in e&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(n){}return t});var w=t.documentElement,_="svg"===w.nodeName.toLowerCase(),b=S._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];S._prefixes=b,Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",i=0,o=b.length-1;o>i;i++)e=0===i?"to ":"",r+=t+b[i]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var a=s("a"),l=a.style;return l.cssText=r,(""+l.backgroundImage).indexOf("gradient")>-1});var T="CSS"in e&&"supports"in e.CSS,E="supportsCSS"in e;Modernizr.addTest("supports",T||E);var z=S.testStyles=f;z("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(t){var n=t.childNodes[2],r=t.childNodes[1],i=t.childNodes[0],o=parseInt((r.offsetWidth-r.clientWidth)/2,10),s=i.clientWidth/100,l=i.clientHeight/100,f=parseInt(50*Math.min(s,l),10),u=parseInt((e.getComputedStyle?getComputedStyle(n,null):n.currentStyle).width,10);Modernizr.addTest("cssvminunit",a(f,u)||a(f,u-o))},3);var P="Moz O ms Webkit",N=S._config.usePrefixes?P.split(" "):[];S._cssomPrefixes=N;var A=S._config.usePrefixes?P.toLowerCase().split(" "):[];S._domPrefixes=A;var k={elem:s("modernizr")};Modernizr._q.push(function(){delete k.elem});var j={style:k.elem.style};Modernizr._q.unshift(function(){delete j.style}),S.testAllProps=v,S.testAllProps=y,Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return y("filter","blur(2px)");var e=s("a");return e.style.cssText=b.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),i(),o(x),delete S.addTest,delete S.addAsyncTest;for(var M=0;M<Modernizr._q.length;M++)Modernizr._q[M]();e.Modernizr=Modernizr}(window,document);