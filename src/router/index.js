import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'

const router = createRouter({
    history: createWebHistory('/Todo/'),
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
        component: () => import('../views/itemTable/index.vue'),
    },
    {
        path: '/setItem',
        component: () => import('@/views/setItem/index.vue'),
    }]
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