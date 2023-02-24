import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../components/commonApi/mainApi";
import Pagination from "../components/commonApi/Pagination";
import "../css/userlist.css";
import "../css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Collapse from "react-bootstrap/Collapse";

const UserListPage = () => {
  const [user, setUser] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [role, setRole] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

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

  return (
    <div className='UserPage-Wrap container-fluid col-xl-12 col-lg-12'>
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
        <div className='card'>
          <table className='table mb-0' id='user-title'>
            <thead>
              {/* 테이블 헤드 */}
              <tr>
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
                <Table>
                  <tbody>
                    <tr
                    // className='clickable'
                    // onClick={() => setOpen(!open)}
                    // aria-controls='collapse-text'
                    // aria-expanded={"#row" + user.user_id}
                    // id={"row" + user.user_id}
                    >
                      <th className='user_id'>{user.user_id}</th>
                      <td className='user_name'>{user.user_name}</td>
                      <td className='user_email'>{user.user_email}</td>
                      <td className='user_nickname'>{user.user_nickname}</td>
                      <td className='user_role'>{user.user_role}</td>
                      <td className='create_date'>22/02/17</td>
                      <td className='modify_date'>22/12/29</td>
                      <td
                        className='user_modify'
                        onClick={() => setOpen(!open)}
                        aria-controls='collapse-text'
                        aria-expanded={"#row" + user.user_id}
                        id={"row" + user.user_id}
                      >
                        수정
                      </td>
                      <td className='user_delete'>삭제</td>
                    </tr>
                    <Collapse in={open}>
                      <tr>
                        <td
                          className='collapse-text'
                          colSpan='9'
                          id={"row" + user.user_id}
                        >
                          <button onClick={handleNameChange}>Name 수정</button>
                          <button>Nickname 수정</button> &nbsp;
                          <button>권한 변경</button>
                        </td>
                      </tr>
                    </Collapse>
                  </tbody>
                </Table>
              </div>
            );
          })}

          <footer>
            <hr />
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
