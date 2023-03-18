import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type uiState = {
  stepNumber: number;
};

const initialState: uiState = {
  stepNumber: 0,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setStepNumber: (state, action: PayloadAction<number>) => {
      state.stepNumber = action.payload;
    },
  },
});

export const { setStepNumber } = uiSlice.actions;

export const selectUi = (state: RootState) => state.ui;

export default uiSlice.reducer;
