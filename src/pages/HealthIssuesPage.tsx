import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Icon,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Mock health issues data with icons
const healthIssues = [
  { id: 1, name: 'Cardiology', description: 'Heart & Blood Pressure Issues', icon: '❤️' },
  { id: 2, name: 'Orthopedics', description: 'Bone & Joint Problems', icon: '🦴' },
  { id: 3, name: 'Dentistry', description: 'Teeth & Oral Health', icon: '🦷' },
  { id: 4, name: 'Pediatrics', description: 'Child Healthcare', icon: '👶' },
  { id: 5, name: 'Dermatology', description: 'Skin Problems', icon: '🧴' },
  { id: 6, name: 'ENT', description: 'Ear, Nose & Throat', icon: '👂' },
  { id: 7, name: 'Ophthalmology', description: 'Eye Care', icon: '👁️' },
  { id: 8, name: 'Neurology', description: 'Brain & Nerve Issues', icon: '🧠' },
];

const HealthIssuesPage: React.FC = () => {
  const navigate = useNavigate();

  const handleIssueSelect = (issueId: number) => {
    navigate('/doctors', { state: { issueId } });
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Select Health Category
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" align="center" sx={{ mb: 4 }}>
          Choose the type of specialist you want to consult
        </Typography>

        <Grid container spacing={3}>
          {healthIssues.map((issue) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={issue.id}>
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
                  onClick={() => handleIssueSelect(issue.id)}
                  sx={{ height: '100%' }}
                >
                  <CardContent>
                    <Box sx={{ fontSize: '2rem', mb: 2, textAlign: 'center' }}>
                      {issue.icon}
                    </Box>
                    <Typography variant="h6" component="h2" gutterBottom align="center">
                      {issue.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                      {issue.description}
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

export default HealthIssuesPage; 