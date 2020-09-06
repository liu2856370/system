import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: () => import( /* webpackChunkName: "首页" */ '../modules/home/Index.vue')
  },
  {
    path: '/info',
    name: 'info',
    component: () => import( /* webpackChunkName: "信息查询首页" */ '../modules/info/Index.vue')
  },
  {
    path: '/platform',
    name: 'platform',
    component: () => import(/* webpackChunkName: "平台首页" */ '../modules/platform/Index.vue')
  },
  {
    path: '/process-info',
    name: 'process-info',
    component: () => import(/* webpackChunkName: "过程信息" */ '../modules/info/ProcessInfo.vue')
  },
  {
    path: '/qualifications',
    name: 'qualificationsList',
    component: () => import(/* webpackChunkName: "过程信息" */ '../modules/info/QualificationsList.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router