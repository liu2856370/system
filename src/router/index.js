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
    {
        path: '/platform',
        name: 'platform',
        component: () =>
            import ( /* webpackChunkName: "平台首页" */ '../modules/platform/Index.vue')
    },
    {
        path: '/user-center',
        name: 'userCenter',
        component: () =>
            import ( /* webpackChunkName: "平台首页" */ '../modules/platform/UserCenter.vue')
    },
    //zp

    {
        path: '/set-basis-list',
        name: 'setBasisList',
        component: () =>
            import ( /* webpackChunkName: "法律依据列表" */ '../modules/info/SetBasisList.vue')
    },
    {
        path: '/certification-check',
        name: 'certificationCheck',
        component: () =>
            import ( /* webpackChunkName: "发证检核" */ '../modules/info/CertificationCheck.vue')
    },
    {
        path: '/change-check',
        name: 'changeCheck',
        component: () =>
            import ( /* webpackChunkName: "发证检核" */ '../modules/info/ChangeCheck.vue')
    },
    {
        path: '/replace-check',
        name: 'replaceCheck',
        component: () =>
            import ( /* webpackChunkName: "发证检核" */ '../modules/info/ReplaceCheck.vue')
    },
    {
        path: '/permit-archiver',
        name: 'permitArchiver',
        component: () =>
            import ( /* webpackChunkName: "许可档案" */ '../modules/platform/PermitArchiver.vue')
    },
    //zxq

    {
        path: '/image',
        name: 'image',
        component: () =>
            import ( /* webpackChunkName: "平台首页img" */ '../modules/platform/ImageShow.vue')
    },
    {
        path: '/admin-ListView',
        name: 'adminListView',
        component: () =>
            import ( /* webpackChunkName: "行政审批列表" */ '../modules/platform/Administration-List.vue')
    },
    {
        path: '/admin-InfoView',
        name: 'adminInfoView',
        component: () =>
            import ( /* webpackChunkName: "行政审批信息" */ '../modules/platform/Administration-Info.vue')
    },
    {
        path: '/admin-DetailView',
        name: 'adminDetailView',
        component: () =>
            import ( /* webpackChunkName: "行政审批信息" */ '../modules/platform/Administration-Detail.vue')
    },
    {
        path: '/admin-EquipmentView',
        name: 'adminEquipmentView',
        component: () =>
            import ( /* webpackChunkName: "行政审批-生产设备信息" */ '../modules/platform/Admin-Equipment.vue')
    },
    {
        path: '/admin-InstrumentView',
        name: 'adminInstrumentView',
        component: () =>
            import ( /* webpackChunkName: "行政审批-仪器、设备信息" */ '../modules/platform/Admin-Instrument.vue')
    },
    {
        path: '/admin-AgreementView',
        name: 'adminAgreementView',
        component: () =>
            import ( /* webpackChunkName: "行政审批-原材料外构件、外协议信息" */ '../modules/platform/Admin-Agreement.vue')
    },
    {
        path: '/admin-MaterialsView',
        name: 'adminMaterialsView',
        component: () =>
            import ( /* webpackChunkName: "行政审批-许可档案-申请材料信息" */ '../modules/platform/Admin-Materials.vue')
    },
    {
        path: '/admin-ObserverView',
        name: 'adminObserverView',
        component: () =>
            import ( /* webpackChunkName: "行政审批-许可档案-观察员报告信息" */ '../modules/platform/Admin-Observer.vue')
    },
    {
        path: '/admin-NotificationView',
        name: 'adminNotificationView',
        component: () =>
            import ( /* webpackChunkName: "行政审批-许可档案-受理通知书信息" */ '../modules/platform/Admin-Notification.vue')
    },
    {
        path: '/admin-ReturnableView',
        name: 'adminReturnableView',
        component: () =>
            import ( /* webpackChunkName: "行政审批-综合查询-材料退回信息" */ '../modules/platform/Admin-Returnable.vue')
    },
    {
        path: '/admin-CorrectionView',
        name: 'adminCorrectionView',
        component: () =>
            import ( /* webpackChunkName: "行政审批-综合查询-材料补正信息" */ '../modules/platform/Admin-Correction.vue')
    },
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
    },
    {
        path: '/siteReView-userCenter',
        name: 'siteReview-userCenter',
        component: () =>
            import ( /* webpackChunkName: "现场审查列表-用户中心" */ '../modules/platform/SiteReView-userCenter.vue')
    },
    {
        path: '/siteReView-unqualifiedEdit',
        name: 'siteReview-unqualifiedEdit',
        component: () =>
            import ( /* webpackChunkName: "现场审查列表-编辑不符合项" */ '../modules/platform/SiteReView-unqualifiedEdit.vue')
    },
    {
        path: '/goMore-showAddress',
        name: 'goMore-showAddress',
        component: () =>
            import ( /* webpackChunkName: "现场审查列表-详情-更多-展示生产地址" */ '../modules/platform/SiteReView-companyInfo-showAddress.vue')
    },
    {
        path: '/goMore-showProduction',
        name: 'goMore-showProduction',
        component: () =>
            import ( /* webpackChunkName: "现场审查列表-详情-更多-申报产品" */ '../modules/platform/SiteReView-companyInfo-showProduction.vue')
    },
    {
        path: '/goMore-showNotice',
        name: 'goMore-showNotice',
        component: () =>
            import ( /* webpackChunkName: "现场审查列表-详情-更多-展示现场核查通知书" */ '../modules/platform/SiteReView-companyInfo-showNotice.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router