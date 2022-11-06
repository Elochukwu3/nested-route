import React from 'react';
import {useNavigate, useLocation} from 'react-router-dom'
import {useAuthentication} from '../auth'

export const SignIn = () => {
  const {changeInput, input, logIn}= useAuthentication();
  const navigate = useNavigate();//useNavigate 
  const location = useLocation()
  const reDirect = location.state?.path || '/'

  const navigatePage =()=>{
    logIn(input)
    navigate(reDirect, {replace: true})
    
  }
  return (
    <div>
      <input type={'text'} value={input} onChange={changeInput}/>
      <button onClick={navigatePage}>Sign up</button>
    </div>
  )
}
