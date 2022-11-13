import React,{useEffect} from 'react'
import {useAuthentication} from './auth'
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export const AuthProfile = ({children}) => {
    const location = useLocation()
    const {users} = useAuthentication()
    const navigate = useNavigate()
   useEffect(() => {
    navigate("/profile", { replace: true });  
   }, [users])
   

    if (!users) {
        return <Navigate to={'/signin'} state={{path: location.pathname}}/>
    }
  return (children)
}
