import { mockFetch } from '../_lib/mockFetch.js';
import { calculateDiscount } from '../utils/calculateDiscount.js';

export async function getProducts() {
  const response = await mockFetch('https://mockapi.local/products');
  const data = await response.json();

  return data.products.map((product) => {
    const discount = calculateDiscount(product.price, product.oldPrice);

    return {
      ...product,
      discount,
    };
  });
}