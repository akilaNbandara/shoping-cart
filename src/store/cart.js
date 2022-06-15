import { reactive } from "vue";
import { CartConsts } from "../consts";
import {
  calculateDiscountRatio,
  calculateDiscount,
  generateCartList,
} from "../services/cart-service";
import { products } from "./products";

export const cart = reactive({
  productsMap: {},

  // Getters for access store data
  get cartList() {
    // Getter for strctured cart list
    return generateCartList(this.productsMap);
  },

  get subTotal() {
    return this.cartList.reduce((total, prodRecord) => {
      return total + prodRecord.total;
    }, 0);
  },

  get mvaCharge() {
    return (this.subTotal * CartConsts.MVA_PERCENTAGE) / 100;
  },

  get discountRatio() {
    return calculateDiscountRatio(this.subTotal);
  },

  get discount() {
    return calculateDiscount(this.subTotal, this.discountRatio);
  },

  get total() {
    return this.subTotal + this.mvaCharge - this.discount;
  },
  // #############################################

  // Actions to manipulae the cart state
  addToCart(productID) {
    products.removeProductFromList(productID);

    if (this.productsMap[productID]) {
      this.productsMap[productID]++;
    } else {
      this.productsMap[productID] = 1;
    }
  },

  removeFromCart(productID) {
    if (this.productsMap[productID]) {
      products.addProductToList(productID);
      this.productsMap[productID]--;
    }
  },
});
