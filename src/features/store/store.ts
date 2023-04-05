import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../reducers/productsSlice";
import userReducer from '../reducers/userSlice'
import snackReducer from '../reducers/snackSlice';
import { productAPI } from "../reducers/ProductService";

export const store = configureStore({
  reducer: {
    productsReducer,
    userReducer,
    snackReducer,
    [productAPI.reducerPath]: productAPI.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productAPI.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
