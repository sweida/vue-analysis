// 配置文件
// 生成html入口
const HtmlWebpackPlugin = require('html-webpack-plugin');

// css文件合并，ExtractTextWebpackPlugin 旧版本用这个插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 清除dist目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// const webpack = require('webpack'); // 用于访问内置插件
const path = require('path');

module.exports = {
  entry: {
    index: './src/js/index.js',
  },
  output: {
    // 当前文件路径所在的路径
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].bundle.[hash:7].js'
  },
  // resolve: {
  //   alias: {
  //     '@': resolve('src'),
  //     'images': resolve('src/images')
  //   }
  // },
  // 模块加载规则
  // webpack值能识别js文件，其它文件需要loader识别
  module: {
    rules: [
      // js babel
      {
        test: /\.js$/,
        // 排除文件
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // 匹配css文件
      {
        // 正则匹配.css结尾的文件
        test: /\.css$/,
        // 处理顺序从右往左
        // css-loader 让webpack识别css文件
        // style-loader 通过动态创建style标签，让解析后的css文件，能作用到页面中，会有很多style标签，不好用
        // MiniCssExtractPlugin.loader 合并css文件
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../css/',
            },
          },
          'css-loader'
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../css/',
            },
          },
          'css-loader',
          'less-loader'
        ],
      },
      // 匹配图片，i忽视大小写，8k以下的转换成base64
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: '[name].[hash:7].[ext]',
              publicPath: '../images/',
              outputPath: 'images/'
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'css/index.[hash:7].css' }),
    // new HtmlWebpackPlugin({ template: './src/index.html' }),
    new HtmlWebpackPlugin({ //输出html文件2
      title: 'index',
      filename: 'index.html',
      template: './src/index.html',
      hash: true,
      // chunks: ['./js/index']
    }),
    // new HtmlWebpackPlugin({ template: './src/admin.html' }),
    new CleanWebpackPlugin(),
  ],
  // 公共模块提取
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
