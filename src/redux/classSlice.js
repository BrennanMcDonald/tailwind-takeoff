import { createSlice } from "@reduxjs/toolkit";

export const classSlice = createSlice({
  name: "counter",
  initialState: {
    classes: [],
    pseudoClass: "",
    mediaQuery: "",
  },
  reducers: {
    addClass: (state, action) => {
      const pseudoClass =
        state.pseudoClass === "" ? `` : `${state.pseudoClass}:`;
      const mediaQuery = state.mediaQuery === "" ? `` : `${state.mediaQuery}:`;
      state.classes.push(`${pseudoClass}${mediaQuery}${action.payload.class}`);
    },
    removeClass: (state, action) => {
      const pseudoClass =
        state.pseudoClass === "" ? `` : `${state.pseudoClass}:`;
      const mediaQuery = state.mediaQuery === "" ? `` : `${state.mediaQuery}:`;
      state.classes = state.classes.filter(
        (el) => el !== `${pseudoClass}${mediaQuery}${action.payload.class}`
      );
    },
    setPseudoClass: (state, action) => {
      state.pseudoClass = action.payload.pseudoClass;
    },
    setMediaQuery: (state, action) => {
      state.mediaQuery = action.payload.mediaQuery;
    },
  },
});

export const {
  removeClass,
  addClass,
  setPseudoClass,
  setMediaQuery,
} = classSlice.actions;

export default classSlice.reducer;
