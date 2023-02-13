import '../css/bootstrap.min.css';
import '../css/bookdetail.css';

const BookDetailPage = () => {
  return (
    <div className='book-detail-wrap container-fluid'>
      <div className='book-detail-body colums-row'>
        <div className='book-title-name mt-3'>
          <p>세이노의 가르침</p>
          <hr />
        </div>
        <div className='book-detail d-flex mt-4'>
          <div className='book-detail-img col-4'>
            <img src='../test/test1.jpg' />
          </div>
          <div className='book-detail-right col-8'>
            <p>aaaa</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookDetailPage;
