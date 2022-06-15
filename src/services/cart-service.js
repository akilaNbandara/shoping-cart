import { CartConsts } from "../consts";
import { products } from "../store";

const { MAX_DISCOUNT_RATIO, DISCOUNT_PERCENTAGE, DISCOUNT_MARGING } =
  CartConsts;

export const generateCartList = (productsMap) => {
  return Object.entries(productsMap)
    .map(([productId, count]) => {
      if (!count) return;

      const product = products.productMap[productId];
      const total = product.price * count;

      return {
        product,
        count,
        total,
      };
    })
    .filter((prodRec) => !!prodRec);
};

export const calculateDiscountRatio = (subTotal) => {
  return Math.min(
    MAX_DISCOUNT_RATIO,
    DISCOUNT_PERCENTAGE * parseInt(subTotal / DISCOUNT_MARGING)
  );
};

export const calculateDiscount = (subTotal, discountRatio) => {
  return (subTotal * discountRatio) / 100;
};
