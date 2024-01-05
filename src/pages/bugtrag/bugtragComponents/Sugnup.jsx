import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { redirect, useNavigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'

const Signup = ({...props}) => {
    const {isAuthenticated, logout, user, login, setUser, setToken} = useAuth()
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [password_confirmation, setPasswordConfirmation] = useState(null)
    const [message, setMessage] = useState(null)
    const navigateTo = useNavigate()


    const handleSignup = async(e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/signup`, {
                name,
                email,
                password,
                password_confirmation
            });
            setMessage(response.data.message)
            console.log('Login successful: ', response);
            if (response.status === 200) {
                setToken(response.data.token)
                login(response.data.user)
                setUser(response.data.user)
                setMessage(response.data.message)
                localStorage.setItem('user', JSON.stringify(response.data.user))
                navigateTo('/bugtrag')
            }
            
        } catch (error) {
            console.error('Error during signup', error);
            setMessage(error.response.data.message)
        }
    }   


  return (
    <section>
        <div className='bug-main-container mt-[-80px]'>
            <form onSubmit={(e) => handleSignup(e)}>
            <div className='flex flex-col items-center justify-center min-h-screen'>
                <p>Signup</p>
                {message ? <div className='text-sm bg-[#ffd5d5] p-1 '>{message}</div>
                    : ''}
                <div className='flex flex-col p-10 m-10 mt-0'> 
                    <input name='name' placeholder='name' className='input' onChange={(e)=>setName(e.target.value)}/>
                    <input name='email' placeholder='email' className='input' onChange={(e)=>setEmail(e.target.value)}/>
                    <input name='password' placeholder='password' type='password' className='input' onChange={(e)=>setPassword(e.target.value)}/>
                    <input name='password-confirmation' type='password' placeholder='password confirmation' className='input' onChange={(e)=>setPasswordConfirmation(e.target.value)}/>
                    <button type='submit' className='bug-btn mt-2'>Submit</button>
                </div>
            </div>
            </form>
        </div>
    </section>

  )
}

export default Signup
