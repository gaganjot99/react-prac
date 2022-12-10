const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/App.js",
  output: {
    filename: "App.js",
    path: path.resolve(__dirname, "docs"),
  },
  mode: "production",
  devServer: {
    static: ["./src", "./public"],
    hot: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: "./public/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "./public/images", to: "images" }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset",
      },
    ],
  },
};
