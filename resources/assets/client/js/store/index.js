import Vue from 'vue';
import Vuex from 'vuex';
import * as Cookies from 'js-cookie';
import createPersistedState from 'vuex-persistedstate';
import config from '@/library/config';
import storeLoading from '&/modules/loading/store';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        storeLoading
    },
    plugins: [createPersistedState({
        key: 'home-tsuru',
        paths: [],
        getState: (key) => Cookies.getJSON(key),
        setState: (key, state) => Cookies.set(key, state, {
            expires: config.cookie.lifespan,
            secure: config.cookie.secure,
        }),
    })],
});