import instance from './auth';

export const getUserInfo = async () => {
  const { data } = await instance.get('/user');
  return data;
};

export const setBalance = async userBalance => {
  const { data } = await instance.patch('/user/balance', {
    newBalance: userBalance,
  });
  return data;
};

export const getTransactions = async () => {
  const { data } = await instance.get('/transaction/income');
  return data;
};
