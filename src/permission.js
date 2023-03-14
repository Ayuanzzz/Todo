import router from './router'
import { useRoutesStore } from '@/stores/permission'

// 全局路由守卫
router.beforeEach((to, from, next) => {
    const useRoutes = useRoutesStore()
    if (to.path == '/setItem') {
        useRoutes.SET_ROUTES()
    }
    next()
})


