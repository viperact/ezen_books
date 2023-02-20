import '../css/style.css';
import '../css/category.css';
import MainMenu from '../pages/MainMenu';
import Categories from '../pages/Categories';
import BookDetailPage from '../pages/BookDetailPage';

const BookDetail = () => {
  return (
    <div className='book-detail-body'>
      <MainMenu />
      <div className='container-fluid d-flex'>
        <div className='col-xl-2 col-lg-2'>
          <Categories />
        </div>
        <div className='col-xl-10 col-lg-10'>
          <BookDetailPage />
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
