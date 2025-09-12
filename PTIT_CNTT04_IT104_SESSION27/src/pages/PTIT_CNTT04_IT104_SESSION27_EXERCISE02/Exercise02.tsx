
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'

export default function Exercise02() {
    const router = createBrowserRouter([
        {
            path:"products",
            element:<ProductList></ProductList>
        },
        {
            path:"products/:id",
            element:<ProductDetail></ProductDetail>
        }
    ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
