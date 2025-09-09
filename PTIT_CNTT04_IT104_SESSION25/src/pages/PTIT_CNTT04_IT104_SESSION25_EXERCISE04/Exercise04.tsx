import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './Register'

export default function Exercise04() {
  const router = createBrowserRouter([
        {
            path: "register",
            element: <Register></Register>
        }
    ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
