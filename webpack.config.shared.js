/* eslint-disable */
var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  loaders: [
    {
      test: /\.md$/,
      loader: "html-loader!markdown-loader?gfm=false"
    },
    {
      test: /\.(ttf|eot|woff|svg|woff2)$/,
      loader: "file-loader",
      include: path.join(__dirname, "assets/fonts"),
      options: {
        name: "fonts/[name].[ext]",
      }
    }
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.html'
    })
  ]
}