import './libs/mina.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import Markdown from './views/Markdown.vue'

import 'github-markdown-css'
import { router } from './router'
const app = createApp(App)
app.use(router)

app.mount('#app')
app.component("Markdown", Markdown)
