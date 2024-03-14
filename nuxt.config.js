export default defineNuxtConfig({
    app: {
        head: {
            title: 'Ferretería Durán - Ferreteria Online'
        },
    },
    css: ["bootstrap/dist/css/bootstrap.min.css"],
    modules: ['@nuxtjs/strapi'],
    strapi: {
        prefix: '/api'
    },
    image: {
        dir: 'static/images',
    },
})