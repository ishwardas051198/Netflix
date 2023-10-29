import React from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
const Body = () => {
    const route=createBrowserRouter([
        {
          path:"/",
          element:<Browse />
        },
        {
          path:"/login",
          element:<Login />
        }
        ])
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  )
}

export default Body
