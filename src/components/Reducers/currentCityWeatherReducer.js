import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: true,
  weatherData: null,
  errors: '',
};

export const fetchWeatherData = createAsyncThunk(
  'weather/fetchWeatherData',
  async (latitudeObj) => {
    // Fetch the weather data from the API
    // console.log({ longitude });
    const { longitude, latitude } = latitudeObj;
    // console.log({ latitudeObj });
    if (latitude && longitude) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0b517825ed8b0bf9742d3b83cafdc633&units=metric`;
      // const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&appid=0b517825ed8b0bf9742d3b83cafdc633&units=metric`;
      const response = await axios.get(url);
      // dispatch(fetchData());
      return response.data;
    }
  },
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.weatherData = action.payload;
    });
    builder.addCase(fetchWeatherData.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  },
});
export default weatherSlice.reducer;


// https://api.openweathermap.org/data/2.5/forecast/daily?lat=21.1843631&lon=&cnt=7&appid=0b517825ed8b0bf9742d3b83cafdc633
// https://api.openweathermap.org/data/2.5/weather?lat=21.1843631&lon=72.7924497&appid=0b517825ed8b0bf9742d3b83cafdc633&units=metric