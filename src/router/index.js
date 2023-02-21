import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/Todo',
        redirect: '/Todo/home'
    },
    {
        path: '/Todo/home',
        name: 'home',
        component: Home
    },
    {
        path: '/Todo/itemtable',
        component: () => import('@/views/itemTable/index.vue'),
    },
    {
        path: '/Todo/setItem',
        component: () => import('@/views/setItem/index.vue'),
    }]
})

export default router