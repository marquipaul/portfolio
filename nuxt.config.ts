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
    pageTransition: { name: 'page', mode: 'out-in' },
    // baseURL: '/portfolio/',
    head: {
      title: 'Paul M',
      meta: [
        { name: 'description', content: "Hi, I'm Paul Marquita, I develop functional Front-End Web solutions in all sizes. Using one of the most well maintained and popular JavaScript Framework to develop your dream application. Tech Stacks: Vue.js/Nuxt.js, Vuetify, Bootstrap, JavaScript, CSS, SCSS, HTML5" },
        // { hid: 'og-title', property: 'og:title', content: 'Paul | Portfolio' },
        { hid: 'og-desc', property: 'og:description', content: "Hi, I'm Paul Marquita, I develop functional Front-End Web solutions in all sizes. Using one of the most well maintained and popular JavaScript Framework to develop your dream application. Tech Stacks: Vue.js/Nuxt.js, Vuetify, Bootstrap, JavaScript, CSS, SCSS, HTML5" },
        // { hid: 'og-image', property: 'og:image', content: 'https://marquipaul.github.io/portfolio/og-image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://marquipaul.github.io/portfolio/favicon.ico' }
      ]
    },
  },
})
