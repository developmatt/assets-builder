const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: './src/entry.js',

    output: {
        filename: 'js/bundle.js',
        path: path.resolve('dist')
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: '/node_modules/',
            use: {
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true
                }
            }
        }, {
            test: /\.scss$/,
            use: [
                { loader: MiniCssExtractPlugin.loader },
                'css-loader',
                'sass-loader'
            ]
        }]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/bundle.css"
        })
    ]
}