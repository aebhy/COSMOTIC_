import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Booking from '../pages/Booking'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element= {<Home />} />
            <Route path='/services' element= {<Services />} />
            <Route path='/booking' element= {<Booking />} />
            <Route path='/contact' element= {<Contact />} />
            <Route path='/login' element= {<Login />} />
            <Route path='/register' element= {<Register />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes