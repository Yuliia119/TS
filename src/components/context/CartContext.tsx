import { createContext, useContext, useState } from "react";


export interface ICartItem{                // корзина
    id: number
    title: string
    price: number
    quantity: number
}

export interface ICartContextType{         //контекст корзины
   
  cart: ICartItem[];                            // корзина
  addToCart: (product: ICartItem) => void;      // добавление элемента в корзину
  removeFromCart: (id: number) => void          // удаление элемента из корзины
  clearCart: () => void;                        // очистка корзины
}

// * 1. делаем контекст с помощью встроенного в react метода createContext()
export const CartContext = createContext<ICartContextType | undefined>(undefined)

// * 2. обертка для компонентов нашего приложения дающая доступ к данным контекста
export const CartProvider = ({children}: {children: React.ReactNode}) => {
  
  const [cart, setCart] = useState<ICartItem[]>([])         // переменная состояния для контекста

  
  const addToCart = (product: ICartItem) => {               // добавление элементов в корзину
    setCart(prevCart => {
      
      const productExist = prevCart.find(item => item.id === product.id)    // проверка продукта в корзине
      if (productExist) {
        // если такой продукт уже есть мы у него увеличиваем quantity на 1
        return prevCart.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item)
      }
      // если такого продукта нет, то мы его добавляем и в значении quantity указываем 1
      return [...prevCart, {...product, quantity: 1}]
    })
  }

  // удаление продуктов из корзины
  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id))
  }

  // очистка продуктов из корзины
  const clearCart = () => {
    setCart([])
  }

  return (
    // за место children придут обернутые в компонент элементы
    // за счет контекста эти элементы получат доступ к данным в этом компоненте
    <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  )
}

// ! функция для получении данных из контекста
// проверяет данные на undefined
// создаем 

export const useCart = () => {
  const contextData = useContext(CartContext);
  if (!contextData) {
    throw new Error('no such context 😵')
  }
  return contextData;
};