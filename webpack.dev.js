//xx

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: "development",
    output: {
        filename: "main.js", 
        path: path.resolve(__dirname, "dist")
    }
};