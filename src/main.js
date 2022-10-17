import Vue from 'vue'
import App from './App.vue'
// 路由组件引入
import router from './router'
// 全局基本样式
import '@/styles/common.css'
// element-ui组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
