import "../../css/bootstrap.min.css";
import "../../css/style.css";
import "./topNavigationBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const TopNavigationBar = () => {
  return (
    <div className='main-menu'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-2 col-lg-2 mt-4 mb-4'>
            <div className='header__logo'>
              <a href='/'>
                <img src='images/MainLogo.png' alt='Main Logos' />
              </a>
            </div>
          </div>
          <div className='container colums-row col-xl-8 col-lg-8'>
            <div className='row'>
              <nav className='header__menu'>
                <ul>
                  <li className='active'>
                    <a href='/'>Home</a>
                  </li>
                  <li>
                    <a href='/category'>카테고리</a>
                    <ul className='dropdown'>
                      <li>
                        <a href='#'>전체</a>
                      </li>
                      <li>
                        <a href='#'>소설</a>
                      </li>
                      <li>
                        <a href='#'>시/에세이</a>
                      </li>
                      <li>
                        <a href='#'>경제/경영</a>
                      </li>
                      <li>
                        <a href='#'>자기계발</a>
                      </li>
                      <li>
                        <a href='#'>인문</a>
                      </li>
                      <li>
                        <a href='#'>역사/문화</a>
                      </li>
                      <li>
                        <a href='#'>사회</a>
                      </li>
                      <li>
                        <a href='#'>과학</a>
                      </li>
                      <li>
                        <a href='#'>예술/종교</a>
                      </li>
                      <li>
                        <a href='#'>어린이/청소년</a>
                      </li>
                      <li>
                        <a href='#'>생활</a>
                      </li>
                      <li>
                        <a href='#'>취미</a>
                      </li>
                      <li>
                        <a href='#'>어학</a>
                      </li>
                      <li>
                        <a href='#'>IT</a>
                      </li>
                      <li>
                        <a href='#'>학습</a>
                      </li>
                      <li>
                        <a href='#'>해외도서</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='/bestseller'>베스트셀러</a>
                  </li>
                  <li>
                    <a href='/ranking29'>랭킹#20</a>
                  </li>
                  <li>
                    <a href='/newest'>신간</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='row'>
              <div className='search__right col-xl-9 col-lg-7'>
                <div className='input-group'>
                  <div className='form-outline'>
                    <input
                      type='search'
                      id='main-search'
                      className='form-control'
                    />
                    <label className='form-label' for='main-search'></label>
                  </div>
                  <button type='button' className='btn btn-search'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-2 col-lg-2 container colums-row'>
            <div className='header__right'>
              <div className='header__right__auth'>
                {localStorage.getItem("username") !== null ? (
                  <div>
                    <Link className='nav-link' to='/logout'>
                      {localStorage.getItem("username") + " LOGOUT"}
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link to='/loginPage'>
                      <span>Login</span>
                    </Link>

                    <Link to='registerPage'>
                      <span>Register</span>
                    </Link>
                  </div>
                )}
              </div>

              <div className='row'>
                <div className='header__right__widget container d-flex'>
                  <div className='fontawsome' id='fauser'>
                    <Link to='/mypage'>
                      <a href='#'>
                        <FontAwesomeIcon icon={faUser} size='3x' />
                      </a>
                    </Link>
                  </div>

                  <Link to='/cart'>
                    <div className='fontawsome' id='faCartShopping'>
                      <a href='#'>
                        <FontAwesomeIcon icon={faCartShopping} size='3x' />
                      </a>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigationBar;
