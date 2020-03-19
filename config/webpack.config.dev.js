const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const devConfig = {
  entry: './demo/demo.js', 
  mode: 'development', 
  output: {
    filename: 'demo.bundle.js', 
    path: path.resolve(__dirname, '../demo') 
  },
  devServer: {
    contentBase: path.join(__dirname, '../demo'),
    compress: true,
    port: 3008,
    open: true 
  },
  module: {
    rules: [
      { 
        test: /\.scss$/,
        exclude: '/node_modules/',
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      },
    ]
  },
}

module.exports = merge(devConfig, baseConfig);