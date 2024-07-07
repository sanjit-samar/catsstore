import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cats: [],
  isLoading: false,
};

const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    getCatsfetch: (state) => {
      state.isLoading = true;
    },
    getCatsSuccess: (state, { payload }) => {
      state.cats = payload;
      state.isLoading = false;
    },
    getCatsFailure: () => {
      console.log("Failed request");
    },
  },
});

const { getCatsfetch, getCatsSuccess, getCatsFailure } = catsSlice.actions;
export default catsSlice.reducer;
