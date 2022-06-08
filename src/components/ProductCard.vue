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
  <div class="prod_card">
    <img class="prod_image" :src="product.image" />
    <div class="prod_details">
      <h3>{{ product.name }}</h3>
      <h4>Rs: {{ product.price }}</h4>
      <p>Available {{ product.count }} items</p>
    </div>
    <div class="card_actions">
      <span>
        <button @click="onAddToCart(productId)" :disabled="!product.count">
          +
        </button>
        <h2>{{ onCart }}</h2>
        <button @click="onRemoveFromCart(productId)" :disabled="!onCart">
          -
        </button>
      </span>
      <h4>Added To Cart</h4>
    </div>
  </div>
</template>

<style scoped lang="scss">
.prod_card {
  background-color: azure;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.04);
  height: 200px;
  width: 700px;
  display: flex;
  align-items: center;

  > :not(:last-child) {
    margin-right: 20px;
  }

  .prod_image {
    width: 200px;
    height: 200px;
  }

  .prod_details {
    flex: 1;
  }

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
}
</style>
