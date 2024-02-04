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
import heroImg from "../../media/img_main_page.png";
const defaultTheme = createTheme();

// Placeholder data for bookings and calendar events
const bookingsData = [
  { id: 1, title: 'Booking 1', date: '2024-02-10' },
  { id: 2, title: 'Booking 2', date: '2024-02-15' },
  // Add more booking data as needed
];
const ImageOverlayCard = ({ imgSrc, category, title, venue, date, buttonText }) => {
  return (
    <Box sx={{ position: 'relative', textAlign: 'center' }}>
      <img
        src={imgSrc}
        alt="heroImg"
        style={{ maxWidth: '10rem', maxHeight: '10rem', borderRadius: '50%' }}
      />
      <Card
        variant="solid"
        color="primary"
        sx={{
          boxShadow: 'lg',
          width: 400,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: (theme) => theme.palette.primary.main,
          opacity: 0.8,
        }}
      >
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Chip size="sm" variant="soft" label={category} />
        </Box>
        <CardContent>
          <Typography level="title-lg">{title}</Typography>
          <Typography level="body-md">Venue: {venue}</Typography>
          <Typography level="body-md">Date: {date}</Typography>
        </CardContent>
        <CardActions>
          <CustomButton backgroundColor="#F47F2A" color="#fff" buttonText={buttonText} heroBtn={true} />
        </CardActions>
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
       <Box position="relative" maxWidth="300px" margin="auto" marginBottom="2rem">
       <img
         src={heroImg}
         alt="card-background"
         style={{
           width: '100%',
           height: 'auto',
           borderRadius: '16px',
           objectFit: 'cover',
         }}
       />
       <Card
         sx={{
           position: 'absolute',
           bottom: '-20%', // Adjust as needed (negative value starts from above the image)
           left: '10%', // Adjust as needed
           right: '10%', // Adjust as needed
           backgroundColor: (theme) => theme.palette.background.paper,
           opacity: 1,
           borderRadius: '16px',
         }}
       >
         <CardContent>
         <Chip size="sm" variant="soft" label="Education" />
           
           <Typography level="title-lg"> Swami Vivekanand School </Typography>
        <Typography level="body-md">
         Venue : Palghar, Mumbai, India
        </Typography>
        <Typography level="body-md">
         Date : 29th February 2024
        </Typography>
           {/* <Chip label="hello" size="small" sx={{ marginTop: '8px' }} /> */}
         </CardContent>
       </Card>
     </Box>
//             <Box>
//               <div className="">
//               <Box sx={{ flex: "0.75" }}>
//             <img
//               src={heroImg}
//               alt="heroImg"
//               style={{ maxWidth: "10rem", maxHeight: "10rem"}}
              
//             />
         
//               <Card
//       variant="solid"
//       color="primary"
    
//       sx={{
//         boxShadow: 'lg',
//             width: 400,
//             overflow: 'auto',
//             resize: 'horizontal',
//             marginLeft: '2rem',
//             marginTop: '2rem',
//             position: 'absolute',
//             top: '25%', // Adjust as needed
//           left: '10%', // Adjust as needed
//             // backgroundColor: (theme) => theme.palette.primary.main,
//             opacity: 1, // Adjust the opacity as needed


//       }}
//     >
//       <Box sx={{ display: 'flex', gap: 1 }}>
//         <Chip size="sm" variant="soft" label="Education" />
       
//         {/* <Chip size="sm" variant="soft" label="Chip Filled" /> */}
       
//       </Box>
//       <div>
//           <Typography fontSize="sm" textColor="text.tertiary">
// {/*            
//           </Typography> */}
//         </Typography>
//       </div>
//       <CardContent>
        // <Typography level="title-lg"> Swami Vivekanand School </Typography>
        // <Typography level="body-md">
        //  Venue : Palghar, Mumbai, India
        // </Typography>
        // <Typography level="body-md">
        //  Date : 29th February 2024
        // </Typography>
//       </CardContent>
//       <CardActions>
//       <CustomButton
//               backgroundColor="#F47F2A"
//               color="#fff"
//               buttonText="Navigate to Maps"
//               heroBtn={true}
//             />
//         {/* <Button variant="solid">Purchase Now</Button> */}
//       </CardActions>
//     </Card>
//     </Box>
//     </div>

//             </Box>
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
