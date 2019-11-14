export const state = () => {
    return {
        token: null,
        accounts: [],
        currentAccount: {},
        forceBind: false,
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
    getForceBind(state) {
        return state.forceBind;
    },
    getSnackbar(state) {
        return state.snackbar;
    }
}

export const mutations = {
    setToken(state, token) {
        state.token = token;
    },
    setAccounts(state, params) {
        console.log(params);
        if (params.accounts.length) {
            state.accounts = params.accounts;

            if (typeof params.currentAccount !== "undefined") {
                let currentAccount = params.accounts.filter(account => {
                    return account.accountNumber == params.currentAccount.accountNumber;
                });
                state.currentAccount = currentAccount[0];
            } else {
                state.currentAccount = params.accounts[0];

            }
        } else {
            state.forceBind = true;
        }
    },
    setCurrentAccount(state, account) {
        state.currentAccount = account;
    },
    setForceBind(state, value) {
        state.forceBind = value;
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
    },
    async refreshAccounts({ commit, state }, currentAccount) {
        let accounts = await this.$api.sim.getAccountList({ token: state.token });
        commit('setAccounts', { accounts: accounts.data, currentAccount: currentAccount });
    }
}