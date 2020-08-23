const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HTMLWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        main: "./index.js"
    },
    mode: "development",
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