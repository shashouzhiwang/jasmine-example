const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(path.resolve(__dirname,'src', 'index.js'));
module.exports = {
    devtool: "inline-source-map",
    mode: "none",
    entry: {
        index: path.resolve(__dirname, 'src', 'index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    },
    resolve: { //解析模块的可选项
        // modules: [ ]//模块的查找目录 配置其他的css等文件
        extensions: [".js", ".json", ".jsx", ".less", ".css"],  //用到文件的扩展名

    },
    plugins: [
        new HtmlWebpackPlugin({
            file: 'index.html',
            template: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};