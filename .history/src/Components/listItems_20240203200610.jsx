import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import SavingsIcon from '@mui/icons-material/Savings';
import SchoolIcon from '@mui/icons-material/School';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import SettingsIcon from '@mui/icons-material/Settings';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { Link } from 'react-router-dom';
// import GoogleTranslateComponent from './GoogleTranslateComponent';


export const mainListItems = (
  <>
    <React.Fragment>
      <Link to="/dashboard" style={{ textDecoration: "none", color: "black" }}>
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </Link>
      <Link to="/bookings" style={{ textDecoration: "none", color: "black" }}>
        <ListItemButton>
          <ListItemIcon>
            <MedicalInformationIcon />
          </ListItemIcon>
          <ListItemText primary="Bookings" />
        </ListItemButton>
      </Link>
      <Link to="/donation" style={{ textDecoration: "none", color: "black" }}>
        <ListItemButton>
          <ListItemIcon>
            <SavingsIcon />
          </ListItemIcon>
          <ListItemText primary="Donation" />
        </ListItemButton>
      </Link>
      <Link to="/education" style={{ textDecoration: "none", color: "black" }}>
        <ListItemButton>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Educational Service" />
        </ListItemButton>
      </Link>
      <Link to="/questions" style={{ textDecoration: "none", color: "black" }}>
        <ListItemButton>
          <ListItemIcon>
            <HelpCenterIcon />
          </ListItemIcon>
          <ListItemText primary="FAQ" />
        </ListItemButton>
      </Link>
      <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>
        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
      </Link>
      {/* <Link to="/retireaibot" style={{ textDecoration: "none", color: "black" }}>
        <ListItemButton>
          <ListItemIcon>
            <SmartToyIcon />
          </ListItemIcon>
          <ListItemText primary="Retire AI Bot" />
        </ListItemButton>
      </Link> */}
    </React.Fragment >
  </>
);

