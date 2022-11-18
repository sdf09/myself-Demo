import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css' // 清除默认样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import UI from './components/globl-Comonents' // 自己的组件
import '@/assets/styles/index.less' // 自定义全局样式

Vue.use(ElementUI)
Vue.use(UI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
