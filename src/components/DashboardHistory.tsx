import { remove_expense } from '@/store/Slice';
import { Wallet, Trash2, Filter } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import type { rootState } from '@/store/store';
import React, { useState } from 'react';
import { CategoryByFilter } from '@/utils/sortByCategory';

export default function DashboardHistory() {
  const dispatch = useDispatch();
  const transactions = useSelector((state: rootState) => state.expense);
  const [filter, setFilter] = useState<string>('');
  const newTransaction = CategoryByFilter(transactions, filter);
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-black">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Transaction History</h1>
          <p className="text-gray-500 text-sm mt-1">Your recent spending activities</p>
        </div>
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
          <Filter className="w-4 h-4 text-gray-600" />
          <select
            value={filter}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setFilter(e.target.value)
            }
            className="bg-transparent text-sm outline-none cursor-pointer">
            <option>All</option>
            <option value="food">Food & Dining</option>
            <option value="transport">Transportation</option>
            <option value="shopping">Shopping</option>
            <option value="entertainment">Entertainment</option>
            <option value="bills">Bills & Utilities</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      {/* Transactions */}
      {newTransaction.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <Wallet className="w-12 h-12 mx-auto mb-3 text-gray-300" />
          <p>No transactions yet</p>
        </div>
      ) : (
        <div className="space-y-3">
          {newTransaction.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{transaction.description}</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
                    <span>{new Date(transaction.date).toLocaleDateString()}</span>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">
                      {transaction.category}
                    </span>
                  </div>
                </div>
              </div>
            {/* Actions */}
              <div className="flex items-center gap-4">
                <span className="font-bold text-red-600 text-lg">-₹{transaction.amount}</span>
                <button
                  onClick={() => dispatch(remove_expense(transaction.id))}
                  className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}