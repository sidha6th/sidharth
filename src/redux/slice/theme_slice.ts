import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DarkTheme } from "../../common/theme/DarkTheme";
import { LightTheme } from "../../common/theme/LightTheme";

interface AppThemeState {
  themeName: Theme;
  activeTheme: AppTheme;
}
export type Theme = "dark" | "light";

const initialState: AppThemeState = {
  activeTheme: DarkTheme,
  themeName: "dark",
};

export const themeSlice = createSlice({
  name: "app-theme",
  initialState,
  reducers: {
    onChangeTheme: (state, action: PayloadAction<Theme>) => {
      if (action.payload == "dark") {
        state.activeTheme = DarkTheme;
        return;
      }
      state.activeTheme = LightTheme;
    },
  },
});

export const { onChangeTheme: onChangeTheme } = themeSlice.actions;

export default themeSlice.reducer;
