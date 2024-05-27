import { configureStore } from "@reduxjs/toolkit";
import editorReducer from "./slice/editor_slice";
import themeReducer from "./slice/theme_slice";

export const store = configureStore({
  reducer: { editorReducer, themeReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
