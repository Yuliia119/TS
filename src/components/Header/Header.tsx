import { NavLink } from "react-router-dom";
import styles from '../../layout/layout.module.css'
import { getTotalPrice } from "../Cart/Cart";
import { useCart } from "../context/CartContext";



  
const Header = () => {
   const { cart } = useCart();
   
  return (
    <header className={styles.header}>
      <div>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.isActive : '')}
      >Home</NavLink>

        <NavLink
         to="/feedback"
        className={({ isActive }) => (isActive ? styles.isActive : '')}
      >Feedback</NavLink>

      <NavLink
         to="/cart"
        className={({ isActive }) => (isActive ? styles.isActive : '')}
      >Cart</NavLink>

      <NavLink
         to="/products"
        className={({ isActive }) => (isActive ? styles.isActive : '')}
      >Products</NavLink>

      <NavLink
         to="/login"
        className={({ isActive }) => (isActive ? styles.isActive : '')}
      >Login</NavLink>
      </div>


      <h3>{getTotalPrice(cart)}€</h3>
    </header>
  );
};

export default Header;