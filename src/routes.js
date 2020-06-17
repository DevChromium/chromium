import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import PageNotFound from './views/PageNotFound.vue'


export const router = new VueRouter({
    mode: "history",
    routes: [
        { path: '/', component: Home },
        { path: '/projects', component: Projects },
        { path: '*', component: PageNotFound }
    ]
})