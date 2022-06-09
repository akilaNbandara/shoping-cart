import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import AddToCartButton from "../AddToCartButton.vue";
import { products } from "../../store";
import { faker } from "@faker-js/faker";

describe("Product Card", () => {
  const productNA = {
    id: "1",
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    type: faker.commerce.department(),
    description: faker.commerce.productDescription(),
    count: 0,
    image: faker.image.imageUrl(480, 480, "product", true),
  };
  const productAvailable = {
    id: "2",
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    type: faker.commerce.department(),
    description: faker.commerce.productDescription(),
    count: 2,
    image: faker.image.imageUrl(480, 480, "product", true),
  };

  products.addProduct(productNA);
  products.addProduct(productAvailable);

  it("Add to cart Renderd Properly", () => {
    const wrapper = mount(AddToCartButton, {
      props: { productId: productNA.id },
    });
    expect(
      wrapper.find('button[data-test-id="add-to-cart-btn"]').exists()
    ).toBeTruthy();
  });

  it("AddToCart functioning properly - Not Available products", () => {
    const wrapper = mount(AddToCartButton, {
      props: { productId: productNA.id },
    });

    const addToCartBtn = wrapper.find('button[data-test-id="add-to-cart-btn"]');
    const removeFromCartBtn = wrapper.find(
      'button[data-test-id="remove-from-cart-btn"]'
    );
    const onCartCount = wrapper.find('h2[data-test-id="on-cart-count-text"]');

    expect(addToCartBtn.element).toHaveProperty("disabled", true);
    expect(onCartCount.text()).toEqual("0");
    expect(removeFromCartBtn.element).toHaveProperty("disabled", true);
  });

  it("Add to cart functioning properly - Available Items", async () => {
    const wrapper = mount(AddToCartButton, {
      props: { productId: productAvailable.id },
    });

    const addToCartBtn = wrapper.find('button[data-test-id="add-to-cart-btn"]');
    const removeFromCartBtn = wrapper.find(
      'button[data-test-id="remove-from-cart-btn"]'
    );
    const onCartCount = wrapper.find('h2[data-test-id="on-cart-count-text"]');

    expect(addToCartBtn.element).toHaveProperty("disabled", false);
    expect(onCartCount.text()).toEqual("0");
    expect(removeFromCartBtn.element).toHaveProperty("disabled", true);

    await addToCartBtn.trigger("click");
    expect(addToCartBtn.element).toHaveProperty("disabled", false);
    expect(onCartCount.text()).toEqual("1");
    expect(removeFromCartBtn.element).toHaveProperty("disabled", false);

    await addToCartBtn.trigger("click");
    expect(addToCartBtn.element).toHaveProperty("disabled", true);
    expect(onCartCount.text()).toEqual("2");
    expect(removeFromCartBtn.element).toHaveProperty("disabled", false);

    await removeFromCartBtn.trigger("click");
    expect(addToCartBtn.element).toHaveProperty("disabled", false);
    expect(onCartCount.text()).toEqual("1");
    expect(removeFromCartBtn.element).toHaveProperty("disabled", false);

    await removeFromCartBtn.trigger("click");
    expect(addToCartBtn.element).toHaveProperty("disabled", false);
    expect(onCartCount.text()).toEqual("0");
    expect(removeFromCartBtn.element).toHaveProperty("disabled", true);
  });
});
