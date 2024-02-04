import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";
import Properties from "./Properties";
import Footer from "./Footer";
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';
import useMediaQuery from '@mui/material/useMediaQuery';
import heroImg from "../media/img_main_page.png";
import heroImg_2 from "../media/education.png";
import heroImg_3 from "../media/people.png";
import heroImg_4 from "../media/donation (3).png";
import heroImg_5 from "../media/About_Us.png";
import heroImg_6 from "../media/Educate_A_Child.png";
import heroImg_7 from "../media/new.jpeg";
import CustomButton from "./CustomButton";
import CongratCard from "./CongratsCard";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));
  const Title_2 = styled(Typography)(({ theme }) => ({
    color: "#000336",
    textAlign: "center",
    margin: theme.spacing(4, 0, 4, 0),

  }));
  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "40px",
    color: "#000336",
    fontWeight: "bold",
    textAlign: "center",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));
  const isLargeScreen = useMediaQuery('(min-width:960px)');
  const containerStyle = {
    display: 'flex',
    gap: '10px', // Adjust the gap between buttons as needed
  };
  const secondButtonStyle = {
    border: '1px solid #000', // Black border for the second button
    textTransform: 'none', // Disable the uppercase text transform
  };

  return (
    <>
    <Box sx={{ background: `linear-gradient(to bottom, #FFFFFF 50%, #F47F2A 200%)`, marginBottom: "1rem"}}>
        <Navbar />
      <Container >
        <CustomBox >
          <Box sx={{ flex: "1"}}>
            
            <Typography
  variant="body2"
  sx={{
    fontSize: "40px",
    fontWeight: "bold",
    mt: 10,
    mb: 4,
  }}
>
  <span>Enlist To Propagate, </span>{" "}
  <br />
  <span> Empower and &nbsp;
  <span style={{ color: "#F47F2A", fontWeight: "bold" }}>
    Educate
  </span>
  </span>
</Typography>


            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#1C1F25", my: 4 }}
            >
             Step into a world of purpose and impact by volunteering with us. Your contribution can bring positive change to rural areas, as we work together to empower and educate communities, one village at a time !
            </Typography>
            <div style={containerStyle}>
            <CustomButton
              backgroundColor="#F47F2A"
              color="#fff"
              buttonText="Register"
              heroBtn={true}
            />
           {isLargeScreen && (
        <Button
          variant="contained"
          style={{
            backgroundColor: '#fff',
            color: '#000',
            ...secondButtonStyle,
          }}
        >
          Watch Video
        </Button>
      )}   </div>
          </Box>

          <Box sx={{ flex: "0.75" }}>
            <img
              src={heroImg}
              alt="heroImg"
              style={{ maxWidth: "100%", maxHeight: "80%", borderRadius: "50%"}}
            />
          </Box>
        </CustomBox>
    </Container>
    </Box>
    {/* <Box sx= {{backgroundColor: "rgba(244, 127, 42, 0.04)"}}> */}
    <Box  >
    <Container sx={{marginTop:"5rem"}}>
        <CustomBox>
          <CongratCard imageUrl={heroImg_4} title="Make a Donation"
          content="Enable positive changes by donating and helping those in need "
          buttonText="Go to Donation"/>
          <CongratCard  title="Become a Volunteer" imageUrl={heroImg_3} content="Support education, offer your time and become impactful K12 educators" 
          buttonText="Register as volunteer"/>
          <CongratCard title="Child Education " imageUrl={heroImg_2} content="Invest in children potential, providing  quality education for a brighter future " 
          buttonText="Know More"/>
    
          </CustomBox>
    </Container>
      </Box>
    <Container>
        <CustomBox>
        <Box sx={{ flex: "0.75" }}>
            <img
              src={heroImg_5}
              alt="heroImg_2"
              style={{ maxWidth: "100%", maxHeight: "90%", marginTop:"3rem",marginRight: "4rem", borderRadius: "5%"}}
            />
          </Box>
          <Box sx={{ flex: "1.25"}}>
          <Title variant="h1" sx={{color: "#F47F2A"}}>
              About Us
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#1C1F25", my: 4 }}
            >
    At ......., We are dedicated to make a positive impact. Building a better world through compassion and action. Join us in our mission to bring hope, create change and empower lives.          </Typography>
            <List>
  <ListItem>
   <ListItemButton>
     <ListItemDecorator><Home /></ListItemDecorator>
     <ListItemContent>Making Education Accesible</ListItemContent>
     {/* <KeyboardArrowRight /> */}
   </ListItemButton>
  </ListItem>
  <br/>
  <ListItem>
   <ListItemButton>
     <ListItemDecorator><Home /></ListItemDecorator>
     <ListItemContent>Founded for Change</ListItemContent>
     {/* <KeyboardArrowRight /> */}
   </ListItemButton>
  </ListItem>
  <br/>
  <ListItem>
   <ListItemButton>
     <ListItemDecorator><Home /></ListItemDecorator>
     <ListItemContent>Passionate Upbringings</ListItemContent>
     {/* <KeyboardArrowRight /> */}
   </ListItemButton>
  </ListItem>
  <br/>
  <ListItem>
   <ListItemButton>
     <ListItemDecorator><Home /></ListItemDecorator>
     <ListItemContent>Transforming Communities</ListItemContent>
     {/* <KeyboardArrowRight /> */}
   </ListItemButton>
  </ListItem>
</List>
        
          </Box>
        </CustomBox>
</Container>
<Box sx={{ background: `linear-gradient(to top, #FFFFFF 0.1%, #F47F2A 40%)`, marginBottom: "2rem"}}>
      
      <Container >
        <CustomBox >
          <Box sx={{ flex: "1"}}>
            
       
<Typography
  variant="body2"
  sx={{
    fontSize: "40px",
    fontWeight: "bold",
    mt: 10,
    mb: 4,
  }}
>
  {/* <span sx={{ color: "#ffffff", backgroundColor: "#F47F2A" }}>Educate a Child  </span>{" "} */}
  <span style={{ color: "white", fontWeight: "bold", textDecoration: "underline", marginBottom: "50px" }}>
    Educate A Child
  </span>
</Typography>


            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#fffff", my: 2 }}
            >
              <span style={{ color: "white" }}>
Embark on a meaningful journey with us as a volunteer, where your dedication can help bridge the educational gap in rural villages. Together, we strive to create a ripple effect of positive change, empowering communities through educationJoin us in this collective endeavor to uplift and educate, making a real difference in the heart of rural areas.     
</span>     </Typography>
            <div style={containerStyle}>
            <CustomButton
              backgroundColor="#fff"
              color="#F47F2A"
              buttonText="Register"
              heroBtn={true}
            />
       </div>
          </Box>

          <Box sx={{ flex: "0.75" }}>
<img
              src={heroImg_6}
              alt="heroImg"
              style={{ maxWidth: "100%", maxHeight: "80%", marginTop:"2rem", borderRadius: "1%"}}
            /> 
            <br /><br /><br />
          </Box>
        </CustomBox>
    </Container>
    </Box>
   
      <Footer />

    </>
  );
};

export default Hero;
