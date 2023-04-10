import React, { useState } from 'react';
import CustomizedInputBase from '../TextInput/TextInput';
import styled from 'styled-components';
import sunLogo from '../../Assets/amcharts_weather_icons/static/day.svg';
import CloudsImage from '../../Assets/amcharts_weather_icons/static/cloudy-day-1.svg';
import image from '../../Assets/Images/peaceful-meadow-with-trees-distance.jpg';
import { useSelector } from 'react-redux';

const DivWrapper = styled.div`
  /* width: 20vw; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding: 10px;
  .sun-logo {
    /* height: 200px; */
    /* margin-top: 140px; */
  }
  .logo-text-container {
    display: flex;
    align-items: center;
  }
  .image-side {
    height: 200px;
    /* margin: 0 auto; */
    width: 98%;
    border-radius: 7px;
  }
`;

const CurrentCityVerticalBar = () => {

  const weather = useSelector((state) => state.weather.weatherData);
  let temp;
  let place;
  let date;
  let weatherStatus;
  let weatherStatusImg;
  if (weather) {
    temp = weather.main.temp;
    place = weather.name;
    date = new Date(weather.dt * 1000).toLocaleDateString();
    weatherStatus = weather.weather[0].main;
    if (weatherStatus === 'Clouds') {
      weatherStatusImg = CloudsImage;
    }
  }
  return (
    <DivWrapper>
      <CustomizedInputBase  />
      <div>
        <img src={sunLogo} alt='day' className='sun-logo' />
      </div>
      <h1>{temp}&deg;C</h1>
      <h1>{place}</h1>
      <p>{date}</p>

      <div className='logo-text-container'>
        <img src={weatherStatusImg} alt='sun' className='image-side' />
        <span>{weatherStatus}</span>
      </div>
      <div>
        <img src={image} alt='sun' className='image-side' />
      </div>
    </DivWrapper>
  );
};

export default CurrentCityVerticalBar;
