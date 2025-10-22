import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: null,
    name: null,
    email: null,
    roll: null,
  },
  access: null,
  refresh: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { access, refresh, user } = action.payload;
      state.access = access;
      state.refresh = refresh;
      state.user = user;
      state.isAuthenticated = true;
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.access = null;
      state.refresh = null;
    },
  },
});

export const { logout, setCredentials } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
