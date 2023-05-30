import React, { useState } from 'react';
import type { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { logo } from '../../assets';
import {
  Switch,
  Typography,
  IconButton,
  useTheme,
  Box,
  PaletteMode,
  AppBar,
  Toolbar,
  useMediaQuery,
  Container,
  Link,
} from '@mui/material';
import PublicLinks from './PublicLinks';
import LoggedLinks from './LogedLinks';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  mode?: PaletteMode;
  onChange?: () => void;
}

const Navbar: React.FC<Props> = ({ mode, onChange }): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [toggle, setToggle] = useState<boolean>(false);
  const user = useSelector(
    (state: RootState) => state.reducer.user.user?.userid
  );

  const getNavLinks = (): JSX.Element => {
    return user ? <LoggedLinks /> : <PublicLinks />;
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        component="nav"
        position="fixed"
        color="transparent"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Container maxWidth="xl">
          <Toolbar>
            <Link href="/" sx={{ flexGrow: 1 }}>
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: '2.5rem', height: '2.5rem' }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    ml: 2,
                    display: { xs: 'none', md: 'flex' },
                    letterSpacing: '.3rem',
                    color:
                      mode === 'dark'
                        ? theme.palette.primary.dark
                        : theme.palette.primary.light,
                  }}
                >
                  OtterBeat
                </Typography>
              </IconButton>
            </Link>
            {isMobile ? (
              <>
                <IconButton
                  color="secondary"
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={() => setToggle(!toggle)}
                >
                  {toggle ? <MenuIcon /> : <CloseIcon />}
                </IconButton>
                {!toggle && getNavLinks()}
              </>
            ) : (
              <>
                {getNavLinks()}
                <Switch onChange={onChange} color="primary" />
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
