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
                 test: /\.(svg|png|jpg|gif)$/,
                 type:"asset/resource"
            }
        ]
    },
    output: {
        assetModuleFilename: "media/[name][ext]"
    }
};