import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  Tabs,
  Tab,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Card,
  CardContent,
  IconButton,
  Badge,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Switch,
  FormControlLabel,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import {
  CalendarMonth,
  People,
  Notifications,
  Settings,
  Person,
  MedicalServices,
  Schedule,
  Assessment,
  Edit,
  Add,
  History,
  Work,
  School,
  Star,
  Delete,
  AccessTime,
  NotificationsActive,
  NotificationsOff,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const DoctorDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const [openNewAppointment, setOpenNewAppointment] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [openTimeSlot, setOpenTimeSlot] = useState(false);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Mock data for appointments
  const appointments = [
    { id: 1, patientName: 'John Doe', time: '09:00 AM', type: 'Regular Checkup', status: 'Confirmed' },
    { id: 2, patientName: 'Jane Smith', time: '10:30 AM', type: 'Follow-up', status: 'Pending' },
    { id: 3, patientName: 'Mike Johnson', time: '02:00 PM', type: 'Consultation', status: 'Completed' },
  ];

  // Mock data for statistics
  const stats = [
    { title: 'Today\'s Appointments', value: '8', icon: <CalendarMonth /> },
    { title: 'Total Patients', value: '156', icon: <People /> },
    { title: 'Pending Reports', value: '3', icon: <Assessment /> },
    { title: 'Available Slots', value: '12', icon: <Schedule /> },
  ];

  // Mock data for doctor profile
  const doctorProfile = {
    name: 'Dr. Sarah Smith',
    specialization: 'General Medicine',
    experience: '15 years',
    education: [
      { degree: 'MD', institution: 'Harvard Medical School', year: '2008' },
      { degree: 'Residency', institution: 'Massachusetts General Hospital', year: '2012' },
    ],
    certifications: [
      'Board Certified in Internal Medicine',
      'Advanced Cardiac Life Support',
      'Basic Life Support',
    ],
    languages: ['English', 'Spanish', 'French'],
    rating: 4.8,
    totalReviews: 156,
  };

  // Mock data for appointment history
  const appointmentHistory = [
    { id: 1, patientName: 'Alice Brown', date: '2024-03-15', type: 'Regular Checkup', status: 'Completed' },
    { id: 2, patientName: 'Bob Wilson', date: '2024-03-14', type: 'Follow-up', status: 'Completed' },
    { id: 3, patientName: 'Carol Davis', date: '2024-03-13', type: 'Consultation', status: 'Completed' },
  ];

  // Mock data for time slots
  const timeSlots = [
    { id: 1, day: 'Monday', startTime: '09:00', endTime: '17:00', isAvailable: true },
    { id: 2, day: 'Tuesday', startTime: '09:00', endTime: '17:00', isAvailable: true },
    { id: 3, day: 'Wednesday', startTime: '10:00', endTime: '18:00', isAvailable: true },
    { id: 4, day: 'Thursday', startTime: '09:00', endTime: '17:00', isAvailable: true },
    { id: 5, day: 'Friday', startTime: '09:00', endTime: '15:00', isAvailable: true },
  ];

  // Mock data for notifications
  const notifications = [
    { id: 1, title: 'New Appointment', message: 'John Doe scheduled an appointment for tomorrow', time: '10 mins ago', read: false },
    { id: 2, title: 'Appointment Reminder', message: 'You have an appointment with Jane Smith in 30 minutes', time: '30 mins ago', read: false },
    { id: 3, title: 'System Update', message: 'New features have been added to your dashboard', time: '2 hours ago', read: true },
  ];

  // Mock data for settings
  const settings = {
    notifications: {
      email: true,
      sms: false,
      push: true,
      appointmentReminders: true,
      newPatientAlerts: true,
      systemUpdates: true,
    },
    schedule: {
      defaultDuration: 30,
      breakTime: 15,
      maxAppointmentsPerDay: 20,
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    profile: {
      visibility: 'public',
      autoConfirmAppointments: false,
      allowPatientReviews: true,
    },
  };

  const handleNewAppointment = () => {
    setOpenNewAppointment(true);
  };

  const handleCloseNewAppointment = () => {
    setOpenNewAppointment(false);
  };

  const handleOpenProfile = () => {
    setOpenProfile(true);
  };

  const handleCloseProfile = () => {
    setOpenProfile(false);
  };

  const handleOpenNotifications = () => {
    setOpenNotifications(true);
  };

  const handleCloseNotifications = () => {
    setOpenNotifications(false);
  };

  const handleOpenSettings = () => {
    setOpenSettings(true);
  };

  const handleCloseSettings = () => {
    setOpenSettings(false);
  };

  const handleOpenTimeSlot = () => {
    setOpenTimeSlot(true);
  };

  const handleCloseTimeSlot = () => {
    setOpenTimeSlot(false);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Header Section */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="h4" gutterBottom>
                Welcome, {doctorProfile.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {doctorProfile.specialization} • {doctorProfile.experience} experience
              </Typography>
            </Box>
            <Box>
              <IconButton color="primary" onClick={handleOpenProfile}>
                <Person />
              </IconButton>
              <IconButton color="primary" onClick={handleOpenNotifications}>
                <Badge badgeContent={notifications.filter(n => !n.read).length} color="error">
                  <Notifications />
                </Badge>
              </IconButton>
              <IconButton color="primary" onClick={handleOpenSettings}>
                <Settings />
              </IconButton>
            </Box>
          </Paper>
        </Grid>

        {/* Statistics Cards */}
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {stat.icon}
                  <Typography variant="h6" sx={{ ml: 1 }}>
                    {stat.title}
                  </Typography>
                </Box>
                <Typography variant="h4">{stat.value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

        {/* Main Content */}
        <Grid item xs={12}>
          <Paper sx={{ width: '100%' }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="Appointments" />
              <Tab label="Patients" />
              <Tab label="Schedule" />
              <Tab label="History" />
              <Tab label="Profile" />
            </Tabs>

            <TabPanel value={tabValue} index={0}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">Today's Appointments</Typography>
                <Button 
                  variant="contained" 
                  startIcon={<Add />}
                  onClick={handleNewAppointment}
                >
                  New Appointment
                </Button>
              </Box>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Patient</TableCell>
                      <TableCell>Time</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {appointments.map((appointment) => (
                      <TableRow key={appointment.id}>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar sx={{ mr: 2 }}>{appointment.patientName[0]}</Avatar>
                            {appointment.patientName}
                          </Box>
                        </TableCell>
                        <TableCell>{appointment.time}</TableCell>
                        <TableCell>{appointment.type}</TableCell>
                        <TableCell>
                          <Chip 
                            label={appointment.status}
                            color={
                              appointment.status === 'Confirmed' ? 'success' :
                              appointment.status === 'Pending' ? 'warning' : 'default'
                            }
                          />
                        </TableCell>
                        <TableCell>
                          <Button variant="outlined" size="small" sx={{ mr: 1 }}>
                            View
                          </Button>
                          <Button variant="outlined" size="small" color="error">
                            Cancel
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </TabPanel>

            <TabPanel value={tabValue} index={1}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">Patient Records</Typography>
                <Button variant="contained" startIcon={<Add />}>
                  Add New Patient
                </Button>
              </Box>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Patient Name</TableCell>
                      <TableCell>Last Visit</TableCell>
                      <TableCell>Next Appointment</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* Add patient list data here */}
                  </TableBody>
                </Table>
              </TableContainer>
            </TabPanel>

            <TabPanel value={tabValue} index={2}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">Schedule Management</Typography>
                <Button variant="contained" startIcon={<Add />} onClick={handleOpenTimeSlot}>
                  Add Time Slot
                </Button>
              </Box>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Day</TableCell>
                      <TableCell>Start Time</TableCell>
                      <TableCell>End Time</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {timeSlots.map((slot) => (
                      <TableRow key={slot.id}>
                        <TableCell>{slot.day}</TableCell>
                        <TableCell>{slot.startTime}</TableCell>
                        <TableCell>{slot.endTime}</TableCell>
                        <TableCell>
                          <Chip
                            label={slot.isAvailable ? 'Available' : 'Unavailable'}
                            color={slot.isAvailable ? 'success' : 'default'}
                          />
                        </TableCell>
                        <TableCell>
                          <IconButton size="small" color="primary">
                            <Edit />
                          </IconButton>
                          <IconButton size="small" color="error">
                            <Delete />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </TabPanel>

            <TabPanel value={tabValue} index={3}>
              <Typography variant="h6" gutterBottom>
                Appointment History
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Patient</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {appointmentHistory.map((appointment) => (
                      <TableRow key={appointment.id}>
                        <TableCell>{appointment.date}</TableCell>
                        <TableCell>{appointment.patientName}</TableCell>
                        <TableCell>{appointment.type}</TableCell>
                        <TableCell>
                          <Chip 
                            label={appointment.status}
                            color="success"
                          />
                        </TableCell>
                        <TableCell>
                          <Button variant="outlined" size="small">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </TabPanel>

            <TabPanel value={tabValue} index={4}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">Doctor Profile</Typography>
                <Button variant="contained" startIcon={<Edit />}>
                  Edit Profile
                </Button>
              </Box>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        <Work sx={{ mr: 1, verticalAlign: 'middle' }} />
                        Professional Information
                      </Typography>
                      <Typography variant="body1" paragraph>
                        <strong>Specialization:</strong> {doctorProfile.specialization}
                      </Typography>
                      <Typography variant="body1" paragraph>
                        <strong>Experience:</strong> {doctorProfile.experience}
                      </Typography>
                      <Typography variant="body1" paragraph>
                        <strong>Languages:</strong> {doctorProfile.languages.join(', ')}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        <School sx={{ mr: 1, verticalAlign: 'middle' }} />
                        Education & Certifications
                      </Typography>
                      {doctorProfile.education.map((edu, index) => (
                        <Typography key={index} variant="body1" paragraph>
                          <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
                        </Typography>
                      ))}
                      <Typography variant="subtitle1" gutterBottom>
                        Certifications:
                      </Typography>
                      {doctorProfile.certifications.map((cert, index) => (
                        <Chip
                          key={index}
                          label={cert}
                          sx={{ mr: 1, mb: 1 }}
                        />
                      ))}
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        <Star sx={{ mr: 1, verticalAlign: 'middle' }} />
                        Ratings & Reviews
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Typography variant="h4" sx={{ mr: 1 }}>
                          {doctorProfile.rating}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          ({doctorProfile.totalReviews} reviews)
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </TabPanel>
          </Paper>
        </Grid>
      </Grid>

      {/* New Appointment Dialog */}
      <Dialog open={openNewAppointment} onClose={handleCloseNewAppointment} maxWidth="sm" fullWidth>
        <DialogTitle>Schedule New Appointment</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <TextField
              fullWidth
              label="Patient Name"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Date"
              type="date"
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              fullWidth
              label="Time"
              type="time"
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              fullWidth
              select
              label="Appointment Type"
              margin="normal"
            >
              <MenuItem value="regular">Regular Checkup</MenuItem>
              <MenuItem value="followup">Follow-up</MenuItem>
              <MenuItem value="consultation">Consultation</MenuItem>
            </TextField>
            <TextField
              fullWidth
              label="Notes"
              multiline
              rows={4}
              margin="normal"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseNewAppointment}>Cancel</Button>
          <Button variant="contained" onClick={handleCloseNewAppointment}>
            Schedule
          </Button>
        </DialogActions>
      </Dialog>

      {/* Profile Dialog */}
      <Dialog open={openProfile} onClose={handleCloseProfile} maxWidth="md" fullWidth>
        <DialogTitle>Doctor Profile</DialogTitle>
        <DialogContent>
          <Grid container spacing={3} sx={{ pt: 2 }}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Full Name"
                defaultValue={doctorProfile.name}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Specialization"
                defaultValue={doctorProfile.specialization}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Experience"
                defaultValue={doctorProfile.experience}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Phone"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Languages"
                defaultValue={doctorProfile.languages.join(', ')}
                margin="normal"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseProfile}>Cancel</Button>
          <Button variant="contained" onClick={handleCloseProfile}>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>

      {/* Notifications Dialog */}
      <Dialog open={openNotifications} onClose={handleCloseNotifications} maxWidth="sm" fullWidth>
        <DialogTitle>Notifications</DialogTitle>
        <DialogContent>
          <List>
            {notifications.map((notification) => (
              <React.Fragment key={notification.id}>
                <ListItem
                  sx={{
                    bgcolor: notification.read ? 'transparent' : 'action.hover',
                  }}
                >
                  <ListItemAvatar>
                    <Avatar>
                      <NotificationsActive />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={notification.title}
                    secondary={
                      <>
                        <Typography component="span" variant="body2" color="text.primary">
                          {notification.message}
                        </Typography>
                        <br />
                        {notification.time}
                      </>
                    }
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseNotifications}>Close</Button>
          <Button color="primary">Mark All as Read</Button>
        </DialogActions>
      </Dialog>

      {/* Settings Dialog */}
      <Dialog open={openSettings} onClose={handleCloseSettings} maxWidth="md" fullWidth>
        <DialogTitle>Settings</DialogTitle>
        <DialogContent>
          <Grid container spacing={3} sx={{ pt: 2 }}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Notification Preferences
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.notifications.email}
                        onChange={() => {}}
                      />
                    }
                    label="Email Notifications"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.notifications.sms}
                        onChange={() => {}}
                      />
                    }
                    label="SMS Notifications"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.notifications.push}
                        onChange={() => {}}
                      />
                    }
                    label="Push Notifications"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.notifications.appointmentReminders}
                        onChange={() => {}}
                      />
                    }
                    label="Appointment Reminders"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Schedule Settings
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Default Appointment Duration (minutes)"
                    type="number"
                    value={settings.schedule.defaultDuration}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Break Time (minutes)"
                    type="number"
                    value={settings.schedule.breakTime}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Max Appointments Per Day"
                    type="number"
                    value={settings.schedule.maxAppointmentsPerDay}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Working Days</InputLabel>
                    <Select
                      multiple
                      value={settings.schedule.workingDays}
                      renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      )}
                    >
                      {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                        <MenuItem key={day} value={day}>
                          {day}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Profile Settings
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Profile Visibility</InputLabel>
                    <Select value={settings.profile.visibility}>
                      <MenuItem value="public">Public</MenuItem>
                      <MenuItem value="private">Private</MenuItem>
                      <MenuItem value="patients">Patients Only</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.profile.autoConfirmAppointments}
                        onChange={() => {}}
                      />
                    }
                    label="Auto-confirm Appointments"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.profile.allowPatientReviews}
                        onChange={() => {}}
                      />
                    }
                    label="Allow Patient Reviews"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSettings}>Cancel</Button>
          <Button variant="contained" onClick={handleCloseSettings}>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>

      {/* Time Slot Dialog */}
      <Dialog open={openTimeSlot} onClose={handleCloseTimeSlot} maxWidth="sm" fullWidth>
        <DialogTitle>Add Time Slot</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <FormControl fullWidth margin="normal">
              <InputLabel>Day</InputLabel>
              <Select label="Day">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                  <MenuItem key={day} value={day}>
                    {day}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Start Time"
              type="time"
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              fullWidth
              label="End Time"
              type="time"
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Available"
              margin="normal"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseTimeSlot}>Cancel</Button>
          <Button variant="contained" onClick={handleCloseTimeSlot}>
            Add Slot
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default DoctorDashboard;