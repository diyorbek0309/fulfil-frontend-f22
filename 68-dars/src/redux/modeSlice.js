import { createSlice } from "@reduxjs/toolkit";

export const modeSlice = createSlice({
  name: "mode",
  initialState: {
    isLight: true,
  },
  reducers: {
    toDark: (state) => {
      state.isLight = false;
    },
    toLight: (state) => {
      state.isLight = true;
    },
  },
});

export const { toDark, toLight } = modeSlice.actions;
