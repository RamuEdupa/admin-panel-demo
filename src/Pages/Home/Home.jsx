import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CurrentCityVerticalBar from '../../Components/currentCityVerticalBar/CurrentCityVerticalBar';
import TodayHighLights from '../../Components/TodayHighLights/TodayHighLights';
import Weekcard from '../../Components/WeekCard/WeekCard';
import { useDispatch } from 'react-redux';
import { fetchWeatherData } from '../../Components/reducers/weatherReducer';
import { fetchWeeklyWeatherData } from '../../Components/reducers/weatherReducer';

const Home = (props) => {
  const { setLocationError } = props;
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const weeklyWeather = useSelector((state) => state.weather.weeklyWeatherData);

  const dispatch = useDispatch();

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

  // console.log({ weeklyWeather });
  return (
    <>
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
          <Container maxWidth='xl' sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={2}>
              {weeklyWeather &&
                weeklyWeather.map((each, index) => (
                  <Weekcard key={index} dayObj={each} />
                ))}
            </Grid>
          </Container>
          <Container maxWidth='xl' sx={{ mt: 4, mb: 4 }}>
            <Typography variant='h6' fontWeight={600} marginBottom='10px'>
              Today's Highlights
            </Typography>
            <Grid container spacing={2}>
              <TodayHighLights />
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Home;
