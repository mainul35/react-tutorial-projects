const path = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
      // path: path.join(__dirname, '../grails-app/assets/javascripts'),
      path: path.join(__dirname, 'public'),
      // filename: 'application.js'
      filename: 'bundle.js'
    },
    module:{
      rules:[
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
    }
}