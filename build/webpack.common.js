const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['../src/main.js']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      src: path.resolve(__dirname, '../src'),
      packages: path.resolve(__dirname, '../packages')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'development',
      template: path.resolve(__dirname, '../public/index.html')
    })
  ]
};
