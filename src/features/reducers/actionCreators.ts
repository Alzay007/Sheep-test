import axios from "axios";
import { AppDispatch } from "../store/store";
import { productsSlice } from "./productsSlice";

export const BASE_URL = 'https://dummyjson.com/products'

export const fetchGoods = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(productsSlice.actions.productsFetching())
    const response = await axios.get(BASE_URL);
    dispatch(productsSlice.actions.productsFetchingSuccess(response.data.products))
  } catch (e) {
    dispatch(productsSlice.actions.productsFetchingError())
  }
}
