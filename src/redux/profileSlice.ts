// profileSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
  isOpen: boolean;
}

const initialState: ProfileState = {
  isOpen: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    openProfileMenu: (state) => {
      state.isOpen = true;
    },
    closeProfileMenu: (state) => {
      state.isOpen = false;
    },
    toggleProfileMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openProfileMenu, closeProfileMenu, toggleProfileMenu } =
  profileSlice.actions;

export default profileSlice.reducer;
