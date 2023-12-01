import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { country: "", lastCountries: [] },
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    addCountry: (state, action) => {
      state.value.country = action.payload;
    },
    addResearch: (state, action) => {
      state.value.lastCountries.push(action.payload);
    },
  },
});

export const { addCountry, addResearch } = countrySlice.actions;
export default countrySlice.reducer;
