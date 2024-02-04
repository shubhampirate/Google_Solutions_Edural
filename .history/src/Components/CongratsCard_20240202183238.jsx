import * as React from 'react';
import { Button, styled } from "@mui/material";
// import AspectRatio from '@mui/joy/AspectRatio';
// import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
// import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
// import CustomButton from './CustomButton';
const CustomButton = ({
  backgroundColor,
  color,
  buttonText,
  heroBtn,
  guideBtn,
  getStartedBtn,
}) => {
  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: backgroundColor,
    color: color,
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    padding: "0.5rem 1.25rem",
    borderRadius: "7px",
    textTransform: "none",
    display: "block",
    border: "2px solid transparent",
    "&:hover": {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor,
    },
    [theme.breakpoints.down("md")]: {
      margin: (heroBtn || getStartedBtn) && theme.spacing(0, "auto", 3, "auto"),
      width: (heroBtn || getStartedBtn) && "90%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: guideBtn && theme.spacing(3),
      width: guideBtn && "90%",
    },
  }));

  return <CustomButton>{buttonText}</CustomButton>;
};
const CongratCard = ({ title, content, imageUrl, buttonText }) => {
  return (
    <Card
      data-resizable
      sx={{
        textAlign: 'center',
        alignItems: 'center',
        width: 343,
        // to make the demo resizable
        overflow: 'auto',
        resize: 'horizontal',
        '--icon-size': '100px',
      }}
    >
          <div>
            <BakeryDiningIcon color="warning" sx={{ fontSize: '4rem' }} />
          </div>
          <img
        src={imageUrl}
        alt={title}
        sx={{
          width: '50px',
          height: '50px',
          borderRadius: '50%', // To make the image circular
          marginBottom: '12px',
        }}
      />
      <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
     {title}
      </Typography>
      <CardContent sx={{ maxWidth: '40ch' }}>
       {content}
      </CardContent>
      <CardActions
        orientation="vertical"
        buttonFlex={1}

      >

        <CustomButton
              backgroundColor="#F47F2A"
              color="#fff"
              buttonText={buttonText}
              heroBtn={true}
            />
      </CardActions>
    </Card>
  );
};

export default CongratCard;
