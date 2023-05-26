import React, { useState, Suspense } from 'react';
import { navLinksPublic } from '../../shared/constants';
import { Link } from '@mui/material';
import { HollowBtn } from '../../shared/theme/buttons';
import Login from '../auth/Login';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import { login } from '../../store/features/user/userAsyncThunk';

interface FormValues {
  email: string;
  password: string;
}

const PublicLinks: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = async (data: FormValues) => {
    console.log('Form submitted:', data);
    if (!data.password || !data.email) {
      //setError(true)
      return;
    }
    dispatch(login(data));
  };

  return (
    <>
      {navLinksPublic.map((el) => (
        <Link
          key={el.id}
          href={el.path}
          variant="button"
          underline="none"
          color="inherit"
          sx={{
            margin: '1rem',
            '&:hover': {
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          {el.title}
        </Link>
      ))}
      <HollowBtn>SignIn</HollowBtn>
      <Login onSubmit={handleSubmit} />
    </>
  );
};

export default PublicLinks;
