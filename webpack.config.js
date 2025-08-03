
const path= require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { webpack } = require("webpack");
const { Server } = require("http");
module.exports = {

    entry:"./src/index.js",
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,"dist"),
        clean:true,
    },

    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/template.html",
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"],
            },
            {
                test :/\.html$/,
                loader:"html-loader",

            },
            {
                test:/\.jpg$/,
                type:"asset/resource"
            }
        ]
    }

}