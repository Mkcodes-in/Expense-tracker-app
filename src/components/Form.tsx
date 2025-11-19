import { add_expense } from "@/store/Slice";
import type React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Form() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    description: '',
    amount: 0,
    category: '',
    date: ''
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!formData.description || !formData.amount || !formData.category || !formData.date) {
      return;
    }

    dispatch(add_expense({
      id: Date.now(),
      description: formData.description,
      amount: formData.amount,
      category: formData.category,
      date: formData.date
    }));

    setFormData({
      description: "",
      amount: 0,
      category: "",
      date: ""
    });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-amber-100 max-w-md mx-auto text-black">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Add New Expense</h2>
        <p className="text-gray-600">Track your spending</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5">
        <div className="flex flex-col">
          <label htmlFor="description" className="text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <input
            name="description"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
            id="description"
            type="text"
            value={formData.description}
            onChange={handleChange}
            placeholder="What did you spend on?"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="amount" className="text-sm font-medium text-gray-700 mb-2">
            Amount
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
            <input
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
              type="number"
              name="amount"
              id="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="0.00"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="category" className="text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            <option value="food">Food & Dining</option>
            <option value="transport">Transportation</option>
            <option value="shopping">Shopping</option>
            <option value="entertainment">Entertainment</option>
            <option value="bills">Bills & Utilities</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="date" className="text-sm font-medium text-gray-700 mb-2">
            Date
          </label>
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 mt-2 cursor-pointer"
        >
          Add Expense
        </button>
      </form>
    </div>
  )
}
