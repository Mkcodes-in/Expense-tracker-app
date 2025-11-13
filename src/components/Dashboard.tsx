import { TrendingUpDown, Wallet } from 'lucide-react'
import React from 'react'

export default function Dashboard() {
  return (
    <div className=''>
      <div>
        {/* Header */}
        <div className='bg-amber-700 py-4 border-b-4 border-amber-800 shadow-lg'>
          <div className='max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center space-x-3'>
              <div className='p-2 bg-amber-600 rounded-lg shadow-inner'>
                <Wallet className='w-6 h-6 text-amber-100' />
              </div>
              <h1 className='text-2xl font-bold text-white cursor-pointer hover:text-amber-100 transition-colors duration-200'>
                Budget Tracker
              </h1>
            </div>
            <div className='flex items-center space-x-3 bg-amber-600/80 px-4 py-2 rounded-full border border-amber-500 shadow-sm'>
              <TrendingUpDown className='w-5 h-5 text-amber-100' />
              <span className='text-amber-50 font-medium text-sm hidden sm:block'>
                Track your expenses wisely
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
