// .vuepress/config.js
module.exports = {
    title: 'Mooc-UI',
    base: '/moocUI/',
    themeConfig: {
      nav: [{
        text: 'Home', link: '/',
      }, {
        text: 'Github', link: 'https://github.com/daiqiran/moocUI'
      }, {
        text: 'Npm', link: 'https://www.npmjs.com/package/mooc-ui-dqr3'
      }],
      sidebar: [
        '/',
        '/componentDocs/card',

      ]
    }
}