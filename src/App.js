import React, { useState, useEffect } from 'react';
import Budget from './components/Budget';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    // 计算总支出 Calculate the total expense
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    // 更新剩余预算 Update the left budget
    setRemaining(budget - totalExpenses);
  }, [expenses, budget]);

  const addExpense = (expense) => {
    if (expense.amount <= remaining) {
      setExpenses([...expenses, expense]);
    } else {
      alert('Adding this expense would exceed your budget!');
    }
  };

  const setNewBudget = (newBudget) => {
    setBudget(parseFloat(newBudget));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>📊 Personal Financial Management</h1>
      </header>
      <div className="budget-container">
        <Budget budget={budget} setBudget={setNewBudget} />
        <ExpenseForm addExpense={addExpense} remaining={remaining} />
      </div>
      <div className="remaining-budget">
        Remaining Budget: ${remaining.toFixed(2)}
        {remaining < 0 ? <p style={{ color: 'red' }}>You have exceeded your budget!</p> : null}
      </div>
      <ExpenseList expenses={expenses} setExpenses={setExpenses} />
    </div>
  );
}

export default App;
