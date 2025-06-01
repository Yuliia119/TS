import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NoPage from "./components/noPage/NoPage";
import Homepage from "./components/Homepage/Homepage";
import { homework, lessons } from "./routesConfig";
import Layout from "./layout/Layout";
import Feedback from "./components/Feedback/Feedback";
import ProductPage from "./components/ProductPage/ProductPage";
import Lesson14 from "./lessons/lesson14/Lesson14";
import Lesson15 from "./lessons/lesson15/Lesson15";
import StorePage from "./components/Store/StorePage";
import { CartProvider } from "./components/context/CartContext";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
import { ProductProvider } from "./components/Products/ProductContext";

function App() {
  return (
    // * оборачиваем все приложение в CartProvider, чтобы иметь доступ к данным из корзины
    <CartProvider>
      <ProductProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="feedback" element={<Feedback />} />
            {lessons.map(({ path, element }) => (
              <Route key={path} path={`lessons/${path}`} element={element} />
            ))}
            {homework.map(({ path, element }) => (
              <Route key={path} path={`homework/${path}`} element={element} />
            ))}
            <Route path="lesson14" element={<Lesson14 />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="lesson15" element={<Lesson15 />} />
            <Route path="store/:id" element={<StorePage />} />
            <Route path="cart" element={<Cart />} />
             <Route path="products" element={<Products />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </HashRouter>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
