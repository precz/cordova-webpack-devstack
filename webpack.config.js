var path = require('path');

module.exports = {
  entry: [
    './src/js/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'www/js')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'www'),
    publicPath: path.resolve('/js/')
    
  },
  devtool: 'inline-source-map'
};
