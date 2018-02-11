module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle2.js',
        path: __dirname + "/dist"
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
