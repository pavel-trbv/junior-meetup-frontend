import React, { useEffect, useState } from 'react';
import { Input } from '../components/Input';
import { Product } from '../components/Product';

import { getProducts } from '../api-logic/getProducts.js';

import './App.css';

export function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((productsData) => setProducts(productsData));
  }, []);

  return (
    <div className="wrapper">
      <Input type="text" placeholder="Поиск" />

      <div className="list">
        {products.map((product) => (
          <Product
            key={product.id}
            imageUrl={product.imageUrl}
            price={product.price}
            oldPrice={product.oldPrice}
            discount={product.discount}
            brand={product.brand}
            name={product.name}
          />
        ))}
      </div>
    </div>
  );
}
