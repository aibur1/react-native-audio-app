import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PRODUCT_IMAGE_MAP } from "../src/data/product-image-map";

const initialState = {
  product: [],
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("http://103.28.121.57/api/products");
    return response.json();
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = "loading";
    },

    [fetchProducts.fulfilled]: (state, action) => {
      const { payload } = action;
      payload.products.forEach(product => {
        product.featuredImage = PRODUCT_IMAGE_MAP[product.name].featuredImage;
        product.images = PRODUCT_IMAGE_MAP[product.name].images;
      });
      state.status = "success";
      state.products = payload.products;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const selectStatus = (state) => state.products.status;

export default productSlice.reducer;
