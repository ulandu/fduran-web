<template>
<p>aaaaaaaa</p>
</template>

<script>
export default {
  name: "product-slug",
  setup(){
    defineI18nRoute({
      paths: {
        en: '/product/[slug]',
        es: '/producto/[slug]'
      }
    })
  }
}
</script>

<style scoped>

</style>