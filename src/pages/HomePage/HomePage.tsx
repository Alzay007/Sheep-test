import styles from './HomePage.module.scss';

import { useAppSelector } from '../../features/hooks/hooks';
import { ProductList } from '../../components/ProductList/ProductList';
import { useCallback, useState } from 'react';
import { SearchBar } from '../../components/SearchField';
import { Loader } from '../../components/Loader';
import { AuthSnackbar } from '../../components/AuthSnackBar';
import { sortItems } from '../../helpers/sortFunc';
import { SortType } from '../../types/SortType';
import { SortField } from '../../components/SortField';

export const HomePage = () => {
  const { isLoading, products } = useAppSelector(state => state.productsReducer);
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortType>(SortType.ALL);

  const onChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value.trimStart());
    }, []);

  const handleStatus = (value: SortType) => {
    setSortBy(value);
  };

  const visibleList = products
    .filter(product => product.title.toLowerCase().includes(query.toLowerCase())
      || product.category.toLowerCase().includes(query.toLowerCase()));

  const sortedGoods = sortItems(visibleList, sortBy)

  return (
    <div className={styles.home}>
      <h1 className={styles.home__title}>ProductList</h1>
      <SearchBar searchQuery={query} handleOnChange={onChangeHandler} />
      <SortField sortBy={sortBy} handleStatus={handleStatus} />
      {isLoading && <Loader />}
      <ProductList productsList={sortedGoods} />
      <AuthSnackbar />
    </div>
  )
}
