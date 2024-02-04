    import * as React from 'react';
    import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
    import CssBaseline from '@mui/material/CssBaseline';
    import MuiDrawer from '@mui/material/Drawer';
    import Box from '@mui/material/Box';
    import MuiAppBar from '@mui/material/AppBar';
    import Toolbar from '@mui/material/Toolbar';
    import {
    LinearProgress, ListItem, CircularProgress, Checkbox, ListItemText, Dialog, DialogActions, DialogContent,
    DialogContentText, DialogTitle, ListItemIcon, ListItemButton
    } from '@mui/material';
    import TrendingUpIcon from '@mui/icons-material/TrendingUp';
    // import { PieChart } from '@mui/x-charts/PieChart';
    // import { useDrawingArea } from '@mui/x-charts/hooks';
    import TrendingDownIcon from '@mui/icons-material/TrendingDown';
    import List from '@mui/material/List';
    import Divider from '@mui/material/Divider';
    import IconButton from '@mui/material/IconButton';
    import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
    import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
    import Grid from '@mui/material/Grid';
    import MenuIcon from '@mui/icons-material/Menu';
    import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
    import { mainListItems } from '../../Components/listItems';
    import axios from 'axios';
    import Button from '@mui/material/Button';
    import CommentIcon from '@mui/icons-material/Comment';
    import Swal from 'sweetalert2';
    import { useState } from 'react';
    import { useEffect } from 'react';
    import CustomButton from "../../Components/CustomButton";
    import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
    // import { Bar } from "react-chartjs-2";
    // import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";
    // import GoogleTranslateComponent from '../../Components/GoogleTranslateComponent';
    // import csacc from "../../media/csacc.png"
    // import creditscoremodel from "../../media/creditscoremodel.png"
    // import creditflow from "../../media/creditflowchart.png"
    // ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

    const drawerWidth = 240;

    const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    }));

    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
            },
        }),
        },
    }),
    );
    const educationEvents = [
        { id: 1, name: 'Seminar on Science', description: 'Explore the latest developments in science.' },
        { id: 2, name: 'Literature Workshop', description: 'A workshop on classic and modern literature.' },
        { id: 3, name: 'Mathematics Symposium', description: 'Join us for an engaging discussion on mathematics.' },
      ];
    var currentDate = new Date();

    var months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    var formattedDate = months[currentDate.getMonth()] + " " + currentDate.getDate() + ", " + currentDate.getFullYear();

    const defaultTheme = createTheme();

    export default function Dashboard() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const [expensedata, setExpensedata] = useState([])

    useEffect(() => {
        loadList();
    }, []);


    const loadList = async () => {
        const result = await axios.get(`https://wixstocle.pythonanywhere.com/api/expense/`, {
        headers: { "Authorization": `Token 11c868750d92deda81638c5a9a59177bdc7ae41a` },
        });
        console.log(result.data.data);
        setExpensedata(result.data.data);
    }

    const getLabels = () => expensedata.slice(-5).map(data => data.date);

    const getData = (key) => expensedata.slice(-5).map(data => data[key]);

    const optionsexpense = {
        indexAxis: 'x',
        elements: {
        bar: {
            borderWidth: 0,
        },
        },
        responsive: true,
        interaction: {
        mode: 'index',
        intersect: false,
        },
        scales: {
        x: {
            stacked: false,
        },
        y: {
            stacked: false,
        },
        },
        plugins: {
        legend: {
            position: 'top',
        }
        },
    };

    const dataexpense = {
        labels: getLabels(),
        datasets: [
        {
            label: 'Revenue',
            data: getData('income'),
            backgroundColor: '#2196f3',
        },
        {
            label: 'Spendings',
            data: getData('expense'),
            backgroundColor: '#ff9100',
        },
        {
            label: 'Savings',
            data: getData('savings'),
            backgroundColor: '#00e676',
        },
        ],
    };

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(today.getDate()).padStart(2, '0');

    const todayDate = `${year}-${month}-${day}`;

    const [userData, setUserData] = React.useState({
        income: '',
        savings: '',
        expense: '',
        date: todayDate,
        user: "tony@gmail.com"
    });

    const handleChangePlan = (field, value) => {
        setUserData((prevData) => ({ ...prevData, [field]: value }));
    };
    const creditscore = 87.4;

    const handlePostData = () => {
        console.log(userData);
        fetch(`https://wixstocle.pythonanywhere.com/api/expense/`, {
        method: 'POST',
        headers: {
            "Authorization": `Token 11c868750d92deda81638c5a9a59177bdc7ae41a`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
        })
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            if (data.status == true) {
            Swal.fire({
                icon: 'success',
                title: 'Successfully Saved the details',
                showConfirmButton: false,
                timer: 3000
            })
            setExpensedata([...expensedata, userData]);
            }
            else {
            Swal.fire({
                icon: 'error',
                title: data.message,
                showConfirmButton: false,
                timer: 3000
            })
            }
        });
    };

    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
        newChecked.push(value);
        } else {
        newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    return (
        <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: 'flex', borderRadius: '16px', overflow: 'hidden', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }} >
            <CssBaseline />
            <AppBar position="absolute" open={open} sx={{ backgroundColor: "whitesmoke", boxShadow: 'none' }}>
            <Toolbar
                sx={{
                pr: '24px', // keep right padding when drawer closed
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                    edge="start"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    sx={{
                    marginRight: '36px',
                    ...(open && { display: 'none' }),
                    backgroundColor: "#fff"
                    }}>
                    <MenuIcon />
                </IconButton>
                </Box>
            </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
            <Toolbar
                sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
                }}
            >
                {/* <GoogleTranslateComponent /> */}
                <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                {mainListItems}
            </List>
            </Drawer>
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
            }}>
            <Toolbar />
          
            <div>
        <Grid container spacing={2} marginTop="1rem" paddingLeft={5}>
            <Grid item xs={12} sm={8}  style={{ backgroundColor: "white",paddingBottom: "1.5rem" }} >
            <div style={{ fontSize: '2rem', fontWeight: '500', paddingBottom: "0.5rem" }}>Welcome Jenil👋</div>
            <div>See all activities- {formattedDate}</div>
            </Grid>
            <Grid item xs={10} sm={3.5}  display="flex" justifyContent="flex-center" alignItems="center" style={{ backgroundColor: "white", paddingBottom: "1rem"}}>
            <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <CustomButton
          backgroundColor="#F47F2A"
          color="#fff"
          buttonText="Go to Maps"
          
        />
        <CustomButton
          backgroundColor="#F47F2A"
          color="#fff"
          buttonText="Quick Test"
          
        />
      </Box>
            </Grid>
        </Grid>
        </div>

            <Grid container spacing={2} marginTop="1rem" paddingLeft={5} paddingRight={2}>
                <Grid item xs={12} md={3.8} style={{ backgroundColor: "white", padding: "10px", marginRight: "15px", borderRadius: "0.5rem" }}>
                <Grid item xs={12}>
                    <Grid container>
                    <Grid item xs={10}><div>Your Monthly Bookings</div></Grid>
                    <Grid item xs={2}><TrendingUpIcon sx={{ color: "#2196f3" }} /></Grid>
                    </Grid>
                    <Grid item xs={12}>
                    <LinearProgress variant="determinate" value={40} sx={{ color: "#2196f3", borderRadius: "10%", margin: "12px 10px 12px 0px" }} />
                    </Grid>
                    <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={9}>
                        <div style={{ fontSize: "1.5rem", fontWeight: "550" }}> 4</div>
                        </Grid>
                        <Grid item xs={3} style={{ backgroundColor: "#2196f3", color: "white", borderRadius: "5px", height: "1.65rem" }}>
                        <ArrowDropUpIcon /> <sup>+10%</sup>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
                </Grid>
                <Grid item xs={12} md={3.8} style={{ backgroundColor: "white", padding: "10px", marginRight: "15px", borderRadius: "0.5rem" }}>
                <Grid item xs={12}>
                    <Grid container>
                    <Grid item xs={10}><div>Your Donations</div></Grid>
                    <Grid item xs={2}><TrendingDownIcon sx={{ color: "#ff9100" }} /></Grid>
                    </Grid>
                    <Grid item xs={12}>
                    <LinearProgress variant="determinate" value={70} color='warning' sx={{ borderRadius: "10%", margin: "12px 0px" }} />
                    </Grid>
                    <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={9}>
                    <div style={{ fontSize: "1.5rem", fontWeight: "550" }}>₹ 235710</div>
                        </Grid>
                        <Grid item xs={3} style={{ backgroundColor: "#ff9100", color: "white", borderRadius: "5px", height: "1.65rem" }}>
                        <ArrowDropDownIcon /> <sup>-5%</sup>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
                </Grid>
                <Grid item xs={12} md={3.8} style={{ backgroundColor: "white", padding: "10px", marginRight: "15px", borderRadius: "0.5rem" }}>
                <Grid item xs={12}>
                    <Grid container>
                    <Grid item xs={10}><div>Your Latest Score</div></Grid>
                    <Grid item xs={2}><TrendingUpIcon sx={{ color: "#00e676" }} /></Grid>
                    </Grid>
                    <Grid item xs={12}>
                    <LinearProgress variant="determinate" value={90} color="success" style={{ borderRadius: "10%", margin: "12px 0px" }} />
                    </Grid>
                    <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={9}>
    <div style={{ fontSize: "1.5rem", fontWeight: "550" }}> 9.0/10.0</div>
                        </Grid>
                        <Grid item xs={3} style={{ backgroundColor: "#00e676", borderRadius: "5px", height: "1.65rem" }}>
                        <ArrowDropUpIcon /> <sup>+20%</sup>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
                </Grid>
             
            </Grid>
            <Grid container spacing={2} marginTop="1rem" paddingLeft={5} paddingRight={2} marginBottom={2}>
                <Grid item xs={7} sx={{ backgroundColor: "white", padding: "5px", marginRight: "1rem" }}>
                <Grid container spacing={2} padding={1}>
                    <Grid xs={7}></Grid>
                    <Grid xs={1.5}><Button style={{
                    borderColor: "#2196f3", color: "#2196f3", height: "1.5rem", textTransform: "capitalize",
                    fontSize: "0.9rem", border: "2px solid", textAlign: "left"
                    }}>Week</Button></Grid>
                    <Grid xs={1.5}><Button style={{
                    backgroundColor: "#2196f3", color: "white", height: "1.75rem", textTransform: "capitalize",
                    fontSize: "0.9rem", border: "2px solid", textAlign: "left"
                    }}>Month</Button></Grid>
                    <Grid xs={1}><Button style={{
                    borderColor: "#2196f3", color: "#2196f3", height: "1.5rem", textTransform: "capitalize",
                    fontSize: "0.9rem", border: "2px solid", textAlign: "left"
                    }}>Year</Button></Grid>
                    <Grid xs={12} marginTop={2}>
                    {/* <Bar options={optionsexpense} data={dataexpense} /> */}
                    </Grid>
                </Grid>
                </Grid>
                <Grid item xs={4.75} >
                <Grid container spacing={2} >
                    
                    <Grid item xs={11.5}>
                    <Grid container spacing={2} sx={{ backgroundColor: "white", marginBottom: "0.5rem" }}>
                        <Grid item xs={12} style={{ textAlign: "center", marginLeft: "-0.75rem", fontWeight: "600" }}>This Month's Drive</Grid>
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {educationEvents.map((event) => (
        <ListItem key={event.id} disablePadding>
          <ListItemButton role={undefined}>
            <ListItemText primary={event.name} secondary={event.description} />
            <Button endIcon={<ArrowForwardIcon sx={{ color: 'black' }}/>} color="primary">
              {/* View More */}
            </Button>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
                    </Grid>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
            
            </Box>
        </Box >
        </ThemeProvider >
    );
    }