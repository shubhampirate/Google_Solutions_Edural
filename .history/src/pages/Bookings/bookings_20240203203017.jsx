import React, { useState, useEffect } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GoogleMapReact from 'google-map-react'; // Install with npm/yarn
import FullCalendar from '@fullcalendar/react'; // Install with npm/yarn
import dayGridPlugin from '@fullcalendar/daygrid'; // Install with npm/yarn

const defaultTheme = createTheme();

// Placeholder data for bookings and calendar events
const bookingsData = [
  { id: 1, title: 'Booking 1', date: '2024-02-10' },
  { id: 2, title: 'Booking 2', date: '2024-02-15' },
  // Add more booking data as needed
];

const calendarEvents = [
  { id: 1, title: 'Event 1', start: '2024-02-10', end: '2024-02-12' },
  { id: 2, title: 'Event 2', start: '2024-02-15', end: '2024-02-18' },
  // Add more calendar event data as needed
];

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Booking() {
  const [tabValue, setTabValue] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex', borderRadius: '16px', overflow: 'hidden', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <CssBaseline />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Tabs value={tabValue} onChange={handleChangeTab}>
            <Tab label="View Bookings" />
            <Tab label="Book a New Session" />
            <Tab label="Calendar View" />
          </Tabs>

          {tabValue === 0 && (
            <Box>
              {/* View Bookings Content */}
              {bookingsData.map((booking) => (
                <Card key={booking.id}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {booking.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {booking.date}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          )}

          {tabValue === 1 && (
            <Box>
              {/* Book a New Session Content */}
              {/* Use Google Maps component to search for schools */}
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'YOUR_GOOGLE_MAPS_API_KEY' }}
                defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
                defaultZoom={10}
              >
                <AnyReactComponent lat={37.7749} lng={-122.4194} text="Your Location" />
              </GoogleMapReact>
            </Box>
          )}

          {tabValue === 2 && (
            <Box>
              {/* Calendar View Content */}
              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={calendarEvents}
              />
            </Box>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
