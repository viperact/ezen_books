import "../components/css/bootstrap.min.css";
import "../components/css/bookdetail.css";

const BookDetailPage = () => {
  return (
    <div className='book-detail-wrap container-fluid'>
      <div className='book-detail-body colums-row'>
        <div className='book-detail d-flex mt-4'>
          <div className='book-detail-img col-4'>
            <img src='../test/test1.jpg' />
          </div>
          <div className='book-detail-right col-8'>
            <div className='book-detail-info mt-3'>
              <div className='book-detail-title'>
                세이노의 가르침
                <hr />
              </div>
              <div className='book-detail-info-data d-flex'>
                <p id='book_author'>세이노</p>
                <p>/</p>
                <p id='book_publisher'>데이원</p>
                <p>/</p>
                <p id='book_pubdate'>2023년 3월</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookDetailPage;
