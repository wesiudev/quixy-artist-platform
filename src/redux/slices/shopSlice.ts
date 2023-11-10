import { ArtworkData } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [] as ArtworkData[],
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setCart: (state, action: { payload: ArtworkData }) => {
      [...state.cart, state.cart.push(action.payload)];
    },
    removeFromCart: (state, action: { payload: ArtworkData }) => {
      const index = state.cart.findIndex(
        (item: ArtworkData) => item.title === action.payload.title
      );
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
  },
});

export const { setCart, removeFromCart } = shopSlice.actions;

export default shopSlice.reducer;
