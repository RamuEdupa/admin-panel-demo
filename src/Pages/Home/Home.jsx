import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import CurrentCityVerticalBar from '../../Components/currentCityVerticalBar/CurrentCityVerticalBar';
import TodayHighLights from '../../Components/TodayHighLights/TodayHighLights';
import Weekcard from '../../Components/WeekCard/WeekCard';

const Home = () => {
  // const { weekDays } = props;

  const weeklyWeather = useSelector((state) => state.weather.weeklyWeatherData);

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
