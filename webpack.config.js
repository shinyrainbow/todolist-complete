// const path = require('path')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PropTypes = require('prop-types')
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  mode: 'development',
  devServer: {
    contentBase: __dirname + '/dist',
    port: 4003,
    historyApiFallback: {
      disableDotRule: true
    }
  },

  // plugins: [
  //   [
  //     "@babel/plugin-transform-runtime",
  //     {
  //       absoluteRuntime: false,
  //       corejs: false,
  //       helpers: true,
  //       regenerator: true,
  //       useESModules: false
  //     }
  //   ]
  // ],
  // resolve: {
  //   extensions: ['.js', '.jsx'],
  //   alias: {
  //     "PropTypes": PropTypes,
  //     // "config": path.resolve(__dirname, 'config/'),
  //     // "src": path.resolve(__dirname, 'src/'),
  //     // "helpers": path.resolve(__dirname, 'src/helpers/'),
  //     // "base": path.resolve(__dirname, 'src/components/base/'),
  //     // "forms": path.resolve(__dirname, 'src/components/forms/'),
  //     // "pages": path.resolve(__dirname, 'src/components/pages/'),
  //     // "sections": path.resolve(__dirname, 'src/components/sections/'),
  //     // "widgets": path.resolve(__dirname, 'src/components/widgets/'),
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.s?css/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              '@babel/preset-react',
              {
                plugins: [
                  '@babel/plugin-proposal-class-properties',

                ]
              },
            ]
          }
        }
      },
      // {
      //   test: /\.svg$/,
      //   use: ['@svgr/webpack'],
      // },
      // {
      //   test: /\.(jpg|jpeg|png|svg)$/,
      //   use: [{
      //     loader: "file-loader",
      //     options: {
      //       limit: 25000,
      //     }
      //   },
      //   ]
      // },
    ]
  }
}