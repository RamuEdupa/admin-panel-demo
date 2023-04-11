import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styled from 'styled-components';
import CountryCard from '../../components/CountryCard/CountryCard';
import CustomizedInputBase from '../../Components/textInput/TextInput';

const HeaderWrapper = styled.header`
  padding: 10px;
`;

const Countries = () => {
  return (
    <section>
      <HeaderWrapper>
        <Typography variant='h5' fontWeight='bold'>
          Countries
        </Typography>
        <Box component='div'>
          <CustomizedInputBase />
        </Box>
        <Grid container spacing={2}>
          {[1, 2, 3, 4, 5, 6].map((country) => (
            <CountryCard country={country} />
          ))}
        </Grid>
      </HeaderWrapper>
    </section>
  );
};

export default Countries;
