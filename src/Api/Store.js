import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../Components/reducers/weatherReducer';
import countriesReducer from '../Components/reducers/countriesReducer';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    countries: countriesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

console.log(store.getState());
