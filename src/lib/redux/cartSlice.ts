import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const cartSlice = createSlice({
  name: "data",
  initialState: {},
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {},
  },
});

export const {} = cartSlice.actions;
export const selectInitialData = (state: RootState) => state.data.initialData;

export default cartSlice.reducer;
