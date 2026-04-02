export function calculateDiscount(price, oldPrice) {
  return -Math.round((1 - (price / oldPrice)) * 100);
}