const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/bulit.js",
        path: path.resolve(__dirname, "bulid")
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: "url-loader",
                options: {
                    limit: 8 * 1024,
                    name: "[hash:10][ext]",
                    outputPath: "imgs"
                }
            },
            {
                exclude: /\.(jpg|png|gif|css|less|js|html)$/,
                loader: "file-loader",
                options: {
                    name: "[hash:10][ext]",
                    outputPath: "medias"
                }
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: "development",
    devServer: {
        contentBase: path.resolve(__dirname, "bulid"),
        compress: true,
        port: 30000,
        open: true
    }
}