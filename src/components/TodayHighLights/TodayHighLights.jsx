import React from 'react';
import TodayHighLightCard from '../TodayHighLightCard/TodayHighLightCard';
import styled from 'styled-components';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import { Typography } from '@mui/material';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import { Box } from '@mui/system';
import LevelIndicator from '../LevelIndicator/LevelIndicator';

const SpanWrapper = styled.span`
  font-size: 15px;
  font-weight: normal;
  color: grey;
`;

const TodayHighLights = (props) => {
  let sunriseTime;
  let sunsetTime;
  let humidity;
  let humidityQuality;
  let windSpeed;
  let visibility;
  let visibilityStatus;

  const { weatherData } = props;
  if (weatherData) {
    const sunriseTimestamp = weatherData.sys.sunrise;
    const sunsetTimestamp = weatherData.sys.sunset;

    const sunriseDate = new Date(sunriseTimestamp * 1000);
    const sunsetDate = new Date(sunsetTimestamp * 1000);

    sunriseTime = sunriseDate.toLocaleTimeString();
    sunsetTime = sunsetDate.toLocaleTimeString();

    humidity = weatherData.main.humidity;
    if (humidity < 30) {
      humidityQuality = 'Low';
    } else if (humidity < 60 && humidity >= 30) {
      humidityQuality = 'Good';
    } else {
      humidityQuality = 'High';
    }
    windSpeed = weatherData.wind.speed;
    visibility = Math.round(weatherData.visibility / 1000, 2);
    if (weatherData.visibility > 10000) {
      visibilityStatus = 'Good';
    } else if (
      weatherData.visibility >= 5000 &&
      weatherData.visibility <= 10000
    ) {
      visibilityStatus = 'Average';
    } else {
      visibilityStatus = 'Poor';
    }
  }
  return (
    <>
      <TodayHighLightCard>
        <Typography variant='p'>UV Index</Typography>
      </TodayHighLightCard>
      <TodayHighLightCard>
        <Typography variant='p'>Wind Status</Typography>
        <Typography variant='h4'>
          {windSpeed}
          <SpanWrapper className='speed'> kmph</SpanWrapper>
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '40%',
          }}>
          <GpsFixedIcon color='primary' />
          <Typography variant='p'>Surat,Gujarat</Typography>
        </Box>
      </TodayHighLightCard>
      <TodayHighLightCard>
        <Typography variant='p'>Sunrise and Sunset</Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
          }}>
          <Box
            sx={{
              borderRadius: '25px',
              backgroundColor: '#e5a639',
              width: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px',
            }}>
            <NorthIcon sx={{ height: '20px', color: 'white' }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='span'>{sunriseTime}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
          }}>
          <Box
            sx={{
              borderRadius: '25px',
              backgroundColor: '#e5a639',
              width: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px',
            }}>
            <SouthIcon sx={{ height: '20px', color: 'white' }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='span'>{sunsetTime}</Typography>
          </Box>
        </Box>
      </TodayHighLightCard>
      <TodayHighLightCard>
        <Typography variant='p'>Humidity</Typography>
        <Typography variant='h4'>
          {humidity}
          <SpanWrapper className='speed'> %</SpanWrapper>
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Typography variant='p'>
            <SpanWrapper className='speed'> Status: </SpanWrapper>
            {humidityQuality} Quality
          </Typography>
          <LevelIndicator level={humidity} />
        </Box>
      </TodayHighLightCard>
      <TodayHighLightCard>
        <Typography variant='p'>Visibility</Typography>
        <Typography variant='h4'>
          {visibility}
          <SpanWrapper className='speed'> km</SpanWrapper>
        </Typography>
        <Typography variant='p'>{visibilityStatus}</Typography>
      </TodayHighLightCard>
      <TodayHighLightCard>
        <Typography variant='p'>Air Quality</Typography>
      </TodayHighLightCard>
    </>
  );
};

export default TodayHighLights;
