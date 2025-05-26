import { Link } from 'react-router-dom';
import styles from './storeCard.module.css'
import type { JSX } from 'react';
import type {IStoreProduct} from './types'

interface IStoreCardProps {
 product: IStoreProduct
}

const StoreCard = ({product}:IStoreCardProps):JSX.Element => {
  return(
    <Link to={`/store/${product.id}`} >
    <div className={styles.shopContainerCard}>
      <div>
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div>
        <h2 >{product.title}</h2>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <p>{product.rating}</p>
      </div>
    </div>
    </Link>

  )
}

export default StoreCard