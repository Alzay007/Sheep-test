import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../reducers/productsSlice";
import userReducer from '../reducers/userSlice'
import snackReducer from '../reducers/snackSlice';

export const store = configureStore({
  reducer: {
    productsReducer,
    userReducer,
    snackReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
