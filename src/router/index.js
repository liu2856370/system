import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/info',
    name: 'info',
    component: () => import(/* webpackChunkName: "信息查询首页" */ '../modules/info/Index.vue')
  },
  {
    path: '/platform',
    name: 'platform',
    component: () => import(/* webpackChunkName: "平台首页" */ '../modules/platform/Index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
