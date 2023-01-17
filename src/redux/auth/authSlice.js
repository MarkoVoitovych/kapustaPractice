import { createSlice } from '@reduxjs/toolkit';
import { signUp } from './authOperations';

const initialState = {
  user: { id: null, balance: 0, email: null },
  accessToken: null,
  refreshToken: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(signUp.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        return {
          ...state,
          error: null,
          isLoading: false,
          user: {
            ...state.user,
            ...payload,
          },
        };
      })
      .addCase(signUp.rejected, state => {
        state.isLoading = false;
        state.error = null;
      }),
});

export const authReducer = authSlice.reducer;
