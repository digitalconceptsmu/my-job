import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@vee-validate/nuxt',
    '@vueuse/nuxt',
    'shadcn-nuxt',
  ],
  runtimeConfig: {
    public: {
      baseApiUrl: '',
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ['vee-validate'],
    },
    plugins: [
      tailwindcss(),
    ],
  },
});