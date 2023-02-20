import '../css/style.css';
import '../css/cart.css';
import MainMenu from '../pages/MainMenu';
import CartPage from '../pages/CartPage';

const Cart = () => {
  return (
    <div className='cart-body'>
      <MainMenu />
      <div className='container-fluid d-flex col-xl-12 col-lg-12'>
        <CartPage />
      </div>
    </div>
  );
};

export default Cart;
