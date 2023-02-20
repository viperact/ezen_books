import "./App.css";
import { Route, Routes } from "react-router-dom";

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
import Newest from "./routes/Newest";
import Login from "./pages/login";
import RegisterPage from "./pages/register";
import LogOut from "./pages/logout";

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/category/:code' element={<Category />} />
        <Route path='/category' element={<Category />} />
        <Route path='/bookdetail' element={<BookDetail />} />
        <Route path='/bestseller' element={<Bestseller />} />
        <Route path='/newest' element={<Newest />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Order />} />
        <Route path='/mypage' element={<Mypage />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/booklist' element={<BookList />} />
        <Route path='/userlist' element={<UserList />} />
        <Route path='/loginPage' element={<Login />} />
        <Route path='/registerPage' element={<RegisterPage />} />
        <Route path='/logout' element={<LogOut />} />
      </Routes>
    </div>
  );
};

export default App;
