import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Rating,
  Chip,
  Avatar,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

// Expanded mock doctors data organized by specialization
const doctorsBySpecialty = {
  Cardiology: [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialization: 'Cardiologist',
      experience: 15,
      hospital: 'City Heart Hospital',
      address: '123 Healthcare Street, Medical Center',
      fee: 1500,
      rating: 4.8,
      availability: ['Mon-Fri', '9:00 AM - 5:00 PM'],
      education: 'MBBS, MD - Cardiology',
      languages: ['English', 'Hindi'],
      image: 'https://example.com/doctor1.jpg'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialization: 'Cardiologist',
      experience: 12,
      hospital: 'General Medical Center',
      address: '456 Health Avenue',
      fee: 1200,
      rating: 4.6,
      availability: ['Mon-Sat', '10:00 AM - 6:00 PM'],
      education: 'MBBS, MD - Cardiology, DM',
      languages: ['English', 'Mandarin'],
      image: 'https://example.com/doctor2.jpg'
    }
  ],
  Orthopedics: [
    {
      id: 3,
      name: 'Dr. James Wilson',
      specialization: 'Orthopedic Surgeon',
      experience: 20,
      hospital: 'Joint Care Center',
      address: '321 Bone Health Complex',
      fee: 2000,
      rating: 4.7,
      availability: ['Mon-Fri', '10:00 AM - 4:00 PM'],
      education: 'MBBS, MS - Orthopedics',
      languages: ['English'],
      image: 'https://example.com/doctor3.jpg'
    },
    {
      id: 4,
      name: 'Dr. Rajesh Kumar',
      specialization: 'Orthopedic Surgeon',
      experience: 15,
      hospital: 'Bone & Joint Hospital',
      address: '567 Ortho Plaza',
      fee: 1800,
      rating: 4.5,
      availability: ['Mon-Sat', '9:00 AM - 5:00 PM'],
      education: 'MBBS, MS - Orthopedics, Fellowship',
      languages: ['English', 'Hindi'],
      image: 'https://example.com/doctor4.jpg'
    }
  ],
  Dentistry: [
    {
      id: 5,
      name: 'Dr. Emily White',
      specialization: 'Dental Surgeon',
      experience: 10,
      hospital: 'Smile Dental Clinic',
      address: '789 Dental Square',
      fee: 1000,
      rating: 4.9,
      availability: ['Mon-Sat', '10:00 AM - 7:00 PM'],
      education: 'BDS, MDS - Orthodontics',
      languages: ['English'],
      image: 'https://example.com/doctor5.jpg'
    },
    {
      id: 6,
      name: 'Dr. Priya Sharma',
      specialization: 'Dental Surgeon',
      experience: 8,
      hospital: 'Perfect Smile Dentistry',
      address: '234 Tooth Care Road',
      fee: 1200,
      rating: 4.6,
      availability: ['Mon-Sat', '9:00 AM - 6:00 PM'],
      education: 'BDS, MDS - Periodontics',
      languages: ['English', 'Hindi'],
      image: 'https://example.com/doctor6.jpg'
    }
  ],
  Pediatrics: [
    {
      id: 7,
      name: 'Dr. Lisa Anderson',
      specialization: 'Pediatrician',
      experience: 12,
      hospital: 'Children\'s Care Hospital',
      address: '890 Kids Health Center',
      fee: 1300,
      rating: 4.8,
      availability: ['Mon-Fri', '9:00 AM - 5:00 PM'],
      education: 'MBBS, MD - Pediatrics',
      languages: ['English'],
      image: 'https://example.com/doctor7.jpg'
    },
    {
      id: 8,
      name: 'Dr. Amit Patel',
      specialization: 'Pediatrician',
      experience: 15,
      hospital: 'Kids Wellness Center',
      address: '123 Child Care Avenue',
      fee: 1500,
      rating: 4.7,
      availability: ['Mon-Sat', '10:00 AM - 6:00 PM'],
      education: 'MBBS, MD - Pediatrics, Fellowship',
      languages: ['English', 'Gujarati', 'Hindi'],
      image: 'https://example.com/doctor8.jpg'
    }
  ],
  Dermatology: [
    {
      id: 9,
      name: 'Dr. Aisha Patel',
      specialization: 'Dermatologist',
      experience: 8,
      hospital: 'Skin & Beauty Clinic',
      address: '567 Beauty Boulevard',
      fee: 1800,
      rating: 4.5,
      availability: ['Tue-Sun', '11:00 AM - 8:00 PM'],
      education: 'MBBS, MD - Dermatology',
      languages: ['English', 'Gujarati', 'Hindi'],
      image: 'https://example.com/doctor9.jpg'
    }
  ],
  ENT: [
    {
      id: 10,
      name: 'Dr. Anjali Desai',
      specialization: 'ENT Specialist',
      experience: 14,
      hospital: 'ENT Care Center',
      address: '234 Medical Plaza',
      fee: 1300,
      rating: 4.7,
      availability: ['Mon-Sat', '10:00 AM - 6:00 PM'],
      education: 'MBBS, MS - ENT',
      languages: ['English', 'Hindi', 'Marathi'],
      image: 'https://example.com/doctor10.jpg'
    }
  ],
  Ophthalmology: [
    {
      id: 11,
      name: 'Dr. David Thompson',
      specialization: 'Ophthalmologist',
      experience: 16,
      hospital: 'Vision Care Hospital',
      address: '678 Eye Care Street',
      fee: 1600,
      rating: 4.8,
      availability: ['Mon-Fri', '9:00 AM - 6:00 PM'],
      education: 'MBBS, MS - Ophthalmology',
      languages: ['English', 'Spanish'],
      image: 'https://example.com/doctor11.jpg'
    }
  ],
  Neurology: [
    {
      id: 12,
      name: 'Dr. Robert Kim',
      specialization: 'Neurologist',
      experience: 18,
      hospital: 'Brain & Spine Institute',
      address: '890 Neuro Sciences Road',
      fee: 2500,
      rating: 4.9,
      availability: ['Mon-Fri', '9:00 AM - 5:00 PM'],
      education: 'MBBS, MD - Neurology, DM',
      languages: ['English', 'Korean'],
      image: 'https://example.com/doctor12.jpg'
    }
  ]
};

const DoctorDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { issueId } = location.state || {};

  // Get the specialty based on issueId
  const getSpecialtyFromIssueId = (id: number): string => {
    const specialties = {
      1: 'Cardiology',
      2: 'Orthopedics',
      3: 'Dentistry',
      4: 'Pediatrics',
      5: 'Dermatology',
      6: 'ENT',
      7: 'Ophthalmology',
      8: 'Neurology'
    };
    return specialties[id as keyof typeof specialties] || 'Cardiology';
  };

  const specialty = getSpecialtyFromIssueId(issueId);
  const doctors = doctorsBySpecialty[specialty as keyof typeof doctorsBySpecialty] || [];

  const handleBookAppointment = (doctorId: number) => {
    navigate('/booking', { state: { doctorId } });
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          {specialty} Specialists
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" align="center" sx={{ mb: 4 }}>
          Select a doctor to book your appointment
        </Typography>

        <Grid container spacing={3}>
          {doctors.map((doctor) => (
            <Grid item xs={12} key={doctor.id}>
              <Card elevation={3}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                      <Typography variant="h5" component="h2" gutterBottom>
                        {doctor.name}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        {doctor.specialization} • {doctor.experience} Years Experience
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        {doctor.hospital}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {doctor.address}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="body2" gutterBottom>
                          Education: {doctor.education}
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                          {doctor.languages.map((lang) => (
                            <Chip
                              key={lang}
                              label={lang}
                              size="small"
                              sx={{ mr: 1 }}
                            />
                          ))}
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Box sx={{ textAlign: 'right' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mb: 1 }}>
                          <Rating value={doctor.rating} precision={0.1} readOnly />
                          <Typography variant="body2" sx={{ ml: 1 }}>
                            {doctor.rating}
                          </Typography>
                        </Box>
                        <Typography variant="h6" color="primary" gutterBottom>
                          ₹{doctor.fee}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          {doctor.availability[0]}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          {doctor.availability[1]}
                        </Typography>
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          sx={{ mt: 2 }}
                          onClick={() => handleBookAppointment(doctor.id)}
                        >
                          Book Appointment
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default DoctorDetailsPage; 