import * as React from 'react';
import { navLinksLogged } from '../../shared/constants';
import { Link } from '@mui/material';

const LoggedLinks: React.FC = () => {
  return (
    <>
      {navLinksLogged.map((el) => (
        <Link href={el.path} variant="button" />
      ))}
    </>
  );
};

export default LoggedLinks;
