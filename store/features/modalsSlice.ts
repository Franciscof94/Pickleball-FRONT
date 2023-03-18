import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IModals } from "../../interfaces";
import { RootState } from "../store";

export type ModalsState = {
  modals: {
    modalCancel: boolean,
  }
};

const initialState: ModalsState = {
  modals: {
    modalCancel: false,
  }
};

interface typeModal {
  modalCancel: boolean
}


export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setShowModals: (state, action: PayloadAction<IModals>) => {
      console.log("ACA",action.payload.name, action.payload.isOpen)
      state.modals[action.payload.name as keyof typeModal] = action.payload.isOpen
    },
  },
});

export const { setShowModals } = modalsSlice.actions;

export const showModals = (state: RootState) => state.modals;

export default modalsSlice.reducer;
