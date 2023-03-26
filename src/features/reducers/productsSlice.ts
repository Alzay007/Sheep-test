import { Product } from "../../types/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductsState {
  products: Product[],
  isLoading: boolean,
  isError: boolean,
}

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  isError: false,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productsFetching(state) {
      state.isLoading = true;
    },
    productsFetchingSuccess(state, action: PayloadAction<Product[]>) {
      state.isLoading = false;
      state.products = action.payload;
    },
    productsFetchingError(state) {
      state.isLoading = false;
      state.isError = true;
    },
    addProduct: (state, { payload }: PayloadAction<Product>) => {
      const lastId = state.products.length > 0 ? state.products[state.products.length - 1].id : 0;
      state.products.push({ ...payload, id: lastId + 1 });;
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    }
  },
})

export default productsSlice.reducer;

export const {
  productsFetching,
  productsFetchingSuccess,
  productsFetchingError,
  addProduct,
  removeProduct
} = productsSlice.actions;
