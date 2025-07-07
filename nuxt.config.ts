// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui'
  ],

  fonts: {
    
    providers: {
      google: false,
      googleicons: false,
      adobe: false
    }
  },

  eslint: {
    config: {
      stylistic: true
    }
  },

  css: ['~/assets/css/main.css'],

})