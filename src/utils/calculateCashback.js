export function calculateCashback(price, percent, topBorder) {
  let cashback = price * percent / 100;

  if (cashback > topBorder) {
    cashback = topBorder;
  }

  return Math.round(cashback);
}