import { mockFetch } from '../_lib/mockFetch.js';
import { calculateDiscount } from '../utils/calculateDiscount.js';
import { calculateCashback } from '../utils/calculateCashback.js';

export async function getProducts(options) {
  const query = options && options.query ? options.query.trim() : '';

  const response = await mockFetch(`https://mockapi.local/products?query=${query}`);
  const data = await response.json();

  return data.products.map((product) => {
    const discount = calculateDiscount(product.price, product.oldPrice);

    let cashback = undefined;

    if (options && options.cashback) {
      const { percent, topBorder } = options.cashback;

      cashback = calculateCashback(product.price, percent, topBorder);
    }

    return {
      ...product,
      discount,
      cashback,
    };
  });
}
