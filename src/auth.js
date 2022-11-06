
import React,{createContext, useContext, useState} from 'react';
const initial={user:null, input:''} ;

const AuthentContext = createContext(null)
export const AuthProvider = ({children}) => {
    const[users, setUser] = useState(initial)
    const{user, input}  = users
    const logIn = (user) => setUser({...users, user: user})
    const loginOut = () => setUser({...users, user:null})
    const changeInput =(e)=> setUser({...users, input: e.target.value})
  return (
    <AuthentContext.Provider value={{users,user,input, logIn, loginOut, changeInput}}>
        {children}
    </AuthentContext.Provider>
  )
};


export const useAuthentication =() => {return useContext(AuthentContext)}

