export default {
  env: {},
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "{{ description }}" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  loading: { color: "#3B8070" },
  css: ["~/assets/css/main.css"],
  build: {},
  buildModules: ["@nuxt/typescript-build",
  <%_ if (ui === 'tailwind') { _%>
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    <%_ } _%>
  ],
  
  modules: [
     <%_ if (axios) { _%>
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    <%_ } _%>
  ],
 <%_ if (axios) { _%>
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  <%_ } _%>
}
