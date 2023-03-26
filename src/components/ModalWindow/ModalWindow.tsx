import { Button, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AddProductForm } from '../AddForm';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '50%',
    margin: 'auto'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

interface Props {
  show: boolean;
  handleClose: () => void;
}

export const ModalWindow: React.FC<Props> = ({ show, handleClose }) => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        className={classes.modal}
        open={show}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClose}
            >
              X
            </Button>
          </div>
          <AddProductForm handleClose={handleClose} />
        </div>
      </Modal>
    </div>
  );
};
