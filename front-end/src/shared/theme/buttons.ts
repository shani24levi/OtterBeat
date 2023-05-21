import { Button, PaletteMode } from '@mui/material';
import { styled } from '@mui/material/styles';
import { getStoredTheme } from '../theme/theme';
const mode: PaletteMode = getStoredTheme();

interface CustomButtonProps {
  bgcolor?: string;
  fontcolor: string;
}

export const CustomButton = styled(Button)<{ bgcolor?: string }>(
  ({ bgcolor = 'linear-gradient(45deg, #503aca 0%, #ea34ff 100%)', theme }) => {
    return {
      backgroundColor: bgcolor,
      background: bgcolor,
      backgroundPosition: 'top right',
      transition: '0.1s',
      padding: '10px 20px',
      color:
        mode === 'dark'
          ? theme.palette.primary.dark
          : theme.palette.primary.light,
      margin: '10px 10px',
      //   '&:hover': {
      //     top: '-1px',
      //     opacity: 0.85,
      //   },
    };
  }
);

export const HollowBtn = styled(Button)<{ bgcolor?: string }>(
  ({ bgcolor = '#ff377b', theme }) => {
    return {
      background: 'transparent',
      border: '2px solid #ff377b',
      color:
        mode === 'dark'
          ? theme.palette.secondary.dark
          : theme.palette.secondary.light,
      margin: '3px',
      '&:hover': {
        background: bgcolor,
        color: '#ffff',
      },
    };
  }
);

const ButtonLinearPurple = styled(Button)`

background: transparent;
border: 2px solid #ff377b;
color: #ff377b;
    backgroundImage: 'linear-gradient(45deg, #503aca 0%, #ea34ff 100%)',
    backgroundSize: '210% 210%',
    backgroundPosition: 'top right',
    backgroundColor: '#ea34ff',
    transition: '0.1s',
    boxShadow: 'none',
    padding: '10px 20px',
    color: '#ffffff !important',
    marginBottom: '10px',
    marginTop: '10px',
    '&:hover': {
        top: '-1px',
        opacity: 0.85,
        boxShadow:
            '0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)',
    },
`;

// const PinkHollowButton = styled(Button)<>(({ theme }) => ({
//   fontWeight: 700,
//   fontSize: '3rem',
//   background: '-webkit-linear-gradient(45deg, #f73378 30%, #7b0ee6 90%)',
//   WebkitBackgroundClip: 'text',
//   WebkitTextFillColor: 'transparent',
// }));

export { ButtonLinearPurple };
