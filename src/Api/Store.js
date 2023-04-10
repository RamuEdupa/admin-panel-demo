import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../Components/Reducers/countriesReducer';
import countriesDetailsReducer from '../Components/Reducers/countriesDetailsReducer';
import currentWeatherReducer from '../Components/Reducers/currentCityWeatherReducer';
import weeklyWeatherReducer from '../Components/Reducers/weeklyWeatherReducer';

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    countriesDetails: countriesDetailsReducer,
    weather: currentWeatherReducer,
    weeklyWeather: weeklyWeatherReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

console.log(store.getState());
