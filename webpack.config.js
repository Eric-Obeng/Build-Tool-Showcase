// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Clean the output directory before emit
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "scss-loader"], // Load and inject CSS
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Template for generating HTML
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"), // Serve static files from the 'dist' directory
    },
    open: true, // Open the browser automatically
    port: 3000, // You can specify a port here, default is 8080
  },
  mode: "development", // Set mode to development for easier debugging
};
