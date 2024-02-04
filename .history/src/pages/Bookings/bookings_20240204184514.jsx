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
import LicenseCard from './LicenseCard';
import { CardActions, Button } from '@mui/material';
import Chip from '@mui/material/Chip';
import CustomButton from '../../Components/CustomButton';
import heroImg from "../../media/img_1.jpeg";
import NorthEastIcon from '@mui/icons-material/NorthEast';
import NearMeIcon from '@mui/icons-material/NearMe';
import { Grid } from '@mui/material';
const defaultTheme = createTheme();

const ImageCard = ({ imageSrc, schoolName, venue, date, chipLabel, chipColor, buttonText }) => {
  return (
    <Box position="relative" maxWidth="300px" margin="auto" marginBottom="2rem">
      <img
        src={imageSrc}
        alt="card-background"
        style={{
          width: '100%',
          height: '60%',
          objectFit: 'cover',
        }}
      />
      <Card
        sx={{
          position: 'absolute',
          top: '80%', // Start from around 20% from the top
          left: '5%', // Adjust as needed
          right: '5%', // Adjust as needed
          backgroundColor: (theme) => theme.palette.background.paper,
          opacity: 1,
          overflow: 'auto',
        }}
      >
        <CardContent>
          <Chip
            size="sm"
            variant="soft"
            label={chipLabel}
            sx={{ backgroundColor: chipColor, color: '#F47F2A', marginRight: '8px' }}
          />
          <br />
          <Typography variant="h7" gutterBottom>
            {schoolName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Venue: {venue}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Date: {date}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex-between', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
          <CustomButton backgroundColor="#F47F2A" color="#fff" buttonText={buttonText} heroBtn={true} />
          <NearMeIcon sx={{ marginLeft: '8px' }} />
        </Box>
      </Card>
    </Box>
  );
};
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
            overflow: 'hidden',
          }}
        >
          <Tabs value={tabValue} onChange={handleChangeTab}>
            <Tab label="View Bookings" />
            <Tab label="Book a New Session" />
            <Tab label="Calendar View" />
          </Tabs>

          {tabValue === 0 && (
           <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <ImageCard
                imageSrc={heroImg}
                schoolName="School 1"
                venue="Location 1"
                date="Date 1"
                chipLabel="Education"
                chipColor="rgba(244, 127, 42, 0.1)"
                buttonText="Navigate to Maps"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <ImageCard  
                imageSrc={heroImg}
                schoolName="School 2"
                venue="Location 2"
                date="Date 2"
                chipLabel="Education"
                chipColor="rgba(244, 127, 42, 0.1)"
                buttonText="Navigate to Maps"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <ImageCard
                imageSrc={heroImg}
                schoolName="School 3"
                venue="Location 3"
                date="Date 3"
                chipLabel="Education"
                chipColor="rgba(244, 127, 42, 0.1)"
                buttonText="Navigate to Maps"
              />
            </Grid>
            {/* Add more Grid items for additional cards */}
          </Grid>
//           
          )}

          {tabValue === 1 && (
            <Box>
            <Grid item xs={12} sm={12}  style={{margin,paddingBottom: "1.5rem" }} >
            <div style={{ fontSize: '2rem', fontWeight: '500'}}>Welcome Jenil👋</div>
       
            <div>Thank You for Onboarding as A Volunteer</div>
            </Grid>
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
             {/* <FullCalendar
               plugins={[dayGridPlugin]}
               initialView="dayGridMonth"
               events={calendarEvents}
             /> */}
           </Box>          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
