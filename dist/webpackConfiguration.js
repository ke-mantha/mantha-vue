"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
exports.webpackConfigurationFactory = function (mode) { return ({
    resolve: {
        extensions: ['.pug', '.styl']
    },
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: [
                    (mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader'),
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: mode === 'development',
                            minimize: mode === 'production'
                        }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')
                            ]
                        }
                    }, 'stylus-loader'
                ],
                exclude: [/.*src\/themes\/.*/]
            },
            {
                test: /\.styl$/,
                use: [
                    (mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader'),
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: mode === 'development',
                            minimize: mode === 'production'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')
                            ]
                        }
                    }, 'stylus-loader'
                ],
                include: [/.*src\/themes\/.*/, /node_modules/],
                exclude: [/.*src\/components.*/, /.*src\/pages.*/]
            },
            {
                test: /\.pug$/,
                loaders: [{
                        loader: 'vue-template-loader',
                        options: {
                            functional: false,
                            transformAssetUrls: {
                                img: 'src'
                            }
                        }
                    }, {
                        loader: 'pug-plain-loader'
                    }]
            },
        ]
    }
}); };
//# sourceMappingURL=webpackConfiguration.js.map