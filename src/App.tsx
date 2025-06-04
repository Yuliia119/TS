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
import { Provider } from "react-redux";
import { store } from "./app/store";
import Login from "./components/login/Login";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

function App() {
  return (
    // * оборачиваем все приложение в store, чтобы иметь доступ к данным redux
     <Provider store={store}>
    <CartProvider>
      <ProductProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="login" element={<Login />} />

            {/* защищённые маршруты */}
            {lessons.map(({ path, element }) => (
              <Route key={path} path={`lessons/${path}`} element={<ProtectedRoute outlet={element} />} />
            ))}
            {homework.map(({ path, element }) => (
              <Route key={path} path={`homework/${path}`} element={<ProtectedRoute outlet={element} />} />
            ))}
            <Route path="lesson14" element={<ProtectedRoute outlet={<Lesson14 />} />}/>
            <Route path="product/:id" element={<ProtectedRoute outlet={<ProductPage />} /> }/>
            <Route path="lesson15" element={<ProtectedRoute outlet={<Lesson15 />} />} />
            <Route path="store/:id" element={<ProtectedRoute outlet={<StorePage />} />}/>
            <Route path="cart" element={<ProtectedRoute outlet={<Cart />} />}/>
            <Route path="products" element={<ProtectedRoute outlet={<Products />} />}/>
            
            {/* не защищённые маршруты */}
            <Route path="*" element={<NoPage />} />
            
          </Route>
        </Routes>
      </HashRouter>
      </ProductProvider>
    </CartProvider>
    </Provider>
  );
}

export default App;
