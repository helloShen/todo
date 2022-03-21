const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/app.js',
    devtool: 'inline-source-map',
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: 'Todo'
    //     })
    // ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};