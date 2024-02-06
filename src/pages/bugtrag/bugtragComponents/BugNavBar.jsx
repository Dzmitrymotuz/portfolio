import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './context/AuthContext'


const BugNavBar = () => {
    const {isAuthenticated, logout, user} = useAuth()
  return (
        <header className='bug_header absolute'>
            <nav className='bug-nav flex flex-row justify-between w-[100%]  '>
                <div className='mt-[0.5em]'>
                    <NavLink to='/bugtrag'>
                        <img src='/bugtrag_logo.png' className='w-[130px] h-9'/>
                    </NavLink>
                </div>
                <div className='flex text-sm gap-7  font-medium items-center justify-end w-[100%] max-h-[80px] p-[10px]'>
                {!isAuthenticated ? 
                    <div className='flex flex-row'>
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
                <div className='flex flex-row items-center justify-end text-[#a7a7a7]'>
                    <NavLink className='pr-[20px]' to='/bugtrag/projects'>
                        <p>Projects</p>
                    </NavLink>
                    <div className='flex flex-col pt-0'>
                        <NavLink className='' to={`/bugtrag/user/${user.id}`}>
                            <p className='text-[#a7a7a7]'>{user ? user.name : ''}</p>
                        </NavLink>
                        <NavLink to="/bugtrag/login" onClick={logout} className='text-[#a7a7a7] text-xs'>
                            logout
                        </NavLink> 
                    </div>
                </div>: ''}
                </div>
            </nav>
        </header>
  )
}

export default BugNavBar
