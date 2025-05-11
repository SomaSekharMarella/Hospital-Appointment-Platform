import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import hydImage from '../images/hyd.jpg';
import puneImage from '../images/pune.jpg';
import ahmImage from '../images/ahmedabad.jpg'


// Mock location data with images
const locations = [
  { 
    id: 1, 
    name: 'Hyderabad', 
    area: 'Telangana',
    image: hydImage ,
    landmark: 'Charminar'
  },
  { 
    id: 2, 
    name: 'Mumbai', 
    area: 'Maharashtra',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=500&q=60',
    landmark: 'Gateway of India'
  },
  { 
    id: 3, 
    name: 'Bangalore', 
    area: 'Karnataka',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=500&q=60',
    landmark: 'Vidhana Soudha'
  },
  { 
    id: 4, 
    name: 'Delhi', 
    area: 'Delhi NCR',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=500&q=60',
    landmark: 'India Gate'
  },
  { 
    id: 5, 
    name: 'Chennai', 
    area: 'Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=500&q=60',
    landmark: 'Marina Beach'
  },
  { 
    id: 6, 
    name: 'Kolkata', 
    area: 'West Bengal',
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=500&q=60',
    landmark: 'Victoria Memorial'
  },
  { 
    id: 7, 
    name: 'Pune', 
    area: 'Maharashtra',
    image: puneImage,
    landmark: 'Shaniwar Wada'
  },
  { 
    id: 8, 
    name: 'Ahmedabad', 
    area: 'Gujarat',
    image: ahmImage,
    landmark: 'Sabarmati Ashram'
  }
];

const LocationPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLocationSelect = (locationId: number) => {
    navigate('/health-issues');
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Select Your Location
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" align="center" sx={{ mb: 4 }}>
          Choose your city to find doctors near you
        </Typography>

        <Grid container spacing={3}>
          {locations.map((location) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={location.id}>
              <Card 
                elevation={3}
                sx={{ 
                  height: '100%',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  }
                }}
              >
                <CardActionArea 
                  onClick={() => handleLocationSelect(location.id)}
                  sx={{ height: '100%' }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={location.image || 'https://via.placeholder.com/500'}
                    alt={location.name}
                  />
                  <CardContent>
                    <Typography variant="h6" component="h2" gutterBottom>
                      {location.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {location.area}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {location.landmark}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default LocationPage;
