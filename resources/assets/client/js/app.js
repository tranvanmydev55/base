import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import Toasted from 'vue-toasted';
import routes from './router';
import i18n from './lang/i18n';
import store from './store';

import 'viewerjs/dist/viewer.css';
import Viewer from 'v-viewer';

Vue.use(Router);
Vue.use(Toasted);
Vue.use(Viewer);

const router = new Router({
    mode: 'history',
    routes,
});

new Vue({
    el: '#app-client',
    render: h => h(App),
    router,
    i18n,
    store
});