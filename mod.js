// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var r=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var n="function"==typeof Symbol?Symbol.toStringTag:"";var e=t&&"symbol"==typeof Symbol.toStringTag?function(t){var e,a,f,i,u;if(null==t)return r.call(t);a=t[n],u=n,e=null!=(i=t)&&o.call(i,u);try{t[n]=void 0}catch(o){return r.call(t)}return f=r.call(t),e?t[n]=a:delete t[n],f}:function(t){return r.call(t)},a="function"==typeof DataView;var f="function"==typeof ArrayBuffer;var i="function"==typeof Float64Array;var u="function"==typeof Float64Array?Float64Array:null;var y="function"==typeof Float64Array?Float64Array:void 0;var c=function(){var t,r,o;if("function"!=typeof u)return!1;try{r=new u([1,3.14,-3.14,NaN]),o=r,t=(i&&o instanceof Float64Array||"[object Float64Array]"===e(o))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?y:function(){throw new Error("not implemented")},l="function"==typeof ArrayBuffer?ArrayBuffer:null;var p="function"==typeof ArrayBuffer?ArrayBuffer:void 0;var v=function(){var t,r,o,n;if("function"!=typeof l)return!1;try{o=new l(16),n=o,(t=(f&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===e(n))&&"function"==typeof l.isView)&&((r=new c(o))[0]=-3.14,r[1]=NaN,t=t&&l.isView(r)&&16===o.byteLength&&-3.14===r[0]&&r[1]!=r[1])}catch(r){t=!1}return t}()?p:function(){throw new Error("not implemented")},w="function"==typeof DataView?DataView:null;var b="function"==typeof DataView?DataView:void 0;var s=function(){var t,r,o,n;if("function"!=typeof w)return!1;try{o=new v(24),r=new w(o,8),n=r,(t=(a&&n instanceof DataView||"[object DataView]"===e(n))&&"function"==typeof r.getFloat64&&"function"==typeof r.setFloat64)&&(r.setFloat64(0,-3.14),r.setFloat64(8,NaN),t=t&&r.buffer===o&&16===r.byteLength&&8===r.byteOffset&&-3.14===r.getFloat64(0)&&r.getFloat64(8)!=r.getFloat64(8))}catch(r){t=!1}return t}()?b:function(){throw new Error(function(){var t,r=arguments,o="https://stdlib.io/e/"+r[0]+"?";for(t=1;t<r.length;t++)o+="&arg[]="+encodeURIComponent(r[t]);return o}("00H00"))};export{s as default};
//# sourceMappingURL=mod.js.map