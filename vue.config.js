module.exports = {
  publicPath :'./',
  lintOnSave: false,
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/gem/': {
        target: 'http://101.200.134.115:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/gem': '/'
        }
      }
    }
  }
}
