var path = require('path');
var webpack = require('webpack');
var ETP = require("extract-text-webpack-plugin");
var env = process.env.NODE_ENV;
var port = 3001;
var host = 'localhost';
var production = env === 'production' ? true : false;
var plugins = production ? [
  new ETP("styles.css")
] : [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
];
var entry = production ? [
  './client/index'
] : [
  'webpack-dev-server/client?http://' + host + ':' + port,
  'webpack/hot/only-dev-server',
  './client/index'
]

module.exports = {
  devServerPort: port,
  devtool: 'inline-source-map',
  entry: entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://' + host + ':' + port + '/dist/'
  },
  plugins: plugins,
  resolve: {
    extensions: ['', '.js', '.scss']
  },
  module: {
    loaders: [{
      test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
      loader: 'file'
    },{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.scss$/,
      loader: production ? ETP.extract('css!sass') : ('style!css!sass'),
      include: __dirname
    }, {
      test: /\.css?$/,
      loaders: ['style', 'raw'],
      include: __dirname
    }]
  }
};
