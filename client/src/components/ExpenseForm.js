import React, { useState } from 'react';

function ExpenseForm({ addExpense }) {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    amount: '',
    date: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the expense data to the list of expenses
    addExpense(formData);

    // Clear the form fields
    setFormData({
      name: '',
      id: '',
      amount: '',
      date: '',
      category: '',
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      <div className="bg-blue-800 text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">Add Expense</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-blue-200 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-blue-200 text-blue-800"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="id" className="block text-blue-200 mb-2">ID</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-blue-200 text-blue-800"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-blue-200 mb-2">Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-blue-200 text-blue-800"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-blue-200 mb-2">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-blue-200 text-blue-800"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-blue-200 mb-2">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-blue-200 text-blue-800"
            />
          </div>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
}

export default ExpenseForm;
