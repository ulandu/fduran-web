<template>
  <div id="header">
    <header class="container">
      <div class="logo">
        <nuxt-link class="" to="/">
        <nuxt-img
            class="logo"
            height="60"
            src="logo.png"
            format="webp"
            alt="logo"
        />
        </nuxt-link>
      </div>
      <SearchBar></SearchBar>
    </header>
  </div>

</template>

<script>
import SearchBar from "./Header/SearchBar";
export default {
  name: "Header",
  components: {SearchBar}
}
</script>

<style scoped>
#header{
  background-color: #f8e433;
}

header.container{
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 12px 10px;
  margin: 0 auto;
}
</style>