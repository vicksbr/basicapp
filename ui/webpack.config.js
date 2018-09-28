var webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  publicPath = "http://localhost:8080/";
} else {
  publicPath = "./dist";
}

module.exports = {
  devtool: "source-map",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  output: {
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./dist",
    compress: true,
    port: 8080
  }
};
