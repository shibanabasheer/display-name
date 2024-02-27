import React from 'react';
import { useState } from 'react';
import './App.css';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName) {
      const fullName = `${firstName} ${lastName}`;
      setFullName(fullName);
    }
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" disabled={!firstName || !lastName}>
          Submit
        </button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
}