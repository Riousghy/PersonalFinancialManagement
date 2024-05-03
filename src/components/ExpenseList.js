import React from 'react';

function ExpenseList({ expenses, setExpenses }) {
  // 删除指定索引的支出 Deletes the expenditure for the specified index
  const handleDelete = (indexToDelete) => {
    setExpenses(expenses.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <h2>Expenses</h2>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.description}</td>
              <td>${expense.amount.toFixed(2)}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {expenses.length === 0 && <p>No expenses recorded.</p>}
    </div>
  );
}

export default ExpenseList;
