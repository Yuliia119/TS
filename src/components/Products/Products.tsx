import styles from './products.module.css'
import { useEffect, useState, type JSX } from 'react';
import type { IProduct } from './types';
import ProductCard from '../ProductCard/ProductCard';
import * as Yup from 'yup'
import { useFormik } from 'formik';
import Loader from '../Loader/Loader';

const schema = Yup.object().shape({       //схема проверки
  limit: Yup.number()
  .typeError('Limit must be a number')
  .min(1, 'Limit must be greater than 1') 
  .max(20, 'Limit must be less than 20')
  .required('Limit is required'),  
}) 


export default function Products():JSX.Element {
    const [products, setProducts] = useState<IProduct[]>([]);  // массив товаров
    const [loading, setLoading] = useState<boolean>(false);     // загрузка данных
    
    const formik = useFormik({          // проверка формы  (Formik + Yup)
      initialValues: {
        limit: 5,
      },
      validationSchema: schema,
      validateOnChange: false,
      onSubmit:(values) => {
        loadProducts(values.limit)
      },
    })
    
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
     <div className={styles.shopContainer}>
      <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
        <label htmlFor="limit" className={styles.inputLabel}>How many products to show:</label>
        <input className={styles.inputField} id="limit" name='limit' type='text' value={formik.values.limit} onChange={formik.handleChange} />
        <button className={styles.submitButton} type='submit'>Load</button>
        {formik.touched.limit && formik.errors.limit && (
          <p className={styles.errorMessage}>{formik.errors.limit}</p>
        )}
      </form>
      {loading ? (<Loader />):
      (products.map(product => (
        <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} image={product.image}/>
      ) ))}
    </div>
  )
}