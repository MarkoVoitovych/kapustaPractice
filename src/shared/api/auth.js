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
  setToken(data.accessToken);
  return data;
};

export const logOut = async accessToken => {
  setToken(accessToken);
  const { data } = await instance.post('/auth/logout');
  setToken();
  return data;
};

export const getCurrentUser = async ({ sid, refreshToken }) => {
  try {
    setToken(refreshToken);
    const { data } = await instance.post('/auth/refresh', { sid });
    setToken(data.newAccessToken);
    return data;
  } catch (error) {
    // setToken();
    throw error;
  }
};

// instance.interceptors.response.use(
//   response => response,
//   async error => {
//     if (error.response.status === 401) {
//       const refreshToken = localStorage.getItem('refreshToken');
//       try {
//         const { data } = await instance.post('/auth/refresh', { refreshToken });
//         setToken(data.accessToken);
//         localStorage.setItem('refreshToken', data.refreshToken);

//         return instance(error.config);
//       } catch (error) {
//         return Promise.reject(error);
//       }
//     } else {
//       return Promise.reject(error);
//     }
//   }
// );

export default instance;
