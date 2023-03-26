import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../assets/icons/logo.png';
import { useAuth } from '../../features/hooks/useAuth';

export const ROUTER = {
  home: '/',
  account: '/account',
  login: '/login',
  signUp: '/registration',
  productDetalePage: '/products/:itemId',
};

export const Header = () => {
  const { isAuth } = useAuth();

  return (
    <div className={styles.header}>
      <div className={styles.header__nav}>
        <div className={styles.header__icon}>
          <Link to="/">
            <img src={logo} alt="logo" className={styles.header__logo} />
          </Link>
        </div>
      </div>

      <div className={styles.header__icons}>
        {isAuth && (
          <div className={styles.header__signIn}></div>
        )}

        <NavLink to="/login" className={styles.header__item}>
          <div className={styles.header__login}></div>
        </NavLink>
      </div>
    </div>
  );
};
