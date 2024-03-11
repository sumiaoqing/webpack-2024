const { num, increase } = require('./counterCJS');
import { num2, increase2 } from './conterESM';


console.log(num);
increase();
console.log(num);
// 这个结果是  1，1

console.log(num2);
increase2();
console.log(num2);
// 结果是 1，2

console.log('test loader');


// index.js 中我们写一个class类
class TESTA {
    getName() {
        console.log('name')
    }
}


/**
 * CommonJS 导出的是值的拷贝；ES Modules 导出的是值的引用
 * 简化就是CommonJS复制x给module.export[x]
 * ES Modules将变量x变成一个返回x的箭头函数，直接暴露module.export，module.export={x=>()=>x（变量）,y(函数) }调用也是直接引用module.export，但是实际还是调用函数
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