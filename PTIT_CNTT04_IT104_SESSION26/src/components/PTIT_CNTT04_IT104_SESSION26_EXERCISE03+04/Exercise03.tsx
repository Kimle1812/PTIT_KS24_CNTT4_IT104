import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Student from './Student';

export default function Exercise03() {
  const router = createBrowserRouter([
    {
        path:"student",
        element:<Student></Student>
    }
  ]);
  return (
    <div>
      <h1>Đây là trang chủ</h1>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
