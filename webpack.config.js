const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
        {
        test: /\.sass$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader"
        }]
    },

    { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
    }
    ]
}
};