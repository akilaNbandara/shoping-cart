import { reactive } from "vue";
import { faker } from "@faker-js/faker";

export const products = reactive({
  productMap: {},
  addProduct(product) {
    this.productMap[product.id] = product;
  },
  removeProduct(prodcutId) {
    this.productMap[prodcutId] = undefined;
  },

  addedToCart(prodcutId) {
    let product = this.productMap[prodcutId];

    if (product) {
      product.count--;
    }
  },

  removedFromCart(prodcutId) {
    let product = this.productMap[prodcutId];

    if (product) {
      product.count++;
    }
  },

  populateProductList(productsCount = 100) {
    for (let i = 0; i < productsCount; i++) {
      let product = {
        id: faker.random.alphaNumeric(5) + (i % 10),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        type: faker.commerce.department(),
        description: faker.commerce.productDescription(),
        count: parseInt(Math.random() * 100),
        image: faker.image.imageUrl(480, 480, "product", true),
      };

      this.addProduct(product);
    }
  },
});
