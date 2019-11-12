const path = require("path");

const commonConfig = {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: "pre",
        loader: "tslint-loader",
        options: {
          typeCheck: true,
          emitErrors: true,
        },
      },
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".jsx", ".json"],
  },
}

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
  Object.assign(
    {
      target: "electron-main",
      entry: {main: "./src/main.ts"},
    },
    commonConfig
  ),
  Object.assign(
    {
      target: "electron-renderer",
      entry: {gui: "./src/gui.ts"},
      plugins: [new HtmlWebpackPlugin()],
    }
  ),
];
