const { resolve } = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
const miniCssExtractPlugin = require("mini-css-extract-plugin")
const optimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")
const cssLoader = [
    miniCssExtractPlugin.loader,
    "css-loader",
    //兼容性css配置
    {
        loader: "postcss-loader",
        options: {
            ident: "postcss",
            plugins: () => [
                //postcss的插件
                require("postcss-preset-env")
            ]
        }
    }
]
module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/built.js",
        path: resolve(__dirname, "bulid")
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [...cssLoader]
            },
            {
                test: /\.less$/,
                use: [...cssLoader, "less-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                enforce: "pre",
                options: {
                    fix: true
                }

            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                useBuiltIns: "usage",
                                corejs: {
                                    version: 3
                                },
                                targets: {
                                    chrome: "60",
                                    firefox: "50",
                                    ie: "9",
                                    safari: "10",
                                    edge: "17"
                                }
                            }
                        ]
                    ]
                }

            },
            {
                test: /\.(jpeg|jpg|png|gif)$/,
                loader: "url-loader",
                options: {
                    limit: 8 * 1024,
                    name: "[hash:10][ext]",
                    outputPath: "../imgs"
                }
            },
            {
                exclude: /\.(css|js|html|less|jpg|png|jpeg|gif)/,
                loader: "file-loader",
                options: {
                    name: "[hash:10][ext]",
                    outputPath: "../medias"
                }
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html",
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new miniCssExtractPlugin({
            filename: "css/bulit.css"
        }),
        new optimizeCssAssetsWebpackPlugin()
    ],
    mode: "production"
}