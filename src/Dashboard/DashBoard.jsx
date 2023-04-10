import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  styled as styles,
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Layout/Header/Header';
import { Divider, List, Typography } from '@mui/material';
// import LocalSidebar from '../components/LocalSidebar/LocalSidebar';
import MainListItems from '../Components/SidebarListItems/SidebarListItems';
// import { fetchCountries } from '../Components/Reducers/countriesReducer';
// import { fetchCountriesDetails } from '../Components/Reducers/countriesDetailsReducer';
import Home from '../Pages/Home/Home';
import { fetchWeatherData } from '../Components/Reducers/currentCityWeatherReducer';
// import SideBar from '../Layout/Sidebar/SideBar';

import CurrentCityVerticalBar from '../Components/CurrentCityVerticalBar/CurrentCityVerticalBar';
import { fetchWeeklyWeatherData } from '../Components/Reducers/weeklyWeatherReducer';

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
  // const [searchCountry, setSearchCountry] = useState();
  const [locationError, setLocationError] = useState('');
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const dispatch = useDispatch();

  // const countriesDetails = useSelector(
  //   (state) => state.countriesDetails.countriesDetailsList,
  // );

  const errorCallback = () => {
    setLocationError('No Data Available!');
  };
  useEffect(() => {
    // Get the user's location
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      setLatitude(latitude);
      setLongitude(longitude);
    }, errorCallback);
    const axesObj = { latitude, longitude };
    dispatch(fetchWeeklyWeatherData(axesObj));
    dispatch(fetchWeatherData(axesObj));
  }, [dispatch, latitude, longitude]);

  const handleCountries = async () => {
    const countriesUrl2 = 'https://date.nager.at/api/v3/AvailableCountries';
    const countriesUrl = 'https://restcountries.com/v2/all';
    const res1 = await axios.get(countriesUrl2);
    const res2rest = await axios.get(countriesUrl);
    // console.log({ res1 });
    // console.log({ res2rest });
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        {/* <CssBaseline /> */}
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
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          {/* Local Sidebar for cuurent city*/}
          {/* <LocalSidebar weatherData={weatherData} /> */}
          <List component='nav'>
            <MainListItems handleCountries={handleCountries} />
          </List>
        </Drawer>
        {!locationError ? (
          <Box
            component='main'
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              marginTop: '60px',
            }}>
            <CurrentCityVerticalBar />
            <Box component='div'>
              {/* Home Page */}
              <Home weekDays={weekDays} />
              {/* <Countries /> */}
            </Box>
          </Box>
        ) : (
          <Typography variant='h1' container='div' alignSelf='center'>
            No Data Available!!!
          </Typography>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
