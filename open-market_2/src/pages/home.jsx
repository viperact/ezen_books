import EventBanner from '../components/eventBanner/eventBanner';
import { Main } from '../components/main/main';

const Home = ({ products, setProducts, convertPrice }) => {
  return (
    <Main
      products={products}
      setProducts={setProducts}
      convertPrice={convertPrice}
    />
  );
};

export default Home;
