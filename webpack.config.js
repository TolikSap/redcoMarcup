const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    "article": "./src/js/article.js",
    "index": "./src/js/index.js"
  },
  output: {
    path: path.resolve(__dirname, "/dist/js"),
    filename: '[name].min.js'
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        include: [path.resolve(__dirname, "./src/js")],
        loader: "eslint-loader",
      },
      {
        test: /\.m?js$/,
        include: [path.resolve(__dirname, "./src/js")],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
};

