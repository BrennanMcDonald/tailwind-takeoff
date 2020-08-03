import { createSlice } from '@reduxjs/toolkit'

export const classSlice = createSlice({
  name: 'counter',
  initialState: {
    classes: []
  },
  reducers: {
    addClass: (state, action) => {
      state.classes.push(action.payload.class)
    },
    removeClass: (state, action) => {
      state.classes = state.classes.filter(el => el !== action.payload.class)
    },
  }
});

export const { removeClass, addClass } = classSlice.actions

export default classSlice.reducer