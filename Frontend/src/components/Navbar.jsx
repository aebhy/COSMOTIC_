import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='flex justify-between items-center p-4 shadow-md bg-[#FAF7F3]  select-none'>
        <div className='logo text-2xl font-semibold font-cursive'>C<span className='text-blue-500'>OS</span>MOTIC</div>
        <div className='flex gap-10'>
            <ul className='menu flex items-center gap-10 font-medium'>
                <Link to={'/'}><li className='hover:text-blue-600 cursor-pointer'>Home</li></Link>
                <Link to={'/services'}><li className='hover:text-blue-600 cursor-pointer'>Services</li></Link>
                <Link to={'/booking'}><li className='hover:text-blue-600 cursor-pointer'>Booking</li></Link>
                <Link to={'/contact'}><li className='hover:text-blue-600 cursor-pointer'>Contact</li></Link>
            </ul>
            <Link to={'/login'}><button className='bg-blue-700 px-8 py-2 text-white font-medium rounded-md border hover:bg-black'>Login</button></Link>
        </div>
    </div>
    </>
  )
}

export default Navbar