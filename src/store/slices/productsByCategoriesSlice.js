import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

export const fetchProductsOfCategory = createAsyncThunk(
  "productsOfCategory/fetchProductsOfCategory",
  async ({id}, { rejectWithValue }) => {
    try {
      let response = await fetch(url+id)
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
  
    extraReducers: (builder) => {
    builder
    .addCase(fetchProductsOfCategory.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
    .addCase(fetchProductsOfCategory.fulfilled, (state, action) => {
          state.status = "fulfilled";
          state.productsOfCategory = action.payload;
        })
    .addCase(fetchProductsOfCategory.rejected, (state, action) => {
          state.status = "error";
          state.error = action.payload;
        })
   }
});

export default productsByCategoriesSlice.reducer;
