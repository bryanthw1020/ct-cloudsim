import { apiRoute } from "../config";

export default $axios => ({
    getToken(payload) {
        return $axios.$post(apiRoute.ct.getToken, payload);
    }
})