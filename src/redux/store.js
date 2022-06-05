import { configureStore } from "@reduxjs/toolkit";
import { userDataSlice } from "./reducers/userData";

export default configureStore({
  reducer: {
    userData: userDataSlice.reducer,
  },
});
