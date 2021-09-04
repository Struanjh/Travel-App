//This file is used to over-ride default webpack configuration settings
//This file must remain in the project root folder

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: "production",
    output: {
        filename: "main.[contenthash].js", //Cache Busting - contentHash prevents browser caching the page by creating new filename (with a hash) each time we build the app
        path: path.resolve(__dirname, "dist")
    }
};