<script setup>
import { products } from "../store/products";
import ProductCard from "../components/ProductCard.vue";
</script>

<template>
  <div class="greetings">
    <h4 class="green">{{ msg }}</h4>
  </div>

  <div class="product_list">
    <div v-for="product in products.productMap" :key="product.id">
      <ProductCard v-if="product" :productId="product.id"></ProductCard>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product_list {
  > :not(:last-child) {
    margin-bottom: 20px;
  }
}
</style>
