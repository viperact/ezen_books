import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseUrl } from '../components/commonApi/mainApi';
import Pagination from '../components/commonApi/Pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import StarRate from '../pages/StarRate';
import '../css/category.css';
import '../css/style.css';
import '../css/bootstrap.min.css';

const CategoryRight = () => {
  const [book, setbook] = useState([]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    getbook();
  }, []);

  async function getbook() {
    await axios
      .get(baseUrl + '/category')
      .then((response) => {
        setbook(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className='categoryRight col-xl-12 col-lg-12 container-fluid mt-3'>
      <div className='set_pages'>
        <label>
          페이지 당 표시할 게시물 수&nbsp;&nbsp;:&nbsp;&nbsp;
          <select
            type='number'
            value={limit}
            onChange={({ target: { value } }) => setLimit(Number(value))}
          >
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='25'>25</option>
            <option value='50'>50</option>
          </select>
        </label>
      </div>
      <div className='book-list-body colums-row mt-1'>
        {
          //////// 반복리스트
        }
        {book.slice(offset, offset + limit).map((book) => {
          const bprice = book.book_price.toLocaleString('ko-KR');
          const bdiscountedprice = (book.book_price * 0.9).toLocaleString(
            'ko-KR'
          );
          return (
            <div key={book.book_num}>
              <div className='book-list-item d-flex'>
                <div className='book-img col-2'>
                  <a href={'/bookdetail/' + book.book_num}>
                    <img src={book.book_image}></img>
                  </a>
                </div>
                <div className='book-details col-9 colums-row'>
                  <div className='book-title d-flex mt-1'>
                    <p id='book-title-name'>{book.book_title}</p>
                  </div>
                  <div className='book-writer d-flex'>
                    <p id='book-detail-category'>{book.category_code}</p>
                    <p> &nbsp;|&nbsp; </p>
                    <p id='book-writer-name'>{book.book_author}</p>
                    <p> &nbsp;|&nbsp; </p>
                    <p id='book-publisher'>{book.book_publisher}</p>
                    <p> &nbsp;|&nbsp; </p>
                    <p id='book-publishing-date'>{book.book_pubdate}</p>
                  </div>
                  <div className='book-price d-flex mt-4'>
                    <p id='book-original-price'>{bprice}원</p>
                    <p>
                      &nbsp;
                      <FontAwesomeIcon icon={faArrowRight} />
                      &nbsp;
                    </p>
                    <p id='book-discounted-price'>{bdiscountedprice}원</p>
                    <p id='book-discounted-percent'>&nbsp;(10%)</p>
                  </div>
                  <div className='rating'>
                    <StarRate />
                  </div>
                </div>
                <div className='book-cart col-2 colums-row'>
                  <div>
                    <a href='/cart'>
                      <button
                        className='btn btn-secondary'
                        id={'bookcart-' + book.book_num}
                      >
                        장바구니
                      </button>
                    </a>
                  </div>
                  <div>
                    <button
                      className='btn btn-search'
                      id={'bookorder-' + book.book_num}
                    >
                      바로구매
                    </button>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
        <footer>
          <Pagination
            total={book.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </footer>
      </div>
    </div>
  );
};
export default CategoryRight;
