const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  lintOnSave: false,
  // devServer: {
  //   host: '0.0.0.0',
  //   https: false,
  //   disableHostCheck: true,
  //   watchOptions: {
  //     poll: true
  //   },
  //   public: 'vue-cordova.local'
  // }
  pluginOptions: {
    cordovaPath: 'src-cordova'
  },
  publicPath: '',
  chainWebpack: config => {
    // config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },
  configureWebpack: () => {
    return {
      plugins: [
        new CopyPlugin({
          patterns: [
            {
              from: "src/assets/public/img",
              to: "img",
              globOptions: {
                dot: true,
                gitignore: true,
                ignore: ['.DS_Store'],
              },
            },
          ],
        }),
      ],
    }
  }
}
