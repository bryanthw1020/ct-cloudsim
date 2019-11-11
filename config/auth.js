import apiRoute from './apiRoute';

export default {
    resetOnError: true,
    strategies: {
        local: {
            endpoints: {
                login: { url: apiRoute.auth.login, method: 'post', propertyName: 'data.token' },
                logout: { url: apiRoute.auth.logout, method: 'post' },
                user: { url: apiRoute.auth.info, method: 'get', propertyName: 'data' }
            }
        }
    },
    redirect: {
        logout: '/login',
        home: '/'
    }
}