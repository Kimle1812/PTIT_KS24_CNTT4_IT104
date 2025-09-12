import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TaskList from './TaskList'
import TaskDetail from './TaskDetail'

export default function Exercise03() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TaskList />
    },
    {
      path: "/task/:id",
      element: <TaskDetail />
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
