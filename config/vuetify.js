import colors from 'vuetify/lib/util/colors'

/*
** vuetify module configuration
** https://github.com/nuxt-community/vuetify-module
*/

const light = {
    primary: '#AF59C4',
    secondary: '#4FC0F7',
    accent: colors.orange.lighten1,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.red.accent3,
    success: colors.green.accent3
};

export default {
    customVariables: [
        '~/assets/variables.scss'
    ],
    // treeShake: true,
    theme: {
        themes: { light }
    }
}