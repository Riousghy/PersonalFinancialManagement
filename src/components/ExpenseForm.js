import React, { useState } from 'react';

function ExpenseForm({ addExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // 解析输入金额为浮点数  Parse the input amount as a floating point number
    const amountValue = parseFloat(amount);
    
    // 确保金额为正数 Make sure the amount is positive
    if (amountValue < 0) {
      alert("Amount must be positive.");
      return;
    }
    
    // 创建支出对象 Create an expenditure object
    const expense = {
      description,
      amount: amountValue
    };
    
    // 调用父组件的 addExpense 函数
    // Call the addExpense function of the parent component

    addExpense(expense);
    
    // 重置表单输入 Reset form input

    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Expense description"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button type="submit">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
