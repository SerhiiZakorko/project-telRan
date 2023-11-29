import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import getDiscountReducer from "./slices/getDiscountSlice"
import productsReducer from "./slices/productsSlice"

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    discountReceiver: getDiscountReducer,
    products: productsReducer
  },
});