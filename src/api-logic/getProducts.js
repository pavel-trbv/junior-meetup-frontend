import { mockFetch } from '../_lib/mockFetch.js';
import { calculateDiscount } from '../utils/calculateDiscount.js';

export async function getProducts(options) {
  const response = await mockFetch('https://mockapi.local/products');
  const data = await response.json();

  return data.products.map((product) => {
    const discount = calculateDiscount(product.price, product.oldPrice);

    let cashback = undefined;

    if (options && options.cashback) {
      const { percent, topBorder } = options.cashback;
      cashback = product.price * percent / 100;

      if (cashback > topBorder) {
        cashback = topBorder;
      }

      cashback = Math.round(cashback);
    }

    return {
      ...product,
      discount,
      cashback,
    };
  });
}