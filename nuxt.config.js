export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "LifeBooster Device QR Scanner",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/postcss8"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/pwa"],

  pwa: {
    meta: {
      title: "SA PWA",
      author: "Blu-Tang-Hackaclan",
    },
    manifest: {
      name: "LifeBooster Device QR Scanner",
      short_name: "LB Device QR Scan",
      lang: "en",
      display: "standalone",
      icons: [
        {
          src: "/icons/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any maskable",
        },
        {
          src: "/icons/android-chrome-384x384.png",
          sizes: "384x384",
          type: "image/png",
        },
        {
          src: "/icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      start_url: "/",
      orientation: "portrait",
      theme_color: "#00727e",
      background_color: "#00727e",
    },
    workbox: {
      /* workbox options */
      runtimeCaching: [
        {
          urlPattern: "https://fonts.googleapis.com/.*",
          handler: "cacheFirst",
          method: "GET",
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
        },
        {
          urlPattern: "https://fonts.gstatic.com/.*",
          handler: "cacheFirst",
          method: "GET",
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
        },
        {
          urlPattern: "https://cdn.snipcart.com/.*",
          method: "GET",
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
        },
        {
          urlPattern:
            "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",
          handler: "cacheFirst",
          method: "GET",
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
        },
      ],
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
