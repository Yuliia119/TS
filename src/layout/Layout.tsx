import {  Outlet } from 'react-router-dom'
import styles from './layout.module.css'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

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
