var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
// CopyWebpackPlugin - copy-webpack-plugin 复制静态资源用
// ExtractTextPlugin - extract-text-webpack-plugin 分离提取 css 用

var base = require('./webpack.config');

//base.devtool = 'source-map';

// use hash filename to support long-term caching
base.output.filename = '[name][chunkhash:6].js';
base.output.chunkFilename = '[id][chunkhash:6].js';
// add webpack plugins
base.plugins.push(
  new CleanWebpackPlugin('dist', {
    root: base.commonPath.rootPath,
    verbose: false
  }),
  new CopyWebpackPlugin([{
    context: base.commonPath.staticDir,
    from: '**/*',
    ignore: ['*.md']
  }]),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false
    },
    output: {
      comments: false
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor', 'mainifest']
  }),
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.optimize.MinChunkSizePlugin({
    minChunkSize: 30000
  }),
  new HtmlWebpackPlugin({
    filename: '../index.html',
    template: base.commonPath.indexHTML,
    chunksSortMode: 'none'
  })
)

module.exports = base;
