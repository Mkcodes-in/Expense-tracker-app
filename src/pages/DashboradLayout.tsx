import Dashboard from '@/components/Dashboard'
import DashboardMain from '@/components/DashboardMain'
import Footer from '@/components/Footer'

export default function Dashborad() {
  return (
    <div className='h-screen flex flex-col bg-gray-950 text-white'>
      <Dashboard />
      <div className='flex-1 overflow-y-auto'>
        <DashboardMain />
        <Footer />
      </div>
    </div>
  )
}
