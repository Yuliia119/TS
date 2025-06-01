import styles from "./products.module.css";
import { type JSX } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Loader from "../Loader/Loader";
import LimitForm from "../LimitForm/LimitForm";
import { useProductContext } from "./ProductContext";

export default function Products(): JSX.Element {
  const {products, loading, loadProducts} = useProductContext();

  return (
    <div>
      <h1>Ptoducts</h1>
      <div className={styles.formContainer}>
        <LimitForm onSubmit={loadProducts} />
      </div>

      <div className={styles.shopContainer}>{loading ?( <Loader /> ): (products.map(product => (<ProductCard key={product.id} id={product.id} title={product.title} price={product.price} image={product.image} />)))}</div>
    </div>
  );
}
