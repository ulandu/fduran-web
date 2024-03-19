export default defineNuxtConfig({
    app: {
        head: {
            title: 'Ferretería Durán - Ferreteria Online',
            link: [
                {rel: "icon", type: "image/x-icon", href: "favicon.ico"},
            ]
        },

    },
    css: ['bootstrap/dist/css/bootstrap.css'],
    modules: [
        '@nuxtjs/strapi',
        '@nuxt/image',
        '@nuxtjs/algolia',
        '@nuxtjs/i18n'
    ],
    algolia: {
        instantSearch: {
            future: {
                preserveSharedStateOnUnmount: true,
            },
            theme: 'algolia'
        },
        future: {
            preserveSharedStateOnUnmount: true,
        }
    },
    i18n: {
        locales: [
            {
                code: "en",
                file: "en.js",
            },
            {
                code: "es",
                file: "es.js",
            },
        ],
        lazy: true,
        langDir: "lang/",
        defaultLocale: process.env.LOCALE,
    },
    plugins: [
        {src: '~/plugins/helpers.js'},
    ],
    strapi: {
        prefix: '/api'
    },
    image: {
        dir: 'static/images',
    },
})