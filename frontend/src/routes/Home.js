import MainMenu from '../pages/MainMenu';
import NewestSmall from '../pages/NewestSmall';
import BestsellerSmall from '../pages/BestsellerSmall';
import CarouselPage from '../pages/Carousel';
import '../css/main.css';
import '../css/bootstrap.min.css';

const Home = () => {
  return (
    <div className='Main-body'>
      <MainMenu />
      <CarouselPage />
      <div className='container-fulid d-flex col-xl-12 col-lg-12 mt-3'>
        <div className='col-xl-6 col-lg-6' id='bestseller-body'>
          <h4>베스트셀러</h4>
          <div className='card mt-3'>
            <BestsellerSmall />{' '}
          </div>
        </div>
        <div className='col-xl-6 col-lg-6' id='newest-body'>
          <h4>오늘의 신간</h4>
          <div className='card mt-3'>
            <NewestSmall />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
