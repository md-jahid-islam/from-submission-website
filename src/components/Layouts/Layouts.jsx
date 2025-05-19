import React from 'react'
import NavbarComponents from '../Navbar/NavbarComponents'
import { Outlet } from 'react-router-dom'
import FooterComponents from '../fotter/FooterComponents'

const Layouts = () => {
  return (
    <>
    <NavbarComponents/>
    <Outlet/>  
    <FooterComponents/>  
    </>
  )
}

export default Layouts
