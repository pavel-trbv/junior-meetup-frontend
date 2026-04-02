import productsData from './data/products.json';
import cashbackData from './data/cashback.json';

export const mockFetch = (url) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const parsedUrl = new URL(url);
      const pathname = parsedUrl.pathname;
      const query = parsedUrl.searchParams.get('query');

      if (pathname === '/cashback') {
        resolve({
          ok: true,
          status: 200,
          json: async () => cashbackData,
        });

        return;
      }

      if (pathname === '/products' && !query) {
        resolve({
          ok: true,
          status: 200,
          json: async () => productsData,
        });

        return;
      }

      if (pathname === '/products' && query) {
        const searchQuery = query.toLowerCase();
        const filteredProducts = productsData.products.filter(product => {
          const nameMatch = product.name.toLowerCase().includes(searchQuery);
          const brandMatch = product.brand.toLowerCase().includes(searchQuery);
          return nameMatch || brandMatch;
        });

        resolve({
          ok: true,
          status: 200,
          json: async () => ({ products: filteredProducts }),
        });

        return;
      }

      resolve({
        ok: false,
        status: 404,
        json: async () => ({ error: 'Not found' }),
      });
    }, 300);
  });
};