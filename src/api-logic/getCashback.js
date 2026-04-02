import { mockFetch } from '../_lib/mockFetch.js';

export async function getCashback() {
  const response = await mockFetch('https://mockapi.local/cashback');
  return await response.json();
}