<script setup>
import ProductList from "./components/ProductList.vue";
import NavBar from "./components/NavBar.vue";
import { computed, onMounted, ref } from "vue";
import CartViewVue from "./components/CartView.vue";
import { products } from "./store";

const routes = {
  "/": ProductList,
  "/cart": CartViewVue,
};

const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || "/"] || ProductList;
});

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
    <component :is="currentView" />
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
