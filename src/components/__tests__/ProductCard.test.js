import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ProductCard from "../ProductCard.vue";
import { products } from "../../store";

describe("Product Card", async () => {
  let id = "1";
  await products.getProducts();
  let product = products.productMap[id];

  it("Product Card Renderd Properly", () => {
    const wrapper = mount(ProductCard, { props: { productId: id } });
    expect(wrapper.text()).toContain(product.name);
  });

  it("Products All Data Are Correct", () => {
    const wrapper = mount(ProductCard, { props: { productId: id } });
    expect(wrapper.find(".prod_image").attributes().src).toContain(
      product.image
    );
    expect(wrapper.find(".prod_details > h4").text()).toContain(
      `Rs: ${product.price}`
    );
    expect(wrapper.find(".prod_details > p").text()).toContain(product.count);
  });
});
