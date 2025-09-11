import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StudentDetail from './StudentDetail';
import Student from './Student';

export default function Exercise02() {
  const router = createBrowserRouter([
    {
        path:"student",
        element:<Student></Student>
    },
    {   
        path:"/student/:name",
        element:<StudentDetail></StudentDetail>
    }
  ]);
  return (
    <div>
      <h1>Đây là trang chủ</h1>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
