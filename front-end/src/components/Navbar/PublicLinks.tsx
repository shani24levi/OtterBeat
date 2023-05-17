import * as React from 'react';
import { navLinksPublic } from '../../shared/constants';
import { Link } from '@mui/material';

const PublicLinks: React.FC = () => {
  return (
    <>
      {navLinksPublic.map((el) => (
        <Link
          key={el.id}
          href={el.path}
          variant="button"
          underline="none"
          color="inherit"
          sx={{ margin: '1rem' ,
          '&:hover': {
            opacity: [0.9, 0.8, 0.7],
          },
        }}
        >
          {el.title}
        </Link>
      ))}
    </>
  );
};

export default PublicLinks;
