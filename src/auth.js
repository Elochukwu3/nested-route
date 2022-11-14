
import React,{createContext, useContext, useState} from 'react';


const AuthentContext = createContext(null)
export const AuthProvider = ({children}) => {
  const[display, setDisplay] = useState(false)
  const [search, setSearch] = useState('')
  const changeAppearance = ()=>{
    setDisplay(true)
  }
  const Appearance = ()=>{
    setDisplay(false)
  }
    const[users, setUser] = useState(null)
   
    const logIn = (user) => setUser(user)
    const loginOut = () => setUser(null)
   
    const changeSearch =(e)=>setSearch(e.target.value)
   
    
  return (
    <AuthentContext.Provider value={{search, changeSearch , users,logIn, loginOut, display, changeAppearance, Appearance }}>
        {children}
    </AuthentContext.Provider>
  )
};


export const useAuthentication =() => {return useContext(AuthentContext)}

