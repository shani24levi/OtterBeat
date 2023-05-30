import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import { HollowBtn } from '../shared/theme/buttons';
import { useAppSelector } from '../hooks/useTypedSelector';

interface WithDialogProps {
  onSubmit: (data: any) => void;
}

const withDialog = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  text: string,
  color?: string
) => {
  return function WithDialog(props: P & WithDialogProps) {
    const [open, setOpen] = useState(false);
    const [formValues, setFormValues] = useState({});
    const { loading } = useAppSelector((state) => state.reducer.user);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const handleFormSubmit = () => {
      props.onSubmit(formValues);
      //send service req login from login componnent
      //handleClose();
    };

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues({ ...formValues, [event.target.name]: event.target.value });
    };

    return (
      <div>
        <HollowBtn bgcolor={color} onClick={handleOpen}>
          {text}
        </HollowBtn>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{text}</DialogTitle>
          <DialogContent>
            <WrappedComponent {...props} onChange={handleFormChange} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            {loading ? (
              <Button>Loading..</Button>
            ) : (
              <Button onClick={handleFormSubmit}>Submit</Button>
            )}
          </DialogActions>
        </Dialog>
      </div>
    );
  };
};

export default withDialog;
