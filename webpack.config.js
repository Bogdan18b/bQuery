const path = require('path');

module.exports = {
  context: __dirname,
  entry: './lib/todo_list.js',
  output: {
  path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        
      }
    ]
  },
  devtool: 'source-map'
};
