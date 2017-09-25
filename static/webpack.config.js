var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var path = require('path');
module.exports = {
	entry:[
		 path.resolve(__dirname, '../src/index.js')
	],
	output: {
		path: __dirname + '/dist',
		//publicPath: "/dist/",
		filename: 'bundle.js'
	},
	resolve:{//定义能够被打包的文件，文件后缀名
		extensions: ['.js', '.jsx']
	},
	module:{
		loaders: [
				{ test: /\.jsx?$/, loaders: ['jsx-loader?harmony']},
				{ test: /\.(js|jsx)$/,exclude: /node_modules/,loader: 'babel-loader'}
			]
	},
	plugins:[//定义一些额外的插件
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
				filename:'index.html',
				template:'index.html',  
				inject:'app'
			}),
		new OpenBrowserPlugin({url: 'http://localhost:8080/'}),
	]
};