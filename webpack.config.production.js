const path = require('path');
const { copyPluginPatterns, scssConfig, entryConfig, terserPluginConfig } = require('./env.config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, options) => 
{
    return {
        mode: options.mode,
        entry: entryConfig,
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        "file-loader",
                    ],
                },
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: [
                        // We're in production, building our SCSS into its own file
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: scssConfig.destPath,
                                name: scssConfig.destFileName
                            }
                        },
                        "sass-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        [
                                            "postcss-preset-env"
                                        ],
                                    ],
                                },
                            },
                        }
                    ]
                },
            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
        output: {
            filename: "js/[name].js",
            path: path.resolve(__dirname, "dist"),
        },
        optimization: {
            splitChunks: {
                chunks: "all",
            },
            minimizer: [new TerserPlugin(terserPluginConfig)]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                inject: true,
                minify: false
            }),
            new CopyPlugin(copyPluginPatterns)
        ]
    };
};