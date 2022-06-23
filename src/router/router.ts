import { createRouter, createWebHistory } from "vue-router"
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Matching from '@/views/Matching.vue'
import Game from '@/views/Game.vue'
import axios from "axios"

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/matching', component: Matching },
    { path: '/game', component: Game },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async (to) => {
    if (to.path === '/login') return
    try {
        await axios.get(`${location.protocol}//${location.host}/api/login`)
        return
    } catch {
        await router.push('/login')
    }
})

export default router