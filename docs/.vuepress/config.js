module.exports = {
    title: 'Документация',
    description: "A demo documentation using VuePress",
    themeConfig: {
        nav: [
            { text: 'COUNTER', link: '/counter/' },
            { text: 'GUIDE', link: '/guide/' },
            { text: 'GULP', link: '/gulp/' },
        ],
        sidebar: [
            {
                title: 'Counter',
                collapsable: false,
                children: [
                    '/counter/counter-app'
                ]
            },
            {
                title: 'API Guide',
                collapsable: false, 
                children: [
                    '/guide/metatags',
                    '/guide/html',
                    '/guide/bugs'
                ]
            },
            {
                title: 'Gulp',
                collapsable: false,
                children: [
                    '/gulp/installation',
                    '/gulp/usage',
                    '/gulp/directory-structure',
                    '/gulp/plugins'
                ]
            },
            { 
                title: 'Packages', 
                collapsable: false,
                children: [
                    '/packages/npm/' 
                ]
            }
        ]
    }
}