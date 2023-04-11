import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchPlaceData } from '../reducers/weatherReducer';
// import DirectionsIcon from '@mui/icons-material/Directions';

export default function CustomizedInputBase() {
  const [searchPlace, setSearchPlace] = useState('');
  const [searchPlaceVal, setSearchPlaceVal] = useState('');
  // console.log(searchPlace);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearchPlaceData(searchPlaceVal));
  }, [searchPlaceVal, dispatch]);

  const serchPlaceData = useSelector((state) => state.weather.searchPlaceList);
  console.log({ serchPlaceData });
  const searchHandler = () => {
    setSearchPlaceVal(searchPlace);
    setSearchPlace('');
    // console.log(searchPlace);
  };
  return (
    <Paper component='form' sx={{ p: '2px 2px', m: '10px 0', width: 250 }}>
      <IconButton
        type='button'
        sx={{ p: '10px' }}
        aria-label='search'
        onClick={searchHandler}>
        <SearchIcon />
      </IconButton>
      <InputBase
        value={searchPlace}
        onChange={(e) => setSearchPlace(e.target.value)}
        sx={{ ml: 1, flex: 1 }}
        placeholder='Search Places'
        inputProps={{ 'aria-label': 'search google maps' }}
      />
    </Paper>
  );
}
