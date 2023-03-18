import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { shiftApi } from "../../api";
import { RootState } from "../store";

export type ShiftsState = {
  shiftsToCancel: any;
  status: string;
  error: boolean;
  isSuccess: boolean;
};

const initialState: ShiftsState = {
  shiftsToCancel: [],
  status: "idle",
  error: false,
  isSuccess: false,
};

export const fetchShifts = createAsyncThunk(
  "shifts/fetchshifts",
  async (email?: string) => {
    const { data } = await shiftApi.get(`/${email}`);
    return data;
  }
);

export const shiftsSlice = createSlice({
  name: "shifts",
  initialState,
  reducers: {
    setShiftSuccess: (state, action: PayloadAction<boolean>) => {
      state.isSuccess = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchShifts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchShifts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.shiftsToCancel = action.payload;
      })
      .addCase(fetchShifts.rejected, (state, action) => {
        state.status = "failed";
        state.error = true
      });
  },
});

export const { setShiftSuccess } = shiftsSlice.actions;

export const getShifts = (state: RootState) => state.shifts;

export default shiftsSlice.reducer;
