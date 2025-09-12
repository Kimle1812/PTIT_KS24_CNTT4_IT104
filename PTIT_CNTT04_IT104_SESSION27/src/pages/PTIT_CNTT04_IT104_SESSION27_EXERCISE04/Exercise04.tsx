import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductList from './ProductList'

export default function Exercise04() {
  return (
    <div>
      <RouterProvider router={createBrowserRouter([
        {
            path:"products",
            element:<ProductList></ProductList>
        }
      ])}></RouterProvider>
    </div>
  )
}
