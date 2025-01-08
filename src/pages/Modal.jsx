import React from 'react'
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import HackerEffect from '../components/HackerEffect'



const Modal = ({setModalOpen, modalOpen}) => {
  return ( 
    <div 
    className={`fixed top-0 left-0 h-[100vh] w-full bg-[rgb(6,11,25)] rounded-lg  p-10  overflow-hidden  z-[50] animate-slide-down`}>
            <nav className=' flex flex-col items-center justify-center h-full gap-10'>
                <NavLink to="/about" className={({isActive})=>!isActive ? 'text-[#676e87] hover:text-[#47516e]' : 'text-[#ff6f69]'}>
                    <HackerEffect text="About"/>
                </NavLink>
                <NavLink to="/projects" className={({isActive})=>!isActive ? 'text-[#676e87] hover:text-[#47516e]' : 'text-[#ff6f69]'}>
                    <HackerEffect text="Projects"/>
                </NavLink>
                <NavLink to="/contact" className={({isActive})=>!isActive ? 'text-[#676e87] hover:text-[#47516e]' : 'text-[#ff6f69]'}>
                    <HackerEffect text="Contact"/>
                </NavLink>
            <div className='flex gap-10'>
                <NavLink to="https://www.linkedin.com/in/dzmitrymotuz/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn } size='3x' 
                    className='p-6 bg-[#243157] rounded-full h-9 opacity-50 hover:opacity-100 transition-all duration-500 ease-in-out hover:cursor-none '/> 
                </NavLink>
                <NavLink to="https://www.instagram.com/newmoturbo/?hl=am-et" target="_blank" rel="noopener noreferrer">
                   <FontAwesomeIcon icon={faInstagram} size='3x' 
                    className='p-6 bg-[#243157] rounded-full h-9 opacity-50 hover:opacity-100 transition-all duration-500 ease-in-out hover:cursor-none '/> 
                </NavLink> 
            </div>
        </nav>  
    </div>
  )
}

export default Modal