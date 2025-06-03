import { createSlice } from "@reduxjs/toolkit";
import type { IProductState } from "./types";
import { loadLimitProducts, loadProducts } from "./productAction";

const initialState: IProductState = {
  // создаем начальное состояние
  products: [],
  isLoading: false,
  error: "",
};

export const productSlice = createSlice({
  name: "productSlice", // уникальное имя slice
  initialState, // передаем начальное состояние
  reducers: {}, // описание синхронных actions
  extraReducers: (builder) => {
    // описание асинхронных actions
    builder
      .addCase(loadProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.products = [];
        state.error = action.payload as string;
      })
      .addCase(loadLimitProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadLimitProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(loadLimitProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.products = [];
        state.error = action.payload as string;
      });
  },
});

export default productSlice;
// export const { } = productSlice.actions
