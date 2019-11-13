export const state = () => {
    return {
        token: null,
        user: [],
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
    getUser(state) {
        return state.user;
    },
    getSnackbar(state) {
        return state.snackbar;
    }
}

export const mutations = {
    setToken(state, token) {
        state.token = token;
    },
    setUser(state, user) {
        state.user = user;
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