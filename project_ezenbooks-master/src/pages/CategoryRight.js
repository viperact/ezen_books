import '../css/category.css';
import '../css/style.css';
import '../css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import StarRate from '../pages/StarRate';
const CategoryRight = () => {
  return (
    <div className='categoryRight col-xl-12 col-lg-12 container-fluid'>
      <div className='book-list-body colums-row mt-1'>
        {
          //////// 반복리스트
        }
        <div className='book-list-item d-flex'>
          <div className='book-img col-2'>
            <a href='/bookdetail'>
              <img src='../test/test1.jpg'></img>
            </a>
          </div>
          <div className='book-details col-8 colums-row'>
            <div className='book-title d-flex mt-2'>
              <p id='book-title-name'>세이노의 가르침</p>
              <p> &nbsp;|&nbsp; </p>
              <p id='book-detail-category'>자기계발</p>
            </div>
            <div className='book-writer d-flex'>
              <p id='book-writer-name'>세이노</p>
              <p> &nbsp;|&nbsp; </p>
              <p id='book-publisher'>데이원</p>
              <p> &nbsp;|&nbsp; </p>
              <p id='book-publishing-date'>2023년 3월</p>
            </div>
            <div className='book-price d-flex mt-4'>
              <p id='book-original-price'>7,200원</p>
              <p>
                &nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
                &nbsp;
              </p>
              <p id='book-discounted-price'>6,480원</p>
              <p id='book-discounted-percent'>&nbsp;(10%)</p>
            </div>
            <div className='rating'>
              <StarRate />
            </div>
          </div>
          <div className='book-cart col-2 colums-row'>
            <div>
              <button className='btn btn-secondary'>장바구니</button>
            </div>
            <div>
              <button className='btn btn-search'>바로구매</button>
            </div>
          </div>
        </div>
        <hr />
        {
          //////// 반복리스트
        }
        <div className='book-list-item d-flex'>
          <div className='book-img col-2'>
            <a href='#'>
              <img src='../test/test2.jpg'></img>
            </a>
          </div>
          <div className='book-details col-8 colums-row'>
            <div className='book-title d-flex mt-2'>
              <p id='book-title-name'>만일 내가 인생을 다시 산다면</p>
              <p> &nbsp;|&nbsp; </p>
              <p id='book-detail-category'>자기계발</p>
            </div>
            <div className='book-writer d-flex'>
              <p id='book-writer-name'>김혜남</p>
              <p> &nbsp;|&nbsp; </p>
              <p id='book-publisher'>메이븐</p>
              <p> &nbsp;|&nbsp; </p>
              <p id='book-publishing-date'>2022년 11월 11일</p>
            </div>
            <div className='book-price d-flex mt-4'>
              <p id='book-original-price'>17,200원</p>
              <p>
                &nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
                &nbsp;
              </p>
              <p id='book-discounted-price'>15,480원</p>
              <p id='book-discounted-percent'>&nbsp;(10%)</p>
            </div>
            <div className='rating'>
              <StarRate />
            </div>
          </div>
          <div className='book-cart col-2 colums-row'>
            <div>
              <button className='btn btn-secondary'>장바구니</button>
            </div>
            <div>
              <button className='btn btn-search'>바로구매</button>
            </div>
          </div>
        </div>
        <hr />
        <div className='book-list-item d-flex'>
          <div className='book-img col-2'>
            <a href='#'>
              <img src='../test/test3.jpg'></img>
            </a>
          </div>
          <div className='book-details col-8 colums-row'>
            <div className='book-title d-flex mt-2'>
              <p id='book-title-name'>원씽 The One Thing</p>
              <p> &nbsp;|&nbsp; </p>
              <p id='book-detail-category'>자기계발</p>
            </div>
            <div className='book-writer d-flex'>
              <p id='book-writer-name'>
                게리 켈러, 제이 파파산, 구세희(옮긴이)
              </p>
              <p> &nbsp;|&nbsp; </p>
              <p id='book-publisher'>비즈니스북스</p>
              <p> &nbsp;|&nbsp; </p>
              <p id='book-publishing-date'>2013년 8월 20일</p>
            </div>
            <div className='book-price d-flex mt-4'>
              <p id='book-original-price'>14,000원</p>
              <p>
                &nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
                &nbsp;
              </p>
              <p id='book-discounted-price'>12,600원</p>
              <p id='book-discounted-percent'>&nbsp;(10%)</p>
            </div>
            <div className='rating'>
              <StarRate />
            </div>
          </div>
          <div className='book-cart col-2 colums-row'>
            <div>
              <button className='btn btn-secondary'>장바구니</button>
            </div>
            <div>
              <button className='btn btn-search'>바로구매</button>
            </div>
          </div>
        </div>
        <hr />

        <div className='book-list-item d-flex'>
          <div className='book-img col-2'>
            <a href='#'>
              <img src='../test/test4.jpg'></img>
            </a>
          </div>
          <div className='book-details col-8 colums-row'>
            <div className='book-title d-flex mt-2'>
              <p id='book-title-name'>
                이미 늦었다고 생각하는 당신을 위한 김미경의 마흔 수업
              </p>
              <p> &nbsp;|&nbsp; </p>
              <p id='book-detail-category'>자기계발</p>
            </div>
            <div className='book-writer d-flex'>
              <p id='book-writer-name'>김미경</p>
              <p> &nbsp;|&nbsp; </p>
              <p id='book-publisher'>어웨이크북스</p>
              <p> &nbsp;|&nbsp; </p>
              <p id='book-publishing-date'>2023년 2월 15일</p>
            </div>
            <div className='book-price d-flex mt-4'>
              <p id='book-original-price'>18,000원</p>
              <p>
                &nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
                &nbsp;
              </p>
              <p id='book-discounted-price'>16,200원</p>
              <p id='book-discounted-percent'>&nbsp;(10%)</p>
            </div>
            <div className='rating'>
              <StarRate />
            </div>
          </div>
          <div className='book-cart col-2 colums-row'>
            <div>
              <button className='btn btn-secondary'>장바구니</button>
            </div>
            <div>
              <button className='btn btn-search'>바로구매</button>
            </div>
          </div>
        </div>
        <hr />

        <div className='book-list-item d-flex'>
          <div className='book-img col-2'>
            <a href='#'>
              <img src='../test/test5.jpg'></img>
            </a>
          </div>
          <div className='book-details col-8 colums-row'>
            <div className='book-title d-flex mt-2'>
              <p id='book-title-name'>역행자</p>
              <p> &nbsp;|&nbsp; </p>
              <p id='book-detail-category'>자기계발</p>
            </div>
            <div className='book-writer d-flex'>
              <p id='book-writer-name'>자청</p>
              <p> &nbsp;|&nbsp; </p>
              <p id='book-publisher'>웅진지식하우스</p>
              <p> &nbsp;|&nbsp; </p>
              <p id='book-publishing-date'>2022년 6월 3일</p>
            </div>
            <div className='book-price d-flex mt-4'>
              <p id='book-original-price'>17,500원</p>
              <p>
                &nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
                &nbsp;
              </p>
              <p id='book-discounted-price'>15,750원</p>
              <p id='book-discounted-percent'>&nbsp;(10%)</p>
            </div>
            <div className='rating'>
              <StarRate />
            </div>
          </div>
          <div className='book-cart col-2 colums-row'>
            <div>
              <button className='btn btn-secondary'>장바구니</button>
            </div>
            <div>
              <button className='btn btn-search'>바로구매</button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};
export default CategoryRight;
