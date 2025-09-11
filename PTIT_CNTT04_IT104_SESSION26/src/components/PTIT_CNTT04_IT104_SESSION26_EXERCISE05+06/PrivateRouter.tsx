import React from 'react'
import { Navigate } from 'react-router-dom'

interface Props {
  isLogin: boolean,
  element: React.ReactNode
}

export default function PrivateRouter({ isLogin, element }: Props) {
  if (!isLogin) {
    return <Navigate to={"/login"} />
  }
  return <>{element}</>
}
