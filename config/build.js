/*
** Build configuration
*/
export default {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
        config.node = {
            fs: 'empty'
        }
    }
}