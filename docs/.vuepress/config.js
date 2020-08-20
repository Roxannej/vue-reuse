const path = require('path')
module.exports = {
  title: 'Vue/JavaScript-utils',
  description: 'JavaScript utils, hooks based Vue3 composition API',
  plugins: ['@vuepress/back-to-top'],
  dest: 'doc-dist',
  base: process.env.DOCS_BASE || '/vue-hooks/',
  configureWebpack: {
    resolve: {
      alias: {
        '@xuguo/vue-hooks': path.resolve(__dirname, '../../dist/vue.hooks.esm.js')
      }
    }
  },
  // head: [],
  nav: [{ text: 'vue-hooks', link: '/vue-hooks/' }],
  themeConfig: {
    repo: 'xuguo-code/fruit',
    docsRepo: 'xuguo-code/fruit',
    logo: '/imgs/logo.png',
    docsDir: 'docs',
    editLinks: true,
    sidebarDepth: 3,
    sidebar: {
      '/': [
        '',
        {
          title: 'vue-hooks',
          sidebarDepth: 2,
          collapsable: false,
          children: [
            ['vue-hooks/', '介绍'],
            {
              title: 'Event',
              sidebarDepth: 1,
              collapsable: false,
              children: [
                ['vue-hooks/event/useEventlistener', 'useEventlistener'],
              ],
            },
          ],
        },
      ],
    },
  },
}
