import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './plugins/vant.js'
import './common/index'

Vue.config.productionTip = false;

window.flags = { 
    enableLog:true,//开启日志
    enableMock:true//开启本地虚拟报文
}


new Vue({
  render: h => h(App),
}).$mount('#app')
