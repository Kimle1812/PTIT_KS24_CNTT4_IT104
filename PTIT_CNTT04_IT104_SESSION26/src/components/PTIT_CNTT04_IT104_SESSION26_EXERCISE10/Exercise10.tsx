
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ListProduct from './ListProduct'
import ProductDetail from './ProductDetail'

export default function Exercise10() {
    const routes = createBrowserRouter([
        {
            path: "/list-product",
            element: <ListProduct></ListProduct>
        },
        {
          path: "/:index",
          element: <ProductDetail></ProductDetail>
        }
    ])
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}
