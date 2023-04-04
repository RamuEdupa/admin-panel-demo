import React from 'react';
import CustomizedInputBase from '../../components/TextInput/TextInput';
import styled from 'styled-components';
import sunLogo from '../../Assets/amcharts_weather_icons/static/day.svg';
import image from '../../Assets/Images/peaceful-meadow-with-trees-distance.jpg';

const NavWrapper = styled.nav`
  width: 20vw;
  padding: 10px;
  .sun-logo {
    height: 200px;
    margin-top: 140px;
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

const SideBar = () => {
  return (
    <NavWrapper>
      <CustomizedInputBase />
      <div>
        <img src={sunLogo} alt='day' className='sun-logo' />
      </div>
      <h1>32.5&deg;C</h1>
      <p>
        Moday <span>16:00</span>
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
  );
};

export default SideBar;
