import TestPage from "../pages/TestPage";
import MainMenu from "../pages/MainMenu";
import TestRight from "../pages/TestRight";

const Admin = () => {
  return (
    <>
      <MainMenu />
      <div className='Test container d-flex'>
        <div classname='col-2'>
          <TestPage />
        </div>
        <div classname='col-10'>
          <TestRight />
        </div>
      </div>
    </>
  );
};

export default Admin;
