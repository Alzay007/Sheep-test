import Snackbar from '@material-ui/core/Snackbar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  success: {
    backgroundColor: theme.palette.success.main,
  },
  iconTextWrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
  },
  icon: {
    color: theme.palette.success.contrastText,
  },
  text: {
    marginLeft: theme.spacing(1),
  },
}));

interface Props {
  open: boolean;
  handleClose: () => void;
}

export const SuccessSnackbar: React.FC<Props> = ({ open, handleClose }) => {
  const classes = useStyles();

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      ContentProps={{ className: classes.success }}
      message={
        <span className={classes.iconTextWrapper}>
          <CheckCircleIcon className={classes.icon} />
          <span className={classes.text}>Product was added</span>
        </span>
      }
    />
  );
}
