const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // Updated import
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js", // File hashing for better caching
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new CleanWebpackPlugin()], // Updated usage
  optimization: {
    splitChunks: {
      chunks: "all", // This will split all types of chunks (both dynamic and initial)
    },
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
});
