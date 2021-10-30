const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const src = path.resolve(__dirname, './src');


module.exports =  {
  mode: 'development',

   entry: [src + '/index.js'],

   plugins: [
    new webpack.HotModuleReplacementPlugin(),

     new HtmlWebpackPlugin({
       title: `Simple Webpack Dev Server`,
       template: src + '/index.html',
     }),
   ],
 
   module: {
     rules: [
       { test: /\.js$/, use: ['babel-loader'] },
       { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1, modules: false },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
     ],
   },
 
   resolve: {
     modules: [src, 'node_modules'],
     extensions: ['.js'],
     alias: {
       '@': src,
     },
   },

  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    port: 8080,
  },
}
