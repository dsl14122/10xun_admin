import Vue from 'vue'
import App from './App.vue'


//导入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 导入全局样式
import './assets/css/style.css'

//导入路由文件
import router from './router.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
