import { Link } from 'react-router-dom';
import styles from './product.module.css';

export const Product = ({ product, convertPrice }) => {
  return (
    <div className={styles.product}>
      <Link to={`/product/${product.book_num}`}>
        <div className={styles.product_image}>
          <img src={product.book_image} alt='product' />
        </div>
      </Link>

      <div className={styles.store}>
        <span>{product.book_publisher}</span>
      </div>

      <div className={styles.product_name}>
        <span>{product.book_title}</span>
      </div>

      <div className={styles.product_price}>
        <span className={styles.price}>{convertPrice(product.book_price)}</span>
        <span className={styles.unit}>원</span>
      </div>
    </div>
  );
};
