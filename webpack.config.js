const path = require("path");

module.exports = {
    entry: "./lib/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "humanapi-connect-client.js",
        library: "HumanConnect",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [ "env" ]
                    }
                }
            }
        ]
    }
};
