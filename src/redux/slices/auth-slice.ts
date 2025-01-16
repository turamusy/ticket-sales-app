import { IAuthState } from '@app/interfaces/auth-state';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IAuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;
