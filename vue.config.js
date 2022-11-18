const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  // pluginOptions
  pluginOptions: {
    // resources 资源
    // loader 加载器
    'style-resources-loader': {
      // preProcessor 预处理器
      preProcessor: 'less',
      // patterns 模式、形态
      patterns: [
        // path.resolve()方法，会将传入的路径参数，拼凑为一个完整的路径
        path.resolve(__dirname, './src/assets/styles/index.less')
      ]
    }
  }
})
