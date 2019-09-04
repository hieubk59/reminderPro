const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(s[ac]ss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: '/node_modules/'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[hash].[ext]",
                            outputPath: "dist/assets/fonts"
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loaders: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[hash].[ext]",
                        }
                    },
                    "img-loader"
                ]
            },

        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        /*new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CopyWebpackPlugin([
            {from: 'src/app/assets/fonts', to: './assets/fonts'},
            {from: 'src/js/libraries', to: './libraries'},
            {from: 'src/js/plugins', to: './plugins'}
        ]),*/
    ]
};