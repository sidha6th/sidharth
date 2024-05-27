import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FolderOrFile } from "../../common/types/file_or_folders";

export interface ActiveEditorState {
  activeEditorIndex: number;
  openedEditors: FolderOrFile[];
}

const initialState: ActiveEditorState = {
  activeEditorIndex: 0,
  openedEditors: [],
};

export const activeEditorSlice = createSlice({
  name: "active-editor",
  initialState,
  reducers: {
    onTapEditorTitleCard: (state, action: PayloadAction<FolderOrFile>) => {
      state.activeEditorIndex=1;
      state.openedEditors.push(action.payload);
    },
    onTapClose: (state, action: PayloadAction<number>) => {
      state.openedEditors.splice(action.payload, 1);
    },
  },
});

export const {
  onTapEditorTitleCard: onTapEditorTitleCard,
  onTapClose: onTapClose,
} = activeEditorSlice.actions;

export default activeEditorSlice.reducer;
