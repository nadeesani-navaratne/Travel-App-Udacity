const path = require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
           },
           {
            test: /\.(jpg|png|svg)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 25000
                }
            }
        }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        })
    ]
}