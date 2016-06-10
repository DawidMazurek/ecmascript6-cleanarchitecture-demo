var path = require('path');
module.exports = {
    entry: "./app/src-transpiled/entry.js",
    output: {
        path: "./app/lib/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: path.join('./app/src-transpiled'), loader: 'babel-loader' }
        ]
    }
};