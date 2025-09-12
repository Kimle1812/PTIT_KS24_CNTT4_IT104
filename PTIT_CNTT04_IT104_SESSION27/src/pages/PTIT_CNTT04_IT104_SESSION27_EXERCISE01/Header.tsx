
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="contact">Contact</NavLink>
      <Outlet></Outlet>
    </div>
  )
}
