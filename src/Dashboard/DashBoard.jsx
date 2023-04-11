import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import {
  styled as styles,
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import Box from '@mui/material/Box';

import { useDispatch, useSelector } from 'react-redux';
import Header from '../Layout/Header/Header';

// import LocalSidebar from '../components/LocalSidebar/LocalSidebar';
// import MainListItems from '../Components/sidebarListItems/SidebarListItems';
// import { fetchCountries } from '../Components/Reducers/countriesReducer';
// import { fetchCountriesDetails } from '../Components/Reducers/countriesDetailsReducer';
import Home from '../Pages/Home/Home';
import { fetchWeatherData } from '../Components/reducers/weatherReducer';
// import SideBar from '../Layout/Sidebar/SideBar';

import { fetchWeeklyWeatherData } from '../Components/reducers/weatherReducer';
import NotFound from '../Components/Not Found/NotFound';
import SideBar from '../Layout/sideBar/SideBar';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = useState(true);
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

  return (
    <BrowserRouter>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          {/* <CssBaseline /> */}
          <Header open={open} toggleDrawer={toggleDrawer} />
          {/* Sidebar */}
          <SideBar toggleDrawer={toggleDrawer} open={open}/>
          {!locationError ? <Home weekDays={weekDays} /> : <NotFound />}
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
