import AdminMenu from '../pages/AdminMenu';
import MainMenu from '../pages/MainMenu';
import UserListPage from '../pages/UserListPage';

const Admin = () => {
  return (
    <>
      <MainMenu />
      <div className='container-fluid d-flex'>
        <div className='col-1'>
          <AdminMenu />
        </div>
        <div className='col-11'>
          <UserListPage />
        </div>
      </div>
    </>
  );
};

export default Admin;
