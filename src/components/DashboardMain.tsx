import Chart from './Chart'
import DashboardHead from './DashboardHead'
import DashboardHistory from './DashboardHistory'
import Form from './Form'

export default function DashboardMain() {
  return (
    <div className='flex flex-col gap-8 max-w-7xl mx-auto px-4 py-4'>
      <DashboardHead />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">
        <div><Chart /></div>
        <div><Form /></div>
      </div>
      <div>
        <DashboardHistory />
      </div>
    </div>
  )
}
