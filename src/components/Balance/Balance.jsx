import React from 'react';

function Balance({ balance, handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Balance:
        <input
          type="number"
          name="balance"
          value={balance}
          onChange={handleChange}
          step="0.01"
          placeholder="00.00"
        />{' '}
        <p>UAH</p>
      </label>
    </form>
  );
}

export default Balance;
