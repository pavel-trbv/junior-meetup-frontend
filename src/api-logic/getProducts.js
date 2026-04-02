import { mockFetch } from '../_lib/mockFetch.js';

export async function getProducts() {
  const response = await mockFetch('https://mockapi.local/products');
  const data = await response.json();

  return data.products;
}