const path = require('path');
const webpack = require('webpack');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        autosize: './src/js/aotoSize.js',
        user:'./src/js/user.js',
        vip: './src/js/vip.js',
        privacy: './src/js/privacy.js',
        thanks: './src/js/thanks.js',
        systemPermissions: './src/js/systemPermissions.js',
        informationCollection: './src/js/informationCollection.js',
        thirdPartySharing: './src/js/thirdPartySharing.js'
    },
    plugins: [
        //  自动清空dist目录
        new CleanWebpackPlugin(),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        //  设置html模板生成路径
        new HtmlWebpackPlugin({
            filename: 'vip.html',
            template: './src/pages/vip.html',
            chunks: ['style','autosize','vip']
        }),
        new HtmlWebpackPlugin({
            filename: 'user.html',
            template: './src/pages/user.html',
            chunks: ['style','h5common','user']
        }),
        new HtmlWebpackPlugin({
            filename: 'privacy.html',
            template: './src/pages/privacy.html',
            chunks: ['style','h5common','privacy']
        }),
        new HtmlWebpackPlugin({
            filename: 'thanks.html',
            template: './src/pages/thanks.html',
            chunks: ['style','h5common','thanks']
        }),
        new HtmlWebpackPlugin({
            filename: 'systemPermissions.html',
            template: './src/pages/systemPermissions.html',
            chunks: ['style','h5common','systemPermissions']
        }),
        new HtmlWebpackPlugin({
            filename: 'informationCollection.html',
            template: './src/pages/informationCollection.html',
            chunks: ['style','h5common','informationCollection']
        }),
        new HtmlWebpackPlugin({
            filename: 'thirdPartySharing.html',
            template: './src/pages/thirdPartySharing.html',
            chunks: ['style','h5common','thirdPartySharing']
        }),
    ],
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            //  css中的图片路径增加前缀
                            publicPath: '../'
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.(mp3)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        //  图片输出的实际路径(相对于dist)
                        outputPath: 'audio',
                        //  当小于某KB时转为base64
                        limit: 0
                    }
                }]
            },
            {
                test: /\.(png|svg|jpg|gif|web)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        //  图片输出的实际路径(相对于dist)
                        outputPath: 'images',
                        //  当小于某KB时转为base64
                        limit: 0
                    }
                }]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: ['img:src', 'img:data-src', 'audio:src'],
                        minimize: true
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        //  保留文件名和后缀名
                        name: '[name].[ext]',
                        //  输出到dist/fonts/目录
                        outputPath: 'fonts',
                    }
                }
            }
        ]
    },
    //  编译输出配置
    output: {
        //  js生成到dist/js, [name]表示保留js文件名
        filename: 'js/[name].js',
        //  输出路径为dist
        path: path.resolve(__dirname, 'dist')
    },
};