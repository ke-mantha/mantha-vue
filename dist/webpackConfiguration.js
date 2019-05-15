import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
export const webpackConfigurationFactory = (mode) => ({
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
});
//# sourceMappingURL=webpackConfiguration.js.map