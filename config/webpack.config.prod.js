const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: "production",
  entry: {
    main: "./src/js/index.js"
  },
  output: {
    path: path.join(__dirname, "../docs"),
    filename: "[name]-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/html/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin()
  ]
};
