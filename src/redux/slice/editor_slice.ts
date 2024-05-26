import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ActiveEditorState {
  activeEditorIndex: number;
  openedEditors: string[];
}

const initialState: ActiveEditorState = {
  activeEditorIndex: 0,
  openedEditors: [],
};

export const activeEditorSlice = createSlice({
  name: "active-editor",
  initialState,
  reducers: {
    onTapEditorTitleCard: (state, action: PayloadAction<number>) => {
      state.activeEditorIndex = action.payload;
      state.openedEditors.push("");
    },
  },
});

export const { onTapEditorTitleCard: onTapEditorTitleCard } =
  activeEditorSlice.actions;

export default activeEditorSlice.reducer;
