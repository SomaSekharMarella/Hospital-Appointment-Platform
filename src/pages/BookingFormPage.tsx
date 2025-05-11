import React, { useState } from 'react';
import { 
  Container, Typography, TextField, Button, MenuItem, Select, FormControl, InputLabel 
} from '@mui/material';

const BookingFormPage = () => {
  const [formData, setFormData] = useState({
    doctor: '',
    date: '',
    time: '',
    patientName: '',
    contact: '',
    symptoms: '',
  });

  const availableDoctors = [
    { id: 1, name: 'Dr. Sarah Johnson' },
    { id: 2, name: 'Dr. Michael Chen' },
    { id: 3, name: 'Dr. James Wilson' }
  ];

  const availableTimes = ['10:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked with ${formData.doctor} on ${formData.date} at ${formData.time}`);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <Typography variant="h4" align="center" gutterBottom>Book Appointment</Typography>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal">
          <InputLabel>Select Doctor</InputLabel>
          <Select name="doctor" value={formData.doctor} onChange={handleChange} required>
            {availableDoctors.map((doc) => (
              <MenuItem key={doc.id} value={doc.name}>{doc.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField fullWidth type="date" name="date" label="Select Date" value={formData.date} onChange={handleChange} margin="normal" required InputLabelProps={{ shrink: true }} />

        <FormControl fullWidth margin="normal">
          <InputLabel>Select Time</InputLabel>
          <Select name="time" value={formData.time} onChange={handleChange} required>
            {availableTimes.map((time, index) => (
              <MenuItem key={index} value={time}>{time}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField fullWidth name="patientName" label="Patient Name" value={formData.patientName} onChange={handleChange} margin="normal" required />

        <TextField fullWidth type="tel" name="contact" label="Contact Number" value={formData.contact} onChange={handleChange} margin="normal" required />

        <TextField fullWidth name="symptoms" label="Symptoms (Optional)" value={formData.symptoms} onChange={handleChange} margin="normal" multiline rows={2} />

        <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>Confirm Appointment</Button>
      </form>
    </Container>
  );
};

export default BookingFormPage;

