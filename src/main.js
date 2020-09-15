import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/axios'
import './plugins/vant.js'
import './plugins/LoadingComponent.js'
//代理请求等方法
import './client/index'
//过滤器
import './common/core/filter'
//重置公共UI样式
import './common/less/reset-vant.less'

Vue.config.productionTip = false;

window.flags = { 
    enableLog:true,//开启日志
    enableMock:false//开启本地虚拟报文
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
