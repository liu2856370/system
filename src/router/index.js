import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ( /* webpackChunkName: "homeIndex" */ '../modules/home/Index.vue')
    },
    {
        path: '/demo',
        name: 'demo',
        component: () =>
            import ( /* webpackChunkName: "demo" */ '../modules/info/Demo.vue')
    },
    {
        path: '/info',
        name: 'info',
        component: () =>
            import ( /* webpackChunkName: "infoIndex" */ '../modules/info/Index.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ( /* webpackChunkName: "platformLogin" */ '../modules/platform/Login.vue')
    },
    {
        path: '/process-info',
        name: 'process-info',
        component: () =>
            import ( /* webpackChunkName: "infoProcessInfo" */ '../modules/info/ProcessInfo.vue')
    },
    {
        path: '/qualifications',
        name: 'qualificationsList',
        component: () =>
            import ( /* webpackChunkName: "infoQualificationsList" */ '../modules/info/QualificationsList.vue')
    },
    {
        path: '/info-query',
        name: 'infoQuery',
        component: () =>
            import ( /* webpackChunkName: "infoInfoQuery" */ '../modules/info/InfoQuery.vue')
    },
    {
        path: '/according-info',
        name: 'according-info',
        component: () =>
            import ( /* webpackChunkName: "infoAccordingInfo" */ '../modules/info/AccordingInfo.vue')
    },

    //lzq
    {
        path: '/platform',
        name: 'platform',
        component: () =>
            import ( /* webpackChunkName: "platformIndex" */ '../modules/platform/Index.vue')
    },
    {
        path: '/user-center',
        name: 'userCenter',
        component: () =>
            import ( /* webpackChunkName: "platformUserCenter" */ '../modules/platform/UserCenter.vue')
    },
    //zp

    {
        path: '/set-basis-list',
        name: 'setBasisList',
        component: () =>
            import ( /* webpackChunkName: "infoSetBasisList" */ '../modules/info/SetBasisList.vue')
    },
    {
        path: '/certification-check',
        name: 'certificationCheck',
        component: () =>
            import ( /* webpackChunkName: "infoCertificationCheck" */ '../modules/info/CertificationCheck.vue')
    },
    {
        path: '/change-check',
        name: 'changeCheck',
        component: () =>
            import ( /* webpackChunkName: "infoChangeCheck" */ '../modules/info/ChangeCheck.vue')
    },
    {
        path: '/replace-check',
        name: 'replaceCheck',
        component: () =>
            import ( /* webpackChunkName: "infoReplaceCheck" */ '../modules/info/ReplaceCheck.vue')
    },
    {
        path: '/permit-archiver',
        name: 'permitArchiver',
        component: () =>
            import ( /* webpackChunkName: "platformPermitArchiver" */ '../modules/platform/PermitArchiver.vue')
    },
    {
        path: '/approval-matter',
        name: 'approvalMatter',
        component: () =>
            import ( /* webpackChunkName: "infoApprovalMatter" */ '../modules/info/ApprovalMatter.vue')
    },
    //zxq

    {
        path: '/image',
        name: 'image',
        component: () =>
            import ( /* webpackChunkName: "platformImageShow" */ '../modules/platform/ImageShow.vue')
    },
    {
        path: '/admin-ListView',
        name: 'adminListView',
        component: () =>
            import ( /* webpackChunkName: "platformAdministrationList" */ '../modules/platform/Administration-List.vue')
    },
    {
        path: '/admin-InfoView',
        name: 'adminInfoView',
        component: () =>
            import ( /* webpackChunkName: "platformAdministrationInfo" */ '../modules/platform/Administration-Info.vue')
    },
    {
        path: '/admin-DetailView',
        name: 'adminDetailView',
        component: () =>
            import ( /* webpackChunkName: "platformAdministrationDetail" */ '../modules/platform/Administration-Detail.vue')
    },
    {
        path: '/admin-EquipmentView',
        name: 'adminEquipmentView',
        component: () =>
            import ( /* webpackChunkName: "platformAdminEquipment" */ '../modules/platform/Admin-Equipment.vue')
    },
    {
        path: '/admin-InstrumentView',
        name: 'adminInstrumentView',
        component: () =>
            import ( /* webpackChunkName: "platformAdminInstrument" */ '../modules/platform/Admin-Instrument.vue')
    },
    {
        path: '/admin-AgreementView',
        name: 'adminAgreementView',
        component: () =>
            import ( /* webpackChunkName: "platformAdminAgreement" */ '../modules/platform/Admin-Agreement.vue')
    },
    {
        path: '/admin-MaterialsView',
        name: 'adminMaterialsView',
        component: () =>
            import ( /* webpackChunkName: "platformAdminMaterials" */ '../modules/platform/Admin-Materials.vue')
    },
    {
        path: '/admin-ObserverView',
        name: 'adminObserverView',
        component: () =>
            import ( /* webpackChunkName: "platformAdminObserver" */ '../modules/platform/Admin-Observer.vue')
    },
    {
        path: '/admin-NotificationView',
        name: 'adminNotificationView',
        component: () =>
            import ( /* webpackChunkName: "platformAdminNotification" */ '../modules/platform/Admin-Notification.vue')
    },
    {
        path: '/admin-ReturnableView',
        name: 'adminReturnableView',
        component: () =>
            import ( /* webpackChunkName: "platformAdminReturnable" */ '../modules/platform/Admin-Returnable.vue')
    },
    {
        path: '/admin-CorrectionView',
        name: 'adminCorrectionView',
        component: () =>
            import ( /* webpackChunkName: "platformAdminCorrection" */ '../modules/platform/Admin-Correction.vue')
    },
    {
        path: '/admin-BaiduMapView',
        name: 'adminBaiduMapView',
        component: () =>
            import ( /* webpackChunkName: "platformAdminBaiduMap" */ '../modules/platform/Admin-BaiduMap.vue')
    },
    {
        path: '/admin-NotiCexaminationView',
        name: 'adminNotiCexaminationView',
        component: () =>
            import ( /* webpackChunkName: "platformAdminNotiCexamination" */ '../modules/platform/Admin-NotiCexamination.vue')
    },
    {
        path: '/admin-UserCenterView',
        name: 'adminUserCenterView',
        component: () =>
            import ( /* webpackChunkName: "platformUserCenter" */ '../modules/platform/Admin-UserCenter.vue')
    },
    //swj
    {
        path: '/site-reView',
        name: 'siteReview',
        component: () =>
            import ( /* webpackChunkName: "platformSiteReView */ '../modules/platform/SiteReView.vue')
    },
    {
        path: '/siteReView-companyList',
        name: 'siteReview-companyList',
        component: () =>
            import ( /* webpackChunkName: "platformSiteReViewcompanyList" */ '../modules/platform/SiteReView-companyList.vue')
    },
    {
        path: '/siteReView-companyInfo',
        name: 'siteReview-companyInfo',
        component: () =>
            import ( /* webpackChunkName: "platformSiteReViewcompanyInfo" */ '../modules/platform/SiteReView-companyInfo.vue')
    },
    {
        path: '/siteReView-userCenter',
        name: 'siteReview-userCenter',
        component: () =>
            import ( /* webpackChunkName: "platformSiteReViewuserCenter" */ '../modules/platform/SiteReView-userCenter.vue')
    },
    {
        path: '/siteReView-unqualifiedEdit',
        name: 'siteReview-unqualifiedEdit',
        component: () =>
            import ( /* webpackChunkName: "platformSiteReViewunqualifiedEdit" */ '../modules/platform/SiteReView-unqualifiedEdit.vue')
    },
    {
        path: '/goMore-showAddress',
        name: 'goMore-showAddress',
        component: () =>
            import ( /* webpackChunkName: "platformSiteReViewshowAddress" */ '../modules/platform/SiteReView-companyInfo-showAddress.vue')
    },
    {
        path: '/goMore-showProduction',
        name: 'goMore-showProduction',
        component: () =>
            import ( /* webpackChunkName: "platformSiteReViewshowProduction" */ '../modules/platform/SiteReView-companyInfo-showProduction.vue')
    },
    {
        path: '/goMore-showNotice',
        name: 'goMore-showNotice',
        component: () =>
            import ( /* webpackChunkName: "platformSiteReViewshowNotice" */ '../modules/platform/SiteReView-companyInfo-showNotice.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router