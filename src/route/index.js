import { createRouter, createWebHistory } from "vue-router";
import CartViewVue from "../views/CartView.vue";
import ProductDetailedViewVue from "../views/ProductDetailedView.vue";
import ProductListViewVue from "../views/ProductListView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Product List", component: ProductListViewVue },
    { path: "/cart", name: "Cart", component: CartViewVue },
    {
      path: "/product/:id",
      name: "Product Detail",
      component: ProductDetailedViewVue,
    },
  ],
});

export default router;
