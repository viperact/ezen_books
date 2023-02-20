import {
  faArrowRight,
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import StarRate from './StarRate';
import '../css/cart.css';
import '../css/bootstrap.min.css';

let init = 1;

const CartPage = () => {
  const [num, setNum] = useState(1);

  const increase = () => {
    setNum(num + 1);
  };

  const decrease = () => {
    if (num > 1) setNum(num - 1);
  };

  return (
    <div className='cartpage-wrap container-fluid d-flex'>
      {
        ///////////반복 아이템
      }

      <div class='cart-wrap colums-row container-fluid'>
        <div className='cart-item d-flex' id='cart-item-1'>
          <div className='cart-book-img col-2' id>
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
          <div className='book-cart-count col-2 colums-row'>
            <div className='book-cart-quantity container d-flex'>
              <button
                className='btn btn-search'
                onClick={increase}
                id='num_plus'
              >
                <p>
                  <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </p>
              </button>
              <p id='buying-book-quantity'>{num}</p>
              <button
                className='btn btn-search'
                onClick={decrease}
                id='num_minus'
              >
                <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
              </button>
            </div>
          </div>
          <hr />
        </div>

        {
          ///////////반복 아이템
        }

        {/* <div className='cart-item d-flex' id='cart-item-2'>
          <div className='book-img col-2'>
            <a href='/bookdetail'>
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
          <div className='book-cart-count col-2 colums-row'>
            <div className='book-cart-quantity container d-flex'>
              <button
                className='btn btn-search'
                onClick={increase}
                id='num_plus'
              >
                <p>
                  <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </p>
              </button>
              <p id='buying-book-quantity'>{num}</p>
                <button
                  className='btn btn-search'
                  onClick={decrease}
                  id='num_minus'
                >
                  <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                </button>
            </div>
          </div>
          <hr />
        </div> */}
        {
          ///////////반복 아이템
        }
      </div>
      <div className='cart-sum card conainer colums-row col-xl-2 col-lg-2'>
        <div className='cart-sum-wrap mt-3'>
          <div className='cart-sum-price d-flex'>
            <p className='title'>상품금액 : </p>
            <p className='price'>100원 </p>
          </div>
          <div class='cart-sum-shipping d-flex'>
            <p className='title'>배 송 비 : </p>
            <p className='price'> 0원 </p>
          </div>
          <hr />
          <div className='cart-total-price d-flex'>
            <p className='title'>결제금액 : </p>
            <p className='price'>100원 </p>
          </div>
          <div calssName='cart-order'>
            <a href='/order'>
              <button className='btn btn-search btn-cart-order'>
                주문하기
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
