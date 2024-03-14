import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

export default defineNuxtPlugin(() => {
    return {
        provide: {
            bootstrap: bootstrap
        }
    }
})