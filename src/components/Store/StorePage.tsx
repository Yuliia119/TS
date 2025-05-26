import { useEffect, useState, type JSX } from 'react'
import styles from './storePage.module.css'
import { Link, useParams } from 'react-router-dom'
import type { IStoreProduct } from './types'
import Loader from '../Loader/Loader';




export default function StorePage(): JSX.Element {
  // получаем id из адресной строки
  const { id } = useParams();

  const [product, setProduct] = useState<IStoreProduct | null>(null);

  useEffect(() => {
    // подгружаем данные по конкретному продукту
    setTimeout(()=> {
      fetch('https://dummyjson.com/products/' + id)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, 500)
  }, [id]);
  return (
    <div className={styles.container}>
      {product ? (
        <>
          <h2>{product.title}</h2>
          <h3>Rating: {product.rating} | Price: {product.price}€</h3>
          <p>{product.description}</p>
          <img src={product.thumbnail} alt="" width={280} />
          <div>
            <Link to='/lesson15'>Back to products</Link>
          </div>
        </>
      ) : <Loader />}

    </div>
  );
}
