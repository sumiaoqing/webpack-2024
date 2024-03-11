/**
 * loader执行流程 normal 和 pitch
 * 一个loader可以定义两类函数，一个默认导出的函数normalLoader,
 * 一个用于阻断常规流程的函数pitchLoader
 */

/**
 * Webpack 它只能处理 js 和 JSON 文件。面对 css 文件还有一些图片等等，Webpack 它自己是不能够处理的，
 * 它需要loader 处理其他类型的文件并将它们转换为有效的模块以供应用程序使用并添加到依赖关系图中
 */

//babel-loader 将高级的ES6+的语法转换为ES5
//@babel/core  babel的核心模块
//@babel/preseter  Babel 的预设（preset）可以被看作是一组 Babel 插件和/或 options 配置的可共享模块。
//-可以根据用户设置的目标环境，自动添加编译ES6+代码所需的插件和补丁