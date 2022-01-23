// dcos/.vuepress/config.js
const { navbar, sidebar }   = require('./configs');

module.exports = {
    base: '/invest/',
    title: '凡离',
    description: '追寻确定的价值，做时间的朋友，静待花开。',
    host: '0.0.0.0',
    port: 5168,
    dest: 'docs',
    open: true,
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/images/logo-o.png',
        repo: 'ensurich/invest/',
        contributors: true,
        editLink: true,
        lastUpdated: true,
        docsRepo: 'https://github.com/ensurich/invest',
        docsBranch: 'master',
        docsDir: 'src',
        editLinkPattern: ':repo/edit/:branch/:path',
        navbar,
        sidebar
    },
    locales: {
        '/': {
            lang: 'zh-CN',
        },
    },
    plugins: [
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: '搜索',
                    }
                },
            },
        ]
    ]
}