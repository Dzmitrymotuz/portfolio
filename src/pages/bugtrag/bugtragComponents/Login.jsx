import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from './context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const Login = ({ ...props}) => {
    const {isAuthenticated, logout, user, login, setUser, setToken} = useAuth()
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [message, setMessage] = useState(null)
    const [error, setError] = useState(null)
    const navigateTo = useNavigate()

    const handleLogin = async(e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/login`, {
                email,
                password
            });
            setToken(response.data.token)
            setUser(response.data.user)
            setMessage(response.data.message)
            localStorage.setItem('user', JSON.stringify(response.data.user))
            navigateTo('/bugtrag')
        }catch (error) {
            console.error('Login error', error)
            setMessage(error.response.data.message)
        }
    }

    // console.log('ACCESS_TOKEN', localStorage.getItem('ACCESS_TOKEN'))
    // console.log('localStorage user string:', JSON.parse(localStorage.getItem('user')));


  return (
    <div className='bug-main-container '>
    {!isAuthenticated ? <section>
        <div className='flex flex-col items-center justify-center '>
            <p>Login Page</p>
            {message ? <div className='text-sm bg-[#303030] p-1 '>{message}</div> : ''}
            <div className='flex flex-col p-0 m-0'>
                <input name='email' placeholder='email' className='input' onChange={(e)=>setEmail(e.target.value)}/>
                <input name='password' placeholder='password' type='password' className='input' onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={(e)=>handleLogin(e)} className='bug-btn mt-2'>Login</button>
            </div>
        </div>
        <div className='min-h-screen'/>
    </section> 
    :
    <div className='flex flex-col items-center  m-3 p-3'>Hello there. You're currently logged as {user.name}
        <button className='bug-btn' onClick={logout}>Logout</button>
        <div className='h-[100vh]'></div>
    </div>
    
     }
    </div>
  )
}

export default Login
