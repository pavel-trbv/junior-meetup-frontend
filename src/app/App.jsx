import React, { useEffect, useState } from 'react';
import { Input } from '../components/Input';
import { Product } from '../components/Product';

import { getProducts } from '../api-logic/getProducts.js';
import { getCashback } from '../api-logic/getCashback.js';

import './App.css';

export function App() {
  const [query, setQuery] = useState('');

  const [cashback, setCashback] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCashback().then((cashback) => setCashback({ cashback }));
  }, []);

  useEffect(() => {
    if (cashback) {
      getProducts({
        cashback,
        query,
      }).then((productsData) => {
        setProducts(productsData);
      });
    }
  }, [query, cashback]);

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="wrapper">
      <Input type="text" placeholder="Поиск" value={query} onChange={onChange} />

      <div className="list">
        {products.map((product) => (
          <Product
            key={product.id}
            imageUrl={product.imageUrl}
            price={product.price}
            oldPrice={product.oldPrice}
            discount={product.discount}
            cashback={product.cashback}
            brand={product.brand}
            name={product.name}
          />
        ))}
      </div>
    </div>
  );
}
