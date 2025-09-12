
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import About from './About'
import NotFound from './NotFound'

export default function Exercise07() {
    const router = createBrowserRouter([
        {
            path:"home",
            element:<Home></Home>
        },
        {
            path:"about",
            element:<About></About>
        },
        {
            path:"*",
            element:<NotFound></NotFound>
        }
    ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
