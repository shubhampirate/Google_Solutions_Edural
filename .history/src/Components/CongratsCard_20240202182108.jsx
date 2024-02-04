import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import CustomButton from './CustomButton';
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
    
      <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
     {title}
      </Typography>
      <CardContent sx={{ maxWidth: '40ch' }}>
       {content}
      </CardContent>
      <CardActions
        orientation="vertical"
        buttonFlex={1}
        sx={{
          '--Button-radius': '40px',
          width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',
        }}
      >
        {/* <CustomButton>{buttonText}</CustomButton> */}
        <Button sx={{backgroundcolor:"#F47F2A"}}>
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CongratCard;
