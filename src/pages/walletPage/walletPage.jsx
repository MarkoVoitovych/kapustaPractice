import Balance from 'components/Balance';
import TransactionsList from 'components/TransactionsList/TransactionsList';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBalance } from 'redux/auth/authSlice';
import { fetchUserInfo } from 'shared/api/transactions';

function WalletPage() {
  const dispatch = useDispatch();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchUserInfo();
        setTimeout(() => {
          dispatch(setBalance(data.balance));
        }, 0);
        setTransactions(data.transactions);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [dispatch]);

  return (
    <>
      <Balance />
      <TransactionsList transactions={transactions} />
    </>
  );
}

export default WalletPage;
