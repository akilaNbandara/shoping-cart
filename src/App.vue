<script setup>
import NavBar from "./components/NavBar.vue";
import { onMounted } from "vue";
import { products } from "./store";

onMounted(() => {
  products.populateProductList();
  console.log(products);
});
</script>

<template>
  <header>
    <NavBar></NavBar>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}
</style>
