(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{314:function(n,t,r){"use strict";var e,o=r(0),a=r(97);r.d(t,"a",(function(){return a.a})),r.d(t,"b",(function(){return a.b})),r.d(t,"c",(function(){return a.d})),r.d(t,"d",(function(){return a.e})),r.d(t,"e",(function(){return a.f})),r.d(t,"f",(function(){return a.g})),r.d(t,"g",(function(){return a.h})),r.d(t,"h",(function(){return a.i})),r.d(t,"i",(function(){return a.j})),r.d(t,"j",(function(){return a.k})),r.d(t,"k",(function(){return a.l})),r.d(t,"l",(function(){return a.m})),r.d(t,"m",(function(){return a.n})),r.d(t,"n",(function(){return a.o})),(e=(e=o.default)||o.default)&&!e.__composition_api_installed__&&o.default.use(a.c);o.default.version},340:function(n,t,r){},374:function(n,t,r){"use strict";r(340)},419:function(n,t,r){"use strict";r.r(t);r(177),r(98),r(99);var e=r(72),o=r(97);var a=r(314);function i(n){return function(n){if(Array.isArray(n))return u(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return u(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function c(n,t){return{onDragOver:function(n){n.preventDefault()},onDragEnter:function(n){n.preventDefault(),t.value=!0},onDragLeave:function(n){n.preventDefault(),t.value=!1},onDrop:function(r){r.preventDefault(),t.value=!1,n(r.dataTransfer,r)},onPaste:function(t){t.preventDefault(),n(t.clipboardData,t)}}}var s={name:"use-drop",setup:function(){var n,t=Object(o.j)(""),r=void 0===n?{draggable:"true",key:function(n){return JSON.stringify(n)},onDragStart:function(n){return function(t){var r;null===(r=t.dataTransfer)||void 0===r||r.setData("custom",JSON.stringify(n))}}}:{draggable:"true",key:JSON.stringify(n),onDragStart:function(t){var r;null===(r=t.dataTransfer)||void 0===r||r.setData("custom",JSON.stringify(n))}},u=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.i)(!1),r=function(t,r){var e=null==t?void 0:t.getData("text/uri-list"),o=null==t?void 0:t.getData("custom");o&&null!=n&&n.onDom?n.onDom(o,r):e&&null!=n&&n.onUri?n.onUri(e,r):t.files&&t.files.length>0&&null!=n&&n.onFiles?n.onFiles(i(Array.from(t.files)),r):t.items&&t.items.length>0&&null!=n&&n.onText&&t.items[0].getAsString((function(t){n.onText(t,r)}))};return[c(r,t),Object(a.a)((function(){return t.value}))]}({onDom:function(n){t.value="custom: item ".concat(n," dropped")},onText:function(n){t.value="text: ".concat(n," dropped")},onFiles:function(n){var r="";n.forEach((function(n,t){r+="file".concat(t+1,": ").concat(JSON.stringify(n))+"\n"})),t.value=r},onUri:function(n){t.value=n,window.open(n)}}),s=Object(e.a)(u,2);return{dragProps:r,dropProps:s[0],isHovering:s[1],msg:t}}},f=(r(374),r(26)),l=Object(f.a)(s,(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{staticClass:"wrap"},[r("div",{staticClass:"left"},[r("div",{class:{drop:!0,hover:n.isHovering},on:{dragover:n.dropProps.onDragOver,dragenter:n.dropProps.onDragEnter,dragleave:n.dropProps.onDragLeave,drop:n.dropProps.onDrop,paste:n.dropProps.onPaste}},[n._v("\n      ---- "+n._s(n.isHovering?"hovering":"Drop to here ")+" ----\n    ")]),n._v(" "),n._l([1,2,3,4,5],(function(t){return r("span",{key:n.dragProps.key(t),staticClass:"drag-item",attrs:{draggable:n.dragProps.draggable},on:{dragstart:function(r){return n.dragProps.onDragStart(t)(r)}}},[n._v("item "+n._s(t))])}))],2),n._v(" "),r("div",{staticClass:"right"},[n._v(n._s(n.msg))])])}),[],!1,null,"48423ed0",null);t.default=l.exports}}]);