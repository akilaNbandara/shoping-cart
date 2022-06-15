import { faker } from "@faker-js/faker";

export const getAllProducts = (productsCount = 100) => {
  // Populate random products
  const productsMap = {};

  for (let i = 1; i < productsCount; i++) {
    productsMap[i] = {
      id: i,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      type: faker.commerce.department(),
      description: faker.commerce.productDescription(),
      count: parseInt(Math.random() * 100),
      image: faker.image.imageUrl(480, 480, "product", true),
    };
  }

  return new Promise((resolve) => {
    setTimeout(() => resolve(productsMap), 1000);
  });
};
