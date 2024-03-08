/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

let num = 1;

function increase() {
    num++;
}


// exports = module.exports
module.exports = { num, increase }  
// 等同于
// module.exports = { num: num, increase: increase };

/**
 * num基本类型，指向给module.exports[num]，假设内存地址是n1,那么module.exports[num]指向的内存是n2,和n1值相同，但是无关系
 * increase引用类型，increase等于是指针，指向给module.exports[increase]，只是进行了指针的复制，名字换了，是浅拷贝（基本类型无深浅拷贝的说法）
 * counter.js 中 increase() 修改的 num 变量在函数声明时就已经绑定不变了，永远绑定内存地址指向 n1 的 num，所以为1
 * ！！！JavaScript 采用的是词法作用域，它规定了函数内访问变量时，查找变量是从函数声明的位置向外层作用域中查找，而不是从调用函数的位置开始向上查找
 */

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   increase2: () => (/* binding */ increase2),
/* harmony export */   num2: () => (/* binding */ num2)
/* harmony export */ });
let num2 = 1;

function increase2() {
    return num2++;
}



// 单个export { x }
// 多个export default x


// __webpack_require__.d 则是通过 Object.defineProperty(exports, key, { enumerable: true, get: definition[key] }) 来对 exports 对象设置不同属性的 getter

// __webpack_require__.d(__webpack_exports__, {
//     num: () => /* binding */ num,
//     increase: () => /* binding */ increase,
//   });

/**
 * 与 CommonJS 不同，ES Modules 并没有对 module.exports 直接赋值，而是将值作为箭头函数的返回值，
 * 再把箭头函数赋值给 module.exports，之前我们提过词法作用域的概念，即这里的 num() 和 increase() 无论在哪里执行，
 * 返回的 num 变量和 increase 函数都是 counter.js 中的
 */

/**
 * 当你尝试在 index.js 中直接对 import 的 num 变量或者 increase 函数重新赋值时，浏览器会抛出错误
 * webpack 之前对 exports 对象做了一个设置 getter 的操作吗？其实质是设置了 exports 对象的 存取描述符，而 setter 并未设置，默认为 undefined。
 * 且在严格模式下（"use strict"），如果对 exports 对象进行属性赋值操作，会导致错误。
 * webpack 这么设计的原因是要与 ES Modules 的规范保持一致，即模块导出的值是 只读的，你无法在 index.js 中直接修改它，只能借助 counter.js 导出的方法 increase() 去间接修改。
 */

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _conterESM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
const { num, increase } = __webpack_require__(1);



console.log(num);
increase();
console.log(num);
// 结果是 1，1

console.log(_conterESM__WEBPACK_IMPORTED_MODULE_0__.num2);
(0,_conterESM__WEBPACK_IMPORTED_MODULE_0__.increase2)();
console.log(_conterESM__WEBPACK_IMPORTED_MODULE_0__.num2);
// 结果是 1，2


/**
 * CommonJS 导出的是值的拷贝；ES Modules 导出的是值的“引用
 * 简化就是CommonJS复制x给module.export[x]
 * ES Modules将x变成一个返回x的箭头函数，x=>()=>x 调用也是直接引用module.export，但是实际还是调用函数
 */

// commonnjs和ems对比掘金
// https://juejin.cn/post/6844904191840747533?searchId=202403081043234CC23B367C874F03D625


// umd模块可以兼容commonjs+esm，通常在esm不起作用的时候备用

// (function (root, factory) { 
//     if (typeof define === "function" && define.amd) { 
//     // 支持 AMD 规范
//         define(["jquery", "underscore"], factory);
//     } else if (typeof define === 'function' && define.cmd){ 
//     // 支持 CMD 规范
//         define(function(require, exports, module) { 
//             module.exports = factory() 
//         })
//     } else if (typeof exports === "object") { 
//     // 支持 CommonJS
//         module.exports = factory(require("jquery"), require("underscore")); 
//     } else { 
//     // 支持全局引用
//         root.Requester = factory(root.$, root._); 
//     } 
// }(this, function ($, _) { 
//     // this is where I defined my module implementation 
//     var Requester = { // ... }; 
//     return Requester; 
// }))

// 兼容浏览器和服务端两种场景
// 兼容 CMD、AMD、CJS 等多种规范，用法也相同
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;