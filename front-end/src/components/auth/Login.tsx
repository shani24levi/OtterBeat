import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useTypedSelector';
import withDialog from '../../hoc/withDialog';
import type { LoginArgs } from './../../types/models/userModel';
import { TextField, Typography } from '@mui/material';

interface FormContentProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Login = ({ onChange }: FormContentProps): React.ReactElement => {
  const { user, error } = useAppSelector((state) => state.reducer.user);
  const navigate = useNavigate();

  React.useMemo(() => {
    if (user.userid) navigate('/');
  }, [user]);

  return (
    <form>
      <TextField
        name="email"
        label="Email"
        onChange={onChange}
        error={Boolean(error?.includes('email'))}
        helperText={
          Boolean(error?.includes('email')) && (
            <Typography color="error" variant="body2" component="span">
              {' '}
              * {error}
            </Typography>
          )
        }
      />

      <TextField
        name="password"
        label="Password"
        type="password"
        onChange={onChange}
        error={Boolean(error?.includes('password'))}
        helperText={
          Boolean(error?.includes('password')) && (
            <Typography color="error" variant="body2" component="span">
              {' '}
              * {error}
            </Typography>
          )
        }
      />
    </form>
  );
};

export default withDialog(Login, 'Login', '#c737ff');
