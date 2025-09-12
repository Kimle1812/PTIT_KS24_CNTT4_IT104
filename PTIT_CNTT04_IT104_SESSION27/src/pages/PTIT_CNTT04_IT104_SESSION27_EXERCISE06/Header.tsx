
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="product">Product</NavLink>
      <NavLink to="detail">Detail</NavLink>
      <Outlet></Outlet>
    </div>
  )
}
