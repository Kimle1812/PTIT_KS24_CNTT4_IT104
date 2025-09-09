
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CustomLink from './CustomLink'
import NotFound from './NotFound'
import HomePage from './Homepage'

export default function Exercise07() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <CustomLink></CustomLink>
        },
        {
            path: "/homePage",
            element: <HomePage></HomePage>
        },
        {
            path: "*",
            element: <NotFound></NotFound>
        },
    ])
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}
