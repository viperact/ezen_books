import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Category from "./routes/Category";
import BookDetail from "./routes/BookDetail";
import Bestseller from "./routes/Bestseller";

import RegisterPage from "./login/register";
import Login from "./login/login";
import LogOut from "./login/logout";

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route index element={<Home />} />
        <Route path='/category' element={<Category />} />
        <Route path='/bookdetail' element={<BookDetail />} />
        <Route path='/bestseller' element={<Bestseller />} />
        <Route path='/loginPage' element={<Login />} />
        <Route path='/registerPage' element={<RegisterPage />} />
        <Route path='logout' element={<LogOut />} />
      </Routes>
    </div>
  );
};

export default App;
