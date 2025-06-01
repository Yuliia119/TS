import { useCart, type ICartItem } from "../context/CartContext"
import MyButton from "../myButton/MyButton";
import styles from './cart.module.css'

 // функция посчитает общую сумму товаров  в корзине
export const getTotalPrice = (cart: ICartItem[]) => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
};

export default function Cart() {

  // ! забираем данные из контекста
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className={styles.cartContainer}>
      <h1>Cart 🛒</h1>
      {cart.length === 0 ? <p>Your cart is empty...</p> : (
        <>
          {cart.map(el => (
            <div className={styles.cartItem} key={el.id}>
              <span>{el.title}</span>
              <div>
                <span className={styles.totalPrice}>  {(el.price * el.quantity).toFixed(2)}€  </span>
                <span>x{el.quantity} </span>
                <button onClick={() => removeFromCart(el.id)}>delete</button>
              </div>
            </div>
          ))}
          <div>
            <h3>Total price: {getTotalPrice(cart)}€</h3>
            <MyButton variant="danger" func={clearCart} text="clear cart" />
          </div>
        </>
      )}
    </div>
  );
}