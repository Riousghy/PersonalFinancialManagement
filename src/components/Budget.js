import React, { useState } from 'react';

function Budget({ budget, setBudget }) {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBudget(input);
    setInput('');
  };

  return (
    <div>
      <h2>Your Budget: ${budget}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={input}
          onChange={handleChange}
          placeholder="Set a new budget"
        />
        <button type="submit">Update Budget</button>
      </form>
    </div>
  );
}
 
export default Budget;
