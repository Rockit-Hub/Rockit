const { resolve } = require('path')

module.exports = {
//   lintOnSave: 'warnlng',
  chainWebpack: (config) => {
    config.resolve.alias.set('css', resolve(__dirname, './src/ststic/css'))
  }
}
