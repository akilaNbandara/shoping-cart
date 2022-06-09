<script setup>
import { computed } from "vue";
import { cart, products } from "../store";

const props = defineProps({
  productId: {
    type: String,
    required: true,
  },
});

const product = computed(() => {
  return products.productMap[props.productId];
});

const onCart = computed(() => {
  return cart.productsMap[props.productId] || 0;
});

const onAddToCart = (productId) => {
  products.addedToCart(productId);
  cart.addToCart(productId);
};

const onRemoveFromCart = (productId) => {
  products.removedFromCart(productId);
  cart.removeFromCart(productId);
};
</script>
<template>
  <div class="card_actions">
    <span>
      <button
        data-test-id="add-to-cart-btn"
        @click="onAddToCart(productId)"
        :disabled="!product.count"
      >
        +
      </button>
      <h2 data-test-id="on-cart-count-text">{{ onCart }}</h2>
      <button
        data-test-id="remove-from-cart-btn"
        @click="onRemoveFromCart(productId)"
        :disabled="!onCart"
      >
        -
      </button>
    </span>
    <h4>Added To Cart</h4>
  </div>
</template>
<style scoped lang="scss">
.card_actions {
  padding: 20px;
  text-align: center;

  span {
    display: flex;
    justify-content: space-between;

    button {
      width: 30px;
    }
  }
}
</style>
