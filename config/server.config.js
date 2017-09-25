var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var serverconfig=require('./server.base.js')
var config = require('./webpack.config.js');
var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
  historyApiFallback: true,
  //hot: true,//加上hot：true编辑时浏览器不自动刷新
  inline: true,
  progress: true,
  contentBase: '../',
  stats: { colors: true },
  port:serverconfig.port,
  proxy: {
      '/mlfw':{
          target:'http://localhost:8080',
          changeOrigin:true,

      }
    }
});
config.entry.bundle.unshift("webpack-dev-server/client?"+serverconfig.url(), "webpack/hot/dev-server");

server.listen(serverconfig.port, "localhost", function(err) {
  if(err) {
    console.log(err);
  }
  console.log('Listening at localhost:'+serverconfig.url()+'...');
});
module.exports= server;