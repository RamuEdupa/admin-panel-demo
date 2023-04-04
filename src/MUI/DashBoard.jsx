import * as React from 'react';
import {
  styled as styles,
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// import Link from '@mui/material/Link';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CustomizedInputBase from '../components/TextInput/TextInput';
// import { mainListItems, secondaryListItems } from './listItems';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';
import styled from 'styled-components';
import sunLogo from '../Assets/amcharts_weather_icons/static/day.svg';
import image from '../Assets/Images/peaceful-meadow-with-trees-distance.jpg';
import Header from '../Layout/Header/Header';
import { Typography } from '@mui/material';
import Weekcard from '../components/WeekCard/WeekCard';

// function Copyright(props) {
//   return (
//     <Typography
//       variant='body2'
//       color='text.secondary'
//       align='center'
//       {...props}>
//       {'Copyright © '}
//       <Link color='inherit' href='https://mui.com/'>
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const NavWrapper = styled.div`
  padding: 10px;
  .sun-logo {
    height: 200px;
    margin-top: 140px;
  }
  .logo-text-container {
    display: flex;
    align-items: center;
  }
  .image-side {
    height: 180px;
    margin: 0 auto;
    width: 230px;
    border-radius: 7px;
  }
  .large-image {
    height: 250px;
  }
`;

const drawerWidth = 250;

const Drawer = styles(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header open={open} toggleDrawer={toggleDrawer} />
        <Drawer variant='permanent' open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}>
            <Typography variant='h6' Container='div' fontWeight={600}>
              Weather DashBoard
            </Typography>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          {/* <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List> */}
          <NavWrapper>
            <CustomizedInputBase />
            <img src={sunLogo} alt='night' className='large-image' />
            <h1>32.5&deg;C</h1>
            <p>
              Moday <span>16:00</span>
            </p>
            <div className='logo-text-container'>
              <img src={sunLogo} alt='night' />
              <span>Sunny</span>
            </div>
            <div className='logo-text-container'>
              <img src={sunLogo} alt='night' />
              <span>Sunny</span>
            </div>
            <div>
              <img src={image} alt='sun' className='image-side' />
            </div>
          </NavWrapper>
        </Drawer>
        <Box
          component='main'
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}>
          <Toolbar />
          <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={2}>
              {weekDays.map((day) => (
                <Weekcard key={day} day={day} />
              ))}

              {/* Recent Deposits */}
              {/* <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}>
                  <Deposits />
                </Paper>
              </Grid> */}
              {/* Recent Orders */}
              {/* <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid> */}
            </Grid>
            {/* <Copyright sx={{ pt: 4 }} /> */}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
