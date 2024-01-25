import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface FoodItem {
  _id: string;
  title: string;
  price: number;
  images: string[];
  category: string;
  desc: string;
  __v: number;
}

interface DataState {
  initialData: FoodItem[];
  filteredData: FoodItem[];
}

const initialState: DataState = {
  initialData: [],
  filteredData: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchData: (state, action: PayloadAction<FoodItem[]>) => {
      state.initialData = action.payload;
      state.filteredData = action.payload;
    },
    searchData: (state, action: PayloadAction<string>) => {
      state.filteredData = state.initialData.filter((item) =>
        item.title.toLowerCase().includes(action.payload)
      );
    },
  },
});

export const { fetchData, searchData } = dataSlice.actions;
export const selectInitialData = (state: RootState) => state.data.initialData;

export default dataSlice.reducer;
