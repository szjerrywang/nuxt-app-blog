// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    'shadcn-nuxt',
  ],
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  colorMode: {
    classSuffix: '',
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-11-01',

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  fonts: {

    providers: {
      google: false,
      googleicons: false,
      adobe: false,
    },
  },

  i18n: {
    locales: [{
      code: 'zh',
      name: 'Chinese',
      file: 'zh.json',
    }, {
      code: 'en',
      name: 'English',
      file: 'en.json',
    }],
    bundle: {
      optimizeTranslationDirective: false,
    },
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: '~/components/ui',
  },
})
