import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashborad from './pages/DashboradLayout'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashborad />}/>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
