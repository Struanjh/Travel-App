//This file contains the common configuration settings which will be used in both dev and prod

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/client/index.js',
    plugins: [new HtmlWebpackPlugin({
        template: "./src/client/views/template.html"
    })], //Creates html file each time we build with link to webpack js file (using hash)

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    //Order runs from last to first in the list
                    "style-loader",  //style loader takes the converted js and injects it into the DOM
                    "css-loader",    //css loader takes css and converts it into js
                    "sass-loader"   //sass loader turns sass into css
                ]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                       name: "[name].[hash].[ext]",
                       outputPath: "media"
                    }
                }
            }
        ]
    }
};