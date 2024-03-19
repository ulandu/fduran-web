<template>
  <div id="header" :class="{ 'sticky': isSticky }">
    <header class="container">
      <div class="logo">
        <nuxt-link class="" to="/">
        <img
            class="logo"
            src="/static/images/logo.png"
            alt="logo"
        />
        </nuxt-link>
      </div>
      <SearchBar></SearchBar>
      <div class="buttonsHeader">

      </div>
    </header>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import SearchBar from "./Header/SearchBar";

const isSticky = ref(false);

onMounted(() => {
  handleScroll();

  window.addEventListener('scroll', handleScroll);
});

function handleScroll() {
  const header = document.getElementById("header");
  const sticky = header.offsetTop;

  isSticky.value = window.pageYOffset > sticky;
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

#header.sticky{
  animation: fadeInDown .5s ease-in-out 0s 1 normal none running;
  background-color: #f8e433;
  box-shadow: 0 0 2px rgba(0,0,0,.1);
  position: fixed;
  top: 0;
  transition: .6s;
  width: 100%;
  z-index: 99;
}

.logo{
  height:60px
}
</style>