import React from 'react'
import ErrorPage from '../assets/undraw_page-not-found_6wni.svg'

export default function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-950 text-white'>
      <img
      className='p-4' 
      src={ErrorPage} 
      alt="Error 404 page not found" />
    </div>
  )
}
