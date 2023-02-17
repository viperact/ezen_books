import AdminMenu from "../pages/AdminMenu";
import UserListPage from "../pages/UserListPage";
import MainMenu from "../pages/MainMenu";

const UserList = () => {
  return (
    <>
      <MainMenu />
      <div className='container-fluid d-flex'>
        <div className='col-2'>
          <AdminMenu />
        </div>
        <div className='col-10'>
          <UserListPage />
        </div>
      </div>
    </>
  );
};

export default UserList;
