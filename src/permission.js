import router from './router'
import { useRoutesStore } from '@/stores/permission'


// 全局路由守卫
router.beforeEach((to, from, next) => {
    console.log(to)
    console.log(to.path)
    const useRoutes = useRoutesStore()
    console.log('before---', useRoutes.routes);
    if (to.path == '/setItem') {
        console.log('huhu');
        useRoutes.SET_ROUTES()
        console.log('after---', useRoutes.routes);
    }
    next()
})


