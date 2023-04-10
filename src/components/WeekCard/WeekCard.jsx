import { Grid, Paper } from '@mui/material';
import icon from '../../Assets/amcharts_weather_icons/static/cloudy-night-2.svg';
import styled from 'styled-components';

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
        <img src={icon} alt='weather icon' />
        <TempContainer>
          <span>{maxTemp}&deg;</span>
          <span>{minTemp}&deg;</span>
        </TempContainer>
      </Paper>
    </Grid>
  );
};

export default Weekcard;
