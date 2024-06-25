import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Action
export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.isError = true;
      })
  },
});


export default productSlice.reducer;