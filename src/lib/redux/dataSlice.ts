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
    sortData: (state, action: PayloadAction<string>) => {
      const sortBy = action.payload.toLowerCase();

      switch (sortBy) {
        case "default":
          state.filteredData = [...state.initialData];
          break;
        case "a-z":
          state.filteredData = [...state.initialData].sort((a, b) =>
            a.title.localeCompare(b.title)
          );
          break;
        case "z-a":
          state.filteredData = [...state.initialData].sort((a, b) =>
            b.title.localeCompare(a.title)
          );
          break;
        case "low to high":
          state.filteredData = [...state.initialData].sort(
            (a, b) => a.price - b.price
          );
          break;
        case "high to low":
          state.filteredData = [...state.initialData].sort(
            (a, b) => b.price - a.price
          );
          break;
        default:
          state.filteredData = [...state.initialData];
          break;
      }
    },
  },
});

export const { fetchData, searchData, sortData } = dataSlice.actions;
export const selectInitialData = (state: RootState) => state.data.initialData;

export default dataSlice.reducer;
