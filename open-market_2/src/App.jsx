import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopNavigationBar } from "./components/header/topNavigationBar/topNavigationBar";
import Home from "./pages/home";
import Product from "./pages/product";
import Basket from "./pages/basket";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "./components/commonApi/todoApi";
import Login from "./components/login/login";
import RegisterPage from "./components/login/register";
import LogOut from "./components/login/logout";
import MyPage from "./components/mypage/mypage";

function App() {
  const [products, setProducts] = useState([]);
  const convertPrice = (price) => {
    // 가격 천단위 , 넣기
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  useEffect(() => {
    getProducts();
  }, []);
  async function getProducts() {
    await axios
      .get(baseUrl + "/product/all")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("할일이 추가됨!");
  }
  return (
    <BrowserRouter>
      <TopNavigationBar />
      <Routes>
        <Route
          path='/'
          element={
            <Home
              products={products}
              setProducts={setProducts}
              convertPrice={convertPrice}
            />
          }
        />
        <Route
          path='/product/:id'
          element={<Product convertPrice={convertPrice} />}
        />
        <Route path='/cart' element={<Basket />} />

        <Route path='/loginPage' element={<Login />} />
        <Route path='/registerPage' element={<RegisterPage />} />
        <Route path='/logout' element={<LogOut />} />
        <Route path='/mypage' element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
