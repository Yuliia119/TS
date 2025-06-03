import styles from "./products.module.css";
import { useEffect, type JSX } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Loader from "../Loader/Loader";
import LimitForm from "../LimitForm/LimitForm";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loadLimitProducts, loadProducts } from "../../features/product/productAction";



export default function Products(): JSX.Element {
  // const {products, loading, loadProducts} = useProductContext();

  const { products, isLoading, error } = useAppSelector((store) => store.products);
  const dispatch = useAppDispatch();



const handleSubmit =(limit: number) =>{
  dispatch(loadLimitProducts(limit))
}
  useEffect(() => {
    // передаем в dispatch вызов нужного action
    dispatch(loadProducts());
  }, []);

  return (
    <div>
      <h1>Ptoducts</h1>
   
      <div className={styles.formContainer}>
        <LimitForm onSubmit={handleSubmit} />
      </div>

      <div className={styles.shopContainer}>{isLoading ? <Loader /> : products.map((product) => <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} image={product.image} />)}</div>
      {error && <p>⚠️ Error: {error} ⚠️</p>}
    </div>
  );
}
