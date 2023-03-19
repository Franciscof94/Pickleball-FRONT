import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import { shiftApi } from "../../api";
import { IShift } from "../../interfaces";
import { RootState } from "../store";

export type ShiftsState = {
  shiftsToCancel: IShift[];
  allShifts: IShift[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: boolean;
  isSuccess: boolean;
};

const initialState: ShiftsState = {
  shiftsToCancel: [],
  allShifts: [],
  status: "idle",
  error: false,
  isSuccess: false,
};

export const fetchAllShifts = createAsyncThunk(
  "shifts/fetchAllShifts",
  async () => {
    try {
      const { data } = await shiftApi.get("/");
      return data;
    } catch (err: any) {
      return isRejectedWithValue(err.response.data);
    }
  }
);

export const fetchShiftByUser = createAsyncThunk(
  "shifts/fetchShiftByUser",
  async (email?: string) => {
    try {
      const { data } = await shiftApi.get(`/${email}`);
      return data;
    } catch (err: any) {
      return isRejectedWithValue(err.response.data);
    }
  }
);

export const postShifts = createAsyncThunk(
  "shifts/postShifts",
  async (shift: IShift) => {
    try {
      const { data } = await shiftApi.post("/", shift);
      return data;
    } catch (err: any) {
      return isRejectedWithValue(err.response.data);
    }
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
      .addCase(fetchShiftByUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchShiftByUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.shiftsToCancel = action.payload;
      })
      .addCase(fetchShiftByUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = true;
      })
      .addCase(fetchAllShifts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllShifts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allShifts = action.payload;
      })
      .addCase(fetchAllShifts.rejected, (state, action) => {
        state.status = "failed";
        state.error = true;
      })
      .addCase(postShifts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(postShifts.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(postShifts.rejected, (state, action) => {
        state.status = "failed";
        state.error = true;
      });
  },
});

export const { setShiftSuccess } = shiftsSlice.actions;

export const getShifts = (state: RootState) => state.shifts;

export default shiftsSlice.reducer;
