const CLIENT_MAIN_LOADING = 'CLIENT_MAIN_LOADING';
const CLIENT_ERROR_PAGE = 'CLIENT_ERROR_PAGE';

const state = {
    mainLoading: {
        show: false,
    },
    errorPage: {
        status: false,
        code: null,
    },
};

const mutations = {
    [CLIENT_MAIN_LOADING](state, { mainLoading }) {
        state.mainLoading = mainLoading;
    },

    [CLIENT_ERROR_PAGE](state, { errorPage }) {
        state.errorPage = errorPage;
    },
};

const actions = {
    setClientMainLoading({ commit }, mainLoading) {
        commit(CLIENT_MAIN_LOADING, { mainLoading });
    },

    setErrorPage({ commit }, error) {
        const errorPage = error.error;
        commit(CLIENT_ERROR_PAGE, { errorPage });
    },
};

const storeLoading = {
    state,
    actions,
    mutations,
};

export default storeLoading;