<script setup>
import { useRoute } from "vue-router";
import ProductDetails from "../components/ProductDetails.vue";

const route = useRoute();

const productID = route.params.id;
</script>
<template>
  <h3>Product Details</h3>
  <ProductDetails :product-id="productID"></ProductDetails>
</template>
<style></style>
