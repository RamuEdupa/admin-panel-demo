import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PublicIcon from '@mui/icons-material/Public';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

const linkStyle = { textDecoration: 'none', color: 'inherit' };

const MainListItems = (props) => {
  const { handleCountries } = props;
  return (
    <React.Fragment>
      <Link to='/' style={linkStyle}>
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary='Weather Dashboard' />
        </ListItemButton>
      </Link>
      <Link
        to='/countries'
        style={linkStyle}>
        <ListItemButton onClick={handleCountries}>
          <ListItemIcon>
            <PublicIcon />
          </ListItemIcon>
          <ListItemText primary='Countries' />
        </ListItemButton>
      </Link>
      <Link to='/chart'  style={linkStyle}>
        <ListItemButton>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary='Chart' />
        </ListItemButton>
      </Link>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary='Customers' />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary='Integrations' />
      </ListItemButton>
    </React.Fragment>
  );
};
export default MainListItems;

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component='div' inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Current month' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Last quarter' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Year-end sale' />
    </ListItemButton>
  </React.Fragment>
);
