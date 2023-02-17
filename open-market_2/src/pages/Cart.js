import "../components/components/css/style.css";
import "../components/components/css/cart.css";
import MainMenu from "../pages/MainMenu";
import CartPage from "../pages/CartPage";

const Cart = () => {
  return (
    <div className='cart-body'>
      <MainMenu />
      <div className='container-fluid d-flex'>
        <CartPage />
      </div>
    </div>
  );
};

export default Cart;
