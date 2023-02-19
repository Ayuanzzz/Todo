import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/itemtable',
        component: () => import('@/views/itemTable/index.vue'),
    }]
})

export default router