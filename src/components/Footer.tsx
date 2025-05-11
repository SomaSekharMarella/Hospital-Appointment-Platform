import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              MedBook
            </Typography>
            <Typography variant="body2">
              Making healthcare accessible and convenient for everyone.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              For Patients
            </Typography>
            <Link 
              component="button" 
              color="inherit" 
              display="block" 
              sx={{ mb: 1 }}
              onClick={() => navigate('/location')}
            >
              Search Doctors
            </Link>
            <Link 
              component="button" 
              color="inherit" 
              display="block" 
              sx={{ mb: 1 }}
              onClick={() => navigate('/health-issues')}
            >
              Book Appointment
            </Link>
            <Link 
              component="button" 
              color="inherit" 
              display="block" 
              sx={{ mb: 1 }}
              onClick={() => navigate('/login')}
            >
              Login
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              For Doctors
            </Typography>
            <Link 
              component="button" 
              color="inherit" 
              display="block" 
              sx={{ mb: 1 }}
              onClick={() => navigate('/doctor-signup')}
            >
              Join as a Doctor
            </Link>
            <Link 
              component="button" 
              color="inherit" 
              display="block" 
              sx={{ mb: 1 }}
              onClick={() => navigate('/doctor-login')}
            >
              Doctor Login
            </Link>
            <Link 
              component="button" 
              color="inherit" 
              display="block" 
              sx={{ mb: 1 }}
              onClick={() => navigate('/health-issues')}
            >
              Resources
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" paragraph>
              Email: support@medbook.com
            </Typography>
            <Typography variant="body2" paragraph>
              Phone: +1 234 567 8900
            </Typography>
            <Typography variant="body2">
              Address: 123 Healthcare Street,
              <br />
              Medical Center, 12345
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 3, bgcolor: 'rgba(255, 255, 255, 0.2)' }} />
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} MedBook. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 