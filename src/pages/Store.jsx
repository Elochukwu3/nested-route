import React, {useState} from 'react';
import {NavLink, Outlet} from "react-router-dom"
import '../styles/Store.css'
export default function Store() {
  const[display, setDisplay] = useState(false)
  const changeAppearance = ()=>{
    setDisplay(true)
  }
  return (
    <>
    <section>
    <div className='store-wrapper'>
     <div className='cart-container'><i className='fas fa-search'></i></div>
     <div>
     <NavLink to={'newproduct'} onClick={changeAppearance}>
        New Product
      </NavLink>
      <NavLink to={'menproduct'} onClick={changeAppearance}>
        Men Wears
      </NavLink>
      <NavLink to={'womenproduct'} onClick={changeAppearance}>
        Women Wears
      </NavLink>
     </div>
    </div>
    <section className='each-new-item'>
      {!display ? "SSSS": <Outlet/>}
     
    </section>
    </section>
    </>
  )
}
