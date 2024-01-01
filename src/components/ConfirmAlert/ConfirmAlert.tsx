import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type ConfirmAlertProps = {
  title: string;
  text?: string;
  open: boolean;
  confirmBtnText?: string;
  dismissButtonText?: string;
  handleClose: () => void;
  confirmedAction: () => void;
};

export default function ConfirmAlert({
  title,
  text,
  open,
  handleClose,
  confirmBtnText = 'Delete',
  dismissButtonText = 'Cancel',
  confirmedAction,
}: ConfirmAlertProps) {
  const handleConfirm = () => {
    confirmedAction();
    handleClose();
  };

  const handleDismiss = () => {
    handleClose();
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirm} color='error' variant='contained'>
            {confirmBtnText}
          </Button>
          <Button
            onClick={handleDismiss}
            autoFocus
            color='primary'
            variant='contained'
          >
            {dismissButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
