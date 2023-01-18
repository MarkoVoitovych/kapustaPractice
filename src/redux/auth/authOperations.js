import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authApi from 'shared/api/auth';
import * as transApi from 'shared/api/transactions';

export const signUp = createAsyncThunk(
  'auth/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await authApi.signUp(userData);
      return data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await authApi.logIn(userData);
      return data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { getState, rejectWithValue }) => {
    try {
      const accessToken = getState().accessToken;
      const data = await authApi.logOut(accessToken);
      return data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { refreshToken, sid } = getState();
      const data = await authApi.getCurrentUser({ sid, refreshToken });
      return data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      console.log('error :>> ', error);
      return rejectWithValue(error);
    }
  }
);

export const fetchUserBalance = createAsyncThunk(
  'auth/balance',
  async (balance, { rejectWithValue }) => {
    try {
      const data = await transApi.fetchUserBalance(balance);
      return data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);
