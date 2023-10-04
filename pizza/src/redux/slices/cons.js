import { createSlice } from "@reduxjs/toolkit";
const first = { msg: "" };

const CreateMsg = createSlice({
  name: "solo",
  initialState: first,
  reducers: {
    Yes: (state) => {
      state.msg = "ya top ";
    },
    No: (state) => {
      state.msg = "all good";
    },

    all: (state, actions) => {
      state.msg = actions.payload;
    },
  },
});

export const { Yes, No, all } = CreateMsg.actions;
export default CreateMsg.reducer;
