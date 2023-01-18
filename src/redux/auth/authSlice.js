import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUser, logIn, logOut, signUp } from './authOperations';

function isRejectedAction(action) {
  return action.type.endsWith('rejected');
}

function isPendingAction(action) {
  return action.type.endsWith('pending');
}

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
  reducers: {
    setBalance(state, { payload }) {
      state.user.balance = payload;
    },
  },
  extraReducers: builder =>
    builder
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
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.user = {
          balance: payload.userData.balance,
          id: payload.userData.id,
          email: payload.userData.email,
        };
      })
      .addCase(logOut.fulfilled, () => {
        return { ...initialState };
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.accessToken = payload.newAccessToken;
        state.refreshToken = payload.newRefreshToken;
        state.user.id = payload.newSid;
      })
      .addMatcher(isPendingAction, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isRejectedAction, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const { setBalance } = authSlice.actions;
export const authReducer = authSlice.reducer;
