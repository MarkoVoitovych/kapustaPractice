import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectBalance } from 'redux/auth/authSelectors';
import { fetchUserBalance } from 'shared/api/transactions';

function Balance({ userBalance = 0, handleSubmit }) {
  const balance = useSelector(selectBalance);

  // useEffect(() => {
  //   if (balance === 0) return;
  //   (async () => {
  //     try {
  //       const data = await fetchUserBalance(balance);
  //       console.log('data', data);
  //     } catch (error) {
  //       alert(error.message);
  //     }
  //   })();
  // }, [balance]);

  // const handleChange = event => {
  //   setForm(event.target.value);
  // };

  // const handleBalanceFormSubmit = event => {
  //   event.preventDefault();
  //   setBalance(event.target.elements.balance.value);
  //   event.target.reset();
  // };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Balance:
        <input
          type="number"
          name="balance"
          // value={balance}
          // onChange={handleChange}
          step="0.01"
          placeholder="00.00"
        />{' '}
        <p>UAH</p>
      </label>
      <button type="submit">Confirm</button>
    </form>
  );
}

export default Balance;
