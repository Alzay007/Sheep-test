import { Title } from '../../components/Title';
import { Loader } from '../../components/Loader';
// import { useAppSelector } from '../../features/hooks/hooks';
import styles from './ProductDetailPage.module.scss';
import { useParams } from 'react-router-dom';
import { productAPI } from '../../features/reducers/ProductService';
import { Product } from '../../types/Product';

export const ProductDetailPage = () => {
  // const { isLoading, products } = useAppSelector(state => state.productsReducer);
  const { data: products, isLoading } = productAPI.useFetchAllProductsQuery('');
  const { itemId } = useParams();

  const currentId = itemId ? itemId : 0;

  const goods = products?.products;

  const currentProduct = goods && goods.find((item: Product) => item.id === +currentId);

  return (
    <div className={styles.detail}>
      {isLoading && <Loader />}

      <Title title={currentProduct?.title} />

      <div className={styles.detail__content}>
        <div className={styles.detail__image}>
          <img
            src={currentProduct?.thumbnail}
            alt="card-logo"
            className={styles.detail__logo}
          />
        </div>

        <div className={styles.detail__info}>
          <div className={styles.detail__price}>
            Price: ${currentProduct?.price}
          </div>

          <div className={styles.detail__characteristics}>
            <div className={styles.detail__description}>
              <span className={styles.detail__text}>Rating</span>
              <div className={styles.detail__rating}>
                <span className={styles.detail__value}>{currentProduct?.rating}</span>
                <div className={styles.detail__star}></div>
              </div>
            </div>
            <div className={styles.detail__description}>
              <span className={styles.detail__text}>Brand</span>
              <span className={styles.detail__value}>{currentProduct?.brand}</span>
            </div>
            <div className={styles.detail__description}>
              <span className={styles.detail__text}>Category</span>
              <span className={styles.detail__value}>{currentProduct?.category}</span>
            </div>
            <div className={styles.detail__description}>
              <span className={styles.detail__text}>Stock</span>
              <span className={styles.detail__value}>{currentProduct?.stock}</span>
            </div>
          </div>

          <span className={styles.detail__value}>{currentProduct?.description}</span>
        </div>
      </div>
    </div>
  )
}