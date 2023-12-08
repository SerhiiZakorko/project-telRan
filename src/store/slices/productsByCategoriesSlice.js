import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {categoryIDFromCategories}  from "../../components/categories/CategoryCard"
import { categoryIDFromMain } from "../../components/main/components/categories/CategoryCard";

const url = 'http://localhost:3333/categories/'
const initialState = {
  productsOfCategory: {
    "category": {
      "title": "title",
    },
    "data": [
      { "id": 1,
        "title": "title",
        "price": 1,
        "discont_price": 1,
        "image": "1.jpeg",
      }, 
    ]
  },
  status: null,
  error: null,
};
let id
export const fetchProductsOfCategory = createAsyncThunk(
  "productsOfCategory/fetchProductsOfCategory",
  async (_, { rejectWithValue }) => {
    try {
      let response
      if(categoryIDFromCategories){
        id = categoryIDFromCategories
        response = await fetch(url+id)
        // categoryIDFromCategories = null
      } else if(categoryIDFromMain){
        id = categoryIDFromMain
        response = await fetch(url+id)
        // categoryIDFromMain = null
      }
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
