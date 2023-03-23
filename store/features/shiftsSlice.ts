import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import { mailApi, shiftApi } from "../../api";
import { IShift, IShiftWithCode } from "../../interfaces";
import { RootState } from "../store";

export type ShiftsState = {
  shiftsToCancel: IShiftWithCode[];
  allShifts: IShiftWithCode[];
  allShiftsToResendCode: IShiftWithCode[];
  statusFetchAllShifts: "idle" | "loading" | "succeeded" | "failed";
  statusFetchShiftByUser: "idle" | "loading" | "succeeded" | "failed";
  statusVerifyCode: "idle" | "loading" | "succeeded" | "failed";
  statusSendCode: "idle" | "loading" | "succeeded" | "failed";
  error: boolean;
  isSuccess: boolean;
};

const initialState: ShiftsState = {
  shiftsToCancel: [],
  allShifts: [],
  allShiftsToResendCode: [],
  statusFetchAllShifts: "idle",
  statusFetchShiftByUser: "idle",
  statusVerifyCode: "idle",
  statusSendCode: "idle",
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

export const verifyCode = createAsyncThunk(
  "shifts/verifyCode",
  async (args: {
    email: string;
    name: string;
    lastName: string;
    dateAndTime: Date;
    code: string;
  }, { rejectWithValue }) => {
    const { email, name, lastName, dateAndTime, code } = args;
    try {
      const { data } = await mailApi.post("/your-code", {
        email,
        name,
        lastName,
        dateAndTime,
        code,
      });
      return data;
    } catch (err: any) {
      const error = err.response.data.error || "Error desconocido";
      return rejectWithValue(error);
    }
  }
);

export const sendCode = createAsyncThunk(
  "shifts/sendCode",
  async (email: string) => {
    try {
      const { data } = await mailApi.post("/send", { email });

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
    setShiftToResendCode: (state, action: PayloadAction<any>) => {
      state.allShiftsToResendCode = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchShiftByUser.pending, (state, action) => {
        state.statusFetchShiftByUser = "loading";
      })
      .addCase(fetchShiftByUser.fulfilled, (state, action) => {
        state.statusFetchShiftByUser = "succeeded";
        state.shiftsToCancel = action.payload;
      })
      .addCase(fetchShiftByUser.rejected, (state, action) => {
        state.statusFetchShiftByUser = "failed";
        state.error = true;
      })
      .addCase(fetchAllShifts.pending, (state, action) => {
        state.statusFetchAllShifts = "loading";
      })
      .addCase(fetchAllShifts.fulfilled, (state, action) => {
        state.statusFetchAllShifts = "succeeded";
        state.allShifts = action.payload;
      })
      .addCase(fetchAllShifts.rejected, (state, action) => {
        state.statusFetchAllShifts = "failed";
        state.error = true;
      })
      .addCase(verifyCode.pending, (state, action) => {
        state.statusVerifyCode = "loading";
      })
      .addCase(verifyCode.fulfilled, (state, action) => {
        state.statusVerifyCode = "succeeded";
        state.error = false
      })
      .addCase(verifyCode.rejected, (state, action) => {
        if (isRejectedWithValue(action.payload)) {
          state.statusVerifyCode = "failed";
          state.error = true;
        } else {
          state.statusVerifyCode = "failed";
          state.error = true;
        }
      })
      .addCase(sendCode.pending, (state, action) => {
        state.statusSendCode = "loading";
      })
      .addCase(sendCode.fulfilled, (state, action) => {
        state.statusSendCode = "succeeded";
        state.isSuccess = true;
        state.error = false
      })
      .addCase(sendCode.rejected, (state, action) => {
        if (isRejectedWithValue(action.payload)) {
          state.statusSendCode = "failed";
          state.error = true;
        } else {
          state.statusSendCode = "failed";
          state.error = true;
        }
      });
  },
});

export const { setShiftSuccess, setShiftToResendCode } = shiftsSlice.actions;

export const getShifts = (state: RootState) => state.shifts;

export default shiftsSlice.reducer;
