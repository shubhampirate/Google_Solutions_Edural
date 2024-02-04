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
import heroImg_2 from "../media/img_2.jpeg";
import heroImg_3 from "../media/img_3.jpeg";
import CustomButton from "./CustomButton";
import Card from "./Card";

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
    <Container>
        {/* <CustomBox> */}
        <Card
        title="Card 1"
        content="This is the content for Card 1."
        imageUrl="url_for_image_1.jpg"
      />
      <Card
        title="Card 2"
        content="This is the content for Card 2."
        imageUrl="url_for_image_2.jpg"
      />
      <Card
        title="Card 3"
        content="This is the content for Card 3."
        imageUrl="url_for_image_3.jpg"
      />
          {/* </CustomBox> */}
    </Container>
    <Container>
        <CustomBox>
        <Box sx={{ flex: "0.75" }}>
            <img
              src={heroImg_2}
              alt="heroImg_2"
              style={{ maxWidth: "100%", maxHeight: "90%", marginRight: "4rem", borderRadius: "5%"}}
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
      {/* <Guide /> */}
     
      <Properties />

      {/* <Details />
      <GetStarted /> */}
      <Box sx={{ backgroundColor: "#ffffff"}}>
      <Container>
      <Title_2 >
      <div style={{
        display: 'inline-flex',
        alignItems: 'center', // Align items vertically in the center
        border: '0.5px solid #4B5162',
        paddingRight: '20px',
        paddingLeft: '20px',
        borderRadius: '30px',
        backgroundColor: '#fff'
        
      }}>
     
      <img
        style={{
          maxWidth: '50px',
          maxHeight: '45px', // Adjust as needed
        }}
        src={heroImg_3}
        alt="Description"
        />
       <p >Contact </p>
    </div>
        </Title_2>
      {isLargeScreen && ( <PropertiesTextBox>
        <Title variant="h1" sx={{color: "#1C1F25", marginLeft:"7rem", marginRight:"7rem"}}>
        Ask Us Your Questions and Join Us on Your Future Journey
            </Title>

        </PropertiesTextBox>
      )}
      <CustomBox>
        <Box sx={{ flex: "0.75" }}>
        <Typography
              variant="body2"
              sx={{
                fontSize: "40px",
                // color: "#1C1F25",
                fontWeight: "bold",
              
                mb: 4,
              }}
            >
              <span >Have Questions ?</span> <span sx={{color:"#387FF5 !important"}}>   Get In Touch</span>
            </Typography>
            <List>
  <ListItem>
   <ListItemButton>
     <ListItemDecorator><Home /></ListItemDecorator>
     <ListItemContent>India — 723 17th Street, Office 478 Mumbai, IM 81566 (address dekh lena net)</ListItemContent>
     {/* <KeyboardArrowRight /> */}
   </ListItemButton>
  </ListItem>
  <br/>
  <ListItem>
   <ListItemButton>
     <ListItemDecorator><Home /></ListItemDecorator>
     <ListItemContent>tiaa@gmail.com</ListItemContent>
     {/* <KeyboardArrowRight /> */}
   </ListItemButton>
  </ListItem>
  <br/>
  <ListItem>
   <ListItemButton>
     <ListItemDecorator><Home /></ListItemDecorator>
     <ListItemContent>+91 123456789</ListItemContent>
     {/* <KeyboardArrowRight /> */}
   </ListItemButton>
  </ListItem>
  
 
</List>
          </Box>
          <Box sx={{ flex: "1.25"}}>
          
      
        
        <form style={{ padding: '30px 0 0 0' }}>
          <div style={{ display: 'flex', margin: '32px 0' }}>
            <div style={{ width: '48%', marginRight: '4%' }}>
              <div style={{ width: '100%', height: '40px', position: 'relative' }}>
                <input type="text" required style={{ display: 'block', width: '100%', height: '100%', border: 'none', fontSize: '17px', borderBottom: '2px solid rgba(0,0,0, 0.12)' }}  placeholder="First Name"/>
                  <div style={{ position: 'absolute', bottom: '0', height: '2px', width: '100%' }}>
                  <div style={{ position: 'absolute', content: '', height: '2px', width: '100%', background: '#3498db', transform: 'scaleX(0)', transformOrigin: 'center', transition: 'transform 0.3s ease' }}></div>
                </div>
              </div>
            </div>
            <div style={{ width: '48%' }}>
              <div style={{ width: '100%', height: '40px', position: 'relative' }}>
                <input type="text" required style={{ display: 'block', width: '100%', height: '100%', border: 'none', fontSize: '17px', borderBottom: '2px solid rgba(0,0,0, 0.12)' }}  placeholder="Last Name" />
                 <div style={{ position: 'absolute', bottom: '0', height: '2px', width: '100%' }}>
                  <div style={{ position: 'absolute', content: '', height: '2px', width: '100%', background: '#3498db', transform: 'scaleX(0)', transformOrigin: 'center', transition: 'transform 0.3s ease' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', margin: '32px 0' }}>
            <div style={{ width: '48%', marginRight: '4%' }}>
              <div style={{ width: '100%', height: '40px', position: 'relative' }}>
                <input type="text" required style={{ display: 'block', width: '100%', height: '100%', border: 'none', fontSize: '17px', borderBottom: '2px solid rgba(0,0,0, 0.12)' }} placeholder="Email Address" />
                <div style={{ position: 'absolute', bottom: '0', height: '2px', width: '100%' }}>
                  <div style={{ position: 'absolute', content: '', height: '2px', width: '100%', background: '#3498db', transform: 'scaleX(0)', transformOrigin: 'center', transition: 'transform 0.3s ease' }}></div>
                </div>
              </div>
            </div>
            <div style={{ width: '48%' }}>
              <div style={{ width: '100%', height: '40px', position: 'relative' }}>
                <input type="text" required style={{ display: 'block', width: '100%', height: '100%', border: 'none', fontSize: '17px', borderBottom: '2px solid rgba(0,0,0, 0.12)' }} placeholder="subject"/>
                <div style={{ position: 'absolute', bottom: '0', height: '2px', width: '100%' }}>
                  <div style={{ position: 'absolute', content: '', height: '2px', width: '100%', background: '#3498db', transform: 'scaleX(0)', transformOrigin: 'center', transition: 'transform 0.3s ease' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '100%' }}>
              <div style={{ width: '100%', height: '40px', position: 'relative' }}>
                <input type="text" required style={{ display: 'block', width: '100%', height: '100%', border: 'none', fontSize: '17px', borderBottom: '2px solid rgba(0,0,0, 0.12)' }} placeholder="How can we help you ? Feel free to get in touch!"/>
               <br/>
               <br/>
                <div style={{ position: 'absolute', bottom: '0', height: '2px', width: '100%' }}>
                  <div style={{ position: 'absolute', content: '', height: '2px', width: '100%', background: '#3498db', transform: 'scaleX(0)', transformOrigin: 'center', transition: 'transform 0.3s ease' }}></div>
                </div>
              </div>
            </div>
<br />
<br />
          <CustomButton
              backgroundColor="#387FF5"
              color="#fff"
              buttonText="Get In Touch !"
              heroBtn={true}
            />

          {/* <div style={{ overflow: 'hidden', height: '45px!important', width: '25%!important' }} className="submit-btn"> */}
            {/* <div style={{ height: '100%', width: '300%', position: 'absolute', left: '-100%', background: '-webkit-linear-gradient(right, #56d8e4, #9f01ea, #56d8e4, #9f01ea)', transition: 'all 0.4s' }} className="inner"></div> */}
            {/* <input type="submit" value="submit" style={{ background: 'none', border: 'none', color: '#fff', fontSize: '17px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer', position: 'relative', zIndex: '2' }} /> */}
          {/* </div> */}
        </form>

       
    

        
          </Box>

        </CustomBox>
      {/* <Guide /> */}
      </Container>
    </Box>
      <Footer />

    </>
  );
};

export default Hero;
