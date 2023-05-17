// import * as React from 'react';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { CssBaseline, PaletteMode, useTheme } from '@mui/material';
// import App from '../../App';
// import { getStoredTheme, getThemeOptions } from '../theme/theme';

// // eslint-disable-next-line @typescript-eslint/no-empty-function
// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

// type Props = {
//   children: string | JSX.Element | JSX.Element[];
// };

// const ToggleColorMode = ({ children }: Props) => {
//   const [mode, setMode] = React.useState<PaletteMode>('light');

//   React.useEffect(() => {
//     const storedTheme = getStoredTheme();
//     if (storedTheme) {
//       setMode(storedTheme);
//     }
//   }, []);

//   const colorMode = React.useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//       },
//     }),
//     []
//   );

//   const theme = React.useMemo(() => createTheme(getThemeOptions(mode)), [mode]);
//   const customTheme = useTheme(); // for use in other components - could potentially use theme

//   console.log('mode', mode);

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <App />

//         {children}
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// };

// export { ColorModeContext };
