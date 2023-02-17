import axios from "axios";
import React, { useEffect, useState } from "react";
import { slideDown, slideUp } from "../components/anim";
import { baseUrl } from "../components/commonApi/mainApi";
import Pagination from "../components/commonApi/Pagination";
import "../components/css/admin.css";

const UserListPage = () => {
  const [user, setUser] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    await axios
      .get(baseUrl + "/userlist")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("setUser added");
  }

  class UserTableRow extends React.Component {
    state = { expanded: false };

    toggleExpander = (e) => {
      if (e.target.type === "checkbox") return;

      if (!this.state.expanded) {
        this.setState({ expanded: true }, () => {
          if (this.expanderBody) {
            slideDown(this.expanderBody);
          }
        });
      } else {
        slideUp(this.expanderBody, {
          onComplete: () => {
            this.setState({ expanded: false });
          },
        });
      }
    };
  }

  return (
    <div className='UserPage-Wrap container-fluid col-xl-12 col-lg-12 mt-3'>
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
          <table className='table mb-0' id='user-title'>
            <thead>
              {/* 테이블 헤드 */}
              <tr>
                {/* <th scope='col' className='user_num'>
                  User No.
                </th> */}

                <th scope='col' className='user_id'>
                  ID
                </th>
                <th scope='col' className='user_name'>
                  Name
                </th>
                <th scope='col' className='user_email'>
                  Email
                </th>
                <th scope='col' className='user_nickname'>
                  Nickname
                </th>
                <th scope='col' className='user_role'>
                  Level
                </th>
                <th scope='col' className='create_date'>
                  가입일
                </th>
                <th scope='col' className='modify_date'>
                  수정일
                </th>
                <th scope='col' className='user-modify'>
                  Modify
                </th>
                <th scope='col' className='user-delete'>
                  Delete
                </th>
              </tr>
            </thead>
          </table>
          {user.slice(offset, offset + limit).map((user) => {
            return (
              <div key={user.user_id}>
                <table className='user_data'>
                  <tbody>
                    <tr key='main' onClick={this.toggleExpander}>
                      <th scope='row'>{user.user_num}</th>
                      <td className='user_id'>{user.user_id}</td>
                      <td className='user_name'>{user.user_name}</td>
                      <td className='user_email'>{user.user_email}</td>
                      <td className='user_nickname'>{user.user_nickname}</td>
                      <td className='user_role'>{user.user_role}</td>
                      <td className='create_date'>22/02/17</td>
                      <td className='modify_date'>22/12/29</td>
                      <td className='user_modify'>수정</td>
                      <td className='user_delete'>삭제</td>
                    </tr>
                  </tbody>
                  this.state.expanded && (
                  <tr className='expandable' key='tr-expander'>
                    <td className='folded-userdetail' colSpan='9'>
                      <div ref='expanderBody' className='fold-book-detail'>
                        &nbsp;&nbsp;&nbsp;&nbsp;고객 상세내용 폴딩 페이지 test
                        ex 주소, 전화번호, 사용금액 등등 추가 정보
                      </div>
                    </td>
                  </tr>
                  )
                </table>
              </div>
            );
          })}

          <footer>
            <Pagination
              total={user.length}
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
export default UserListPage;
