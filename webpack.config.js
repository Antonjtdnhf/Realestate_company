const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HTMLWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    context: path.resolve(__dirname, "src"),
    entry: {
        main: "./index.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HTMLWebPackPlugin({
            template: "index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ],
            },
            {
              test: /\.png$/,
              use: [
                  "file-loader"
              ]
            },
        ],
    },
};