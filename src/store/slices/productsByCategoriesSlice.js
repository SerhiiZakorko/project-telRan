import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {categoryID}  from "../../components/categories/CategoryCard"

const url = 'http://localhost:3333/categories/'
const initialState = {
  productsOfCategory: [],
  status: null,
  error: null,
};

export const fetchProductsOfCategory = createAsyncThunk(
  "productsOfCategory/fetchProductsOfCategory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(url+categoryID);
      console.log(categoryID, "from fetch")
      if (!response.ok) {
        throw new Error("Server Error!");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const productsByCategoriesSlice = createSlice({
  name: "productsOfCategory",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProductsOfCategory.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchProductsOfCategory.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.productsOfCategory = action.payload;
    },
    [fetchProductsOfCategory.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
  }
});

export default productsByCategoriesSlice.reducer;
