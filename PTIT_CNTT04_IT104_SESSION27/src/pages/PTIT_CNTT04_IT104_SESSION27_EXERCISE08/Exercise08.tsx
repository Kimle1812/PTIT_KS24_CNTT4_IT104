import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './Register'
import Login from './login'

export default function Exercise08() {
    const router = createBrowserRouter([
        {
            path:"register",
            element:<Register></Register>
        },
        {
            path:"login",
            element:<Login></Login>
        },
        {
            path:"/",
            element:<Login></Login>
        }
    ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
