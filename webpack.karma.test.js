var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [{
            test: /\.js$/,
            loaders: [{
                loader: 'babel-loader',

            }]
        }]
    }
};

