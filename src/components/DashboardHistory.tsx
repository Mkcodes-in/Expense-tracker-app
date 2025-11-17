import { Wallet, Trash2 } from 'lucide-react';

export default function DashboardHistory() {
  const transactions = [
    { id: 1, date: '2024-01-15', description: 'Groceries', category: 'Food', amount: 2500 },
    { id: 2, date: '2024-01-14', description: 'Bus fare', category: 'Transport', amount: 500 },
  ];

  return (
    <div className="flex flex-col gap-6 p-4 bg-white rounded-lg shadow-md text-black">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800 flex flex-col">Transaction History
          <span className='text-sm text-gray-400 font-semibold'>Your recent spending activities</span></h1>
        <select className="px-3 py-1 border border-gray-300 rounded text-sm">
          <option>All</option>
          <option>This Week</option>
        </select>
      </div>

      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <Wallet className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">{transaction.description}</div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>{new Date(transaction.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-xs">
                    {transaction.category}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-red-600">-₹{transaction.amount}</div>
              <button className="text-gray-400 hover:text-red-500 text-sm mt-1">
                <Trash2 />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
