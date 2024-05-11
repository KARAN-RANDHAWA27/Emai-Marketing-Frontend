import { createSlice } from "@reduxjs/toolkit";

const initialThemeState = {
  isDarkMode: false,  // Default theme (light mode)
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;  // Toggle dark/light mode
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
