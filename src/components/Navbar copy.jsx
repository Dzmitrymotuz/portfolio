import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink className='md_cube w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md bg-opacity-20' to="/">
            <p className='red-gradient_text'>MD</p>
        </NavLink>
        <nav className='header_links flex text-lg gap-7 font-medium'>
            <NavLink to="/about" className={({isActive})=>!isActive ? 'text-[#96ceb4]' : 'text-[#ff6f69]'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({isActive})=>!isActive ? 'text-[#96ceb4]' : 'text-[#ff6f69]'}>
                Projects
            </NavLink>
            <NavLink to="/contact" className={({isActive})=>!isActive ? 'text-[#96ceb4]' : 'text-[#ff6f69]'}>
                Contact
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar
