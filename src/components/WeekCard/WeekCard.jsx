import { Grid, Paper } from '@mui/material';
import icon from '../../Assets/amcharts_weather_icons/static/cloudy-night-2.svg';
import styled from 'styled-components';
import CloudsImage from '../../Assets/amcharts_weather_icons/static/cloudy-day-1.svg';
import RainImage from '../../Assets/amcharts_weather_icons/static/rainy-1.svg';
import clearImage from '../../Assets/amcharts_weather_icons/static/day.svg';
import HazeImage from '../../Assets/amcharts_weather_icons/static/snowy-3.svg';

const TempContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Weekcard = (props) => {
  const { dayObj } = props;
  let day = new Date(dayObj.dt * 1000).toLocaleString('en-US', {
    weekday: 'short',
  });
  let maxTemp = parseInt(dayObj.temp.max) - 273;
  let minTemp = parseInt(dayObj.temp.min) - 273;
  let weatherStatus = dayObj.weather[0].main;
  let weatherStatusImg;
  if (weatherStatus === 'Clouds') {
    weatherStatusImg = CloudsImage;
  } else if (weatherStatus === 'Haze') {
    weatherStatusImg = HazeImage;
  } else if (weatherStatus === 'Clear') {
    weatherStatusImg = clearImage;
  } else if (weatherStatus === 'Rain') {
    weatherStatusImg = RainImage;
  }
  // console.log({ day });
  return (
    <Grid item xs={1.7}>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 150,
          maxWidth: 95,
          minWidth: 70,
          flexWrap: 'wrap',
        }}>
        <p>{day}</p>
        <img src={weatherStatusImg} alt='weather icon' />
        <TempContainer>
          <span>{maxTemp}&deg;</span>
          <span>{minTemp}&deg;</span>
        </TempContainer>
      </Paper>
    </Grid>
  );
};

export default Weekcard;
