import React from 'react'
import { createBrowserRouter, NavLink, Outlet, RouterProvider } from 'react-router-dom'
import Product from './Product'
import Home from './Home'
import Detail from './Detail'

export default function Exercise06() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <nav className="flex gap-[50px]">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "text-white w-[80px] h-[30px] bg-red-500 text-center flex items-center justify-center"
                  : "text-black"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive
                  ? "text-white w-[80px] h-[30px] bg-red-500 text-center flex items-center justify-center"
                  : "text-black"
              }
            >
              Product
            </NavLink>
            <NavLink
              to="/detail"
              className={({ isActive }) =>
                isActive
                  ? "text-white w-[80px] h-[30px] bg-red-500 text-center flex items-center justify-center"
                  : "text-black"
              }
            >
              Detail
            </NavLink>
          </nav>
          <Outlet />
        </>
      ),
      children: [
        { path: "/home", element: <Home></Home> },
        { path: "/product", element: <Product></Product> },
        { path: "/detail", element: <Detail></Detail> },
      ]
    }
  ])
  return <RouterProvider router={routes} />
}
