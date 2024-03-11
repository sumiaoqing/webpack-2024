const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');


// html-webpack-plugin 默认将会在 output.path 的目录下创建一个 index.html 文件，
// 并在这个文件中插入一个 script 标签，标签的 src 为 output.filename。

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs'  // 输出的js格式
    },
    resolveLoader: {
        modules: [path.resolve(__dirname, 'loaders'),'node_modules']
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: {
                loader: 'smq-babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env' // Babel-loader的预设 看作是一组 Babel 插件和/或 options 配置的可共享模块
                    ]
                }
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '测试HtmlWebpackPlugin'
        })
    ]

};
