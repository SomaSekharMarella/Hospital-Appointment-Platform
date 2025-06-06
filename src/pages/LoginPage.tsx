import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

// Fake data for demonstration
const FAKE_USERS = {
  doctors: [
    { email: 'somu@gmail.com', password: 'doctor123', name: 'Dr.Soma Sekhar' },
    { email: 'akash@gmail.com', password: 'doctor123', name: 'Dr.Leela Akash' },
  ],
  patients: [
    { email: 'sidhu@gmail.com', password: 'patient123', name: 'Sidhuu' },
    { email: 'mouli@gmail.com', password: 'patient123', name: 'Mouli Brahma' },
  ],
  admins: [
    { email: 'admin@gmail.com', password: 'admin123', name: 'Admin User' },
  ]
};

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Check if user is an admin
    const admin = FAKE_USERS.admins.find(
      a => a.email === email && a.password === password
    );
    if (admin) {
      localStorage.setItem('isAdminLoggedIn', 'true');
      localStorage.setItem('userName', admin.name);
      window.dispatchEvent(new Event('loginStateChanged'));
      navigate('/admin-dashboard');
      return;
    }

    // Check if user is a doctor
    const doctor = FAKE_USERS.doctors.find(
      d => d.email === email && d.password === password
    );

    if (doctor) {
      localStorage.setItem('isDoctorLoggedIn', 'true');
      localStorage.setItem('userName', doctor.name);
      window.dispatchEvent(new Event('loginStateChanged'));
      navigate('/doctor-dashboard');
      return;
    }

    // Check if user is a patient
    const patient = FAKE_USERS.patients.find(
      p => p.email === email && p.password === password
    );

    if (patient) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userName', patient.name);
      window.dispatchEvent(new Event('loginStateChanged'));
      navigate('/');
      return;
    }

    // If no match found
    setError('Invalid email or password');
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <LocalHospitalIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
          <Typography component="h1" variant="h5" gutterBottom>
            Welcome to MedBook
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
            Please enter your credentials to login
          </Typography>

          {error && (
            <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default LoginPage; 