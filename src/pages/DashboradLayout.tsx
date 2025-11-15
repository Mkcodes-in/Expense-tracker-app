import Dashboard from '@/components/Dashboard'
import DashboardMain from '@/components/DashboardMain'
import Footer from '@/components/Footer'
import React from 'react'

export default function Dashborad() {
  return (
    <div className='min-h-screen flex flex-col bg-gray-950 text-white overflow-hidden'>
        <Dashboard />
        <div className='flex-grow overflow-y-auto'><DashboardMain /></div>
        <Footer />
    </div>
  )
}
