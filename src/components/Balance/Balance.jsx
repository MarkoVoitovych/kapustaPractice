import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserBalance } from 'redux/auth/authOperations';
import { selectBalance } from 'redux/auth/authSelectors';

function Balance() {
  const balance = useSelector(selectBalance);
  const [form, setForm] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setForm(balance);
  }, [balance]);

  const handleChange = event => {
    setForm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(fetchUserBalance(form));
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Balance:
        <input
          type="number"
          name="balance"
          value={form}
          onChange={handleChange}
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
