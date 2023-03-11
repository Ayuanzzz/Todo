import { defineStore } from 'pinia'
import { constantRoutes } from '@/router'

export const useRoutesStore = defineStore('counter', {
    state: () => {
        return {
            routes: []
        }
    },
    actions: {
        SET_ROUTES() {
            this.routes = constantRoutes
            console.log('set-routes');
        }
    }
})