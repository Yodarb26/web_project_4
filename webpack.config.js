const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    devtool: "inline-source-map",
    entry: {
       main: './src/pages/index.js',
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean:true,
    },
    mode: 'development',
    devServer: {
        // contentBase: path.resolve(__dirname, "./dist"),
        compress: true,
        open: true,
        static: "./dist",
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.js/i,
                use:"babel-loader",
                // loader: "babel-loader",
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, 
                    {
                     loader: 'css-loader', 
                     options: {
                      importLoaders: 1,
                    },
                }, 
                'postcss-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                // use:['file-loader']
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin(),
    ],
};