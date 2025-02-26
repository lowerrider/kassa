export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  css: ["~/assets/css/tailwind.css", "vuetify/styles"],

  build: {
    transpile: ["vuetify"],
  },

  // Оставляем SPA (можно включить SSR позже)
  ssr: false,

  compatibilityDate: "2025-01-21",

  // Указываем базовый путь для GitHub Pages
  router: {
    base: "/kassa/", // Путь на GitHub Pages
  },
});
