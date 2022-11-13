import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'
function Header() {
  return (
    <div className='nav'>
    <NavLink to="/" className="site-title">
        DOCTORS' APPOINTMENT APP.
      </NavLink>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/appointments'>Create Appointment</NavLink>
            </li>
            <li>
                <NavLink to='/allappointments'>All Appointments</NavLink>
            </li>
            <li>
                <NavLink to='/contacts'>Contact Us</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Header