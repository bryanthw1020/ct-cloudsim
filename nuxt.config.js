import { auth, axios, build, head, proxy, vuetify } from './config';

export default {
  mode: 'universal',
  head,
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#AF59C4' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/sass/theme'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/api',
    '@/plugins/axios',
    '@/plugins/bus',
    // '@/plugins/filter',
    // '@/plugins/helper',
  ],
  /*
  ** Nuxt.js modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    '@nuxtjs/proxy',
    '@nuxtjs/dotenv',
    '@nuxtjs/device'
  ],
  /**
   * Router configuration
   */
  router: {
    middleware: ['auth']
  },
  auth,
  axios,
  proxy,
  vuetify,
  build
}
