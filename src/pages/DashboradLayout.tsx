import Dashboard from '@/components/Dashboard'
import Footer from '@/components/Footer'
import React from 'react'

export default function Dashborad() {
  return (
    <div className='min-h-screen flex flex-col bg-gray-950 text-white'>
        <Dashboard />
        <div className='flex-grow overflow-auto'></div>
        <Footer />
    </div>
  )
}
