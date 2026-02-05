const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const isProduction = process.env.NODE_ENV === 'production';

const common = {
    entry: './src/index.tsx',
    output: {
        filename: isProduction ? '[name].[contenthash].js' : 'index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: isProduction ? '/mk-webpack-react/' : '/',
    },
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        targets: 'defaults',
                        presets: [['@babel/preset-env']],
                    },
                },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024, // 8kb
                    },
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name].[hash][ext]',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            meta: {
                author: 'KUNAAL MANGAL',
                'og:author': 'KUNAAL MANGAL',
                'twitter:creator': '@KunaalMangal'
            },
            inject: true,
            minify: isProduction ? {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            } : false,
        }),
    ],
    performance: {
        hints: isProduction ? 'warning' : false,
        maxAssetSize: 244 * 1024, // 244kb
        maxEntrypointSize: 244 * 1024, // 244kb
    },
};

const developmentConfig = {
    ...common,
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 8081,
        hot: true,
        historyApiFallback: true,
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    module: {
        ...common.module,
        rules: [
            ...common.module.rules,
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            postcssOptions: {
                                plugins: [
                                    'postcss-preset-env',
                                    'autoprefixer',
                                ],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            postcssOptions: {
                                plugins: [
                                    'postcss-preset-env',
                                    'autoprefixer',
                                ],
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
};

const productionConfig = {
    ...common,
    mode: 'production',
    devtool: 'source-map',
    module: {
        ...common.module,
        rules: [
            ...common.module.rules,
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    'postcss-preset-env',
                                    'autoprefixer',
                                    'cssnano',
                                ],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    'postcss-preset-env',
                                    'autoprefixer',
                                    'cssnano',
                                ],
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true,
                        drop_debugger: true,
                    },
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: { removeAll: true },
                            normalizeWhitespace: true,
                        },
                    ],
                },
            }),
        ],
        splitChunks: false,
    },
    plugins: [
        ...common.plugins,
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public/site.webmanifest',
                    to: 'site.webmanifest',
                },
                {
                    from: 'public/android-chrome-192x192.png',
                    to: 'android-chrome-192x192.png',
                },
                {
                    from: 'public/android-chrome-512x512.png',
                    to: 'android-chrome-512x512.png',
                },
                {
                    from: 'public/apple-touch-icon.png',
                    to: 'apple-touch-icon.png',
                },
                {
                    from: 'public/favicon-16x16.png',
                    to: 'favicon-16x16.png',
                },
                {
                    from: 'public/favicon-32x32.png',
                    to: 'favicon-32x32.png',
                },
                {
                    from: 'public/favicon.ico',
                    to: 'favicon.ico',
                },
                {
                    from: 'public/screenshot-wide.png',
                    to: 'screenshot-wide.png',
                },
                {
                    from: 'public/screenshot-narrow.png',
                    to: 'screenshot-narrow.png',
                },
            ],
        }),
    ],
};

module.exports = isProduction ? productionConfig : developmentConfig;