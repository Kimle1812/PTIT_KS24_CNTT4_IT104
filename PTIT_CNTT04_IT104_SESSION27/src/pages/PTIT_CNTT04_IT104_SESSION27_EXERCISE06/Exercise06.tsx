import React from 'react'
import { createBrowserRouter, RouterProvider, Link, NavLink, Outlet } from 'react-router-dom'
import Product from './Product'
import Detail from './Detail'
import Header from './Header'
import Home from './Home'

export default function Exercise06() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Header></Header>,
      children : [
        {
          index: true,
          element: <Home></Home>
        },
        {
          path: "product",
          element: <Product></Product>
        },
        {
          path: "detail",
          element: <Detail></Detail>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}