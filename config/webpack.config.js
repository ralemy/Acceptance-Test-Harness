"use strict";
import config from "./config";

let packConfig = {
    entry: {
        app: config.getRootFile()
    },
    output: {
        path: config.getDistribution(),
        publicPath: "/assets/",
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ["ng-annotate?add=false,map=false", "babel?presets[]=es2015"]
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                loader: "file"
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.pug$/,
                loader: "pug-html"
            },
        ]
    }
};

export default packConfig;
