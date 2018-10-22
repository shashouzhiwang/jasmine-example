var webpack = require('webpack');
var path = require('path');
var uglifyJsPlugin=require('uglifyjs-webpack-plugin');

module.exports = {

    devtool: "#inline-source-map",
    mode: 'none',

    resolve: {
        extensions: ['.ts', '.js']
    },

    plugins: [

    ],

    optimization: {
        minimizer: [
            new uglifyJsPlugin({
                sourceMap: true,
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        drop_console: false,
                    }
                }

            })
        ]
    },

    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /node_modules/,
        },
        {
            test: /\.js$/,
            use: {
                loader: 'istanbul-instrumenter-loader'
            },
            exclude: /(\.spec\.js$)/,
        }]


    }
};

