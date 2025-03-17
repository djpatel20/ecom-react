import React from 'react'
import  SignUp  from './pages/SignUp'

import { createBrowserRouter,RouterProvider  } from 'react-router-dom'
import { Login } from './pages/Login'

import {Home} from "./pages/Home"
import { AppLayout } from './Layout/AppLayout'
import { AboutUs } from './Layout/AboutUs'
import { Store } from './Layout/Store'
import { ProtectedRoutes } from './routes/ProtectedRoutes'
import  Cart  from './Layout/Cart'

  const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login", 
    element : <Login/>
  },
  {
    path: "/",
    element : <ProtectedRoutes/>,
    children : [
      {  path: "/",
        element : <AppLayout/>,
        children : [
          { 
            path : "home",
            index : true,
            element : <Home/>
          },
          {
            path : "aboutus",
            element : <AboutUs/>
          },
          {
            path : "store",
            element : <Store/>
          },
          {
            path : "cart",
            element : <Cart/>
          }
          
        ]    
      }
    ]
  },
  
     
      
])
export const App = () => {
  
  return <RouterProvider router={router}/>
}
