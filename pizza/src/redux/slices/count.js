import { createSlice } from "@reduxjs/toolkit";
const InitialState = {
  value: 0,
};
export const counterSlice = createSlice({
  name: "MyTest",
  initialState: InitialState,
  reducers: {
    Add: (state) => {
      state.value += 1;
    },
    Min: (state) => {
      state.value -= 1;
    },
    All: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { Add, Min, All } = counterSlice.actions;
export default counterSlice.reducer;
