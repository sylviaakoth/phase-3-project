import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <div className='nav'>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/appointments'>Appointment</NavLink>
            </li>
            <li>
                <NavLink to='/contact'>Contact</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Header