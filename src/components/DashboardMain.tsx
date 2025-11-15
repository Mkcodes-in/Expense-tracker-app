import Chart from './Chart'
import DashboardHead from './DashboardHead'
import Form from './Form'

export default function DashboardMain() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-4'>
      <DashboardHead />
      <div className='mt-4 grid grid-cols-[1fr_auto] gap-3'>
        <div><Chart /></div>
        <div><Form /></div>
      </div>
    </div>
  )
}
