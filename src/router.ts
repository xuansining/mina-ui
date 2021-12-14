/*@vite-ignore*/
import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import TabDemo from './components/TabDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DocDemo from './components/DocDemo.vue'
import intro from './markdown/instro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'
import { h } from 'vue'
import Markdown from './views/Markdown.vue'
const md = string => h(Markdown, { content: string, key: string })
const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {
            path: '/',
            component: Home
        }, {
            path: '/doc',
            component: Doc,
            children: [
                {
                    path: '',
                    redirect: '/doc/intro'
                },
                {
                    path: 'switch',
                    component: SwitchDemo
                },
                {
                    path: 'button',
                    component: ButtonDemo
                }, {
                    path: 'dialog',
                    component: DialogDemo
                }, {
                    path: 'tabs',
                    component: TabDemo
                },
                {
                    path: 'install',
             
                    component: md(install)
                },
                {
                    path: 'intro',
                    
                    component: md(intro)
                },
                {
                    path: 'getstart',
                    component: md(getStarted)
                }

            ]
        }
    ]



})