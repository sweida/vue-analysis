// 导入公共模块
const base = require('./webpack.base.js')

const merge = require('webpack-merge')

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 3300,
    open: true
  },
})
