const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js", // File hashing for better caching
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    splitChunks: {
      chunks: "all", // This will split all types of chunks (both dynamic and initial)
    },
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
});
