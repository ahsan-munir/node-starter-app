var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./src/scripts/main.js', './src/scss/main.scss'],
  output: {
    filename: 'public/javascripts/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015', 'react']
        }
      },
      /*
      your other rules for JavaScript transpiling go in here
      */
      { // css / sass / scss loader for webpack
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: './public/stylesheets/[name].bundle.css',
      allChunks: true,
    }),
  ],
};