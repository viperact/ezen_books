import "../components/css/style.css";
import "../components/css/admin.css";

const AdminMenu = () => {
  return (
    <div className='adminpage-wrap container-fluid d-flex mt-3'>
      <div className='adminpage-menu column-row'>
        <ul>
          <a href='./userlist'>
            <li>회원 관리</li>
          </a>
          <a href='./booklist'>
            <li>상품 관리</li>
          </a>
          <li>리뷰 관리</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminMenu;
