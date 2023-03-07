import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/layout/index.vue'

export const constantRoutes = [
    {
        path: '/',
        // redirect:'/home'
        redirect: '/setItem'
    },
    {
        path: '/home',
        component: () => import('@/views/Home/index.vue'),
    },
    {
        path: '/itemtable',
        component: () => import('@/views/itemTable/index.vue'),
    },
    {
        path: '/setItem',
        component: Layout,
        children: [
            {
                path: 'index',
                component: () => import('@/views/setItem/index.vue'),
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory('/Todo/'),
    routes: constantRoutes
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
    console.log(to, from)
    // if (to.meta.title) {
    //   document.title = `${to.meta.title}`;
    // }
    next()
})

export default router