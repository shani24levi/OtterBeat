// import { useState } from 'react';
// import { theme as themeObject } from '../shared/theme';
// import React from 'react';
// import { PaletteMode } from '@mui/material';
// import { Theme } from '@emotion/react';

// interface ThemeContext {
//   themeName: PaletteMode;
//   toggleTheme: () => void;
// }

// const useDarkMode = () => {
//   //const [mode, setMode] = React.useState<PaletteMode>('light');
//   // const [mode, setMode] = React.useState(()=> localStorage.getItem('mode') ?? 'dark');

//   const [theme, setTheme] = useState(themeObject);
//   const [modeType, setMode] = React.useState<PaletteMode>('light');

//   const {
//     palette: { mode },
//   } = theme;
//   console.log(theme.palette.mode, 'modeType', modeType);

//   const updatedTheme = {
//     ...theme,
//     palette: {
//       ...theme.palette,
//       mode: mode === 'light' ? 'dark' : 'light',
//     },
//   };

//   React.useMemo(() => {
//     setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//     // setTheme(updatedTheme)
//   }, []);

//   return [theme, setTheme];
// };

// export default useDarkMode;
