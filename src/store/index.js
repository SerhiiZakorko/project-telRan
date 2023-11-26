import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import getDiscountReducer from "./slices/getDiscountSlice"

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    discountReceiver: getDiscountReducer
  },
});