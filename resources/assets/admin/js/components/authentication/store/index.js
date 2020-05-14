// import ConfigAxios from '@/library/axios';

const AUTH_SET_USER = 'AUTH_SET_USER';
// const AUTH_SET_TOKEN = 'AUTH_SET_TOKEN';

const state = {
    user: 'tranvanmy',
    token: null,
    loading: false,
};

const mutations = {
    [AUTH_SET_USER](state, user) {
        state.user = user;
    },
};

const actions = {
    /**
     * do something
     */
};

const storeAuth = {
    state,
    actions,
    mutations,
};

export default storeAuth;