import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  initialData: string[];
}

const initialState: DataState = {
  initialData: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchData: (state, action: PayloadAction<string[]>) => {
      state.initialData = action.payload;
    },
  },
});

export const { fetchData } = dataSlice.actions;
export const selectInitialData = (state: { data: DataState }) =>
  state.data.initialData;

export default dataSlice.reducer;
