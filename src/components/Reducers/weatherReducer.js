import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: true,
  weatherData: null,
  weeklyWeatherData: null,
  weekErrors: '',
  searchErrors: '',
  currCityErrors: '',
};
// const getLongLat = async (searchPlace) => {
//   const response = await axios.get(
//     `https://maps.googleapis.com/maps/api/geocode/json?address=${searchPlace}&key=0b517825ed8b0bf9742d3b83cafdc633`,
//   );
//   const data = response.data;
//   const coordinates = data.results[0].geometry.location;
//   return coordinates;
// };

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
export const fetchWeeklyWeatherData = createAsyncThunk(
  'weather/fetchWeeklyWeatherData',
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
  'weather/fetchSearchPlaceData',
  async (searchPlace) => {
    // console.log({ searchPlace });
    // const axesObj = getLongLat(searchPlace);
    // console.log({ axesObj });
    if (searchPlace) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchPlace}&appid=0b517825ed8b0bf9742d3b83cafdc633`; //format of  searchPlace = London,UK or london

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

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  extraReducers: (builder) => {
    //current city data ------------------
    builder.addCase(fetchWeatherData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.weatherData = action.payload;
    });
    builder.addCase(fetchWeatherData.rejected, (state, action) => {
      state.isLoading = false;
      state.currCityErrors = action.payload;
    });
    //weekly weather data ---------------------
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
      state.weekErrors = action.payload;
    });
    // on search data ----------------------
    builder.addCase(fetchSearchPlaceData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSearchPlaceData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.weatherData = action.payload;
    });
    builder.addCase(fetchSearchPlaceData.rejected, (state, action) => {
      state.isLoading = false;
      state.searchErrors = action.payload;
    });
  },
});
export default weatherSlice.reducer;

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchSearchPlaceData = createAsyncThunk(
//   'weather/fetchSearchPlaceData',
//   async (searchPlace) => {
//     if (searchPlace) {
//       const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchPlace}&appid=0b517825ed8b0bf9742d3b83cafdc633`;
//       const weeklyUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchPlace}&appid=0b517825ed8b0bf9742d3b83cafdc633&units=metric`;
//       const [currentResponse, weeklyResponse] = await Promise.all([
//         axios.get(currentUrl),
//         axios.get(weeklyUrl),
//       ]);
//       return {
//         currentData: currentResponse.data,
//         weeklyData: weeklyResponse.data,
//       };
//     }
//   },
// );

// // Reducer slice
// const weatherSlice = createSlice({
//   name: 'weather',
//   initialState: {
//     currentData: null,
//     weeklyData: null,
//     isLoading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchSearchPlaceData.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchSearchPlaceData.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.currentData = action.payload.currentData;
//         state.weeklyData = action.payload.weeklyData;
//       })
//       .addCase(fetchSearchPlaceData.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       });
//   },
// });
