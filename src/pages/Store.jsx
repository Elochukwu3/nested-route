import React from 'react';
import {NavLink, Outlet} from "react-router-dom"
import '../styles/Store.css'
export default function Store() {
  return (
    <>
    <section>
    <div className='store-wrapper'>
     <div className='cart-container'><i className='fas fa-search'></i></div>
     <div>
     <NavLink to={'newproduct'}>
        New Product
      </NavLink>
      <NavLink to={'menproduct'}>
        Men Wears
      </NavLink>
      <NavLink to={'womenproduct'}>
        Women Wears
      </NavLink>
     </div>
    </div>
    <Outlet/>
    </section>
    </>
  )
}
