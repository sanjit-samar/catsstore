import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  catsData: [],
  isLoading: false,
};

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    getCatsFetch: (state) => {
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

export const { getCatsFetch, getCatsSuccess, getCatsFailure } = catsSlice.actions;
export default catsSlice.reducer;
