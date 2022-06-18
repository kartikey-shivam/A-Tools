import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import ReduxThunk from "redux-thunk";
export const store = configureStore(
  {
    reducer: {
      auth: authReducer,
    },
  },
  applyMiddleware(ReduxThunk)
);

export default store;
