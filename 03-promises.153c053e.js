!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var i=r("6JpON"),u=document.querySelector("form"),l=u.delay,c=u.step,f=u.amount;function a(e,n){return new Promise((function(o,t){setTimeout((function(){Math.random()>.3?o("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):t("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}u.addEventListener("submit",(function(n){n.preventDefault();for(var o=Number(l.value),t=Number(c.value),r=Number(f.value),u=0;u<r;u++)a(u+1,o+t*u).then((function(n){e(i).Notify.success(n),console.log(n)})).catch((function(n){e(i).Notify.failure(n),console.log(n)}))}))}();
//# sourceMappingURL=03-promises.153c053e.js.map