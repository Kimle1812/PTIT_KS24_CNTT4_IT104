import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routers/Router'

export default function App() {
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}
