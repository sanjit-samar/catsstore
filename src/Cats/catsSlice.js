import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  catsData: [],
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
      state.catsData = payload;
      state.isLoading = false;
    },
    getCatsFailure: (state) => {
        state.isLoading = false;
      console.log("Failed request");
    },
  },
});

const { getCatsfetch, getCatsSuccess, getCatsFailure } = catsSlice.actions;
export default catsSlice.reducer;
