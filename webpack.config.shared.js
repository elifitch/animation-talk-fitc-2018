/* eslint-disable */
var path = require("path");

module.exports = {
  loaders: {
    markdown: {
      test: /\.md$/,
      loader: "html-loader!markdown-loader?gfm=false"
    },
    fonts: {
      test: /\.(ttf|eot|woff|svg|woff2)$/,
      loader: "file-loader",
      include: path.join(__dirname, "assets/fonts"),
      options: {
        name: "fonts/[name].[ext]",
      }
    }
  }
}