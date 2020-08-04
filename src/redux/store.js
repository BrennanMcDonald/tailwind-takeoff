import { configureStore } from "@reduxjs/toolkit";
import classSlice from "./classSlice";

export default configureStore({
  reducer: {
    classes: classSlice,
  },
});
