import '../css/category.css';
import '../css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';
const Categories = () => {
  return (
    <div className='container-fluid'>
      <div className='card category-list mt-3'>
        {Location.search}
        <ul>
          <li>
            <Link to='/category'>전체</Link>
          </li>
          <li>
            <Link to='/category?2'>소설</Link>
          </li>
          <li>
            <Link to='/category?3'>시/에세이</Link>
          </li>
          <li>
            <a href='/category/4'>경제/경영</a>
          </li>
          <li>
            <a href='/category/5'>자기계발</a>
          </li>
          <li>
            <a href='/category/6'>인문</a>
          </li>
          <li>
            <a href='/category/7'>역사/문화</a>
          </li>
          <li>
            <a href='/category/8'>사회</a>
          </li>
          <li>
            <a href='/category/9'>과학</a>
          </li>
          <li>
            <a href='/category/10'>예술/종교</a>
          </li>
          <li>
            <a href='/category/11'>어린이/청소년</a>
          </li>
          <li>
            <a href='/category/12'>생활</a>
          </li>
          <li>
            <a href='/category/13'>취미</a>
          </li>
          <li>
            <a href='/category/14'>어학</a>
          </li>
          <li>
            <a href='/category/15'>IT</a>
          </li>
          <li>
            <a href='/category/16'>학습</a>
          </li>
          <li>
            <a href='/category/17'>해외도서</a>
          </li>
          <li>
            <a href='/category/18'>라이트노벨</a>
          </li>
          <li>
            <a href='/category/19'>만화</a>
          </li>
          <li>
            <a href='/category/20'>기타</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Categories;
