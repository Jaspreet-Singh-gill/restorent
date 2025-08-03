const {merge} = require('webpack-merge');

const comman = require("./webpack.config.js");

module.exports = merge(comman,{
        mode:"production",
        devtool:"inline-source-map",

});