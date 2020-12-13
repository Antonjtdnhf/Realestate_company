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
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            esModule: false,
                            outputPath: "assets/images"
                        }
                    }
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            esModule: false,
                            outputPath: "assets/fonts"
                        }
                    }
                ]
            },

        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HTMLWebPackPlugin({
            filename: 'index.html',
            template: 'index.html'}
        )
    ]
};