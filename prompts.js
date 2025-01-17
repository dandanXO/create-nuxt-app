const { random } = require('superb')

module.exports = [
  {
    name: 'name',
    message: 'Project name',
    default: '{outFolder}'
  },
  {
    name: 'description',
    message: 'Project description',
    default: `My ${random()} Nuxt.js project`
  },
  {
    name: 'author',
    type: 'string',
    message: 'Author name',
    default: '{gitUser.name}',
    store: true
  },
  {
    name: 'pm',
    message: 'Choose the package manager',
    choices: [
      { name: 'Yarn', value: 'yarn' },
      { name: 'Npm', value: 'npm' }
    ],
    type: 'list',
    default: 'yarn'
  },
  {
    name: 'ui',
    message: 'Choose UI framework',
    type: 'list',
    pageSize: 15,
    choices: [
      { name: 'None', value: 'none' },
      { name: 'Tailwind CSS', value: 'tailwind' },
      // { name: 'Ant Design Vue', value: 'ant-design-vue' },
      // { name: 'Bootstrap Vue', value: 'bootstrap' },
      // { name: 'Buefy', value: 'buefy' },
      // { name: 'Bulma', value: 'bulma' },
      // { name: 'Element', value: 'element-ui' },
      // { name: 'Framevuerk', value: 'framevuerk' },
      // { name: 'iView', value: 'iview' },
      // { name: 'Tachyons', value: 'tachyons' },
      // { name: 'Vuetify.js', value: 'vuetify' }
    ],
    default: 'none'
  },
  {
    name: 'server',
    message: 'Choose custom server framework',
    type: 'list',
    pageSize: 10,
    choices: [
      { name: 'None (Recommended)', value: 'none' },
      // { name: 'AdonisJs', value: 'adonis' },
      // { name: 'Express', value: 'express' },
      // { name: 'Fastify', value: 'fastify' },
      // { name: 'Feathers', value: 'feathers' },
      // { name: 'hapi', value: 'hapi' },
      // { name: 'Koa', value: 'koa' },
      // { name: 'Micro', value: 'micro' }
    ],
    default: 'none'
  },
  {
    name: 'features',
    message: 'Choose Nuxt.js modules',
    type: 'checkbox',
    pageSize: 10,
    choices: [
      { name: 'Axios', value: 'axios' },
      { name: 'Progressive Web App (PWA) Support', value: 'pwa' }
    ],
    default: ['axios']
  },
  {
    name: 'linter',
    message: 'Choose linting tools',
    type: 'checkbox',
    pageSize: 10,
    choices: [
      { name: 'ESLint', value: 'eslint' },
      { name: 'Prettier', value: 'prettier' },
      { name: 'Lint staged files', value: 'lintStaged' }
    ],
    default: []
  },
  {
    name: 'test',
    message: 'Choose test framework',
    type: 'list',
    choices: [
      { name: 'None', value: 'none' },
      { name: 'Jest', value: 'jest' },
      { name: 'AVA', value: 'ava' }
    ],
    default: 'none'
  },
  {
    name: 'mode',
    message: 'Choose rendering mode',
    type: 'list',
    choices: [
      { name: 'Universal (SSR)', value: 'universal' },
      { name: 'Single Page App', value: 'spa' }
    ],
    default: 'universal'
  },
  {
    name: 'devTools',
    message: 'Choose development tools',
    type: 'checkbox',
    choices: [
      { name: 'jsconfig.json (Recommended for VS Code)', value: 'jsconfig.json' }
    ],
    default: []
  }
]
