import { createSlice } from "@reduxjs/toolkit";

export const documentSlice = createSlice({
  name: "counter",
  initialState: {
    html: "",
  },
  reducers: {
    updateHTML: (state, action) => {
      if (action.payload) state.html = action.payload.outerHTML;
    },
  },
});

export const { updateHTML } = documentSlice.actions;

export default documentSlice.reducer;
