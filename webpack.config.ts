import path from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { buildPlaguns } from "./config/build/buildPlugins";

const config: webpack.Configuration = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  plugins: buildPlaguns(),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

export default config;
