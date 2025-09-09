import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Admin() {
  return (
    <div>
        Trang quan li
        <NavLink to={'/admin/user'}>Quan ly nguoi dung</NavLink>
        <NavLink to={'/admin/product'}>Quan ly san pham</NavLink>
        <NavLink to={'/admin/order'}>Quan ly hoa don</NavLink>

      <Outlet></Outlet>
    </div>
  )
}
