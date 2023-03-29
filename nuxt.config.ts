// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@/assets/scss/main.scss',
    'line-awesome/dist/line-awesome/css/line-awesome.min.css'
  ],
  script: [
    {
      src: 'bootstrap/dist/js/bootstrap.bundle.min.js'
    }
  ],
  // styleResources: {
  //   scss: [
  //     '@/assets/scss/main.scss',
  //   ],
  // },
  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/style-resources',
  ],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})
