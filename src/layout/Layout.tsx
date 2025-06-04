import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useAppDispatch } from "../app/hooks";
import { useEffect } from "react";
import { loginToken } from "../features/auth/authAction";




export default function Layout() {
  const dispatch = useAppDispatch();

  // ! проверка токена и загрузка данных по юзеру
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token: ", token);
    if (token) {
      dispatch(loginToken(token));
    }
  }, []);

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
