import { BuildOptions, BuildPaths } from "./types/config";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";

export function buildPlugins(
  paths: BuildPaths
): webpack.WebpackPluginInstance[] {
  // const { paths } = options;
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
  ];
}
