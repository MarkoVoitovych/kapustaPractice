import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTransactions } from 'shared/api/transactions';
import TransactionsList from 'components/TransactionsList/TransactionsList';
import Balance from 'components/Balance';
// import { selectIsAuth } from 'redux/auth/authSelectors';

function WalletPage() {
  const dispatch = useDispatch();
  // const isAuth = useSelector(selectIsAuth);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data.incomes);
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
