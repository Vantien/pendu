const webpack = require("webpack");
const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry : './index.js',
    target: 'node', // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()],  // in order to ignore all modules in node_modules folder
    output: {
        filename: 'bundle.js', 
        path: path.resolve(__dirname + '/dist/')
    },
    devServer: {
        contentBase: path.resolve(__dirname),
        watchContentBase:true,
        inline: true,
        open: true,
        hot: true
    },
    plugins: [
        new UglifyJsPlugin({
            test: /\.js($|\?)/i
         }),
         new webpack.HotModuleReplacementPlugin()
        ],

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                        
                        {
                          loader: "style-loader" // creates style nodes from JS strings
                        }, 
                        {
                            loader: "css-loader" // translates CSS into CommonJS
                        },
                        {
                            loader: "sass-loader" // compiles Sass to CSS
                        }
                    ]
            },
            {
                test: /\.js$/,  // include .js files
                enforce: "pre", // preload the jshint loader
                exclude: /(node_modules)/, // exclude any and all files in the node_modules folder
                use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['env']
                            }
                        },
                        {
                            loader: "jshint-loader"
                        }
                    ]
            },
        ]}
}