import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import uiReducer from "./features/uiSlice";
import modalsReducer from "./features/modalsSlice";
import shiftsReducer from "./features/shiftsSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    modals: modalsReducer,
    shifts: shiftsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppState = ReturnType<typeof store.getState>;
