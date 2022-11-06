import React from 'react'
import {useAuthentication} from './auth'
import { Navigate, useLocation } from "react-router-dom";

export const AuthProfile = ({children}) => {
    const location = useLocation()
    const {user} = useAuthentication()
    if (!user) {
        return <Navigate to={'/signin'} state={{path: location.pathname}}/>
    }
  return (children)
}
