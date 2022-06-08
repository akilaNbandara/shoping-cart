import { reactive } from "vue";

export const cart = reactive({
  productsMap: {},

  addToCart(productID) {
    if (this.productsMap[productID]) {
      this.productsMap[productID]++;
    } else {
      this.productsMap[productID] = 1;
    }
  },

  removeFromCart(productID) {
    if (this.productsMap[productID]) {
      this.productsMap[productID]--;
    }
  },
});
