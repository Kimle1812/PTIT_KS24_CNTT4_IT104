import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Blog from './Blog'
import PostDetail from './PostDetail'
import Post from './Post'

export default function Exercise05() {
  return (
    <div>
      <RouterProvider router={createBrowserRouter([
        {
            path:"blog",
            element:<Blog></Blog>,
            children: [
            {
                path: "posts",
                element: <Post></Post>,
            },
            {
                path: "posts/:id",
                element: <PostDetail></PostDetail>,
            }]
        }
      ])}></RouterProvider>
    </div>
  )
}
