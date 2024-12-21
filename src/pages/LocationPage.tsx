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

// Mock location data with images
const locations = [
  { 
    id: 1, 
    name: 'Hyderabad', 
    area: 'Telangana',
    image: 'https://www.bing.com/images/search?view=detailV2&ccid=7RgG8E58&id=9F34A1208BF7D3812D1249535A2EA90FA42259A7&thid=OIP.7RgG8E58PfgB0UVU-R1tRwHaE8&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.ed1806f04e7c3df801d14554f91d6d47%3frik%3dp1kipA%252bpLlpTSQ%26riu%3dhttp%253a%252f%252fmedia.cntraveller.in%252fwp-content%252fuploads%252f2014%252f02%252fHyderabad3-Alamy-D9K7KC.jpg%26ehk%3dDLgCJ02Y5SieAUvAY6ez%252f5NAOue50Sje%252fuuvOEMOpDE%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1067&expw=1600&q=Hyderabad+City&simid=607990795379887279&FORM=IRPRST&ck=884624330F39C519B8725CD902DA96E9&selectedIndex=2&itb=0',
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
    image: 'https://images.unsplash.com/photo-1572445271230-a78b5944a659?auto=format&fit=crop&w=500&q=60',
    landmark: 'Shaniwar Wada'
  },
  { 
    id: 8, 
    name: 'Ahmedabad', 
    area: 'Gujarat',
    image: 'https://images.unsplash.com/photo-1624956319270-8a5d2f80b0aa?auto=format&fit=crop&w=500&q=60',
    landmark: 'Sabarmati Ashram'
  }
];

const LocationPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLocationSelect = (locationId: number) => {
    // In a real app, you might want to store the selected location
    // For now, just navigate to the health issues page
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
                    image={location.image}
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