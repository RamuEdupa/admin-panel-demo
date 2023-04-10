import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: true,
  weeklyWeatherData: null,
  searchPlaceList: null,
  errors: '',
};

export const fetchWeeklyWeatherData = createAsyncThunk(
  'weeklyWeather/fetchWeeklyWeatherData',
  async (latitudeObj) => {
    // Fetch the weather data from the API
    const { longitude, latitude } = latitudeObj;
    // console.log({ latitudeObj });
    if (latitude && longitude) {
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&appid=7b26c92417fd3678d52eac12dc870222`;
      // const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&appid=0b517825ed8b0bf9742d3b83cafdc633&units=metric`;

      return await axios
        .get(url)
        .then((response) => {
          //   console.log({ response });
          return response.data.daily.slice(0, 7);
        })
        .catch((err) => console.log(err));

      // dispatch(fetchData());
    }
  },
);
export const fetchSearchPlaceData = createAsyncThunk(
  'weeklyWeather/fetchSearchPlaceData',
  async (searchPlace) => {
    // console.log({ searchPlace });
    if (searchPlace) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchPlace}&appid=0b517825ed8b0bf9742d3b83cafdc633`; //format of  searchPlace = London,UK

      return await axios
        .get(url)
        .then((response) => {
          console.log({ response });
          return response.data;
        })
        .catch((err) => console.log(err));

      // dispatch(fetchData());
    }
  },
);

const weeklyWeatherSlice = createSlice({
  name: 'weeklyWeather',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchWeeklyWeatherData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchWeeklyWeatherData.fulfilled, (state, action) => {
      //   console.log('action------', action);
      state.isLoading = false;
      state.weeklyWeatherData = action.payload;
    });
    builder.addCase(fetchWeeklyWeatherData.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
    ///////////
    builder.addCase(fetchSearchPlaceData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSearchPlaceData.fulfilled, (state, action) => {
      //   console.log('action------', action);
      state.isLoading = false;
      state.searchPlaceList = action.payload;
    });
    builder.addCase(fetchSearchPlaceData.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
    ///////////
  },
});
export default weeklyWeatherSlice.reducer;
