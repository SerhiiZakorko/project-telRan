import { createSlice } from "@reduxjs/toolkit";

export const productsBasketSlice = createSlice({
  name: "productsBasket",
  initialState : {
    productsBasket: JSON.parse(localStorage.getItem("productsInCart")) || [],
  },
  reducers: {
    plusCount : (state, action) => {
        const {id} = action.payload;
        state.productsBasket.map((product) => product.id === id ? (product.quantity += 1) : null);
        localStorage.setItem("productsInCart", JSON.stringify(state.productsBasket)); 
      }, 
    minusCount : (state, action) => {
        const {id} = action.payload;
        state.productsBasket.map((product) => product.id === id ? (product.quantity -= 1) : null);
        localStorage.setItem("productsInCart", JSON.stringify(state.productsBasket)); 
      },   
    deleteFromCart : (state, action) => {
        const {id} = action.payload;
        state.productsBasket = state.productsBasket.filter((productBasket) => productBasket.id !== id);
        console.log(state.productsBasket)
        localStorage.setItem("productsInCart", JSON.stringify(state.productsBasket));
      },  
  },
});

export const { deleteFromCart, plusCount, minusCount } = productsBasketSlice.actions;

export default productsBasketSlice.reducer;