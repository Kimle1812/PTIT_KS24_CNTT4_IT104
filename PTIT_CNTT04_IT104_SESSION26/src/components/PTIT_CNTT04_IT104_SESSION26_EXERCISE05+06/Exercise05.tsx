import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Account from './Account'
import Login from './Login'
import PrivateRouter from './PrivateRouter'

export default function Exercise05() {
  const [user] = useState({
    email: "admin@gmail.com",
    password: "123456",
    role: "Admin"
  })

  const [isLogin, setIsLogin] = useState(false)

  const routers = createBrowserRouter([
    {
      path: "account",
      element: (
        <PrivateRouter
          isLogin={isLogin}
          element={<Account />}
        />
      )
    },
    {
      path: "login",
      element: <Login user={user} setIsLogin={setIsLogin} />
    }
  ])

  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}
