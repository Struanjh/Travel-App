//This file is used to over-ride default webpack configuration settings
//This file must remain in the project root folder

const path = require("path");
const webpack = require("webpack");
const common = require("./webpack.config");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
//Terser is default minimizer for js in webpack - its over-ridden by the css minimizer plugin so need to manually configure it here
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "main.[contenthash].js", //Cache Busting - contentHash prevents browser caching the page by creating new filename (with a hash) each time we build the app
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(), 
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/client/views/template.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "[name].[contentHash].css"}),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    //Order runs from last to first in the list
                    MiniCssExtractPlugin.loader,  //Moves css into seperate files in dist folder rather than injecting js into DOM as happens in dev (for performance reasons)
                    "css-loader",    //css loader takes css and converts it into js
                    "sass-loader"   //sass loader turns sass into css
                ]
            },
                ]
    }
});