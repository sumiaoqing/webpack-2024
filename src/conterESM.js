let num2 = 1;

function increase2() {
    return num2++;
}

export { num2, increase2 };

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