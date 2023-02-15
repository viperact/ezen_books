const MyPage = () => {
  return (
    <>
      <div className='container'>
        <header className='blog-header py-3'>
          <div className='row flex-nowrap justify-content-between align-items-center'>
            <div className='col-4 text-center'>
              <span>{localStorage.getItem("username")}님의 Page</span>
            </div>
          </div>
        </header>
        <div></div>
      </div>
    </>
  );
};

export default MyPage;
