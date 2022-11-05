
import React,{createContext, useContext, useState} from 'react';

const AuthentContext = createContext(null)
export const auth = ({children}) => {
    const[user, setUser] = useState(null)
    const login = (user) => setUser(user)
    const loginOut = (user) => setUser(null)
  return (
    <AuthentContext.Provider value={{user, login, loginOut}}>
        {children}
    </AuthentContext.Provider>
  )
}

export const useAuthentication =() => {return useContext(AuthentContext)}

