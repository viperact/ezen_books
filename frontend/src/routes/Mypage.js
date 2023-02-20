import '../css/style.css';
import '../css/cart.css';
import MainMenu from '../pages/MainMenu';
import CartPage from '../pages/MypagePage';

const Mypage = () => {
  return (
    <div className='cart-body'>
      <MainMenu />
      <div className='container-fluid d-flex'>
        <CartPage />
      </div>
    </div>
  );
};

export default Mypage;
