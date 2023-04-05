import { Grid, Paper } from '@mui/material';
import React from 'react';

const TodayHighLightCard = (props) => {
  return (
    <>
      <Grid item xs={4}>
        <Paper
          sx={{
            height: '250px',
            p: '9px 10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          {props.children}
        </Paper>
      </Grid>
    </>
  );
};

export default TodayHighLightCard;
