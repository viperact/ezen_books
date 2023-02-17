import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseUrl } from "./components/commonApi/mainApi.js";

import Home from "./routes/Home";
import Category from "./routes/Category";
import BookDetail from "./routes/BookDetail";
import Bestseller from "./routes/Bestseller";
import Cart from "./routes/Cart";
import Mypage from "./routes/Mypage";
import Order from "./routes/Order";
import Admin from "./routes/Admin";
import BookList from "./routes/BookList";
import UserList from "./routes/UserList";
import Login from "./components/login/login";
import RegisterPage from "./components/login/register";
import LogOut from "./components/login/logout";

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/loginPage' element={<Login />} />
        <Route path='/registerPage' element={<RegisterPage />} />
        <Route path='/logout' element={<LogOut />} />
        <Route index element={<Home />} />
        <Route path='/category' element={<Category />} />
        <Route path='/bookdetail' element={<BookDetail />} />
        <Route path='/bestseller' element={<Bestseller />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Order />} />
        <Route path='/mypage' element={<Mypage />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/booklist' element={<BookList />} />
        <Route path='/userlist' element={<UserList />} />
      </Routes>
    </div>
  );
};

export default App;
