import React from 'react'
import {Link} from 'react-router-dom'
import facebook from '../../public/facebook.png'
import instagram from '../../public/instagram.png'
import email from '../../public/email.png'

const Footer = () => {
  return (
    <div className='flex items-center justify-between bg-[#FAF7F3] py-5 px-8'>
      <div className='logo text-2xl font-semibold cursor-pointer'>C<span className='text-blue-500'>OS</span>MOTIC</div>
      <div className='text-md font-medium'>&copy; Astrology Services By Brijesh Pandey. All Rights Reserved</div>
      <div className='flex items-center gap-4 justify-center'>
        <img src={facebook} alt="fb" className='h-5 w-5'/>
        <img src={instagram} alt="Instagram" className='h-5 w-5'/>
        <img src={email} alt="email" className='h-6 w-6'/>
      </div>
    </div>
  )
}

export default Footer