import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

const instance = axios.create({
  baseURL: REACT_APP_API_URL,
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.authorization = '';
};

export const signUp = async userData => {
  const { data } = await instance.post('/auth/register', userData);
  return data;
};

export const logIn = async userData => {
  const { data } = await instance.post('/auth/login', userData);
  setToken(data.result.accessToken);
  return data;
};

export const logOut = async () => {
  const { data } = await instance.post('/auth/logout');
  setToken();
  return data;
};

export const getCurrentUser = async ({ sid, refreshToken }) => {
  try {
    setToken(refreshToken);
    const { data } = await instance.post('/auth/refresh', { sid });
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export default instance;
