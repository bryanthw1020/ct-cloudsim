export default function ({ store, app: { $axios } }) {
    $axios.onRequest(config => {
        if (store.$auth.getToken('local')) {
            config.headers.common['Authorization'] = store.$auth.getToken('local');
        }
    })
}