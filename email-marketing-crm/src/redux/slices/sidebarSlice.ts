import { createSlice } from "@reduxjs/toolkit";

const initialSidebarState = {
  isStatic: false,  // Sidebar is collapsable by default
  marginLeft: "16px",  // Default left margin for dynamic sidebar
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: initialSidebarState,
  reducers: {
    toggleStatic: (state) => {
      state.isStatic = !state.isStatic;  // Toggle static/collapsable state
      state.marginLeft = state.isStatic ? "48px" : "16px";  // Adjust margin
    },
  },
});

export const { toggleStatic } = sidebarSlice.actions;
export default sidebarSlice.reducer;
