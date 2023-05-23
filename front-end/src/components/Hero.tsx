import React from 'react';
import { styled } from '@mui/material/styles';
import {
  GridProps,
  Grid,
  PaletteMode,
  Typography,
  TypographyProps,
  Container,
  Box,
} from '@mui/material';
import herobg from '../assets/imgs/herobg.png';
import { getStoredTheme } from '../shared/theme';
import { CustomButton } from '../shared/theme/buttons';
const mode: PaletteMode = getStoredTheme();

const StyledHeroContinuer = styled(Grid)<GridProps>(({ theme }) => ({
  backgroundImage: `url(${herobg}),linear-gradient(rgba(128,0,128, 0.5), rgba(0,0,255, 0.5))`,
  opacity: '0.5',
  width: '100%',
  height: '100vh',
  backgroundPosition: 'right',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  color:
    mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(25),
    paddingBottom: theme.spacing(25),
  },
}));

const GradientText = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 700,
  fontSize: '3rem',
  background: '-webkit-linear-gradient(45deg, #f73378 30%, #7b0ee6 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

const Hero: React.FC = () => {
  return (
    <StyledHeroContinuer container>
      <Container maxWidth="xl">
        <Box textAlign="center">
          <GradientText variant="h1">PARTY NIGHT</GradientText>
          <Typography variant="h5" component="h5" color="secondary">
            Crazy Non-Stop Music Reload
          </Typography>
          <CustomButton>Buy Premium</CustomButton>
        </Box>
      </Container>
    </StyledHeroContinuer>
  );
};

export default Hero;
