import AdminMenu from '../pages/AdminMenu';
import BookListPage from '../pages/BookListPage';
import MainMenu from '../pages/MainMenu';

const BookList = () => {
  return (
    <>
      <MainMenu />
      <div className='container-fluid d-flex'>
        <div className='col-1'>
          <AdminMenu />
        </div>
        <div className='col-11 p-0'>
          <BookListPage />
        </div>
      </div>
    </>
  );
};

export default BookList;
