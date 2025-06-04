import { NavLink } from "react-router-dom";
// import styles from '../../layout/layout.module.css'
import { getTotalPrice } from "../Cart/Cart";
import { useCart } from "../context/CartContext";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from './header.module.css'
import { logoutUser } from "../../features/auth/authSlice";

const navLinks = [
  { to: "/", title: "Home" },
  { to: "feedback", title: "Feedback" },
  { to: "products", title: "Products" },
  { to: "cart", title: "Cart" },
  { to: "login", title: "Login" },
];
  
const Header = () => {
   const { cart } = useCart();
   const dispatch = useAppDispatch();
   // ! получаем данные из redux
  const { user } = useAppSelector((store) => store.user);

  const handleLogout = () => {
    localStorage.removeItem('token')
    dispatch(logoutUser())
  }
   
  return ( 
   <header className={styles.header}>
        <nav>
        <NavLink to={"/"} className={({ isActive }) => (isActive ? styles.isActive : "")} >Home</NavLink>
        <NavLink to={"feedback"} className={({ isActive }) => (isActive ? styles.isActive : "")} >Feedback</NavLink>
        <NavLink to={"cart"} className={({ isActive }) => (isActive ? styles.isActive : "")} >Cart</NavLink>
        <NavLink to={"products"} className={({ isActive }) => (isActive ? styles.isActive : "")} >Products</NavLink>
      {/* показываем Logout если юзер вошёл, иначе - Login */}
          {user.id ? (
            <>
          
              <NavLink to={"login"} onClick={handleLogout}>Logout</NavLink>
              
              <span>Hello, {user.firstName}🙆‍♂️</span>
            </>
          ) : (
            <NavLink to={"login"} className={({ isActive }) => (isActive ? styles.isActive : "")}>Login</NavLink>
          )}
        </nav>
        <h3>{getTotalPrice(cart)}€</h3>
      </header>
  );
};

export default Header;