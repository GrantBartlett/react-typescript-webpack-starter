const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { devServer, copyPluginPatterns, scssConfig, entryConfig } = require('./env.config');

module.exports = (env, options) => 
{
    return {
        mode: options.mode,
        entry: entryConfig,
        devServer,
        // Dev only
        // Target must be set to web for hmr to work with .browserlist
        // https://github.com/webpack/webpack-dev-server/issues/2758#issuecomment-710086019
        target: "web",
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
                        // We're in dev and want HMR, SCSS is handled in JS
                        // For production this doesn't apply
                        // Creates `style` nodes from JS strings
                        "style-loader",
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
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
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                inject: true,
                minify: false
            }),
            new CopyPlugin(copyPluginPatterns),
        ]
    };
};