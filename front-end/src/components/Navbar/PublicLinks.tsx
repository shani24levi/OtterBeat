import React, { Suspense } from 'react';
import { navLinksPublic } from '../../shared/constants';
import { Link } from '@mui/material';
import { HollowBtn } from '../../shared/theme/buttons';
const LoginPreview = React.lazy(() => import('../auth/Login'));

const PublicLinks: React.FC = () => {
  const loginToggle = React.useCallback(() => {
    console.log('login');
    return (
      <Suspense fallback={<div>loading..</div>}>
        <LoginPreview />
      </Suspense>
    );
  }, []);

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
      <HollowBtn onClick={loginToggle}>Login</HollowBtn>
    </>
  );
};

export default PublicLinks;
