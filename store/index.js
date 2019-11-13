export const state = () => {
    return {
        snackbar: {
            show: false,
            text: null,
            timeout: 3000,
            color: null,
        },
    }
}

export const getters = {
    getSnackbar(state) {
        return state.snackbar;
    }
}

export const mutations = {
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
    },
    closeSnackbar({ commit }) {
        commit('closeSnackbar');
    }
}