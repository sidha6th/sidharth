import { configureStore } from '@reduxjs/toolkit'
import editorReducer from './slice/editor_slice'

export const store = configureStore({
  reducer: {editorReducer},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch