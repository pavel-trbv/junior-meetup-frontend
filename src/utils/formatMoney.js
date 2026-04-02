const formatterCurrency = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  maximumFractionDigits: 0
});

const formatter = new Intl.NumberFormat('ru-RU');

export const formatMoney = (price, options) => {
  if (price === null || price === undefined) {
    return '';
  }

  if (options && options.withoutCurrency) {
    return formatter.format(price);
  }

  return formatterCurrency.format(price);
};