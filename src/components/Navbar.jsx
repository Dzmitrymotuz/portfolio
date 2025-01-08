import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import logo from '../../public/dm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Modal from '../pages/Modal'

const Navbar = () => {
    const [modalOpen, setModalOpen] = useState(false) 
    const openModal = () => {
        setModalOpen(prevState=>!prevState)
        }
  return (
        <nav className='bg-[rgb(6,11,25)] text-[#676e87] h-[12vh] flex gap-2 w-[100%] box-border decoration-0 justify-center text-center '> 
            {modalOpen ? <Modal setModalOpen={()=>setModalOpen(false)} modalOpen={modalOpen}/> : null}  
            <NavLink 
            to='/'
            id='logo'
            onClick={()=>setModalOpen(false)}
            className='z-[60] nav-section basis-1/2 text-left border-l-2 border-[#141e3b] p-2 content-center'>
                <img src={logo} alt='logo' className='w-10 h-10 transform scale-x-[-1]'/>
            </NavLink> 
            <div 
            id='social'
            className='flex items-center sm:content-center sm:block basis-1/4 border-x-2 border-[#141e3b] p-2 '>
            <NavLink to="https://www.instagram.com/newmoturbo/?hl=am-et" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon 
                icon={faInstagram} 
                className="h-4 sm:h-6 mx-5 hover:text-[#49588c] transition-colors duration-300" 
                />
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/dzmitrymotuz/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon 
                icon={faLinkedinIn} 
                className="h-4 sm:h-6 mx-5 hover:text-[#49588c] transition-colors duration-300" 
                />
            </NavLink>
            </div>
            <div 
            id='contact'
            className='z-[60] nav-section basis-1/4 p-2 content-center hover:cursor-pointer transition-colors duration-300' 
            onClick={()=>openModal()}>
                <span className=''>MENU</span>
                <div 
                className='flex flex-col items-center justify-center gap-1 transition-all duration-500 ease-in-out'>
                <div 
                    className={`h-[1px] bg-[#676e87] transform transition-all duration-500 ease-in-out ${
                    modalOpen ? 'rotate-45 -translate-y-[-5px] translate-x-[0px] w-4' : 'w-3 rotate-0 translate-y-0'
                    }`} 
                />
                <div 
                    className={` h-[1px] bg-[#676e87] transform transition-all duration-500 ease-in-out ${
                    modalOpen ? '-rotate-45 -translate-y-[-0px] translate-x-[0px] w-4' : 'w-3 rotate-0 translate-y-0'
                    }`} 
                />
                </div>
            </div>        
            </nav>
  )
}

export default Navbar
