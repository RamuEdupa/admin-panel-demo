import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Grid,
  IconButton,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCountriesDetails } from '../reducers/countriesDetailsReducer';
import { fetchCountryDetails } from '../reducers/countriesReducer';

const CountryCard = (props) => {
  const { country } = props;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const countryDetailsHandler = () => {
    dispatch(fetchCountryDetails(country.countryCode));
    navigate('/countryDetails');
  };

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
            onClick={countryDetailsHandler}
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
