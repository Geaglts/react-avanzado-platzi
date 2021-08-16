const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    filename: "app.bundle.js",
  },
  mode: "development",
  plugins: [new HTMLWebpackPlugin()],
};
