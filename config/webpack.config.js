var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path');
var serverconfig=require("./server.base.js")
module.exports = {
   /** entry:[
     'webpack/hot/dev-server',
     'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname, '../index.js'),
  ],**/
  entry:{
     bundle: [
       'webpack/hot/dev-server',
       'webpack-dev-server/client?'+serverconfig.url(),
        path.resolve(__dirname, '../index.js')
     ],
     vendor: ['react', 'react-dom'] 
   },
  devtool: "#eval-source-map",
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: "",
    filename: '[name].js'
  },
  resolve:{//定义能够被打包的文件，文件后缀名
		extensions: ['.js', '.jsx']
  },
  module:{
    loaders: [
        { 
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        { 
          test: /\.svg$/,
          exclude: /node_modules/,
          loader: 'svg-sprite-loader',
          include: [
            path.resolve(__dirname, '../src/'),
          ],
        },
        { 
          test: /\.(png|jpg|gif)$/,
          exclude: /node_modules/,
          loader:'url-loader?limit=81921111111',
          // query: {
          //     limit: 8192,
          //     name: 'font/[name].[ext]'
          // },
          options: {
            name: '[name].[ext]',
            context: path.resolve(__dirname, '../dist/imgs'),//失败了，没成功
          },
        },
        { 
          test: /\.css$/,
          exclude: /node_modules/,
          loaders:['style-loader','css-loader']
        },
        { test: /\.less$/,
          exclude: /node_modules/,
          //loaders:['style-loader','css-loader?minimize?importLoaders=1','less-loader']
          use: ExtractTextPlugin.extract({
              fallback: 'style-loader', // 编译后用什么loader来提取css文件
              use: ['css-loader', 'less-loader'],//指需要什么样的loader去编译文件,这里由于源文件是.css所以选择css-loader
          }),
        }
      ]
  },
  plugins:[//定义一些额外的插件
  	new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        filename:'index.html',
        template:'index.html',  
        inject:'app'
      }),
    new OpenBrowserPlugin({url:serverconfig.url()}),
    new ExtractTextPlugin('css/index.css'),
    new CleanWebpackPlugin(
          ['*.js','*.html','*.css'],　 //匹配删除的文件
          {
              root:  path.resolve(__dirname, '../dist'),       　　　　　　　　　　//根目录
              verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
              dry:      false,        　　　　　　　　　　//启用删除文件
              exclude: []//排除不删除的目录，主要用于避免删除公用的文件
          }
      ),
    new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:'jquery',
        "window.jQuery":"jquery",
    }),
  ]
};