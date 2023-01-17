import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'shared/api/auth';

export const signUp = createAsyncThunk(
  'auth/signup',
  async (userData, { rejectWithValue }) => {
    try {
      console.log('userData', userData);
      const { result } = await api.signUp(userData);
      console.log('result', result);
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      console.log('error', error);
      return rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
    } catch (error) {}
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (userData, { rejectWithValue }) => {
    try {
    } catch (error) {}
  }
);
