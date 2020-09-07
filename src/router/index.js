import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ( /* webpackChunkName: "首页" */ '../modules/home/Index.vue')
    },
    {
        path: '/info',
        name: 'info',
        component: () =>
            import ( /* webpackChunkName: "信息查询首页" */ '../modules/info/Index.vue')
    },
    {
        path: '/platform',
        name: 'platform',
        component: () =>
            import ( /* webpackChunkName: "平台首页" */ '../modules/platform/Index.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ( /* webpackChunkName: "平台登录页" */ '../modules/platform/Login.vue')
    },
    {
        path: '/process-info',
        name: 'process-info',
        component: () =>
            import ( /* webpackChunkName: "过程信息" */ '../modules/info/ProcessInfo.vue')
    },
    {
        path: '/qualifications',
        name: 'qualificationsList',
        component: () =>
            import ( /* webpackChunkName: "符合单位列表信息" */ '../modules/info/QualificationsList.vue')
    },
    {
        path: '/info-query',
        name: 'infoQuery',
        component: () =>
            import ( /* webpackChunkName: "信息查询" */ '../modules/info/InfoQuery.vue')
    },
    {
        path: '/according-info',
        name: 'according-info',
        component: () =>
            import ( /* webpackChunkName: "匹配信息" */ '../modules/info/AccordingInfo.vue')
    },

    //lzq

    //zp

    //zxq

    //swj
    {
        path: '/site-reView',
        name: 'siteReview',
        component: () =>
            import ( /* webpackChunkName: "现场审查列表" */ '../modules/platform/SiteReView.vue')
    },
    {
        path: '/siteReView-companyList',
        name: 'siteReview-companyList',
        component: () =>
            import ( /* webpackChunkName: "现场审查列表-待审查公司列表" */ '../modules/platform/SiteReView-companyList.vue')
    },
    {
        path: '/siteReView-companyInfo',
        name: 'siteReview-companyInfo',
        component: () =>
            import ( /* webpackChunkName: "现场审查列表-待审查公司详情" */ '../modules/platform/SiteReView-companyInfo.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router