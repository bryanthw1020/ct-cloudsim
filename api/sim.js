import { apiRoute } from "../config";

export default $axios => ({
    bind(payload) {
        return $axios.$post(apiRoute.sim.bind, payload);
    },
    getAccountList(payload) {
        return $axios.$post(apiRoute.sim.getAccountList, payload);
    },
    topup(payload) {
        return $axios.$post(apiRoute.sim.topup, payload);
    },
    autoTopup(payload) {
        return $axios.$post(apiRoute.sim.autoTopup, payload);
    }
})