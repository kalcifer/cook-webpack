var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = function(env) {
    return {
        entry: path.resolve(__dirname, 'src/index.js'),
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                
                loader: 'babel-loader'
            },{ test: /\.json$/, loader: 'json'}]
        },
        plugins:[
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.resolve(__dirname, 'src/assets/index.html')
            })
        ],
        devtool: 'source-map'
    }
}