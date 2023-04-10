import {  Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import TodayHighLights from '../../Components/TodayHighLights/TodayHighLights';
import Weekcard from '../../Components/WeekCard/WeekCard';

const Home = (props) => {
  // const { weekDays } = props;

  const weeklyWeather = useSelector(
    (state) => state.weeklyWeather.weeklyWeatherData,
  );

  // console.log({ weeklyWeather });
  return (
    <>
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
    </>
  );
};

export default Home;
