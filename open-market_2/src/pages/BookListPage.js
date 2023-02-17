import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../components/commonApi/mainApi";
import Pagination from "../components/commonApi/Pagination";
import "../components/css/admin.css";

const BookListPage = () => {
  const [book, setbook] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    getbook();
  }, []);

  async function getbook() {
    await axios
      .get(baseUrl + "/booklist")
      .then((response) => {
        setbook(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("setbook added");
  }

  return (
    <div className='bookPage-Wrap container-fluid col-xl-12 col-lg-12 mt-3'>
      <div className='set_pages'>
        <label>
          페이지 당 표시할 게시물 수&nbsp;&nbsp;:&nbsp;&nbsp;
          <select
            type='number'
            value={limit}
            onChange={({ target: { value } }) => setLimit(Number(value))}
          >
            <option value='10'>10</option>
            <option value='15'>15</option>
            <option value='25'>25</option>
            <option value='50'>50</option>
          </select>
        </label>
      </div>
      <div className='row'>
        <div className='card mt-2'>
          <table className='table mb-0' id='book-title'>
            <thead>
              {/* 테이블 헤드 */}
              <tr>
                {/* <th scope='col' className='book_num'>
                  book No.
                </th> */}

                <th scope='col' className='book_id'>
                  ID
                </th>
                <th scope='col' className='book_name'>
                  Name
                </th>
                <th scope='col' className='book_email'>
                  Email
                </th>
                <th scope='col' className='book_nickname'>
                  Nickname
                </th>
                <th scope='col' className='book_role'>
                  Level
                </th>
                <th scope='col' className='create_date'>
                  가입일
                </th>
                <th scope='col' className='modify_date'>
                  수정일
                </th>
                <th scope='col' className='book-modify'>
                  Modify
                </th>
                <th scope='col' className='book-delete'>
                  Delete
                </th>
              </tr>
            </thead>
          </table>
          {book.slice(offset, offset + limit).map((book) => {
            return (
              <div key={book.book_id}>
                <table className='book_data'>
                  <tbody>
                    <tr>
                      <th scope='row'>{book.book_num}</th>
                      <td className='book_id'>{book.book_id}</td>
                      <td className='book_name'>{book.book_name}</td>
                      <td className='book_email'>{book.book_email}</td>
                      <td className='book_nickname'>{book.book_nickname}</td>
                      <td className='book_role'>{book.book_role}</td>
                      <td className='create_date'>22/02/17</td>
                      <td className='modify_date'>22/12/29</td>
                      <td className='book_modify'>수정</td>
                      <td className='book_delete'>삭제</td>
                    </tr>
                  </tbody>
                </table>
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
    </div>
  );
};
export default BookListPage;
