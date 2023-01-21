const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const glob = require('glob');
const imageminMozjpeg = require('imagemin-mozjpeg');

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
        new ImageminPlugin({
          // disable: process.env.NODE_ENV !== 'production', // Disable during development
          test: 'src/assets/public/img/**',
          externalImages: {
            context: 'src', // Important! This tells the plugin where to "base" the paths at
            sources: glob.sync('src/assets/public/img/**/*.png'),
            destination: 'src/public/assets/public/img',
            fileName: '[path][name].[ext]' // (filePath) => filePath.replace('jpg', 'webp') is also possible
          },
          pngquant: {
            quality: '55-65'
          },
          jpegtran: {
            progressive: true
          },
          optipng: {
            optimizationLevel: 4
          },
          plugins: [
            imageminMozjpeg({
              quality: 80,
              progressive: true
            })
          ],
        }),
        new CopyWebpackPlugin({
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
        })
      ],
      optimization: {
        minimize: true,
        splitChunks: {
          chunks: 'async',
          minSize: 20000,
          minRemainingSize: 0,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          enforceSizeThreshold: 50000,
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
            commons: {
              test: /[\\/]node_modules[\\/]/,
              // cacheGroupKey here is `commons` as the key of the cacheGroup
              name(module, chunks, cacheGroupKey) {
                const moduleFileName = module
                  .identifier()
                  .split('/')
                  .reduceRight((item) => item);
                const allChunksNames = chunks.map((item) => item.name).join('~');
                return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
              },
              chunks: 'all',
            },
          },
        }
      },
    }
  }
}
