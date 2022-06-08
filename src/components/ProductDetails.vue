<script setup>
import { computed } from "vue";
import { products } from "../store";
import AddToCartButton from "./AddToCartButton.vue";

const props = defineProps({
  productId: {
    type: String,
    required: true,
  },
});

const product = computed(() => {
  return products.productMap[props.productId];
});

console.log(product);
</script>

<template>
  <div class="product_details_container">
    <img :src="product.image" />
    <div class="product_details">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <div class="type_tag">{{ product.type }}</div>
      <h4>Rs: {{ product.price }}</h4>
      <p>{{ product.count }} Items Available</p>
      <AddToCartButton :product-id="productId" class="cart_button" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.product_details_container {
  width: 100%;
  display: flex;
  padding: 10px;

  img {
    width: 400px;
    height: 400px;
  }

  .product_details {
    margin-left: 20px;

    h2,
    h4 {
      font-weight: bold;
    }
    .type_tag {
      background-color: rgb(61, 124, 103);
      color: aliceblue;
      border-radius: 10px;
      padding: 0 5px;
      width: fit-content;
      margin: 10px 0;
    }

    .cart_button {
      width: 150px;
			margin-left: -20px;
    }
  }
}
</style>
