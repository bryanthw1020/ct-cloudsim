export const state = () => {
    return {
        showConfirm: false,
        showResult: false,
        selectedDataPass: {}
    }
}

export const getters = {
    getShowConfirm(state) {
        return state.showConfirm;
    },
    getShowResult(state) {
        return state.showResult;
    },
    getSelectedDataPass(state) {
        return state.selectedDataPass;
    }
}

export const mutations = {
    setShowConfirm(state, value) {
        state.showConfirm = value;
    },
    setShowResult(state, value) {
        state.showResult = value;
    },
    setSelectedDataPass(state, dataPass) {
        state.selectedDataPass = dataPass;
    }
}

export const actions = {
    //
}