//This file contains the common configuration settings which will be used in both dev and prod

const path = require("path");
const webpack = require("webpack");


module.exports = {
    entry: './src/client/index.js',
    module: {
        rules: [
            {
                //Everytime a source attribute in html files is encountered the file will be required (imported) into js by default
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                //Handles images with any of below file extensions and outputs them into a media folder inside dist
               /* test: /\.(svg|png|jpg|gif)$/,
                //use: ["file-loader"]
                use: {
                    loader: "file-loader",
                    options: {
                       name: "[name].[hash].[ext]",
                       outputPath: "media"
                    }
                 }*/
                 test: /\.(svg|png|jpg|gif)$/,
                 type:"asset/resource"
            }
        ]
    },
    output: {
        assetModuleFilename: "media/[name][ext]"
    }
};