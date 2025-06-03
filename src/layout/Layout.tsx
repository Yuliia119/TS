import {  NavLink, Outlet } from 'react-router-dom'
import styles from './layout.module.css'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';



const navLinks = [
  { to: '/', title: 'Home' },
  { to: 'fetch-fox', title: 'Fetch fox' },
  { to: 'feedback', title: 'Feedback' },
  { to: 'form-gender', title: 'Gender form' },
  { to: 'products', title: 'Products' },
  { to: 'cart', title: 'Cart' },
  { to: 'login', title: 'Login' },
];

export default function Layout() {

  return (
    <>
    <Header />
    <main className={styles.name}>
      <Outlet />
    </main>
    <Footer />
    </>
  );
}
