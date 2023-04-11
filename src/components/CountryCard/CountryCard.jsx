import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Grid,
  IconButton,
} from '@mui/material';
import React from 'react';

const CountryCard = (props) => {
  const { country } = props;

  return (
    <>
      <Grid item xs={3}>
        <Card sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'red[500]' }} aria-label='recipe'>
                R
              </Avatar>
            }
            title={`${country.name}(${country.countryCode})`}
          />
          <Button
            variant='outlined'
            sx={{
              alignSelf: 'center',
              width: '100%',
              color: 'grey',
              borderColor: 'lightgrey',
            }}
            aria-label='settings'>
            View Details
          </Button>
        </Card>
      </Grid>
    </>
  );
};

export default CountryCard;
