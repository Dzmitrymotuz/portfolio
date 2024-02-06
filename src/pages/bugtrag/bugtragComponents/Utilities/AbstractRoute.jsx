import React from 'react'
import { useAuth } from '../context/AuthContext';
import {Route, BrowserRouter as Router, Outlet, Navigate} from 'react-router-dom'


const AbstractRoute = ({...props}) => {
    const {isAuthenticated} = useAuth();
    // console.log(isAuthenticated)
    return isAuthenticated ? <Outlet/> : <Navigate to="/bugtrag/login"/>
}
  


export default AbstractRoute
