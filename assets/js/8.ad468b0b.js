(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{310:function(t,e,n){var o=n(1),i=n(4),c=n(99),u=[].slice,s=function(t){return function(e,n){var o=arguments.length>2,i=o?u.call(arguments,2):void 0;return t(o?function(){("function"==typeof e?e:Function(e)).apply(this,i)}:e,n)}};o({global:!0,bind:!0,forced:/MSIE .\./.test(c)},{setTimeout:s(i.setTimeout),setInterval:s(i.setInterval)})},311:function(t,e,n){"use strict";n.d(e,"a",(function(){return L})),n.d(e,"b",(function(){return v})),n.d(e,"c",(function(){return g})),n.d(e,"d",(function(){return J})),n.d(e,"e",(function(){return _})),n.d(e,"f",(function(){return O})),n.d(e,"g",(function(){return j})),n.d(e,"h",(function(){return I})),n.d(e,"i",(function(){return y}));n(168),n(45),n(98),n(310);var o=n(0),i=n(97);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function c(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var o=Array(t),i=0;for(e=0;e<n;e++)for(var c=arguments[e],u=0,s=c.length;u<s;u++,i++)o[i]=c[u];return o}o.a.use(i.b);var u=function(t){return null==t},s=function(){function t(t){this._m=t}return t.prototype.getRawMatrix=function(){return this._m},t.prototype.getRawMatrixColNum=function(){try{return this._m[0].length}catch(t){throw new Error("矩阵列不能为空")}},t.prototype.getRawMatrixRowNum=function(){return this._m.length},t.prototype.transpose=function(){for(var t=this.getRawMatrixColNum(),e=this.getRawMatrixRowNum(),n=Array.from({length:e}).map((function(){return Array.from({length:t})})),o=0;o<t;o++)for(var i=0;i<e;i++)n[i][o]=this._m[o][i];return n},t}();function r(t,e,n){if(void 0===n&&(n=function(t){return t.join("-")}),e<0)return[];if(1===e)return t.map((function(t){return n([t])}));var o=[];return function t(i,c,u){if(u.length!==e)for(var s=c;s<i.length;s++)u.push(i[s]),t(i,s+1,u),u.pop();else o.push(n(u))}(t,0,[]),o}var p={skuCodeJoiner:"$",specCodeJoiner:"#",getSkuList:function(t){return t},getSkuSpecList:function(t){return t.spuSpecValues},getSkuId:function(t){return t.skuId},getSpecId:function(t){return t.specId},getSpecTitle:function(t){return t.specName},getspecValueId:function(t){return t.specValueId},getspecValue:function(t){return t.specValueRemark}};var a,f=function(){function t(t){this.hooks=[],this.selectedSpec=Array.from({length:t})}return t.prototype.selectSpec=function(t,e){var n=this;this.selectedSpec[t]=e,this.checkIsGenASku()&&this.hooks.forEach((function(t){t(n.getSpecsJoin())}))},t.prototype.cancelSpec=function(t){this.selectedSpec[t]=null},t.prototype.sepcIsSelected=function(t,e){var n;return!(!this.selectedSpec[t]||(null===(n=this.selectedSpec[t])||void 0===n?void 0:n.specJoinQue)!==e.specJoinQue)},t.prototype.getSpecsJoinWith=function(t,e){return this.selectedSpec.reduce((function(n,o,i){return i===t?n?""+n+p.specCodeJoiner+e.specJoinQue:e.specJoinQue:n?o?""+n+p.specCodeJoiner+o.specJoinQue:n:o?o.specJoinQue:""}),"")},t.prototype.combineHook=function(t){this.hooks.push(t)},t.prototype.checkIsGenASku=function(){return!this.selectedSpec.some(u)},t.prototype.getSpecsJoin=function(){return this.selectedSpec.map((function(t){return null==t?void 0:t.specJoinQue})).join(p.specCodeJoiner)},t}(),l=function(){function t(t){this.skuId="",this.toltalSpecCombine=[],this.code=t,this._combineCode()}return t.prototype._combineCode=function(){var t=this.code.split(p.skuCodeJoiner);this.skuId=t[0];for(var e=t[1].split(p.specCodeJoiner),n=e.length,o=1;o<=n;o++){var i=r(e,o,(function(t){return t.join(p.specCodeJoiner)}));this.toltalSpecCombine=c(this.toltalSpecCombine,i)}},t}();!function(t){t.PENDING="pending",t.DISABLED="disabled",t.SELECTED="selected"}(a||(a={}));!function(){function t(t){this.pathDict=[],this.specGroup=t,this._initPathDict(),this._initSkuPending()}t.prototype._initPathDict=function(){var t=this;this.specGroup.eachSkuIdJoinSpecsId((function(e){var n=new l(e);t.pathDict=c(t.pathDict,n.toltalSpecCombine)}))},t.prototype._initSkuPending=function(){var t=this.specGroup.specLines.length;this.skuPending=new f(t)},t.prototype.specTap=function(t){t.status!==a.DISABLED&&(this._changeSpecStatus(t),this._checkOtherSpecStatus())},t.prototype.onSkuCombined=function(t){var e=this;this.skuPending.combineHook((function(n){var o,i;e.specGroup.skuIdJoinSpecsId.forEach((function(t){var e;t.includes(n)&&(e=t.split(p.skuCodeJoiner),o=e[0],i=e[1])})),t(o,i)}))},t.prototype._changeSpecStatus=function(t){t.status===a.PENDING?(this.specGroup.setSpecStatusByPosition(t.row,t.col,a.SELECTED),this.skuPending.selectSpec(t.row,this.specGroup.getSpec(t.row,t.col))):t.status===a.SELECTED&&(this.specGroup.setSpecStatusByPosition(t.row,t.col,a.PENDING),this.skuPending.cancelSpec(t.row))},t.prototype._checkOtherSpecStatus=function(){var t=this;this.specGroup.eachSpec((function(e,n,o){if(!t.skuPending.sepcIsSelected(n,e)){var i=t.skuPending.getSpecsJoinWith(n,e);t._isInPathDict(i)?t.specGroup.setSpecStatusByPosition(e.row,e.col,a.PENDING):t._disableSpec(n,o)}}))},t.prototype._isInPathDict=function(t){return this.pathDict.includes(t)},t.prototype._disableSpec=function(t,e){this.specGroup.setSpecStatusByPosition(t,e,a.DISABLED)}}();var h,d=function(){function t(t,e,n){this.status=a.PENDING,this.row=e,this.col=n,this.specValue=p.getspecValue(t),this.specId=p.getSpecId(t),this.specValueId=p.getspecValueId(t)}return Object.defineProperty(t.prototype,"specJoinQue",{get:function(){return this.specValueId?this.specId+"-"+this.specValueId:""+this.specId},enumerable:!1,configurable:!0}),t.prototype.setStatus=function(t){this.status=t},t}(),S=function(){function t(t,e){this.specLineTitle="",this.specs=[],this.row=e,this.specLineTitle=p.getSpecTitle(t[0]),this._init(t)}return t.prototype._init=function(t){var e=this;t.map((function(t,n){if(!e._specIsRepeact(t)){var o=new d(t,e.row,n);e.specs.push(o)}}))},t.prototype._specIsRepeact=function(t){return this.specs.findIndex((function(e){return e.specId+"-"+e.specValueId==p.getSpecId(t)+"-"+p.getspecValueId(t)}))>-1},t}();!function(){function t(t){this._skuSpecsList=[],this._skuIdJoinSpecsId=[],this.specLines=[],this._skuList=p.getSkuList(t),this._setup()}Object.defineProperty(t.prototype,"skuSpecsList",{get:function(){return this._skuSpecsList},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"skuIdJoinSpecsId",{get:function(){return this._skuIdJoinSpecsId},enumerable:!1,configurable:!0}),t.prototype._setup=function(){this._createSkuSpecsList();var t=this._transposeSkuSpecsList();this._createSpecLines(t)},t.prototype._createSkuSpecsList=function(){var t=this;this._skuSpecsList=this._skuList.map((function(e){var n=p.getSkuSpecList(e);return t._createSkuIdJoinSpecsId(e,n),n}))},t.prototype._createSkuIdJoinSpecsId=function(t,e){var n=""+p.getSkuId(t)+p.skuCodeJoiner;n+=e.map((function(t){var e=p.getSpecId(t),n=p.getspecValueId(t);return n?e+"-"+n:e})).join(p.specCodeJoiner),this._skuIdJoinSpecsId.push(n)},t.prototype._transposeSkuSpecsList=function(){return new s(this._skuSpecsList).transpose()},t.prototype._createSpecLines=function(t){for(var e=0;e<t.length;e++){var n=new S(t[e],e);this.specLines.push(n)}},t.prototype.eachSpec=function(t){this.specLines.forEach((function(e,n){e.specs.forEach((function(e,o){t(e,n,o)}))}))},t.prototype.getSpec=function(t,e){return this.specLines[t].specs[e]},t.prototype.setSpecStatusByPosition=function(t,e,n){this.specLines[t].specs[e].setStatus(n)},t.prototype.eachSkuIdJoinSpecsId=function(t){this._skuIdJoinSpecsId.forEach((function(e){t(e)}))}}();function v(t,e){var n="number"==typeof e?e:0,o=null;function i(){o&&clearTimeout(o)}return{run:function(){for(var e=[],c=0;c<arguments.length;c++)e[c]=arguments[c];i(),o=setTimeout((function(){t.apply(void 0,e)}),n)},cancel:i}}function g(t,e){var n=Object(i.h)(t.value),o=v((function(t){n.value=t}),e),c=o.run,u=o.cancel,s=Object(i.j)(t,(function(t){return c(t)}));return Object(i.c)()&&Object(i.f)((function(){s(),u()})),n}function I(t,e){var n="number"==typeof e?e:0,o=null;return{run:function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];o||(o=setTimeout((function(){t.apply(void 0,e),o=null}),n))},cancel:function(){o&&clearTimeout(o)}}}function y(t,e){var n=Object(i.h)(t.value),o=I((function(t){n.value=t}),e),c=o.run,u=o.cancel,s=Object(i.j)(t,(function(t){return c(t)}));return Object(i.c)()&&Object(i.f)((function(){s(),u()})),n}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function k(t,e,n){var o=Object(i.h)();var c=function(){try{var o=t.getItem(e);return o?JSON.parse(o):n}catch(t){console.warn(t)}}();c&&(o.value=c);var u=Object(i.j)(o,(function(n){var o;void 0===(o=n)?t.removeItem(e):t.setItem(e,JSON.stringify(o))}),{flush:"post",deep:!0});return Object(i.c)()&&Object(i.f)((function(){return u()})),o}!function(t){t[t.GO=0]="GO",t[t.USER=1]="USER"}(h||(h={}));var m="undefined"!=typeof window;function b(){var t={};return{getItem:function(e){return t[e]},setItem:function(e,n){return t[e]=n},removeItem:function(e){return delete t[e]},clear:function(){return t={}},length:Object.keys(t).length,key:function(e){return Object.keys(t)[e]}}}function _(t,e){return k(m?localStorage:b(),t,e)}function j(t,e){return k(m?sessionStorage:b(),t,e)}function J(t,e,n){var o,c=Object(i.h)(null);return Object(i.e)((function(){o=(null==n?void 0:n.dom)?"function"==typeof(null==n?void 0:n.dom)?null==n?void 0:n.dom():Object(i.d)(null==n?void 0:n.dom)?n.dom.value:null==n?void 0:n.dom:window,c.value&&(o=c.value),o.addEventListener(t,e,{capture:null==n?void 0:n.capture,once:null==n?void 0:n.once,passive:null==n?void 0:n.passive})})),Object(i.f)((function(){o.removeEventListener(t,e,{capture:null==n?void 0:n.capture})})),c}function L(t,e){var n=Object(i.h)(null);return J("click",(function(o){var i=("function"==typeof e?e():e)||n.value;i&&!i.contains(o.target)&&t(o)})),n}function O(t){void 0===t&&(t=m?document:void 0);var e=Object(i.g)({x:0,y:0}),n=Object(i.h)(null);function o(t){void 0!==t&&(t===document?t.scrollingElement&&(e.x=t.scrollingElement.scrollLeft,e.x=t.scrollingElement.scrollTop):(e.x=t.scrollLeft,e.y=t.scrollTop))}var c=I((function(t){t.target&&o(t.target)}),100).run;return Object(i.c)()&&(Object(i.e)((function(){var e=("function"==typeof t?t():t)||n.value;e&&(o(e),e.addEventListener("scroll",c))})),Object(i.f)((function(){}))),[e,n]}},384:function(t,e,n){"use strict";n.r(e);var o=n(96),i=n(311),c={name:"use-scroll",setup:function(){var t=Object(i.f)();return{pos:Object(o.a)(t,1)[0]}}},u=n(26),s=Object(u.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"block"},[this._v("scroll X: "+this._s(this.pos.x))]),this._v(" "),e("div",{staticClass:"block"},[this._v("scroll Y: "+this._s(this.pos.y))])])}),[],!1,null,null,null);e.default=s.exports}}]);