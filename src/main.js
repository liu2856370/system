import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/axios'
import './plugins/vant.js'
import './client/index'

Vue.config.productionTip = false;

window.flags = { 
    enableLog:true,//开启日志
    enableMock:true//开启本地虚拟报文
}


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
