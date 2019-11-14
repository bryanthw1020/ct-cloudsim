export const state = () => {
    return {
        token: null,
        accounts: [],
        currentAccount: {},
        snackbar: {
            show: false,
            text: null,
            timeout: 3000,
            color: null,
        },
    }
}

export const getters = {
    getToken(state) {
        return state.token;
    },
    getAccounts(state) {
        return state.accounts;
    },
    getCurrentAccount(state) {
        return state.currentAccount;
    },
    getSnackbar(state) {
        return state.snackbar;
    }
}

export const mutations = {
    setToken(state, token) {
        state.token = token;
    },
    setAccounts(state, accounts) {
        state.accounts = accounts;
        state.currentAccount = accounts[0];
    },
    setCurrentAccount(state, account) {
        state.currentAccount = account;
    },
    closeSnackbar(state) {
        state.snackbar.show = false;
        state.snackbar.text = state.snackbar.color = null;
    },
    setSnackbar(state, data) {
        state.snackbar.show = true;
        state.snackbar.timeout = data.timeout;
        state.snackbar.text = data.text;
        state.snackbar.color = data.color;
    }
}

export const actions = {
    showSnackbar({ commit }, params) {
        commit('setSnackbar', params);

        if (params.timeout) {
            setTimeout(() => {
                commit('closeSnackbar');
            }, params.timeout);
        }
    },
    closeSnackbar({ commit }) {
        commit('closeSnackbar');
    }
}