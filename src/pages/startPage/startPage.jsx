import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn, signUp } from 'redux/auth/authOperations';

function StartPage({ registrate = false }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (registrate) {
      dispatch(signUp(form));
      event.target.reset();
      return;
    }
    dispatch(logIn(form));
    event.target.reset();
  };
  return (
    <div>
      <h1>Kapusta</h1>
      <p>Smart Finance</p>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={form.password}
            placeholder="Enter password"
            onChange={handleChange}
          />
        </label>
        {registrate ? (
          <div>
            <button type="submit">Registrate</button>
            <Link to="/">Back to log in</Link>
          </div>
        ) : (
          <div>
            <button type="submit">Log in</button>
            <Link to="/register">Registration</Link>
          </div>
        )}
      </form>
    </div>
  );
}

export default StartPage;
