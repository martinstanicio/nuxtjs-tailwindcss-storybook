export default {
  head: {
    htmlAttrs: { lang: "en" },
    title: "NuxtJS + TailwindCSS + Storybook",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Vue project template with a smooth NuxtJS, TailwindCSS and Storybook integration.",
      },
    ],
  },
  components: true,
  buildModules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/eslint-module",
    "@nuxtjs/stylelint-module",
  ],
  modules: ["@nuxtjs/axios"],
};
