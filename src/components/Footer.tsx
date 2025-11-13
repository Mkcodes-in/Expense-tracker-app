import { Wallet } from 'lucide-react'
import React from 'react'

export default function Footer() {
    return (
        <footer className='bg-amber-800 border-t-4 border-amber-900 text-amber-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-6'>
                <div className='flex items-center justify-between py-3'>
                    <div className='flex items-center space-x-2'>
                        <div className='p-1.5 bg-amber-700 rounded-md'>
                            <Wallet className='w-4 h-4 text-amber-100' />
                        </div>
                        <span className='text-lg font-semibold text-white'>Budget Tracker</span>
                    </div>
                    <p className='text-sm'>© 2025 Budget Tracker</p>
                    <li className='list-none space-x-4'>
                        <a href="#" className='text-white hover:text-amber-300 transition-colors text-sm'>
                            Privacy
                        </a>
                        <a href="#" className='text-white hover:text-amber-300 transition-colors text-sm'>
                            Terms
                        </a>
                    </li>
                </div>
            </div>
        </footer>
    )
}