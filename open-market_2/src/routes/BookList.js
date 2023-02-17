import AdminMenu from "../pages/AdminMenu";
import BookListPage from "../pages/BookListPage";
import MainMenu from "../pages/MainMenu";

const BookList = () => {
  return (
    <>
      <MainMenu />
      <div className='container-fluid d-flex'>
        <div className='col-2'>
          <AdminMenu />
        </div>
        <div className='col-10'>
          <BookListPage />
        </div>
      </div>
    </>
  );
};

export default BookList;
