import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import styles from './LoginPage.module.scss';
import { useAppDispatch } from '../../features/hooks/hooks';
import { setUser } from '../../features/reducers/userSlice';
import { ROUTER } from '../../components/Header';
import { useAuth } from '../../features/hooks/useAuth';
import { Form } from '../../components/Form';
import { closeSnack } from '../../features/reducers/snackSlice';

export const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  const auth = getAuth();

  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          token: user.refreshToken,
          id: user.uid,
        }))
        navigate('/account')
        dispatch(closeSnack())
      })
      .catch(() => alert('Invalid user!'))
  }

  return !isAuth ? (
    <div className={styles.login}>
      <div className={styles.login__content}>
        <h1 className={styles.login__title}>Sign In</h1>
        <Form action={'Sing In'} handleClick={handleLogin} />
        <p className={styles.login__text}>Don't you have an account?</p>

        <div className={styles.login__signUp}>
          <NavLink to={ROUTER.signUp}>
            <button className={styles.login__signUp_bn}>Sign Up</button>
          </NavLink>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to={ROUTER.account} />
  )
}