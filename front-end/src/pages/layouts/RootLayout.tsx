import React, { useState, useEffect, useMemo } from 'react';
import { Outlet } from 'react-router-dom'; //in react router dom version 6
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { PaletteMode, createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import {
  getStoredTheme,
  getThemeOptions,
  setStoredTheme,
} from '../../shared/theme/theme';

import { Navbar } from '../../components';

function RootLayout() {
  const [mode, setMode] = useState<PaletteMode>('dark');
  //const user = useSelector((state: RootState) => state.user.userid);

  useEffect(() => {
    //user logged navigate
    //if logged:  1. set header token 2.chack valid time token 3.navigate to dashbord
    //user &&  navigate('/home')

    //color mode
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      setMode(storedTheme);
    }
  }, []);

  const theme = useMemo(() => createTheme(getThemeOptions(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar
        mode={mode}
        onChange={() => {
          const newMode: PaletteMode = mode === 'dark' ? 'light' : 'dark';
          setMode(newMode);
          setStoredTheme(newMode);
        }}
      />
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
}

export default RootLayout;
