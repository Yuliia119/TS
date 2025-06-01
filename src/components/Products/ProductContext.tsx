import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { IProduct } from "./types";


interface ProductContextType {
  products: IProduct[];      // массив товаров
  loading: boolean;          // загрузка данных
  loadProducts: (limit: number) => void;        // функция загрузки товаров
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);   //глобальное хранилище для продуктов

export function useProductContext() {           //доступ к продуктам в любом компоненте
  const context = useContext(ProductContext);
  if (!context) throw new Error('Error');
  return context;
}

export function ProductProvider({ children }: { children: ReactNode }) {  //загружает данные и отдает их через контекст
  const [products, setProducts] = useState<IProduct[]>([]);   
  const [loading, setLoading] = useState<boolean>(false);    

  const loadProducts = async (limit: number) => {           
    try {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      alert("Error loading data");
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {           //загрузка товаров по умолчанию
      loadProducts(5);
    }, []);

    return (
        <ProductContext.Provider value= {{products, loading, loadProducts}}>
            {children}
        </ProductContext.Provider>
    )
}
