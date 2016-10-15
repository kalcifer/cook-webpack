var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = function(env) {
    return {
        entry: path.resolve(__dirname, 'src/index.js'),
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins:[
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.resolve(__dirname, 'src/assets/index.html')
            })
        ]
    }
}