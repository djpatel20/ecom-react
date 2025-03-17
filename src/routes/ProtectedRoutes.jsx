import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoutes = () => {
 const IsLoggedIN = sessionStorage.getItem("isLogged") === "true"

 return IsLoggedIN ? <Outlet/> : <Navigate to="/login" replace/>
}
