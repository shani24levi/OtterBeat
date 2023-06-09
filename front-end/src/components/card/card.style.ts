import {
  Button,
  PaletteMode,
  TypographyProps,
  Grid,
  Box,
  Typography,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { getStoredTheme } from '../../shared/theme/theme';
const mode: PaletteMode = getStoredTheme();

export const CustomCardButton = styled(Grid)<{
  bgcolor?: string;
  radius: string;
}>(({ bgcolor, radius, theme }) => {
  return {
    backgroundImage: `url(${bgcolor})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: 'linear-gradient(45deg, #503aca 0%, #ea34ff 100%)',
    //   background: bgcolor,
    position: 'relative',
    width: '200px',
    height: '200px',
    overflow: 'hidden',
    borderRadius: radius,
    margin: '0 auto 30px',
    color:
      mode === 'dark'
        ? theme.palette.primary.dark
        : theme.palette.primary.light,
    '&:hover': {
      top: '-1px',
      opacity: 0.85,
    },
  };
});

export const CardText = styled(Paper)(({ theme }) => ({
  backgroundColor: 'inherit',
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
