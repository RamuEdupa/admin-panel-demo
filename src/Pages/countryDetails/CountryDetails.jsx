import { Box, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ColoredCircle from '../../Components/coloredCircle/ColoredCircle';
import { fetchCountryDetails } from '../../Components/reducers/countriesReducer';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function CountryDetails() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCountryDetails('in'));
  // }, [dispatch]);

  const countryDetailsList = useSelector(
    (state) => state.countries.countryDetailsList,
  );
  console.log({ countryDetailsList });
  return (
    <Box
      sx={{
        width: '100vw',
        // height: '100vh',
        marginTop: '90px',
        padding: '0 20px',
      }}>
      <Typography variant='h4' marginBottom='10px'>
        Country Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item lg={7}>
          <Typography variant='h5'>Info</Typography>
          <Box
            border='1px solid lightgrey'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: '10px',
            }}>
            <Typography variant='h6'>Common Name</Typography>
            <Typography variant='h6'>Official Name</Typography>
            <Typography variant='h6'>Country Code</Typography>
            <Typography variant='h6'>Region</Typography>
          </Box>
        </Grid>
        <Grid item lg={5}>
          <Typography variant='h6'>Border Countries</Typography>
          <Box
            border='1px solid lightgrey'
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              alignItems: 'center',
              padding: '10px',
              height: '127px',
              overflowY: 'auto',
            }}>
            {countryDetailsList.borders &&
              countryDetailsList.borders.map((each) => (
                <ColoredCircle>
                  <Typography variant='span' fontSize='10px'>
                    {each.commonName}
                  </Typography>
                </ColoredCircle>
              ))}
          </Box>
        </Grid>
      </Grid>
      <Paper
        elevation={2}
        sx={{ width: '100%', typography: 'body1', marginTop: '15px' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              onChange={handleChange}
              aria-label='lab API tabs example'
             >
              <Tab
                label='Universities'
                value='1'
                sx={{ textTransform: 'capitalize' }}
              />
              <Tab
                label='public Holidays'
                value='2'
                sx={{ textTransform: 'capitalize' }}
              />
            </TabList>
          </Box>
          <TabPanel value='1' sx={{height: '300px'}}>Universities</TabPanel>
          <TabPanel value='2' sx={{height: '300px'}}>public Holidays</TabPanel>
        </TabContext>
      </Paper>
    </Box>
  );
}

export default CountryDetails;
