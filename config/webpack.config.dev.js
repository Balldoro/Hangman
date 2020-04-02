const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    main: "./src/js/index.js"
  },
  output: {
    path: path.join(__dirname, "../build"),
    filename: "[name]-bundle.js"
  },
  devServer: {
    compress: true,
    overlay: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/html/index.html",
      filename: "index.html"
    })
  ]
};
