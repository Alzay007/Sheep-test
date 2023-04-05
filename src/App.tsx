import { Route, Routes } from 'react-router-dom';
import './App.scss';
// import { fetchGoods } from './features/reducers/actionCreators';
import { Footer } from './components/Footer';
import { Header, ROUTER } from './components/Header';
import { AccountPage } from './pages/AccountPage';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SignUpPage } from './pages/SignUpPage';
// import { useEffect } from 'react';
// import { useAppDispatch } from './features/hooks/hooks';
import { ProductDetailPage } from './pages/ProductDetailPage';

function App() {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchGoods());
  // }, [dispatch])

  return (
    <>
      <Header />

      <div className="section">
        <Routes>
          <Route path={ROUTER.home} element={<HomePage />} />
          <Route path={ROUTER.login} element={<LoginPage />} />
          <Route path={ROUTER.signUp} element={<SignUpPage />} />
          <Route path={ROUTER.account} element={<AccountPage />} />
          <Route path={ROUTER.productDetalePage} element={<ProductDetailPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
