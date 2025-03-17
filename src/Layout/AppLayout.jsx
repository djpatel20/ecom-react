import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import  Footer  from './Footer'

export const AppLayout = () => {
  return (
    <div className='app-container'>  
        <Navbar/>
        <main className="main-content">
        <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}
