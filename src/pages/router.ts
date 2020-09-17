import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: () => import('aliasPages/Home.vue') },
        { path: '/about', component: () => import('aliasPages/About.vue') },
    ]
});

export { router };