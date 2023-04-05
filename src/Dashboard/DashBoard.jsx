import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  styled as styles,
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import PublicIcon from '@mui/icons-material/Public';
// import { mainListItems, secondaryListItems } from './listItems';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';
// import styled from 'styled-components';

import Header from '../Layout/Header/Header';
import { Badge, Typography } from '@mui/material';
import Weekcard from '../components/WeekCard/WeekCard';
import TodayHighLights from '../components/TodayHighLights/TodayHighLights';
import LocalSidebar from '../components/LocalSidebar/LocalSidebar';

// function Copyright(props) {
//   return (
//     <Typography
//       variant='body2'
//       color='text.secondary'
//       align='center'
//       {...props}>
//       {'Copyright © '}
//       <Link color='inherit' href='https://mui.com/'>
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const drawerWidth = 250;

const Drawer = styles(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = useState(true);
  const [weatherData, setWeatherData] = useState();
  // console.log({ weatherData });
  // const { main, sys, weather } = weatherData;
  const toggleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    // Get the user's location
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      // Fetch the weather data from the API
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0b517825ed8b0bf9742d3b83cafdc633&units=metric`;
      // const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&appid=0b517825ed8b0bf9742d3b83cafdc633&units=metric`;
      const response = await axios.get(url);
      console.log({ response });

      setWeatherData(response.data);
    });
  }, []);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header open={open} toggleDrawer={toggleDrawer} />
        {/* Sidebar */}
        <Drawer variant='permanent' open={open} sx={{ height: '100vh' }}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}>
            <Typography variant='h6' container='div' fontWeight={600}>
              Weather DashBoard
            </Typography>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <IconButton color='inherit'>
            <PublicIcon/>
            <Typography>Countries</Typography>
          </IconButton>
          {/* Local Sidebar for cuurent city*/}
          <LocalSidebar weatherData={weatherData} />
        </Drawer>
        <Box
          component='main'
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
          <Container maxWidth='xl' sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={2}>
              {weekDays.map((day) => (
                <Weekcard key={day} day={day} />
              ))}
            </Grid>
          </Container>
          <Container maxWidth='xl' sx={{ mt: 4, mb: 4 }}>
            <Typography variant='h6' fontWeight={600}>
              Today's Highlights
            </Typography>
            <Grid container spacing={2}>
              <TodayHighLights weatherData={weatherData} />
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
