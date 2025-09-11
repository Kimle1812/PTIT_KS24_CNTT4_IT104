import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Product from './Product';
import ProductDetail from './ProductDetail';

export default function Exercise01() {
  const router = createBrowserRouter([
    {
        path:"product",
        element:<Product></Product>
    },
    {   
        path:"/product/:id",
        element:<ProductDetail></ProductDetail>
    }
  ]);
  return (
    <div>
      <h1>Đây là trang chủ</h1>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
