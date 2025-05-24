import { Link } from 'react-router-dom';
import styles from './productCard.module.css'
import type { JSX } from 'react';

interface IProductCardProps {
  id: number,
  title: string,
  price: number,
  image: string,
}

export default function ProductCard({ id, title, price, image }: IProductCardProps): JSX.Element {
  return (
    <Link to={`/product/${id}`}>
      <div className={styles.shopContainerCard}>
        <h4>{title.length < 20 ? title : title.slice(0, 20) + '...'}</h4>
        <p>Price: {price}€</p>
        <div>
          <img src={image} alt="product-img" />
        </div>
      </div>
    </Link>
  );
}