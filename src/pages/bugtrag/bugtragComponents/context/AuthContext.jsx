import { createContext, useContext, useEffect, useState } from "react"
import React from 'react'

const AuthContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
});

export const AuthProvider = ({children}) => {
    let storedUser = ''
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))

    const setToken = (token) => {
      _setToken(token)
      if (token) {
        localStorage.setItem('ACCESS_TOKEN', token)
        setIsAuthenticated(true)
      }else{
        localStorage.removeItem('ACCESS_TOKEN')
        setIsAuthenticated(false)
      }
    }
    const login = (userdata) => {
      // setUser(userdata)
      // const userString = JSON.stringify({
      //   name: user.name,
      //   email: user.email,
      // })
      //   localStorage.setItem('user', userString);
    }
    const logout = () => {
        localStorage.removeItem('ACCESS_TOKEN');
        localStorage.removeItem('user');
        setIsAuthenticated(false)
        setUser(null)
    }
    

    useEffect(()=> {
      token ? setIsAuthenticated(true) : setIsAuthenticated(false)
      storedUser = JSON.parse(localStorage.getItem('user')) || null
      setUser(storedUser)
      // console.log(storedUser)
    }, [token])

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, setUser, user, setToken }}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
