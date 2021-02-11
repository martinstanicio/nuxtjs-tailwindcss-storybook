const { nuxifyStorybook } = require("../.nuxt-storybook/storybook/main.js");

module.exports = nuxifyStorybook({
  webpackFinal: (config, options) => config,
  stories: ["../stories/**/*.stories.@(js|mdx)"],
  addons: [],
});
