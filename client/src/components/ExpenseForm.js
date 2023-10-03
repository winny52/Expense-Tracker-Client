import React, { useState } from 'react';

function ExpenseForm() {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    date: '',
    user_id: '',
    category_id: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can send the formData to your server or perform any desired actions.
    // For simplicity, we'll just log it to the console.
    console.log(formData);
  };

  return (
    <div className="w-1/2 mx-auto mt-6 p-4 bg-blue-500 border border-solid border-blue-200 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input w-full border border-solid border-light-blue-400 bg-ie9b94"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="form-input w-full border border-solid border-light-blue-400 bg-ie9b94"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="form-input w-full border border-solid border-light-blue-400 bg-ie9b94"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="user_id" className="block text-gray-700">User ID:</label>
          <input
            type="number"
            id="user_id"
            name="user_id"
            value={formData.user_id}
            onChange={handleChange}
            className="form-input w-full border border-solid border-light-blue-400 bg-ie9b94"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category_id" className="block text-gray-700">Category ID:</label>
          <input
            type="number"
            id="category_id"
            name="category_id"
            value={formData.category_id}
            onChange={handleChange}
            className="form-input w-full border border-solid border-light-blue-400 bg-ie9b94"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
