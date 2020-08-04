import { createSlice } from "@reduxjs/toolkit";

export const documentSlice = createSlice({
  name: "counter",
  initialState: {
    html: "",
  },
  reducers: {
    updateHTML: (state, action) => {
      console.log(action);
    },
  },
});

export const { updateHTML } = documentSlice.actions;

export default documentSlice.reducer;
