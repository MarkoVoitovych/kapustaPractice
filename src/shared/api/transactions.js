import instance from './auth';

export const fetchUserInfo = async () => {
  const { data } = await instance.get('/user');
  return data;
};

export const fetchUserBalance = async userBalance => {
  const { data } = await instance.patch('/user/balance', {
    newBalance: userBalance,
  });
  return data;
};

export const fetchTransactions = async () => {
  const { data } = await instance.get('/transaction/income');
  return data;
};
