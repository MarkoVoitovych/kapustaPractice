import Balance from 'components/Balance';
import TransactionsList from 'components/TransactionsList/TransactionsList';
import { useEffect, useState } from 'react';
import { getUserInfo } from 'shared/api/transactions';

function WalletPage() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getUserInfo();
        console.log('data', data);
        setBalance(data.balance);
        setTransactions(data.transactions);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, []);

  const handleBalanceFormSubmit = event => {
    event.preventDefault();
    setBalance(event.target.elements.balance.value);
    event.target.reset();
  };

  const handleBalanceInputChange = event => {
    setBalance(event.target.value);
  };

  return (
    <>
      <Balance
        balance={balance}
        handleSubmit={handleBalanceFormSubmit}
        handleChange={handleBalanceInputChange}
      />
      <TransactionsList transactions={transactions} />
    </>
  );
}

export default WalletPage;
