import "../components/css/style.css";
import "../components/css/cart.css";
import MainMenu from "../pages/MainMenu";
import OrderPage from "../pages/OrderPage";

const Order = () => {
  return (
    <div className='cart-body'>
      <MainMenu />
      <div className='container-fluid d-flex col-xl-12 col-lg-12'>
        <OrderPage />
      </div>
    </div>
  );
};

export default Order;
