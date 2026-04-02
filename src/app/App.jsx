import React, { useEffect, useState } from 'react';
import { Input } from '../components/Input';
import { Product } from '../components/Product';
import { mockFetch } from '../_lib/mockFetch.js';
import './App.css';

export function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    mockFetch('https://mockapi.local/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="wrapper">
      <Input type="text" placeholder="Поиск" />

      <div className="list">
        {products.map((product) => (<Product
          key={product.id}
          imageUrl={product.imageUrl}
          price={product.price}
          brand={product.brand}
          name={product.name}
        />))}
      </div>
    </div>
  );
}
