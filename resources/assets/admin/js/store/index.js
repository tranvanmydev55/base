import Vue from 'vue';
import Vuex from 'vuex';
import * as Cookies from 'js-cookie';
import createPersistedState from 'vuex-persistedstate';
import config from '@/library/config';
import storeAuth from '@/components/authentication/store';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        storeAuth,
    },
    plugins: [createPersistedState({
        key: 'admin',
        paths: [
            'storeAuth.user',
        ],


        getState: (key) => Cookies.getJSON(key),
        setState: (key, state) => Cookies.set(key, state, {
            expires: config.cookie.lifespan,
            secure: config.cookie.secure,
        }),
    })],
});