import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
} from '@mui/material';
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const CountryCard = (props) => {
  return (
    <>
      <Grid item xs={3}>
        <Card>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'red[500]' }} aria-label='recipe'>
                R
              </Avatar>
            }
            action={
              <IconButton aria-label='settings'>
                <MoreVertIcon />
              </IconButton>
            }
            title='Shrimp and Chorizo Paella'
            subheader='September 14, 2016'
          />
        </Card>
      </Grid>
    </>
  );
};

export default CountryCard;
