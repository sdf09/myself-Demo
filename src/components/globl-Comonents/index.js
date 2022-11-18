// import Vue from 'vue'
const importFiles = require.context('./', false, /\.vue$/)

export default {
  install (Vue) {
    importFiles.keys().forEach(path => {
      // 根据路径获取各个组件信息
      const componet = importFiles(path).default
      Vue.component(componet.name, componet)
    })
  }
}
