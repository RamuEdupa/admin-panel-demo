import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Header from '../Layout/Header/Header';

// import LocalSidebar from '../components/LocalSidebar/LocalSidebar';
// import MainListItems from '../Components/sidebarListItems/SidebarListItems';
// import { fetchCountries } from '../Components/Reducers/countriesReducer';
// import { fetchCountriesDetails } from '../Components/Reducers/countriesDetailsReducer';
import Home from '../Pages/Home/Home';

// import SideBar from '../Layout/Sidebar/SideBar';

import NotFound from '../Components/Not Found/NotFound';
import SideBar from '../Layout/sideBar/SideBar';
import RenderLineChart from '../Pages/charts/Chart';
import Countries from '../Pages/countries/Countries';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = useState(true);
  const [locationError, setLocationError] = useState('');

  const toggleDrawer = () => {
    setOpen(!open);
  };

  // const countriesDetails = useSelector(
  //   (state) => state.countriesDetails.countriesDetailsList,
  // );

  return (
    <BrowserRouter>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <Header open={open} toggleDrawer={toggleDrawer} />
          <SideBar toggleDrawer={toggleDrawer} open={open} />
          <Routes>
            {!locationError ? (
              <>
                <Route
                  path='/'
                  element={<Home setLocationError={setLocationError} />}
                />
                <Route path='/chart' element={<RenderLineChart />} />
                <Route path='/countries' element={<Countries />} />
              </>
            ) : (
              <NotFound />
            )}
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
