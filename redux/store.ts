import { configureStore } from "@reduxjs/toolkit";

import tattoosReducer from "./slices/tattoosSlice"; // import the new reducer

export const store = configureStore({
  reducer: {
    tattoos: tattoosReducer, // add the new reducer to the store
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
