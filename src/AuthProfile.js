import React from 'react'
import {useAuthentication} from './auth'
import { Navigate } from "react-router-dom";

export const AuthProfile = ({children}) => {
    const {user} = useAuthentication()
    if (!user) {
        return <Navigate to={'/signin'}/>
    }
  return (children)
}
