import React from 'react';
import {useNavigate} from 'react-router-dom'
import {useAuthentication} from '../auth'

export const SignIn = () => {
  const {changeInput, input, logIn, user}= useAuthentication();
  const navigate = useNavigate();

  const navigatePage =()=>{
    logIn(input)
    navigate('/')
    
  }
  return (
    <div>
      <input type={'text'} value={input} onChange={changeInput}/>
      <button onClick={navigatePage}>Sign up</button>
    </div>
  )
}
