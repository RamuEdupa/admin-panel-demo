import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: true,
  countriesDetailsList: [],
  errors: '',
};
export const fetchCountriesDetails = createAsyncThunk(
  'countriesDetails/fetchCountriesDetails',
  async (countryId) => {
    return await axios
      .get(`https://date.nager.at/api/v3/CountryInfo/${countryId}`)
      .then((res) => {
        // console.log(res.data.slice(0, 10));
        return res.data;
      })
      .catch((err) => console.log({ err }));
  },
);

const countriesDetailsSlice = createSlice({
  name: 'countriesDetails',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCountriesDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCountriesDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log({ action });
      state.countriesDetailsList = action.payload;
    });
    builder.addCase(fetchCountriesDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  },
});
export default countriesDetailsSlice.reducer;
// export const { fetchData } = countriesDetailsSlice.actions;
