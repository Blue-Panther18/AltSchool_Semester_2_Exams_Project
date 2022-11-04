import React from 'react'
import { NavLink } from 'react-router-dom'
import "../index.css"

const Layout = () => {
  return (
    <div>
      <nav className='navbar-container'>
        <NavLink to='/' className='navbar-item' style={({ isActive }) => ({ color: isActive ? "#FFA401" : '' })}> Home </NavLink>
        <NavLink to='/counter' className='navbar-item' style={({ isActive }) => ({ color: isActive ? "#FFA401" : '' })}> Counter </NavLink>
        <NavLink to='/error-boundary' className='navbar-item' style={({ isActive }) => ({ color: isActive ? "#FFA401" : '' })}> Error Boundary </NavLink>
      </nav>
    </div>
  )
}

export default Layout
