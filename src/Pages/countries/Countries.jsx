import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import CountryCard from '../../Components/countryCard/CountryCard';
import { fetchCountries } from '../../Components/reducers/countriesReducer';
import CustomizedInputBase from '../../Components/textInput/TextInput';

const HeaderWrapper = styled.div`
  padding: 10px;
`;

const Countries = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const countriesList = useSelector((state) => state.countries.listOfCountries);
  console.log({ countriesList });
  return (
    <section style={{ margin: '0 20px' }}>
      <Paper
        elevation={0}
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',

          // justifyContent: 'center',
          // alignItems: 'center',

          marginTop: '90px',
        }}>
        <Typography variant='h5' fontWeight='bold'>
          Countries
        </Typography>
        <Box component='div'>
          <CustomizedInputBase />
        </Box>
        <Grid container spacing={4}>
          {countriesList.map((country) => (
            <CountryCard key={country.name} country={country} />
          ))}
        </Grid>
      </Paper>
    </section>
  );
};

export default Countries;
