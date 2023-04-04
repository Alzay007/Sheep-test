import { Button, FormGroup, TextField } from "@mui/material";
import styles from './Form.module.scss';
import useInput from '../../hooks/useInput';

interface Props {
  action: string;
  handleClick: (email: string, password: string) => void;
}

export const Form: React.FC<Props> = ({ action, handleClick }) => {
  const email = useInput('');
  const password = useInput('');

  return (
    <FormGroup className={styles.form}>
      <TextField
        label={"Email"}
        name="email"
        placeholder="Email"
        autoComplete="off"
        {...email}
      />

      <TextField
        label={"Password"}
        name="password"
        type="password"
        placeholder="Password"
        {...password}
      />

      <Button
        className={styles.form__btn}
        variant={"outlined"}
        onClick={() => handleClick(email.value, password.value)}
      >
        {action}
      </Button>
    </FormGroup>
  )
}