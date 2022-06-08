import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ProductList from "../ProductList.vue";

describe("Product List View", () => {
  it("Product List Renderd Properly", () => {
    const wrapper = mount(ProductList, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
