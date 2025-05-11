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
    },
    {
      id: 3,
      name: 'Dr. Priya Sharma',
      specialization: 'Cardiologist',
      experience: 10,
      hospital: 'HeartCare Clinic',
      address: '789 Cardio Lane, Wellness District',
      fee: 1000,
      rating: 4.5,
      availability: ['Tue-Sun', '8:00 AM - 4:00 PM'],
      education: 'MBBS, MD - Cardiology',
      languages: ['English', 'Telugu'],
      locations: ['Vizag', 'Hyderabad'],
      image: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    {
      id: 4,
      name: 'Dr. Ramesh Gupta',
      specialization: 'Cardiologist',
      experience: 18,
      hospital: 'Metro Heart Institute',
      address: '101 Wellness Road, Health City',
      fee: 1800,
      rating: 4.9,
      availability: ['Mon-Fri', '10:00 AM - 6:00 PM'],
      education: 'MBBS, MD - Cardiology, DM',
      languages: ['English', 'Hindi'],
      locations: ['Delhi', 'Bangalore'],
      image: 'https://randomuser.me/api/portraits/men/4.jpg'
    },
    {
      id: 5,
      name: 'Dr. Ananya Kapoor',
      specialization: 'Cardiologist',
      experience: 14,
      hospital: 'Pulse Super Specialty Hospital',
      address: '222 Heartland Street',
      fee: 1300,
      rating: 4.7,
      availability: ['Wed-Sun', '9:30 AM - 5:30 PM'],
      education: 'MBBS, MD - Cardiology',
      languages: ['English', 'Kannada'],
      locations: ['Bangalore', 'Chennai'],
      image: 'https://randomuser.me/api/portraits/women/5.jpg'
    },
  ],
  Orthopedics: [
    {
      id: 6,
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
      locations: ['Hyderabad', 'Delhi'],
      image: 'https://randomuser.me/api/portraits/men/6.jpg'
    },
    {
      id: 7,
      name: 'Dr. Anita Mehra',
      specialization: 'Orthopedic Surgeon',
      experience: 18,
      hospital: 'City Bone & Joint Hospital',
      address: '987 Ortho Lane, Medical Hub',
      fee: 1800,
      rating: 4.8,
      availability: ['Tue-Sat', '9:00 AM - 5:00 PM'],
      education: 'MBBS, MS - Orthopedics, Fellowship in Joint Replacement',
      languages: ['English', 'Hindi'],
      locations: ['Bangalore', 'Chennai'],
      image: 'https://randomuser.me/api/portraits/women/7.jpg'
    },
    {
      id: 8,
      name: 'Dr. Rajesh Verma',
      specialization: 'Orthopedic Consultant',
      experience: 15,
      hospital: 'OrthoCare Super Specialty',
      address: '567 Bone Wellness Road',
      fee: 1500,
      rating: 4.5,
      availability: ['Mon-Fri', '10:00 AM - 6:00 PM'],
      education: 'MBBS, MS - Orthopedics',
      languages: ['English', 'Telugu'],
      locations: ['Vizag', 'Hyderabad'],
      image: 'https://randomuser.me/api/portraits/men/8.jpg'
    },
    {
      id: 9,
      name: 'Dr. Priya Nair',
      specialization: 'Orthopedic Specialist',
      experience: 12,
      hospital: 'Spine & Joint Clinic',
      address: '789 Mobility Street, Wellness District',
      fee: 1400,
      rating: 4.6,
      availability: ['Wed-Sun', '11:00 AM - 7:00 PM'],
      education: 'MBBS, DNB - Orthopedics',
      languages: ['English', 'Malayalam'],
      locations: ['Chennai', 'Delhi'],
      image: 'https://randomuser.me/api/portraits/women/9.jpg'
    },
    {
      id: 10,
      name: 'Dr. Vikram Reddy',
      specialization: 'Pediatric Orthopedic Surgeon',
      experience: 10,
      hospital: 'Children’s Bone Care Hospital',
      address: '246 Healthy Kids Street',
      fee: 1600,
      rating: 4.4,
      availability: ['Mon-Sat', '8:00 AM - 2:00 PM'],
      education: 'MBBS, MS - Orthopedics, Fellowship in Pediatric Orthopedics',
      languages: ['English', 'Kannada'],
      locations: ['Bangalore', 'Vizag'],
      image: 'https://randomuser.me/api/portraits/men/10.jpg'
    }
  ],
  Dentistry: [
    {
      id: 11,
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
      locations: ['Hyderabad', 'Bangalore'],
      image: 'https://randomuser.me/api/portraits/women/11.jpg'
    },
    {
      id: 12,
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
      locations: ['Delhi', 'Vizag'],
      image: 'https://randomuser.me/api/portraits/women/12.jpg'
    },
    {
      id: 13,
      name: 'Dr. Rohan Mehta',
      specialization: 'Endodontist',
      experience: 12,
      hospital: 'Elite Dental Care',
      address: '567 Bright Smile Avenue',
      fee: 1100,
      rating: 4.7,
      availability: ['Mon-Fri', '9:00 AM - 5:00 PM'],
      education: 'BDS, MDS - Endodontics',
      languages: ['English', 'Telugu'],
      locations: ['Bangalore', 'Chennai'],
      image: 'https://randomuser.me/api/portraits/men/13.jpg'
    },
    {
      id: 14,
      name: 'Dr. Aisha Khan',
      specialization: 'Pediatric Dentist',
      experience: 7,
      hospital: 'Happy Teeth Dental Care',
      address: '321 Kids Dental Hub',
      fee: 900,
      rating: 4.8,
      availability: ['Tue-Sat', '11:00 AM - 6:00 PM'],
      education: 'BDS, MDS - Pediatric Dentistry',
      languages: ['English', 'Kannada'],
      locations: ['Hyderabad', 'Chennai'],
      image: 'https://randomuser.me/api/portraits/women/14.jpg'
    },
    {
      id: 15,
      name: 'Dr. Vikram Singh',
      specialization: 'Prosthodontist',
      experience: 15,
      hospital: 'Advanced Dental Solutions',
      address: '890 Prostho Lane, Smile City',
      fee: 1300,
      rating: 4.5,
      availability: ['Mon-Sun', '8:00 AM - 3:00 PM'],
      education: 'BDS, MDS - Prosthodontics',
      languages: ['English', 'Hindi'],
      locations: ['Delhi', 'Vizag'],
      image: 'https://randomuser.me/api/portraits/men/15.jpg'
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
      id: 16,
      name: 'Dr. Lisa Anderson',
      specialization: 'Pediatrician',
      experience: 12,
      hospital: "Children's Care Hospital",
      address: '890 Kids Health Center',
      fee: 1300,
      rating: 4.8,
      availability: ['Mon-Fri', '9:00 AM - 5:00 PM'],
      education: 'MBBS, MD - Pediatrics',
      languages: ['English'],
      locations: ['Hyderabad', 'Bangalore'],
      image: 'https://randomuser.me/api/portraits/women/16.jpg'
    },
    {
      id: 17,
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
      locations: ['Delhi', 'Vizag'],
      image: 'https://randomuser.me/api/portraits/men/17.jpg'
    },
    {
      id: 18,
      name: 'Dr. Sneha Rao',
      specialization: 'Pediatrician',
      experience: 10,
      hospital: 'Little Stars Hospital',
      address: '567 Infant Care Road',
      fee: 1200,
      rating: 4.9,
      availability: ['Mon-Fri', '8:00 AM - 4:00 PM'],
      education: 'MBBS, DNB - Pediatrics',
      languages: ['English', 'Telugu', 'Kannada'],
      locations: ['Bangalore', 'Chennai'],
      image: 'https://randomuser.me/api/portraits/women/18.jpg'
    },
    {
      id: 19,
      name: 'Dr. Rajesh Malhotra',
      specialization: 'Neonatologist',
      experience: 14,
      hospital: 'Newborn Health Center',
      address: '789 Baby Wellness Avenue',
      fee: 1400,
      rating: 4.6,
      availability: ['Tue-Sat', '9:30 AM - 5:30 PM'],
      education: 'MBBS, MD - Pediatrics, DM - Neonatology',
      languages: ['English', 'Hindi', 'Punjabi'],
      locations: ['Hyderabad', 'Chennai'],
      image: 'https://randomuser.me/api/portraits/men/19.jpg'
    },
    {
      id: 20,
      name: 'Dr. Aditi Verma',
      specialization: 'Pediatric Surgeon',
      experience: 11,
      hospital: 'Sunshine Child Hospital',
      address: '234 Pediatric Surgery Block',
      fee: 1600,
      rating: 4.7,
      availability: ['Mon-Sun', '7:30 AM - 2:00 PM'],
      education: 'MBBS, MS - Pediatric Surgery',
      languages: ['English', 'Hindi'],
      locations: ['Delhi', 'Vizag'],
      image: 'https://randomuser.me/api/portraits/women/20.jpg'
    }
  ],
  Ophthalmology: [
    {
      id: 21,
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
      locations: ['Hyderabad', 'Delhi'],
      image: 'https://randomuser.me/api/portraits/men/21.jpg'
    },
    {
      id: 22,
      name: 'Dr. Ayesha Kapoor',
      specialization: 'Ophthalmologist',
      experience: 12,
      hospital: 'Clear Vision Eye Clinic',
      address: '123 Optical Plaza',
      fee: 1400,
      rating: 4.7,
      availability: ['Mon-Sat', '10:00 AM - 5:00 PM'],
      education: 'MBBS, DNB - Ophthalmology',
      languages: ['English', 'Hindi'],
      locations: ['Bangalore', 'Chennai'],
      image: 'https://randomuser.me/api/portraits/women/22.jpg'
    },
    {
      id: 23,
      name: 'Dr. Rahul Mehta',
      specialization: 'Retina Specialist',
      experience: 18,
      hospital: 'Retina Vision Center',
      address: '456 Retina Road',
      fee: 2000,
      rating: 4.9,
      availability: ['Mon-Fri', '9:30 AM - 6:30 PM'],
      education: 'MBBS, MD - Ophthalmology, Fellowship in Retina',
      languages: ['English', 'Gujarati', 'Hindi'],
      locations: ['Vizag', 'Delhi'],
      image: 'https://randomuser.me/api/portraits/men/23.jpg'
    },
    {
      id: 24,
      name: 'Dr. Snehal Desai',
      specialization: 'Glaucoma Specialist',
      experience: 14,
      hospital: 'Bright Vision Eye Hospital',
      address: '789 Glaucoma Center',
      fee: 1800,
      rating: 4.6,
      availability: ['Mon-Sat', '8:00 AM - 4:00 PM'],
      education: 'MBBS, MS - Ophthalmology, Fellowship in Glaucoma',
      languages: ['English', 'Marathi', 'Hindi'],
      locations: ['Chennai', 'Hyderabad'],
      image: 'https://randomuser.me/api/portraits/women/24.jpg'
    },
    {
      id: 25,
      name: 'Dr. Vikram Sen',
      specialization: 'Cornea Specialist',
      experience: 15,
      hospital: 'Advanced Eye Care Hospital',
      address: '321 Cornea Avenue',
      fee: 1700,
      rating: 4.7,
      availability: ['Tue-Sat', '10:00 AM - 6:00 PM'],
      education: 'MBBS, MD - Ophthalmology, Fellowship in Cornea',
      languages: ['English', 'Bengali', 'Hindi'],
      locations: ['Bangalore', 'Vizag'],
      image: 'https://randomuser.me/api/portraits/men/25.jpg'
    }
  ],
  Neurology: [
    {
      id: 26,
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
      locations: ['Hyderabad', 'Delhi'],
      image: 'https://randomuser.me/api/portraits/men/26.jpg'
    },
    {
      id: 27,
      name: 'Dr. Ananya Iyer',
      specialization: 'Neurologist',
      experience: 14,
      hospital: 'NeuroCare Center',
      address: '567 Brain Health Avenue',
      fee: 2200,
      rating: 4.7,
      availability: ['Mon-Sat', '10:00 AM - 6:00 PM'],
      education: 'MBBS, MD - Neurology, Fellowship in Epilepsy',
      languages: ['English', 'Hindi', 'Tamil'],
      locations: ['Bangalore', 'Chennai'],
      image: 'https://randomuser.me/api/portraits/women/27.jpg'
    },
    {
      id: 28,
      name: 'Dr. Sameer Verma',
      specialization: 'Neurosurgeon',
      experience: 20,
      hospital: 'Advanced Brain & Spine Hospital',
      address: '123 Neurosurgery Plaza',
      fee: 2800,
      rating: 4.8,
      availability: ['Mon-Fri', '9:30 AM - 6:30 PM'],
      education: 'MBBS, MS - Neurosurgery, MCh',
      languages: ['English', 'Gujarati', 'Hindi'],
      locations: ['Vizag', 'Delhi'],
      image: 'https://randomuser.me/api/portraits/men/28.jpg'
    },
    {
      id: 29,
      name: 'Dr. Pooja Deshmukh',
      specialization: 'Pediatric Neurologist',
      experience: 12,
      hospital: 'Children’s Neuro Wellness Clinic',
      address: '789 Pediatric Neuro Street',
      fee: 2000,
      rating: 4.6,
      availability: ['Mon-Sat', '8:00 AM - 4:00 PM'],
      education: 'MBBS, MD - Pediatrics, DM - Pediatric Neurology',
      languages: ['English', 'Marathi', 'Hindi'],
      locations: ['Chennai', 'Hyderabad'],
      image: 'https://randomuser.me/api/portraits/women/29.jpg'
    },
    {
      id: 30,
      name: 'Dr. Arvind Kapoor',
      specialization: 'Stroke Specialist',
      experience: 16,
      hospital: 'Stroke & Neuro Rehabilitation Center',
      address: '321 Neuro Rehab Avenue',
      fee: 2300,
      rating: 4.7,
      availability: ['Tue-Sat', '10:00 AM - 6:00 PM'],
      education: 'MBBS, MD - Neurology, Fellowship in Stroke Medicine',
      languages: ['English', 'Punjabi', 'Hindi'],
      locations: ['Bangalore', 'Vizag'],
      image: 'https://randomuser.me/api/portraits/men/30.jpg'
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