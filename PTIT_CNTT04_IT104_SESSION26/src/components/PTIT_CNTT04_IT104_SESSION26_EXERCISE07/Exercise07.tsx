import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Teams from "./Teams"
import TeamsIndex from "./TeamIndex"
import Team from "./Team"

export default function Exercise07() {
  const router = createBrowserRouter([
    {
      path: "/teams",
      element: <Teams />,
      children: [
        {
          index: true,
          element: <TeamsIndex />
        },
        {
          path: ":teamId",
          element: <Team />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}
