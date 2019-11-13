import apiRoute from './apiRoute';

export default {
    resetOnError: true,
    strategies: {
        local: {
            endpoints: {
                login: { url: 'https://otp-api.cloudtokenwallet.com/api/general/getToken', method: 'post', propertyName: 'token' },
                user: { url: apiRoute.sim.getAccountList, method: 'post', propertyName: 'data' }
            }
        }
    },
    redirect: {
        login: '/authenticate',
        logout: '/authenticate',
        home: '/'
    }
}