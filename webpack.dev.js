//xx

//Required so we can specify the path where we want to place the output file
const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.config");
const HtmlWebpackPlugin = require('html-webpack-plugin');

//Mwerges contents of config.js file with the object below
module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "main.js", 
        //Output file will go to the current directory inside new folder called dist
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/client/views/template.html"
        }) //Creates html file each time we build with link to webpack js file (using hash)
    
    ],
    module: {
        rules:  [
                    {
                test: /\.scss$/,
                use: [
                    //Order runs from last to first in the list
                    //So in dev mode there is no seperate css file - styling directly injected into DOM via js in main.js
                    "style-loader",  //style loader takes the converted js and injects it into the DOM
                    "css-loader",    //css loader takes css and converts it into js
                    "sass-loader"   //sass loader turns sass into css
                    ]
                    }
                ]
            }
    });