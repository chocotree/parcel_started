import Vue from 'vue';

// import from locals
import App from './App.vue';
import { router } from './pages/router';

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');