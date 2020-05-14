import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import routes from './router';
import store from './store';
require('./library/boostrap');
Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes,
});

new Vue({
    el: '#admin',
    render: h => h(App),
    router,
    store
});