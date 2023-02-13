import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Category from "./routes/Category";
import BookDetail from "./routes/BookDetail";
import Bestseller from "./routes/Bestseller";
import LoginPage from "./login/login";
import RegisterPage from "./login/register";

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route index element={<Home />} />
        <Route path='/category' element={<Category />} />
        <Route path='/bookdetail' element={<BookDetail />} />
        <Route path='/bestseller' element={<Bestseller />} />
        <Route path='/loginPage' element={<LoginPage />} />
        <Route path='/registerPage' element={<RegisterPage />} />
      </Routes>
    </div>
  );
};

export default App;
