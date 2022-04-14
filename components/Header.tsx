import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex align-middle justify-between p-5 max-w-7xl mx-auto'>
        <div className='flex items-center space-x-5'>
            <Link href="/">
                <img src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png" alt="logo" className='w-44 object-contain cursor-pointer' />
            </Link>
            <div className='hidden md:inline-flex items-center space-x-5'>
                <h3>about</h3>
                <h3>contact</h3>
                <h3 className='text-white bg-green-600 px-4 py-1 rounded-full'>follow</h3>
            </div>
        </div>
        <div className='flex items-center space-x-5 text-green-600'>
          <h3>Sign In</h3>
          <h3 className='border px-4 py-1 border-green-600 rounded-full'>Get Started</h3>
        </div>
    </header>
  )
}

export default Header