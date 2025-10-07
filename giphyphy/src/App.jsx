import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layouts from './layouts/Layouts'
import Home from './pages/Home'
import Category from './pages/Category'
import Search from './pages/Search'
import Single from './pages/Single'
import Favourite from './pages/Favourite'

function App() {  

  const router= createBrowserRouter([
    {
      element:<Layouts/>,

      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/:category',
          element:<Category/>
        },
        {
          path:'/search/:query',
          element:<Search/>
        },
        {
          path:'/:type/:slug',
          element:<Single/>
        },
        {
          path:'/favorites',
          element:<Favourite/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
