const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"), // Serve static files from the 'public' directory
    },
    open: true, // Automatically open the browser
    port: 3000, // Specify a port
    historyApiFallback: true,
  },
});
