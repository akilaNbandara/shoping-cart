<script setup>
import { computed } from "vue";
import { CartConsts } from "../consts";
import { cart } from "../store";
import ProductCard from "../components/ProductCard.vue";

const productsInCart = computed(() => cart.cartList);
const subTotal = computed(() => cart.subTotal);
const mvaCharge = computed(() => cart.mvaCharge);
const discountRatio = computed(() => cart.discountRatio);
const discount = computed(() => cart.discount);
const total = computed(() => cart.total);

const vFormat = (value, desi = 2) => {
  return parseFloat(value).toFixed(desi);
};
</script>

<template>
  <table class="cart_table">
    <thead>
      <tr>
        <th>Products</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="!productsInCart.length">
        <td>No products are added to cart yet.</td>
        <td>{{ vFormat(0) }}</td>
      </tr>

      <tr v-for="prodRecord in productsInCart" :key="prodRecord.product.id">
        <td>
          <ProductCard :productId="prodRecord.product.id" />
        </td>
        <td>
          {{ vFormat(prodRecord.total) }}
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Subtotal</td>
        <td>{{ vFormat(subTotal) }}</td>
      </tr>
      <tr>
        <td>MVA Charge (+ {{ CartConsts.MVA_PERCENTAGE }}%)</td>
        <td>+{{ vFormat(mvaCharge) }}</td>
      </tr>
      <tr>
        <td>Discount (- {{ discountRatio }}%)</td>
        <td>-{{ vFormat(discount) }}</td>
      </tr>
      <tr>
        <td>Total</td>
        <td>{{ vFormat(total) }}</td>
      </tr>
    </tfoot>
  </table>
</template>

<style scoped lang="scss">
.cart_table {
  width: 700px;

  th {
    border: 1px solid grey;
  }

  td {
    border-bottom: 1px solid grey;
  }

  tbody,
  tfoot {
    :first-child {
      td {
        border-top: 1px solid grey;
      }
    }
  }

  tr {
    td:last-child {
      text-align: end;
    }
  }
}
</style>
