import { NavLink } from "react-router-dom";
import styles from '../../layout/layout.module.css'


const Header = () => {
  return (
    <header className={styles.header}>
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
    </header>
  );
};

export default Header;