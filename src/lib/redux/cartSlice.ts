import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface CartItem {
  _id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface DataState {
  cartData: CartItem[];
}

const initialState: DataState = {
  cartData: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cartData.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartData.push({ ...action.payload, quantity: 1 });
      }
    },
    updateCart: (
      state,
      action: PayloadAction<{ _id: string; qty: number }>
    ) => {
      const existingItem = state.cartData.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        existingItem.quantity = action.payload.qty;
        if (existingItem.quantity === 0) {
          state.cartData = state.cartData.filter(
            (item) => item._id !== action.payload._id
          );
        }
      }
    },
  },
});

export const { addToCart, updateCart } = cartSlice.actions;
export const selectInitialData = (state: RootState) => state.data.initialData;

export default cartSlice.reducer;
