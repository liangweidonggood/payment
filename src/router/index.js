import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)
export const constantRoutes = [
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true
    },
    {
        path: '/',
        component: Layout,
        hidden: true,
        redirect: '/index',
        children: [
            {
                path: '/index',
                show:true,
                component: () => import('@/views/index'),
                meta: { title: '全部商品', icon: 'dashboard' },
                children:[
                ]
            },
            {
                path: '/detail',
                show:false,
                component: () => import('@/views/detail'),
                meta: { title: '详情页', icon: 'dashboard' }
            },
            {
                path: '/company',
                show:true,
                component: () => import('@/views/company'),
                meta: { title: '走进新辰', icon: 'dashboard' }
            },{
                path: '/confirming',
                show:false,
                component: () => import('@/views/confirming'),
                meta: { title: '确认订单', icon: 'dashboard' }
            },
            {
                path: '/classfity',
                show:false,
                component: () => import('@/views/classfity'),
                meta: { title: '分类详情', icon: 'dashboard' }
            },


        ]
    },
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router

