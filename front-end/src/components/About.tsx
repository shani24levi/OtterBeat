import React from 'react';
import { styled } from '@mui/material/styles';
import { GridProps, Grid, PaletteMode } from '@mui/material';
import { musicbg } from '../assets';
import { getStoredTheme } from '../shared/theme';
const mode: PaletteMode = getStoredTheme();

const StyledAboutContinuer = styled(Grid)<GridProps>(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0,0,255, 0.5),rgba(255,255,255, 0.5)), url(${musicbg})`,
  opacity: '0.5',
  width: '100%',
  height: '50vh',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  color:
    mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
}));

const About = () => {
  return <StyledAboutContinuer>About</StyledAboutContinuer>;
};

export default About;
