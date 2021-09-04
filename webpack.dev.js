//xx

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
        path: path.resolve(__dirname, "dist")
    }
});