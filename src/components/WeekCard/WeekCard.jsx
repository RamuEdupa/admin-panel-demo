import { Grid, Paper } from '@mui/material';
import icon from '../../Assets/amcharts_weather_icons/static/cloudy-night-2.svg';

const Weekcard = (props) => {
  const { day } = props;
  return (
    <Grid itemn xs={1.5}>
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
        <div>
          <span>30&deg;C</span>
          <span>12&deg;C</span>
        </div>
      </Paper>
    </Grid>
  );
};

export default Weekcard;
