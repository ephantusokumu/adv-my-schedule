const path = require("path");

module.exports = {
    mode: "development",
    entry:"./src/app/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer:{
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader'
        }]
    }
}