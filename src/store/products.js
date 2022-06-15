import { reactive } from "vue";
import { getAllProducts } from "../services/products-service";

export const products = reactive({
  productMap: {},
  loading: false,

  getProducts() {
    // Dispatch products from service => moking API
    this.loading = true;

    return new Promise((resolve) => {
      getAllProducts().then((productsMap) => {
        this.productMap = productsMap;
        this.loading = false;
        resolve(this.productsMap);
      });
    });
  },

  addProduct(product) {
    this.productMap[product.id] = product;
  },
  removeProduct(prodcutId) {
    this.productMap[prodcutId] = undefined;
  },

  removeProductFromList(prodcutId) {
    const product = this.productMap[prodcutId];

    if (product) {
      product.count--;
    }
  },

  addProductToList(prodcutId) {
    const product = this.productMap[prodcutId];

    if (product) {
      product.count++;
    }
  },
});
