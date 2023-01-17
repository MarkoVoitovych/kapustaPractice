import React, { useState } from 'react';

function StartPage() {
  const [form, setForm] = useState({ email: '', password: '' });

  return (
    <div>
      <h1>Kapusta</h1>
      <p>Smart Finance</p>
      <form>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Enter your email"
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={form.password}
            placeholder="Enter password"
          />
        </label>
        <button></button>
      </form>
    </div>
  );
}

export default StartPage;
