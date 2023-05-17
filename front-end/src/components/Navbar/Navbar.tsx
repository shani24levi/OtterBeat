import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../assets';
import {
  Switch,
  IconButton,
  useTheme,
  Box,
  PaletteMode,
  AppBar,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import PublicLinks from './PublicLinks';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  mode?: PaletteMode;
  onChange?: () => void;
}

const Navbar: React.FC<Props> = ({ mode, onChange }) => {
  const customTheme = useTheme();
  const isMobile = useMediaQuery(customTheme.breakpoints.down('md'));
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img
                src={logo}
                alt="logo"
                style={{ width: '5rem', height: '3rem' }}
              />
            </IconButton>
          </Link>
          {isMobile ? (
            <>
              <IconButton onClick={() => setToggle(!toggle)}>
                {toggle ? <MenuIcon /> : <CloseIcon />}
              </IconButton>
              <PublicLinks />
            </>
          ) : (
            <>
              <PublicLinks />
              <Switch onChange={onChange} color="primary" />
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
