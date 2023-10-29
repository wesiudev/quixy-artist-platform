import { Tattoo } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Tattoo[] = [];

export const tattoosSlice = createSlice({
  name: "tattoos",
  initialState,
  reducers: {
    setTattoos: (state, action) => {
      return action.payload;
    },
  },
});

export const { setTattoos } = tattoosSlice.actions;

export default tattoosSlice.reducer;
