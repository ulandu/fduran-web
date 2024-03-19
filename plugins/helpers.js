export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.mixin({
            methods: {
                showAmount(amount) {
                    return new Intl.NumberFormat('es-ES', {
                        style: 'currency',
                        currency: 'EUR',
                    }).format(amount)
                },
            }
        }
    )
})
