import { mockFetch } from '../_lib/mockFetch.js';

export async function getProducts() {
  const response = await mockFetch('https://mockapi.local/products');
  const data = await response.json();

  return data.products.map((product) => {
    const discount = -Math.round((1 - (product.price / product.oldPrice)) * 100);

    return {
      ...product,
      discount,
    }
  });
}