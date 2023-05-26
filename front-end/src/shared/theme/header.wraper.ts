import { styled } from '@mui/material/styles';
import { GridProps, Grid, Box, BoxProps, PaletteMode } from '@mui/material';
import { wave } from '../../assets';
import { getStoredTheme } from './theme';
const mode: PaletteMode = getStoredTheme();

export const WaveHeaderWraper = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundImage: `url(${wave})`,
  width: '100%',
  backgroundPosition: 'right',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  color:
    mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
  paddingTop: theme.spacing(10),
}));
