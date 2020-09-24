const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {

    rules: [

      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },

      {
        test: /\.scss$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader',
         
        ]
      },

       {
        test: /\.less$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader',
            'less-loader'
        ]
      }

    ]

  },

};