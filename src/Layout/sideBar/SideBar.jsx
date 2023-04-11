import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MainListItems from '../../Components/sidebarListItems/SidebarListItems';
import { Divider, List } from '@mui/material';
import { styled as styles } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import axios from 'axios';

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

const SideBar = (props) => {
  const { toggleDrawer, open } = props;
  const handleCountries = async () => {
    const countriesUrl2 = 'https://date.nager.at/api/v3/AvailableCountries';
    const countriesUrl = 'https://restcountries.com/v2/all';
    const res1 = await axios.get(countriesUrl2);
    const res2rest = await axios.get(countriesUrl);
    // console.log({ res1 });
    // console.log({ res2rest });
  };

  return (
    <>
      <Drawer variant='permanent' open={open} sx={{ height: '100vh' }}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component='nav'>
          <MainListItems handleCountries={handleCountries} />
        </List>
      </Drawer>
    </>
  );
};

export default SideBar;
