const {merge} = require('webpack-merge');

const comman = require("./webpack.config.js");

module.exports = merge(comman,{
        mode:"development",
        devtool:"eval-source-map",
        devServer:{
            watchFiles:["./src/template.html"]
        }

});