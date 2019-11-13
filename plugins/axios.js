require('dotenv').config();

export default function ({ app: { $axios } }) {
    $axios.onRequest(config => {
        config.data.secretKey = process.env.API_SECRET_KEY || null;

        // if (store.$auth.getToken('local')) {
        //     config.headers.common['Authorization'] = store.$auth.getToken('local');
        // }
    })
}