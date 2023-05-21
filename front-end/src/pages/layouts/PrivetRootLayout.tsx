import React from 'react';
import { Outlet } from 'react-router-dom';

const PrivetRootLayout = () => {
  return (
    <>
      <div>PrivetRootLayout</div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PrivetRootLayout;
