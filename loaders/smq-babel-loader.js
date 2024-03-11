let babel = require('@babel/core');

/**
 * loader-utils 是webpack 官方提供的一个工具库，
 * 提供loader 处理时需要用到的一些工具方法，
 * 例如用来解析上下文loader 配置项的 getOptions 
 */
let loaderUtils = require('loader-utils');

let loader = function (content) {
    let callback = this.aysnc(); // 告诉 loader-runner 这个 loader 将会异步地回调。返回 this.callback。
    let options = loaderUtils.getOptions(this);
    babel.transform(content, { // callback: babel.FileResultCallback...options,
        ...options
    }, (err, result) => { // callback: babel.FileResultCallback
        if (err) {
            callback(err);
        } else {
            callback(err, result.code);
        }
    })
}

module.exports = loader;