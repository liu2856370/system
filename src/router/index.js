import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: () =>
    import( /* webpackChunkName: "首页" */ '../modules/home/Index.vue')
},
{
  path: '/info',
  name: 'info',
  component: () =>
    import( /* webpackChunkName: "信息查询首页" */ '../modules/info/Index.vue')
},
{
  path: '/platform',
  name: 'platform',
  component: () =>
    import( /* webpackChunkName: "平台首页" */ '../modules/platform/Index.vue')
},
{
  path: '/login',
  name: 'login',
  component: () =>
    import( /* webpackChunkName: "平台登录页" */ '../modules/platform/Login.vue')
},
{
  path: '/process-info',
  name: 'process-info',
  component: () => import(/* webpackChunkName: "过程信息" */ '../modules/info/ProcessInfo.vue')
},
{
  path: '/qualifications',
  name: 'qualificationsList',
  component: () => import(/* webpackChunkName: "符合企业列表" */ '../modules/info/QualificationsList.vue')
},
{
  path: '/info-query',
  name: 'infoQuery',
  component: () => import(/* webpackChunkName: "信息查询" */ '../modules/info/InfoQuery.vue')
},
{
  path: '/according-info',
  name: 'accordingInfo',
  component: () => import(/* webpackChunkName: "匹配信息" */ '../modules/info/AccordingInfo.vue')
},

//lzq

//zp

{
  path: '/set-basis-list',
  name: 'setBasisList',
  component: () => import(/* webpackChunkName: "法律依据列表" */ '../modules/info/SetBasisList.vue')
},
{
  path: '/certification-check',
  name: 'certificationCheck',
  component: () => import(/* webpackChunkName: "发证检核" */ '../modules/info/CertificationCheck.vue')
},
{
  path: '/change-check',
  name: 'changeCheck',
  component: () => import(/* webpackChunkName: "发证检核" */ '../modules/info/ChangeCheck.vue')
},
{
  path: '/replace-check',
  name: 'replaceCheck',
  component: () => import(/* webpackChunkName: "发证检核" */ '../modules/info/ReplaceCheck.vue')
},
//zxq

//swj
{
  path: '/site-reView',
  name: 'siteReview',
  component: () =>
    import( /* webpackChunkName: "现场审查列表" */ '../modules/platform/SiteReView.vue')
}
]

const router = new VueRouter({
  routes
})

export default router