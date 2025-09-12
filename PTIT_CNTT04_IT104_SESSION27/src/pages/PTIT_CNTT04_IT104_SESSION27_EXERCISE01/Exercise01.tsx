
import React from 'react'
import { createBrowserRouter, RouterProvider, Link, NavLink, Outlet } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Header from './Header'

export default function Exercise01() {
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
          path: "about",
          element: <About></About>
        },
        {
          path: "contact",
          element: <Contact></Contact>
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
