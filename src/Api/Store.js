import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../Components/reducers/weatherReducer';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

console.log(store.getState());
