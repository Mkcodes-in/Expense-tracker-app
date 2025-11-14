import { BadgeIndianRupee, BanknoteArrowDown, ChartNoAxesCombined, TrendingUp } from 'lucide-react'

export default function DashboardMain() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-2'>
      <div className='flex items-center justify-between gap-3'>
        {/* Category */}
        <div className='bg-white rounded-xl shadow-md p-6 border-l-4 border-amber-500 w-full'>
          <div className='flex items-start justify-between'>
            <div className='flex items-center gap-4 flex-1'>
              <div className='p-3 bg-amber-50 rounded-xl'>
                <ChartNoAxesCombined className='w-6 h-6 text-amber-600' />
              </div>
              <div className='flex-1'>
                <h1 className='text-sm font-medium text-gray-600 uppercase tracking-wide'>Highest Category</h1>
                <h2 className='text-2xl font-bold text-gray-900 mt-1'>₹<span>0</span></h2>
                <p className='text-sm text-gray-500 mt-1'>No categories yet</p>
              </div>
            </div>
          </div>
        </div>
        {/* Expense */}
        <div className='bg-white rounded-xl shadow-md p-6 border-l-4 border-amber-500 w-full'>
          <div className='flex items-start justify-between'>
            <div className='flex items-center gap-4 flex-1'>
              <div className='p-3 bg-amber-50 rounded-xl'>
                <BanknoteArrowDown className='w-6 h-6 text-amber-600' />
              </div>
              <div className='flex-1'>
                <h1 className='text-sm font-medium text-gray-600 uppercase tracking-wide'>Total Expenses</h1>
                <h2 className='text-2xl font-bold text-gray-900 mt-1'>₹<span>0</span></h2>
                <p className='text-sm text-gray-500 mt-1'>Currently No Expenses</p>
              </div>
            </div>
          </div>
        </div>
        {/* Total Entries */}
        <div className='bg-white rounded-xl shadow-md p-6 border-l-4 border-amber-500 w-full'>
          <div className='flex items-start justify-between'>
            <div className='flex items-center gap-4 flex-1'>
              <div className='p-3 bg-amber-50 rounded-xl'>
                <TrendingUp className='w-6 h-6 text-amber-600' />
              </div>
              <div className='flex-1'>
                <h1 className='text-sm font-medium text-gray-600 uppercase tracking-wide'>Total Entries</h1>
                <h2 className='text-2xl font-bold text-gray-900 mt-1'>₹<span>0</span></h2>
                <p className='text-sm text-gray-500 mt-1'>Empty Enteries</p>
              </div>
            </div>
          </div>
        </div>
        {/* Income */}
        <div className='bg-white rounded-xl shadow-md p-6 border-l-4 border-amber-500 w-full'>
          <div className='flex items-start justify-between'>
            <div className='flex items-center gap-4 flex-1'>
              <div className='p-3 bg-amber-50 rounded-xl'>
                <BadgeIndianRupee className='w-6 h-6 text-amber-600' />
              </div>
              <div className='flex-1'>
                <h1 className='text-sm font-medium text-gray-600 uppercase tracking-wide'>Income</h1>
                <h2 className='text-2xl font-bold text-gray-900 mt-1'>₹<span>0</span></h2>
                <p className='text-sm text-gray-500 mt-1'>No Income</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
