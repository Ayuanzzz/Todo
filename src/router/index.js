import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/layout/index.vue'

export const constantRoutes = [
    {
        path: '/',
        redirect: '/home'
        // redirect: '/setItem'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home/index.vue'),
    },
    {
        path: '/itemtable',
        name: 'itemtable',
        component: () => import('@/views/itemTable/index.vue'),
    },
    {
        path: '/setItem',
        name: 'setItem',
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


export default router