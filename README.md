# nuxtjs-tailwindcss-storybook

Vue project template with a smooth NuxtJS, TailwindCSS and Storybook integration.

## Use guide

```bash
# install dependencies
$ yarn install

# serve with hot reload (default port: 3000)
$ yarn dev # go to /_tailwind to use the Tailwind Config Viewer

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

# inspect linting errors and warnings
$ yarn lint:inspect

# fix linting errors and warnings
$ yarn lint

# run tests
$ yarn test

# launch storybook (default port: 3003)
$ yarn sb
```

## Known issues

- Linting css with @apply rules may give the following errors:
  - semi-colon expected `css(css-semicolonexpected)`
  - at-rule or selector expected `css(css-ruleorselectorexpected)`
- In `jsconfig.json`: File '.../node_modules/dotenv/types' not found. [Learn more](https://stackoverflow.com/questions/63124462/how-to-fix-file-node-modules-dotenv-types-not-found-error-coming-from-j)

## Useful link

[Adding PWA support](https://pwa.nuxtjs.org/)

[Customizing TailwindCSS](https://tailwindcss.com/docs/configuration)

[Storybook addons](https://storybook.js.org/docs/vue/configure/storybook-addon)

[commitlint: CLI prompt](https://commitlint.js.org/#/guides-use-prompt)
