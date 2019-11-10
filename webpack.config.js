import {resolve as _resolve} from "path";

const commonConfig = {
  output: {
    path: _resolve(__dirname, "dist"),
    filename: "[name].js",
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
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".jsx", ".json"],
  },
}

module.exports - Object.assign(
  {
    entry: {main: "./src/main.ts"},
  },
  commonConfig
);
