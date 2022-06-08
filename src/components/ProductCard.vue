<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { products } from "../store";
import AddToCartButton from "./AddToCartButton.vue";

const props = defineProps({
  productId: {
    type: String,
    required: true,
  },
});
const router = useRouter();

const product = computed(() => {
  return products.productMap[props.productId];
});

const onClickProduct = () => {
  router.push(`/product/${props.productId}`);
};
</script>

<template>
  <div class="prod_card">
    <img class="prod_image" :src="product.image" @click="onClickProduct" />
    <div class="prod_details" @click="onClickProduct">
      <h3>{{ product.name }}</h3>
      <h4>Rs: {{ product.price }}</h4>
      <p>Available {{ product.count }} items</p>
    </div>
    <AddToCartButton :product-id="productId" />
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
    cursor: pointer;
  }

  .prod_details {
    flex: 1;
    cursor: pointer;
  }
}
</style>
