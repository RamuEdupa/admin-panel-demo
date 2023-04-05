import { Grid, Paper } from '@mui/material';
import icon from '../../Assets/amcharts_weather_icons/static/cloudy-night-2.svg';
import styled from 'styled-components';

const TempContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Weekcard = (props) => {
  const { day } = props;
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
          width: 120,
        }}>
        <p>{day}</p>
        <img src={icon} alt='weather icon' />
        <TempContainer>
          <span>30&deg;C</span>
          <span>12&deg;C</span>
        </TempContainer>
      </Paper>
    </Grid>
  );
};

export default Weekcard;
