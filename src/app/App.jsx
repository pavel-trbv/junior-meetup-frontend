import './App.css'
import { Input } from '../components/Input';
import { Product } from '../components/Product';
import {useEffect, useState} from "react";
import {mockFetch} from "../_lib/mockFetch.js";

export function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    mockFetch('https://mockapi.local/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
  }, []);

  return (
    <div className='wrapper'>
      <Input type='text' placeholder='Поиск' />

      <div className='list'>
        {products.map((product) => (
          <Product
            key={product.id}
            imageUrl={product.imageUrl}
            price={product.price}
            brand={product.brand}
            name={product.name}
          />
        ))}
      </div>
    </div>
  )
}
