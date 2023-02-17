import BestsellerPage from "../pages/BestsellerPage";
import Categories from "../pages/Categories";
import MainMenu from "../pages/MainMenu";

const Bestseller = () => {
  return (
    <div className='category-body'>
      <MainMenu />
      <div className='container-fluid d-flex'>
        <div className='col-xl-2 col-lg-2'>
          <Categories />
        </div>
        <div className='col-xl-10 col-lg-10'>
          <BestsellerPage />
        </div>
      </div>
    </div>
  );
};

export default Bestseller;
