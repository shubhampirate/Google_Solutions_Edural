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
const defaultTheme = createTheme();



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
             <Box position="relative" maxWidth="300px" margin="auto" marginBottom="2rem">
             <img
               src={heroImg}
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
             
                //  minHeight:  , // Adjust as needed
                 overflow: 'auto',
               }}
             >
               <CardContent>
               <Chip size="sm" variant="soft" label="Education" />
           <br />
           <Typography level="title-lg"> Swami Vivekanand School </Typography>
        <Typography level="body-md">
         Venue : Palghar, Mumbai, India
        </Typography>
        <Typography level="body-md">
         Date : 29th February 2024
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
            <CustomButton backgroundColor="#F47F2A" color="#fff" buttonText="Navigate to Maps" heroBtn={true} />
            <NearMeIcon sx={{ marginLeft: '8px' }} />
          </Box>
               </CardContent>
               
             </Card>
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
