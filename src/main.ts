import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import MyCp from './components/MyCp.vue'
const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {
            path: '/',
            component: MyCp
        }
    ]



})
const app = createApp(App)
app.use(router)
app.mount('#app')
