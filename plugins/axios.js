require('dotenv').config();

export default function ({ store, app: { $axios } }) {
    $axios.onRequest(config => {
        if (!config.url.includes('/api/general/getToken')) {
            config.data.secretKey = process.env.API_SECRET_KEY || null;

            if (store.getters["getToken"]) {
                config.data.token = store.getters["getToken"];
            }
        }
    })
}