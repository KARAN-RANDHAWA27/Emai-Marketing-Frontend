import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";  // Import Sidebar Slice
import themeReducer from "./slices/themeSlice";      // Import Theme Slice

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,  // Add Sidebar Slice to Redux store
    theme: themeReducer,      // Add Theme Slice to Redux store
  },
});
export type RootState = ReturnType<typeof store.getState>;  // Defines the Redux store's root state type
export default store;
