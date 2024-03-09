const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');


// html-webpack-plugin 默认将会在 output.path 的目录下创建一个 index.html 文件，
// 并在这个文件中插入一个 script 标签，标签的 src 为 output.filename。

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle-commonjs.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs'  // 输出的js格式
    },
    resolveLoader: {
        modules: [path.resolve(__dirname, 'loaders')]
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['loader-Test1'],
            exclude: /node_modules/
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '测试HtmlWebpackPlugin'
        })
    ]

};
