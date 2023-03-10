import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

import { setupProdMockServer } from '../mockProdServer';
if (process.env.NODE_ENV === 'production') {
    setupProdMockServer();
}

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)
app.use(router)
app.mount('#app')

