const utils = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DefinePlugin = require('webpack/lib/DefinePlugin')

module.exports = {
  target: 'web',
  entry: utils.srcPath('entry.web.js'),
  output: {
    filename: 'app.bundle.js',
    path: utils.distPath('web')
  },
  resolve: {
    alias: {
      '~': utils.srcPath(),
      'vue': 'vue/dist/vue.js'
    },
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ]
  },
  plugins: [
    new DefinePlugin({
      'TNS_PLATFORM': JSON.stringify('web')
    }),
    new HtmlWebpackPlugin({
      template: utils.srcPath('index.html')
    })
  ]
}