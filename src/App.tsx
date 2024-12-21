import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LocationPage from './pages/LocationPage';
import HealthIssuesPage from './pages/HealthIssuesPage';
import DoctorDetailsPage from './pages/DoctorDetailsPage';
import BookingFormPage from './pages/BookingFormPage';
import SuccessPage from './pages/SuccessPage';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Navbar />
          <Box sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/location" element={<LocationPage />} />
              <Route path="/health-issues" element={<HealthIssuesPage />} />
              <Route path="/doctors" element={<DoctorDetailsPage />} />
              <Route path="/booking" element={<BookingFormPage />} />
              <Route path="/success" element={<SuccessPage />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App; 