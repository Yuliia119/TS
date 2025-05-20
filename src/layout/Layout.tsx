import { NavLink, Outlet } from 'react-router-dom'
import styles from './layout.module.css'

export default function Layout() {
  return (
    <>
    <header className={styles.header}>
        <NavLink className={({ isActive }) => (isActive ? styles.isActive : '')} to='/'>Home</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.isActive : '')} to='feedback'>Feedback</NavLink>

      </header>
      <main className={styles.main}>
        {/* сюда за место Outlet будут приходить переключаемые компоненты из навигации */}
        <Outlet />
      </main>
      <footer className={styles.footer}></footer>
    </>
  );
}
