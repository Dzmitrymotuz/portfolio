import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './context/AuthContext'


const BugNavBar = () => {
    const {isAuthenticated, logout, user} = useAuth()
  return (
        <header className='header'>
            <nav className='bug-nav flex text-sm gap-7 font-medium items-center ml-auto justify-end'>
                {!isAuthenticated ? 
                <div className='flex flex-row ml-5'>
                <NavLink to="/bugtrag/login" className={({isActive})=>!isActive ? 'text-[#C6C6C6] mr-5' : 'text-[#EEEEEE] mr-5'} >
                    Login
                </NavLink>
                <NavLink to="/bugtrag/signup" className={({isActive})=>!isActive ? 'text-[#C6C6C6]' : 'text-[#EEEEEE]'}>
                    Signup
                </NavLink>
                </div>
                :
                <NavLink className='' to="/bugtrag/create_ticket">
                <p className='text-[#a7a7a7]'>Add</p>
                </NavLink>}

                {isAuthenticated ? 
                <div className=''>
                <NavLink className='' to="/bugtrag">
                <p className='text-[#a7a7a7]'>{user ? user.name : ''}</p>
                </NavLink>
                <NavLink to="/bugtrag/login" onClick={logout} className='text-[#a7a7a7] text-xs'>
                    logout
                </NavLink> 
                </div>: ''}
            </nav>
        </header>
  )
}

export default BugNavBar
