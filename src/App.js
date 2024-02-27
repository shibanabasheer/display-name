import React from 'react';
import { useState } from 'react';
import './App.css';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [fullName, setFullName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!firstName || !lastName) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
      setFullName(`${firstName} ${lastName}`);
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
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {showWarning && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          Please fill out both fields.
        </div>
      )}
      {fullName && (
        <p>Full Name: {fullName}</p>
      )}
    </div>
  );
}