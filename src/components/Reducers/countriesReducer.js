import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: true,
  listOfCountries: [],
  errors: '',
};
export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    return await axios
      .get('https://date.nager.at/api/v3/AvailableCountries')
      .then((res) => {
        // console.log(res.data.slice(0, 10));
        return res.data;
      })
      .catch((err) => console.log({ err }));
  },
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listOfCountries = action.payload;
    });
    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  },
});
export default countriesSlice.reducer;
// export const { fetchData } = countriesSlice.actions;
