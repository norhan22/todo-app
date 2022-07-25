/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */

module.exports = {
  ssr: false,
  target: "static",
  head: {
    title: "todo",
    meta: [{ charset: "utf-8" }],
  },
  loading: false,
  srcDir: "client/",
  css: ["@/assets/style.scss"],
  plugins: ["~/plugins/handleDataFromMainProcess.js"],
  buildModules: [],
  modules: [],
};
