import React, { useState, useEffect, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, PaletteMode, createTheme, useTheme } from '@mui/material';
import {
  getStoredTheme,
  getThemeOptions,
  setStoredTheme,
} from './shared/theme/theme';

import { Navbar } from './components';

const App: React.FC = (): JSX.Element => {
  const [mode, setMode] = useState<PaletteMode>('dark'); // default is dark mode

  useEffect(() => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      setMode(storedTheme);
    }
  }, []);

  // Update the theme only if it changes
  const theme = useMemo(() => createTheme(getThemeOptions(mode)), [mode]);
  const customTheme = useTheme(); // for use in other components - could potentially use theme

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
    </ThemeProvider>
  );
};

export default App;
