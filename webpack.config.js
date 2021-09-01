//This file is used to over-ride default webpack configuration settings
//This file must remain in the project root folder

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: "development",
    //devtool: "none",
    entry: './src/client/index.js',
    output: {
        filename: "main.[contentHash].js", //Cache Busting - contentHash prevents browser caching the page by creating new filename (with a hash) each time we build the app
        path: path.resolve(__dirname, "dist")
    },

    plugins: [new HtmlWebpackPlugin()],

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",  //style loader takes the converted js and injects it into the DOM
                    "css-loader",    //css loader takes css and converts it into js
                    "sass-loader"   //sass loader turns sass into css
                ]
            }
        ]
    }
};