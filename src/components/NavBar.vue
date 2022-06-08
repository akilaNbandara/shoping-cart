<script setup>
import { cart } from "../store/cart";
import { computed } from "vue";

const prodCount = computed(() => {
  return Object.values(cart.productsMap).filter((val) => !!val).length;
});
</script>

<template>
  <div class="navbar">
    <h1>Vue Shopping Cart</h1>
    <router-link to="/cart" class="cart_icon">
      <i>🛒</i>
      <span v-if="!!prodCount">{{ prodCount }}</span>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.navbar {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
  position: sticky;
  top: 0;
  background-color: rgb(113, 206, 175);

  h1 {
    flex: 1;
  }

  .cart_icon {
    position: relative;
    padding: 5px;

    i {
      font-size: 36px;
    }

    span {
      border-radius: 50%;
      width: 25px;
      height: 25px;
      position: absolute;
      background-color: rgba(255, 21, 0, 0.618);
      color: white;
      text-align: center;
    }
  }
}
</style>
