//This file contains the common configuration settings which will be used in both dev and prod

const path = require("path");
const webpack = require("webpack");


module.exports = {
    entry: './src/client/index.js',
    module: {
        rules: [
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