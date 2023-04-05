import React from 'react';
import styled from 'styled-components';
import sunLogo from '../../Assets/amcharts_weather_icons/static/day.svg';
import image from '../../Assets/Images/peaceful-meadow-with-trees-distance.jpg';
import CustomizedInputBase from '../../components/TextInput/TextInput';

const NavWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  align-items: center;
  .sun-logo {
    height: 200px;
    margin-top: 140px;
  }
  .logo-text-container {
    display: flex;
    align-items: center;
  }
  .image-side {
    height: 180px;
    margin: 0 auto;
    width: 230px;
    border-radius: 7px;
  }
  .large-image {
    height: 250px;
  }
  p .time {
    color: #babdbf;
    font-weight: 600;
  }
`;

const LocalSidebar = (props) => {
  const { weatherData } = props;
  return (
    <>
      <NavWrapper>
        <CustomizedInputBase />
        <img src={sunLogo} alt='night' className='large-image' />
        <h3>{weatherData && weatherData.name}</h3>
        <h1>{weatherData && weatherData.main.temp}&deg;C</h1>
        <p>
          Moday <span className='time'>16:00</span>
        </p>
        <div className='logo-text-container'>
          <img src={sunLogo} alt='night' />
          <span>Sunny</span>
        </div>
        <div className='logo-text-container'>
          <img src={sunLogo} alt='night' />
          <span>Sunny</span>
        </div>
        <div>
          <img src={image} alt='sun' className='image-side' />
        </div>
      </NavWrapper>
    </>
  );
};

export default LocalSidebar;
