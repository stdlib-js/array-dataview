// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var o=Object.prototype.toString;var r=Object.prototype.hasOwnProperty;var n="function"==typeof Symbol?Symbol:void 0,e="function"==typeof n?n.toStringTag:"";var a=t&&"symbol"==typeof Symbol.toStringTag?function(t){var n,a,f,i,u;if(null==t)return o.call(t);a=t[e],u=e,n=null!=(i=t)&&r.call(i,u);try{t[e]=void 0}catch(r){return o.call(t)}return f=o.call(t),n?t[e]=a:delete t[e],f}:function(t){return o.call(t)},f="function"==typeof DataView;var i="function"==typeof ArrayBuffer;var u="function"==typeof Float64Array;var y="function"==typeof Float64Array?Float64Array:null;var c="function"==typeof Float64Array?Float64Array:void 0;var l=function(){var t,o,r;if("function"!=typeof y)return!1;try{o=new y([1,3.14,-3.14,NaN]),r=o,t=(u&&r instanceof Float64Array||"[object Float64Array]"===a(r))&&1===o[0]&&3.14===o[1]&&-3.14===o[2]&&o[3]!=o[3]}catch(o){t=!1}return t}()?c:function(){throw new Error("not implemented")},p="function"==typeof ArrayBuffer?ArrayBuffer:null;var v="function"==typeof ArrayBuffer?ArrayBuffer:void 0;var w=function(){var t,o,r,n;if("function"!=typeof p)return!1;try{r=new p(16),n=r,(t=(i&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===a(n))&&"function"==typeof p.isView)&&((o=new l(r))[0]=-3.14,o[1]=NaN,t=t&&p.isView(o)&&16===r.byteLength&&-3.14===o[0]&&o[1]!=o[1])}catch(o){t=!1}return t}()?v:function(){throw new Error("not implemented")},b="function"==typeof DataView?DataView:null;var s="function"==typeof DataView?DataView:void 0;var A=function(){var t,o,r,n;if("function"!=typeof b)return!1;try{r=new w(24),o=new b(r,8),n=o,(t=(f&&n instanceof DataView||"[object DataView]"===a(n))&&"function"==typeof o.getFloat64&&"function"==typeof o.setFloat64)&&(o.setFloat64(0,-3.14),o.setFloat64(8,NaN),t=t&&o.buffer===r&&16===o.byteLength&&8===o.byteOffset&&-3.14===o.getFloat64(0)&&o.getFloat64(8)!=o.getFloat64(8))}catch(o){t=!1}return t}()?s:function(){throw new Error(function(){var t,o=arguments,r="https://stdlib.io/e/"+o[0]+"?";for(t=1;t<o.length;t++)r+="&arg[]="+encodeURIComponent(o[t]);return r}("00Z00"))};export{A as default};
//# sourceMappingURL=mod.js.map
