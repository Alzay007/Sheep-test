import { useAppDispatch } from "../../features/hooks/hooks";
import { removeUser } from "../../features/reducers/userSlice";
import { Title } from "../../components/Title";
import styles from './AccountPage.module.scss';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ModalWindow } from "../../components/ModalWindow/ModalWindow";
import { SuccessSnackbar } from "../../components/SuccessSnackBar/SuccessSnackBar";

export const AccountPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState<boolean>(false);
  const [openSnack, setOpenSnack] = useState<boolean>(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setOpenSnack(true);
    setTimeout(() => {
      setOpenSnack(false)
    }, 3000)
  };

  const handleCloseSnack = () => {
    setShowForm(false);
  };

  const handleLogOut = () => {
    dispatch(removeUser())
    navigate('/')
  }

  return (
    <section className={styles.account}>
      <Title title={'Account'} />

      <h2 className={styles.account__title}>Welcome</h2>

      <div className={styles.account__content}>
        <button className={styles.account__add} onClick={handleShowForm}>Add Product</button>
        <button className={styles.account__logOut} onClick={handleLogOut}>Logout</button>
        <ModalWindow show={showForm} handleClose={handleCloseForm} />
        <SuccessSnackbar open={openSnack} handleClose={handleCloseSnack} />
      </div>
    </section>
  )
}