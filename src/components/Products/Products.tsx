import styles from './products.module.css'
import { useEffect, useState, type JSX } from 'react';
import type { IProduct } from './types';
import ProductCard from '../ProductCard/ProductCard';
import Loader from '../Loader/Loader';
import LimitForm from '../LimitForm/LimitForm';




export default function Products():JSX.Element {
    const [products, setProducts] = useState<IProduct[]>([]);  // массив товаров
    const [loading, setLoading] = useState<boolean>(false);     // загрузка данных
    
    
    
    const loadProducts = async (limit: number) => {            // функция загрузки товаров
      try{setLoading(true);
    const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
    const data = await res.json();
    setProducts(data);
      } catch (err){
        alert('Error loading data');
      }finally {
        setLoading(false);
      }
      
  }

useEffect(() => {           //загрузка товаров по умолчанию
    loadProducts(5)
  }, [])

 
  return (
<div>
   <h1>Ptoducts</h1>
    <div className={styles.formContainer}>
      <LimitForm onSubmit={loadProducts} />
    </div>
    
    <div className={styles.shopContainer}>
      
      {loading ? (<Loader />):
      (products.map(product => (
        <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} image={product.image}/>
      ) ))}
      
    </div>
  </div>
  )
}