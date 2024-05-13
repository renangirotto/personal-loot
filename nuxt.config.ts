// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "@": "./",
  },
  devtools: { enabled: true },
  css: [
    "@/assets/css/global.css"
  ]
})
