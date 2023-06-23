// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/content',
    'nuxt-swiper',
    [
      '@nuxt/image',
      {
        dir: 'assets/image',
        screens: {
          xs: 320,
          sm: 640,
          md: 768,
          lg: 1024,
          xl: 1280,
          xxl: 1536,
          '2xl': 1536,
        },
      },
    ],
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Noto Sans TC': [100, 300, 400, 500, 700, 900],
          'sans-serif': true,
        },
      },
    ],
  ],
  css: ['~/assets/css/tailwind.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
        },
      ],
    },
  },
  content: {
    watch: {
      ws: false,
    },
  },
  plugins: [{ src: '~/plugins/vue-fb-customer-chat.js', mode: 'client', ssr: false }],
  routeRules: {
    '/equipment': { redirect: '/equipment/renting' },
  },
})
