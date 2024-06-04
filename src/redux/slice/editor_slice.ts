import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { rootDir } from "../../core/app_state/app_dir";
import { readme } from "../../core/app_state/readme";

export interface ActiveEditorState {
  openedEditorsPath: Array<string>;
  activeEditorIndex: number;
}

const initialState: ActiveEditorState = {
  activeEditorIndex: 0,
  openedEditorsPath: [rootDir.path + readme.name],
};

export const activeEditorSlice = createSlice({
  name: "active-editor",
  initialState,
  reducers: {
    onTapEditorTitleCard: (state, action: PayloadAction<number>) => {
      if (state.activeEditorIndex != action.payload) {
        state.activeEditorIndex = action.payload;
      }
      // highLightSelected(getFileName(state))
    },
    onTapClose: (state, action: PayloadAction<number>) => {
      state.openedEditorsPath.splice(action.payload, 1);
      if (state.openedEditorsPath.length < 1) {
        state.activeEditorIndex = -1;
        return;
      }
      state.activeEditorIndex = state.openedEditorsPath.length - 1;
      // highLightSelected(getFileName(state))
    },
    onClickFile: (state, action: PayloadAction<string>) => {
      const index = state.openedEditorsPath.indexOf(action.payload);
      if (index >= 0) {
        state.activeEditorIndex = index;
        return;
      }
      state.openedEditorsPath.push(action.payload);
      state.activeEditorIndex = state.openedEditorsPath.length - 1;
      // highLightSelected(getFileName(state))
    },
  },
});

export const {
  onTapEditorTitleCard: onTapEditorTitleCard,
  onTapClose: onTapClose,
  onClickFile: onClickFile,
} = activeEditorSlice.actions;

export default activeEditorSlice.reducer;


// function getFileName({activeEditorIndex,openedEditorsPath}:ActiveEditorState){
//   const paths = openedEditorsPath[activeEditorIndex].split('/')
//   return paths[paths.length-1];
// }

// function highLightSelected(fileName:string){
//   const selectables = document.querySelectorAll(".selectable");
//   selectables.forEach((e) => {
//     if(e.textContent==fileName){
//       e.classList.add("active");
//     }else{
//       e.classList.remove("active")
//     }
//   });
// }