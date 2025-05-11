import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDoctor, setIsDoctor] = useState(false);
  const [userName, setUserName] = useState('');

  const checkLoginStatus = () => {
    const doctorLoggedIn = localStorage.getItem('isDoctorLoggedIn') === 'true';
    const patientLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const name = localStorage.getItem('userName') || '';
    
    setIsLoggedIn(doctorLoggedIn || patientLoggedIn);
    setIsDoctor(doctorLoggedIn);
    setUserName(name);
  };

  useEffect(() => {
    // Initial check
    checkLoginStatus();

    // Listen for login state changes
    const handleLoginStateChange = () => {
      checkLoginStatus();
    };

    window.addEventListener('loginStateChanged', handleLoginStateChange);

    // Cleanup
    return () => {
      window.removeEventListener('loginStateChanged', handleLoginStateChange);
    };
  }, []);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchorEl(null);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    handleClose();
  };

  const handleLogout = () => {
    // Clear login status and user data
    localStorage.removeItem('isDoctorLoggedIn');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
    setIsDoctor(false);
    setUserName('');
    handleUserMenuClose();
    navigate('/');
  };

  const handleProfile = () => {
    if (isDoctor) {
      navigate('/doctor-dashboard');
    } else {
      navigate('/profile'); // Add patient profile route
    }
    handleUserMenuClose();
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <LocalHospitalIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
            onClick={() => navigate('/')}
          >
            MedBook
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={() => handleNavigation('/location')}>Find Doctors</MenuItem>
              <MenuItem onClick={() => handleNavigation('/health-issues')}>Specialties</MenuItem>
              {!isLoggedIn && (
                <>
                  <MenuItem onClick={() => handleNavigation('/login')}>Patient Login</MenuItem>
                  <MenuItem onClick={() => handleNavigation('/doctor-login')}>Doctor Login</MenuItem>
                </>
              )}
            </Menu>
          </Box>

          <LocalHospitalIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
            onClick={() => navigate('/')}
          >
            MedBook
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            <Button
              color="inherit"
              onClick={() => navigate('/location')}
              sx={{ mx: 1 }}
            >
              Find Doctors
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate('/health-issues')}
              sx={{ mx: 1 }}
            >
              Specialties
            </Button>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {isLoggedIn ? (
              <>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                  <Typography variant="body1" sx={{ mr: 1 }}>
                    {userName}
                  </Typography>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleUserMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </Box>
                <Menu
                  id="menu-appbar"
                  anchorEl={userMenuAnchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(userMenuAnchorEl)}
                  onClose={handleUserMenuClose}
                >
                  <MenuItem onClick={handleProfile}>
                    <PersonIcon sx={{ mr: 1 }} />
                    Profile
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <LogoutIcon sx={{ mr: 1 }} />
                    Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                color="inherit"
                onClick={() => navigate('/login')}
                variant="outlined"
                sx={{ 
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 