import { configureStore } from "@reduxjs/toolkit";
import classSlice from "./classSlice";
import documentSlice from "./documentSlice";

export default configureStore({
  reducer: {
    classes: classSlice,
    document: documentSlice,
  },
});
